import Link from "next/link";

export default function PricingCard({ pkg, primaryCurrency = "usd" }) {
  const usdLabel = pkg.price ? `$${pkg.price.toLocaleString()}` : `From $${pkg.priceFrom.toLocaleString()}`;
  const aedValue = pkg.aed || pkg.aedFrom;
  const aedLabel = aedValue
    ? `${pkg.aedFrom ? "From " : ""}AED ${aedValue.toLocaleString()}`
    : null;

  const showAedFirst = primaryCurrency === "aed" && aedLabel;
  const primaryLabel = showAedFirst ? aedLabel : usdLabel;
  const secondaryLabel = showAedFirst ? usdLabel : aedLabel;

  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border p-7 ${
        pkg.featured ? "border-pink/50 bg-pink/[0.04]" : "border-line bg-card"
      }`}
    >
      <span className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${pkg.featured ? "text-pink" : "text-muted"}`}>
        {pkg.name}{pkg.featured ? " · Most booked" : ""}
      </span>
      <div>
        <div className="flex items-baseline gap-1 font-body text-3xl font-bold">
          {primaryLabel}
        </div>
        {secondaryLabel && <p className="mt-1 text-xs text-muted">{secondaryLabel}</p>}
      </div>
      <p className="text-sm text-muted">{pkg.tagline}</p>
      <ul className="flex flex-1 flex-col gap-2 text-sm text-paper/90">
        {pkg.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className={pkg.featured ? "text-pink" : "text-blue"}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <p className="text-xs text-muted">Turnaround: {pkg.timeline}</p>
      <Link
        href={`/book?package=${pkg.id}`}
        className={`mt-2 rounded-md border px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
          pkg.featured
            ? "border-pink text-pink hover:bg-pink hover:text-ink"
            : "border-paper/25 text-paper hover:border-pink hover:text-pink"
        }`}
      >
        Book {pkg.name}
      </Link>
    </div>
  );
}
