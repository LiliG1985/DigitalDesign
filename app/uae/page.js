import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PricingCard from "@/components/PricingCard";
import WorkTile from "@/components/WorkTile";
import { PACKAGE_LIST } from "@/lib/packages";
import { getProjectsByRegion } from "@/lib/projects";

export const metadata = {
  title: "For UAE businesses · Beyond Hello",
  description:
    "Website builds for businesses in the UAE, priced in AED against the real Dubai market.",
};

const projects = getProjectsByRegion("uae");

export default function UaePage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="🇦🇪 Dubai, UAE"
        title="Built in Dubai, for Dubai"
        subtitle="Fixed-price website builds for UAE businesses, priced in AED against what the local market actually charges, not a generic international rate card."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-paper/80">
            Beyond Hello is based here, which means calls happen in your time zone, pricing is
            quoted in dirhams from the start, and the site gets built with the same market you
            operate in already in mind: bilingual-ready layouts, local payment expectations, and
            a design sense that doesn't read as an imported template.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book" className="btn-primary">
              Book your build
            </Link>
            <a
              href="https://wa.me/971552537712"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="flex flex-col gap-4">
            <WorkTile
              label={project.name}
              tag={project.tag}
              gradient={project.gradient}
              image={project.image}
              tall
            />
            <p className="text-sm leading-relaxed text-muted">{project.build}</p>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-fit text-sm"
              >
                Visit site →
              </a>
            )}
          </div>
        ))}
      </div>

      <section className="mt-20 border-t border-line pt-16">
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">UAE Packages</h2>
        <p className="mt-2 max-w-lg text-muted">
          Fixed-price packages, quoted in dirhams, no conversion needed.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {PACKAGE_LIST.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} primaryCurrency="aed" singleCurrency />
          ))}
        </div>
      </section>

      <section className="relative mt-20 overflow-hidden rounded-xl border border-line p-10">
        <img
          src="/images/cta-band.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="max-w-sm font-body text-2xl font-extrabold uppercase tracking-tight text-paper sm:text-3xl">
            Not in the UAE? <span className="text-gradient">See the USA page</span>
          </h3>
          <Link href="/usa" className="btn-primary border-paper/40">
            🇺🇸 Florida, USA →
          </Link>
        </div>
      </section>
    </main>
  );
}
