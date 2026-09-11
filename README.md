# Beyond Hello

Marketing site + booking flow for Beyond Hello, built with Next.js (App Router),
Tailwind CSS, and Stripe Checkout. Deployed on Vercel.

## What's here

- `/` — home page
- `/work` — portfolio
- `/pricing` — packages (edit these in `lib/packages.js`)
- `/book` — booking form → creates a Stripe Checkout session for the package deposit
- `/book/success` — confirmation page after payment
- `/about`, `/contact`

## Before this can take real payments

The booking flow is fully built, but needs your own Stripe account connected. In the
Vercel project settings → **Environment Variables**, add:

| Variable | Where to get it | Required? |
|---|---|---|
| `STRIPE_SECRET_KEY` | [Stripe dashboard → API keys](https://dashboard.stripe.com/apikeys) | Yes — checkout won't work without it |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Same page | Recommended |
| `STRIPE_WEBHOOK_SECRET` | Stripe dashboard → Developers → Webhooks → add endpoint `https://yourdomain.com/api/stripe-webhook`, listen for `checkout.session.completed` | Optional — only needed for the email notification below |
| `RESEND_API_KEY` | [resend.com](https://resend.com) (free tier available) | Optional — sends you an email when someone books |
| `NOTIFY_EMAIL` | Your own inbox | Optional — pairs with `RESEND_API_KEY` |
| `NEXT_PUBLIC_SITE_URL` | Your live domain | Recommended once you have a custom domain |

Start with test mode Stripe keys (`sk_test_...` / `pk_test_...`) to try the flow safely,
then switch to live keys when you're ready to accept real payments.

**Without a webhook/Resend configured**, payments still work — the money lands in your
Stripe dashboard and the booking details (name, email, package, preferred date) are saved
in the Checkout Session's metadata, viewable on each payment in Stripe. The webhook +
Resend combo just adds an automatic email alert on top of that.

## Content still to fill in

- `lib/packages.js` — pricing, features, and turnaround times per package (currently
  based on market research — sanity-check the numbers against what you actually want to
  charge)
- `app/work/page.js` — portfolio copy; add real screenshots as you gather them
- `app/contact/page.js` — swap the placeholder email address for your real inbox
- Trust/stat claims were deliberately left out of the copy (no invented "500+ clients"
  numbers) — add real ones once you have them

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in your Stripe test keys
npm run dev
```

## Deployment

This repo is connected to Vercel for automatic deploys — every push to `main` triggers a
new deployment.
