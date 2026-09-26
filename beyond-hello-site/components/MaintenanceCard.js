import Link from "next/link";

export default function MaintenanceCard({ plan }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-line bg-card p-7">
      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
        {plan.name}
      </span>
      <div>
        <div className="flex items-baseline gap-1 font-body text-3xl font-bold">
          AED {plan.aed.toLocaleString()}
          <span className="text-base font-medium text-muted">/{plan.period}</span>
        </div>
      </div>
      <p className="text-sm text-muted">{plan.tagline}</p>
      <ul className="flex flex-1 flex-col gap-2 text-sm text-paper/90">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="text-blue">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-2 rounded-md border border-paper/25 px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-pink hover:text-pink"
      >
        Ask about {plan.name}
      </Link>
    </div>
  );
}
