import Link from "next/link";

export const metadata = {
  title: "Contact — Beyond Hello",
  description: "Get in touch with Beyond Hello.",
};

// TODO (Lili): swap in your real inbox + socials once the domain is set up.
const CONTACT_EMAIL = "hello@beyondhello.digital";

export default function ContactPage() {
  return (
    <main className="py-14">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Say hello</h1>
      <p className="mt-4 max-w-xl text-lg text-paper/80">
        The fastest way to get started is to book a package directly — but if you've got
        questions first, reach out here.
      </p>

      <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
        <a href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
          {CONTACT_EMAIL}
        </a>
        <Link href="/book" className="btn-secondary">
          Or skip ahead and book →
        </Link>
      </div>
    </main>
  );
}
