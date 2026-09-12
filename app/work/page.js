import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Work · Beyond Hello",
  description: "Recent website builds from Beyond Hello.",
};

const PROJECTS = [
  {
    name: "Greenhouse Events UAE",
    tag: "Event production · Dubai",
    gradient: "pink",
    image: "/images/work/greenhouse.jpg",
    href: "https://greenhouseeventsuae.com",
    brief:
      "A UAE-based production company running project management, entertainment, event coordination, venue dressing, fabrications, furniture rental, and wardrobe & costume, all under one roof. The old site buried that range behind a generic template that could have belonged to anyone.",
    build:
      "A black-and-gold, image-led design that reads more like a luxury hospitality brand than a typical services site: full-bleed photography, a portfolio gallery built to carry the weight of real event work, and a service breakdown that finally shows the full scope of what they actually run, in one glance instead of a buried dropdown menu.",
  },
  {
    name: "Sonkei Co.",
    tag: "Apparel, nutrition & skincare · E-commerce",
    gradient: "blue",
    image: "/images/work/sonkei.jpg",
    href: "https://www.sonkei.co.com",
    brief:
      "A lifestyle brand selling across three categories, apparel, nutrition, and skincare, that risked feeling like three unrelated shops sharing a logo.",
    build:
      "One editorial mood carried across all three: warm lifestyle photography, a single confident headline treatment, and navigation that lets a shopper move between categories without ever feeling like they left the brand. Full storefront, cart, and checkout under one roof.",
  },
];

export default function WorkPage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="Portfolio"
        title="Recent work"
        subtitle="A look at what's shipped so far. More case studies are added as projects launch."
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.name} className="flex flex-col gap-4">
            <WorkTile
              label={project.name}
              tag={project.tag}
              gradient={project.gradient}
              image={project.image}
              tall
            />
            <div className="flex flex-col gap-3 text-sm text-muted">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
                  The brief
                </span>
                <p className="mt-1 leading-relaxed">{project.brief}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
                  The build
                </span>
                <p className="mt-1 leading-relaxed">{project.build}</p>
              </div>
            </div>
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

        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line p-10 text-center text-muted transition-colors hover:border-pink hover:text-paper"
        >
          <span className="font-display text-2xl font-bold text-paper">+</span>
          <span>Your project could be here next</span>
        </Link>
      </div>
    </main>
  );
}
