import Link from "next/link";

export const metadata = {
  title: "About — Beyond Hello",
  description: "Why Beyond Hello exists, and how we work.",
};

export default function AboutPage() {
  return (
    <main className="py-14">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">
        It started with a hello.
      </h1>
      <div className="mt-8 flex flex-col gap-5 text-lg leading-relaxed text-paper/80">
        <p>
          Beyond Hello was built around a simple idea: a good first hello can turn into something
          much bigger than you expected — if what comes after it holds up.
        </p>
        <p>
          For most businesses today, a website <em>is</em> that first hello. It's the first
          impression a customer forms before they ever speak to you. We build sites that carry
          that hello beyond the first click — into a call booked, a sale made, a client won.
        </p>
        <p>
          We work with founders and small teams worldwide, remotely, on fixed-price packages —
          so you know what you're getting before you book, and can go from "let's do this" to a
          live site in a few weeks.
        </p>
      </div>
      <Link href="/book" className="btn-primary mt-10">
        Book a call →
      </Link>
    </main>
  );
}
