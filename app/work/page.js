import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Work — Beyond Hello",
  description: "Recent website builds from Beyond Hello.",
};

const PROJECTS = [
  {
    name: "Greenhouse Events UAE",
    tag: "Event production · Dubai",
    gradient: "pink",
    href: "https://greenhouseeventsuae.com",
    description:
      "A site for a luxury event production company operating across the UAE — private parties, corporate productions, staging, AV and 360° photobooths. Built around a large, image-led portfolio gallery so 20 years of event work does the talking.",
  },
  {
    name: "Sonkei",
    tag: "Web app",
    gradient: "blue",
    href: null,
    description:
      "A custom web project, deployed on Vercel. Currently in a private preview — case study details coming soon.",
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
            <WorkTile label={project.name} tag={project.tag} gradient={project.gradient} tall />
            <p className="text-sm text-muted">{project.description}</p>
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
