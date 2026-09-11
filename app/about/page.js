import Link from "next/link";

export const metadata = {
  title: "About — Beyond Hello",
  description: "Why Beyond Hello exists, and how we work.",
};

const STEPS = [
  {
    n: "01",
    label: "Ideas",
    text: "A short scoping call to figure out what your site actually needs to do — and what it doesn't.",
  },
  {
    n: "02",
    label: "Design & develop",
    text: "A custom build on a fixed timeline, with real progress you can see, not a black box.",
  },
  {
    n: "03",
    label: "Launch & beyond",
    text: "You get a live, working site — plus a clear path for what to add next as the business grows.",
  },
];

export default function AboutPage() {
  return (
    <main className="py-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="eyebrow">About</span>
          <h1 className="mt-5 font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl">
            It started with
            <br />
            <span className="text-gradient">a hello.</span>
          </h1>
          <div className="mt-7 flex flex-col gap-5 text-lg leading-relaxed text-paper/80">
            <p>
              Beyond Hello was built around a simple idea: a good first hello can turn into
              something much bigger than you expected — if what comes after it holds up.
            </p>
            <p>
              For most businesses today, a website <em>is</em> that first hello. It's the first
              impression a customer forms before they ever speak to you. We build sites that
              carry that hello beyond the first click — into a call booked, a sale made, a client
              won.
            </p>
          </div>
          <Link href="/book" className="btn-primary mt-10">
            Book a call →
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-blob absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-pink via-yellow to-blue opacity-30" />
          <img
            src="/images/about-hero.jpg"
            alt="A quiet lounge corner overlooking the Dubai skyline at night"
            className="relative w-full rounded-xl border border-line object-cover shadow-2xl"
          />
        </div>
      </div>

      {/* How we work */}
      <section className="mt-24 border-t border-line pt-16">
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">How we work</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.n} className="flex flex-col gap-3">
              <span className="font-body text-sm font-bold text-pink">{step.n}</span>
              <h3 className="font-body text-lg font-bold uppercase tracking-tight">
                {step.label}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pull quote band */}
      <section className="relative my-20 overflow-hidden rounded-xl border border-line p-10 sm:p-14">
        <img
          src="/images/page-banner.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <p className="relative max-w-2xl font-body text-2xl font-bold uppercase leading-snug tracking-tight text-paper sm:text-3xl">
          We work with founders and small teams worldwide, remotely, on fixed-price
          packages — so you know what you're getting before you book.
        </p>
      </section>
    </main>
  );
}
