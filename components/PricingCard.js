import Link from "next/link";

export default function PricingCard({ pkg }) {
  const priceLabel = pkg.price ? `$${pkg.price.toLocaleString()}` : `From $${pkg.priceFrom.toLocaleString()}`;

  return (
    <div
      className={`flex flex-col gap-4 rounded-2xl border p-7 ${
        pkg.featured ? "border-pink bg-pink/5" : "border-line bg-card"
      }`}
    >
      <span className={`text-xs font-bold uppercase tracking-wide ${pkg.featured ? "text-pink" : "text-muted"}`}>
        {pkg.name}{pkg.featured ? " — most booked" : ""}
      </span>
      <div className="flex items-baseline gap-1 font-display text-3xl font-bold">
        {priceLabel}
      </div>
      <p className="text-sm text-muted">{pkg.tagline}</p>
      <ul className="flex flex-1 flex-col gap-2 text-sm text-paper/90">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className={pkg.featured ? "text-pink" : "text-mint"}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted">Turnaround: {pkg.timeline}</p>
      <Link
        href={`/book?package=${pkg.id}`}
        className={`mt-2 rounded-full px-5 py-3 text-center text-sm font-bold ${
          pkg.featured ? "bg-pink text-ink" : "bg-paper/10 text-paper hover:bg-paper/15"
        }`}
      >
        Book {pkg.name} →
      </Link>
    </div>
  );
}
