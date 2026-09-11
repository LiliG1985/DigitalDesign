import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col gap-6 border-t border-line py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} Beyond Hello. Websites built for what's next.</p>
      <div className="flex gap-6">
        <Link href="/work" className="hover:text-paper">Work</Link>
        <Link href="/pricing" className="hover:text-paper">Pricing</Link>
        <Link href="/contact" className="hover:text-paper">Contact</Link>
      </div>
    </footer>
  );
}
