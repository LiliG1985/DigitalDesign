import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 py-8">
      <Link href="/" className="font-body text-lg tracking-tight text-paper">
        beyond<span className="text-pink">.</span>hello<span className="text-pink">.</span>
      </Link>
      <div className="flex items-center gap-8">
        <ul className="hidden gap-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-paper">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/book"
          className="hidden whitespace-nowrap rounded-md border border-paper/25 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-pink hover:text-pink sm:inline-flex"
        >
          Book a call
        </Link>
        <Link
          href="/book"
          aria-label="Book a call"
          className="flex flex-col gap-1.5 sm:hidden"
        >
          <span className="block h-px w-6 bg-paper" />
          <span className="block h-px w-6 bg-paper" />
        </Link>
      </div>
    </nav>
  );
}
