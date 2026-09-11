import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

// Stripe needs the raw request body to verify the webhook signature.
export const dynamic = "force-dynamic";

async function notifyByEmail(session) {
  if (!process.env.RESEND_API_KEY || !process.env.NOTIFY_EMAIL) return;

  const m = session.metadata || {};
  const amount = ((session.amount_total || 0) / 100).toFixed(2);

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Beyond Hello Bookings <bookings@resend.dev>",
        to: [process.env.NOTIFY_EMAIL],
        subject: `New booking: ${m.packageName || "package"} — $${amount} deposit paid`,
        text: [
          `New paid booking on Beyond Hello.`,
          ``,
          `Package: ${m.packageName || "-"}`,
          `Deposit paid: $${amount}`,
          `Name: ${m.name || "-"}`,
          `Email: ${m.email || "-"}`,
          `Company: ${m.company || "-"}`,
          `Preferred date: ${m.preferredDate || "-"}`,
          `Timezone: ${m.timezone || "-"}`,
          `Details: ${m.details || "-"}`,
        ].join("\n"),
      }),
    });
  } catch (err) {
    console.error("Booking notification email failed:", err);
  }
}

export async function POST(request) {
  const stripe = getStripe();
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    // Webhook not configured yet — accept quietly so Stripe doesn't retry forever.
    return NextResponse.json({ received: true, configured: false });
  }

  const signature = request.headers.get("stripe-signature");
  const rawBody = await request.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    await notifyByEmail(session);
  }

  return NextResponse.json({ received: true });
}
