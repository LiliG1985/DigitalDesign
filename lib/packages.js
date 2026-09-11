// Central source of truth for packages, used by the pricing page,
// the booking form, and the checkout API route.
export const PACKAGES = {
  starter: {
    id: "starter",
    name: "Starter",
    tagline: "A sharp, credible first site",
    price: 1400,
    deposit: 500,
    timeline: "2 weeks",
    bestFor: "Personal brands, solo consultants, small local businesses",
    features: [
      "1–5 custom-designed pages",
      "Mobile-first, fast-loading build",
      "On-page SEO basics",
      "Contact form",
      "1 round of revisions",
    ],
  },
  growth: {
    id: "growth",
    name: "Growth",
    tagline: "For businesses ready to be found",
    price: 3800,
    deposit: 1000,
    featured: true,
    timeline: "3–4 weeks",
    bestFor: "Growing service businesses and small teams",
    features: [
      "Up to 10 pages, custom brand system",
      "Built-in CMS so you can edit content yourself",
      "Blog + booking/contact integrations",
      "Analytics setup",
      "2 rounds of revisions",
    ],
  },
  custom: {
    id: "custom",
    name: "Elevated / Custom",
    tagline: "For anything with real backend logic",
    price: null,
    priceFrom: 7500,
    deposit: 1500,
    timeline: "Scoped on a call",
    bestFor: "E-commerce, web apps, dashboards, membership or booking platforms",
    features: [
      "Fully custom design and UX",
      "E-commerce, payments, or app logic",
      "Third-party & API integrations",
      "Scoped 1:1 before you book",
    ],
  },
};

export const PACKAGE_LIST = Object.values(PACKAGES);

export function getPackage(id) {
  return PACKAGES[id] || null;
}
