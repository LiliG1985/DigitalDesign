// Central source of truth for packages, used by the pricing page,
// the booking form, and the checkout API route.
//
// Pricing benchmarked against the 2026 Dubai web design market (small studio /
// freelance tier, not big-agency markup): basic sites commonly run
// AED 3,000-18,000, mid-tier custom builds AED 15,000-50,000, and custom
// e-commerce or app builds start around AED 18,000+ and climb from there.
// AED figures below use the USD peg (~3.67) rounded to a clean number.
export const PACKAGES = {
  starter: {
    id: "starter",
    name: "Starter",
    tagline: "A sharp, credible first site",
    price: 1450,
    aed: 5300,
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
    price: 4200,
    aed: 15400,
    deposit: 1200,
    featured: true,
    timeline: "3–4 weeks",
    bestFor: "Growing service businesses and small teams",
    features: [
      "Up to 10 pages, custom brand system",
      "Built-in CMS so you can edit content yourself",
      "Blog + booking/contact integrations",
      "Analytics setup",
      "Arabic-ready layout on request",
      "2 rounds of revisions",
    ],
  },
  custom: {
    id: "custom",
    name: "Elevated / Custom",
    tagline: "For anything with real backend logic",
    price: null,
    priceFrom: 8500,
    aedFrom: 31000,
    deposit: 2000,
    timeline: "Scoped on a call",
    bestFor: "E-commerce, web apps, dashboards, membership or booking platforms",
    features: [
      "Fully custom design and UX",
      "E-commerce, payments, or app logic",
      "Third-party & API integrations",
      "Multi-language builds (Arabic/English) on request",
      "Scoped 1:1 before you book",
    ],
  },
};

export const PACKAGE_LIST = Object.values(PACKAGES);

export function getPackage(id) {
  return PACKAGES[id] || null;
}
