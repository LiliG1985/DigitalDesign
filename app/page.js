import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import { PACKAGE_LIST } from "@/lib/packages";
import PricingCard from "@/components/PricingCard";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="grid items-center gap-12 py-10 sm:py-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="eyebrow">● Now booking new projects</span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
            We build the website
            <br />
            your competitors
            <br />
            <span className="text-pink">wish they had.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/80">
            Custom-built, launch-ready sites for founders and brands who want to look like the
            obvious best option. Pick a package, book your slot online, done.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/book" className="btn-primary">
              Book your build →
            </Link>
            <Link href="/work" className="btn-secondary">
              See recent work
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-muted">
            <span>Worldwide, remote-friendly</span>
            <span>Fixed-price packages</span>
            <span>Book &amp; pay a deposit online</span>
          </div>
        </div>

        <div className="relative hidden h-[380px] sm:block">
          <div className="absolute left-[22%] top-0 z-30 w-[78%] -rotate-3 shadow-2xl">
            <WorkTile label="Greenhouse Events UAE" tag="Event production" gradient="pink" tall />
          </div>
          <div className="absolute left-0 top-[110px] z-20 w-[78%] rotate-2 shadow-2xl">
            <WorkTile label="Sonkei" tag="Web app" gradient="blue" tall />
          </div>
          <div className="absolute left-[16%] top-[220px] z-10 w-[78%] -rotate-2 shadow-2xl">
            <WorkTile label="Your project here" tag="Booking now" gradient="mint" tall />
          </div>
        </div>
      </section>

      {/* Recent work strip */}
      <section className="border-t border-line py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold">Recent work</h2>
          <Link href="/work" className="btn-secondary text-sm">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <WorkTile label="Greenhouse Events UAE" tag="Event production · Dubai" gradient="pink" />
          <WorkTile label="Sonkei" tag="Web app" gradient="blue" />
          <Link href="/book" className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line p-4 text-center text-sm text-muted transition-colors hover:border-pink hover:text-paper">
            <span className="font-display text-lg font-bold text-paper">+</span>
            Let's build yours next
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-line py-16">
        <div className="mb-8">
          <h2 className="font-display text-2xl font-bold">Packages</h2>
          <p className="mt-2 max-w-lg text-muted">
            Fixed pricing, so you know what you're booking. Pay a deposit to lock your slot —
            the balance is due before launch.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {PACKAGE_LIST.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="my-16 flex flex-col items-start gap-6 rounded-[22px] bg-gradient-to-br from-pink to-blue p-10 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="max-w-sm font-display text-2xl font-bold text-white sm:text-3xl">
          Ready to stop blending in?
        </h3>
        <Link
          href="/book"
          className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-4 font-bold text-white"
        >
          Book a free 20-min call →
        </Link>
      </section>
    </main>
  );
}
