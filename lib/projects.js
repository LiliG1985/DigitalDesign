// Shared portfolio data, used by the Work page and the region landing pages
// (UAE / USA) so project copy only has to be written once.
export const PROJECTS = [
  {
    id: "greenhouse",
    name: "Greenhouse Events UAE",
    tag: "Event production · Dubai",
    region: "uae",
    gradient: "pink",
    image: "/images/work/greenhouse.jpg",
    href: "https://greenhouseeventsuae.com",
    brief:
      "A UAE-based production company running project management, entertainment, event coordination, venue dressing, fabrications, furniture rental, and wardrobe & costume, all under one roof. The old site buried that range behind a generic template that could have belonged to anyone.",
    build:
      "A black-and-gold, image-led design that reads more like a luxury hospitality brand than a typical services site: full-bleed photography, a portfolio gallery built to carry the weight of real event work, and a service breakdown that finally shows the full scope of what they actually run, in one glance instead of a buried dropdown menu.",
  },
  {
    id: "sonkei",
    name: "Sonkei Co.",
    tag: "Apparel, nutrition & skincare · E-commerce",
    region: "usa",
    gradient: "blue",
    image: "/images/work/sonkei.jpg",
    href: "https://www.sonkei.co.com",
    brief:
      "A lifestyle brand selling across three categories, apparel, nutrition, and skincare, that risked feeling like three unrelated shops sharing a logo.",
    build:
      "One editorial mood carried across all three: warm lifestyle photography, a single confident headline treatment, and navigation that lets a shopper move between categories without ever feeling like they left the brand. Full storefront, cart, and checkout under one roof.",
  },
];

export function getProjectsByRegion(region) {
  return PROJECTS.filter((p) => p.region === region);
}
