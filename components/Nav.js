import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 py-7">
      <Link href="/" className="font-display text-lg font-bold tracking-tight">
        beyond<span className="text-pink">.</span>hello
      </Link>
      <ul className="hidden gap-7 text-sm text-muted sm:flex">
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
        className="whitespace-nowrap rounded-full bg-pink px-5 py-2.5 text-sm font-bold text-ink"
      >
        Book a call
      </Link>
    </nav>
  );
}
