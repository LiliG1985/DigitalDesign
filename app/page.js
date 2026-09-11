import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import { PACKAGE_LIST } from "@/lib/packages";
import PricingCard from "@/components/PricingCard";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-6 sm:py-10">
        <div className="glow-blob pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink opacity-20" />
        <div className="glow-blob pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-blue opacity-20" />
        <div className="glow-blob pointer-events-none absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-yellow opacity-10" />

        <div className="relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <h1 className="font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              We build the website
              <br />
              your competitors
              <br />
              <span className="text-gradient">wish they had</span>
            </h1>
            <div className="mt-7 h-px w-10 bg-paper/30" />
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
              A website is the first conversation you have with a customer, so it should sound
              like you, not like everyone else's template. We build custom, launch-ready sites
              for founders and brands who want that first hello to land. Pick a package, book
              your slot, and we take it from there.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="/book" className="btn-primary">
                Book your build
              </Link>
              <Link href="/work" className="btn-secondary">
                See recent work
              </Link>
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              <li>Websites</li>
              <li>E-commerce</li>
              <li>Branding</li>
              <li>Digital strategy</li>
            </ul>
          </div>

          {/* Laptop mockup */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="glow-blob absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-40" />
            <img
              src="/images/hero-laptop.jpg"
              alt="beyond.hello website shown on a laptop, in a neon-lit studio"
              className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="relative mt-16 flex flex-col gap-4 border-t border-line pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>Dubai · Florida · Worldwide</span>
          <span>Fixed pricing · Clear process · Real results</span>
        </div>
      </section>

      {/* Recent work strip */}
      <section className="border-t border-line py-16">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-body text-xl font-bold uppercase tracking-tight">Recent work</h2>
          <Link href="/work" className="btn-secondary text-xs">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <WorkTile label="Greenhouse Events UAE" tag="Event production · Dubai" gradient="pink" />
          <WorkTile label="Sonkei" tag="Web app" gradient="blue" />
          <Link href="/book" className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line p-4 text-center text-sm text-muted transition-colors hover:border-pink hover:text-paper">
            <span className="font-body text-lg font-bold text-paper">+</span>
            Let's build yours next
          </Link>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-line py-16">
        <div className="mb-8">
          <h2 className="font-body text-xl font-bold uppercase tracking-tight">Packages</h2>
          <p className="mt-2 max-w-lg text-muted">
            Fixed pricing, so you always know what you're booking. Lock your slot with a
            deposit, and the balance is due before launch.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {PACKAGE_LIST.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="relative my-16 overflow-hidden rounded-xl border border-line p-10">
        <img
          src="/images/cta-band.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="max-w-sm font-body text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
            Ready to <span className="text-gradient">stop blending in</span>?
          </h3>
          <Link href="/book" className="btn-primary border-paper/40">
            Book a free 20-min call
          </Link>
        </div>
      </section>
    </main>
  );
}
