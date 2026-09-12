import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import PricingCard from "@/components/PricingCard";
import WorkTile from "@/components/WorkTile";
import { PACKAGE_LIST } from "@/lib/packages";
import { getProjectsByRegion } from "@/lib/projects";

export const metadata = {
  title: "For US businesses · Beyond Hello",
  description: "Website builds for US businesses, priced in USD, built remotely from a studio that runs across Dubai and Florida.",
};

const projects = getProjectsByRegion("usa");

export default function UsaPage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="🇺🇸 Florida, USA"
        title="Remote-built, US-priced"
        subtitle="Fixed-price website builds for US businesses, quoted in USD, with a studio that already runs on Florida hours as much as Dubai ones."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="max-w-xl text-lg leading-relaxed text-paper/80">
            Beyond Hello splits its time between Dubai and Florida, so working with US clients
            isn't an afterthought, it's half the studio's normal week. Calls land on US hours,
            invoicing is in dollars from the start, and updates happen asynchronously so a
            time-zone gap never turns into a bottleneck.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/book" className="btn-primary">
              Book your build
            </Link>
            <Link href="/contact" className="btn-secondary">
              Ask a question first
            </Link>
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
        <h2 className="font-body text-xl font-bold uppercase tracking-tight">USA Packages</h2>
        <p className="mt-2 max-w-lg text-muted">
          Fixed-price packages, quoted in dollars, no conversion needed.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {PACKAGE_LIST.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} primaryCurrency="usd" singleCurrency />
          ))}
        </div>
        <a
          href="https://wa.me/971552537712"
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-paper/80 transition-colors hover:text-blue"
        >
          Questions about a package? Message us on WhatsApp →
        </a>
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
            Based in the UAE? <span className="text-gradient">See the UAE page</span>
          </h3>
          <Link href="/uae" className="btn-primary border-paper/40">
            🇦🇪 Dubai, UAE →
          </Link>
        </div>
      </section>
    </main>
  );
}
