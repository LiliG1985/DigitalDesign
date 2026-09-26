import Stripe from "stripe";

let stripeClient = null;

// Lazily construct the client so the app doesn't crash at build/boot time
// if STRIPE_SECRET_KEY isn't set yet (e.g. before Lili adds it in Vercel).
export function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return null;
  }
  if (!stripeClient) {
    stripeClient = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });
  }
  return stripeClient;
}
