import { PACKAGE_LIST } from "@/lib/packages";
import PricingCard from "@/components/PricingCard";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = {
  title: "Pricing · Beyond Hello",
  description: "Fixed-price website packages. Book online and pay a deposit to lock your slot.",
};

const FAQS = [
  {
    q: "How does the deposit work?",
    a: "You pay a deposit at booking to secure your build slot on the calendar. The remaining balance is invoiced once the site is ready to launch, so you're never charged the full amount upfront.",
  },
  {
    q: "Why not just buy a template for less?",
    a: "You can, and plenty of businesses do. A template is fast and cheap because someone else already made every decision for you: the layout, the pacing, the way it makes a visitor feel. A custom build costs more because those decisions get made around your business specifically. If a template is doing the job, keep it. If it's starting to feel like everyone else's site, that's usually the moment to switch.",
  },
  {
    q: "What if my project doesn't fit a package?",
    a: "Book a free scoping call from the Custom package. We'll talk through what you need and send a fixed quote before anything is charged.",
  },
  {
    q: "Do you work with clients outside your timezone?",
    a: "Yes. This is a remote, worldwide studio, with roots in Dubai and Florida: calls are scheduled around your timezone, and updates happen asynchronously in between.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your logo and brand assets if you have them, any copy or content you want included, and a few examples of sites you like. If you don't have all of that yet, that's normal. We'll figure it out together on the kickoff call.",
  },
];

export default function PricingPage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="Pricing"
        title="Packages"
        subtitle="Fixed pricing, so you know exactly what you're booking. Pick a package, pay a deposit to lock your build slot, and the rest happens on the calendar."
      />

      <p className="mb-12 max-w-2xl text-sm leading-relaxed text-muted">
        These numbers are priced against the real Dubai market for 2026, not a generic
        international rate card. A basic brochure site here typically runs a few thousand
        dirhams; a proper custom build with real functionality starts climbing from there fast.
        The packages below sit at the honest end of that range: enough to build something that
        actually holds up, without agency overhead padding the invoice.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {PACKAGE_LIST.map((pkg) => (
          <PricingCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-start">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold">Questions</h2>
          <div className="mt-6 flex flex-col divide-y divide-line border-t border-line">
            {FAQS.map((item) => (
              <div key={item.q} className="py-5">
                <h3 className="font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-muted">{item.a}</p>
              </div>
            ))}
          </div>
          <Link href="/book" className="btn-primary mt-10">
            Book your build →
          </Link>
        </div>

        <div className="relative mx-auto hidden w-full max-w-xs lg:block">
          <div className="glow-blob absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue via-violet to-pink opacity-30" />
          <img
            src="/images/desk-detail.jpg"
            alt="Studio desk detail, lit by neon light"
            className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
          />
          <p className="mt-5 text-xs leading-relaxed text-muted">
            Every package is scoped before it's booked, so the number you see is the number you
            pay, deposit included.
          </p>
        </div>
      </section>
    </main>
  );
}
