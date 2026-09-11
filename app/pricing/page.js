import { PACKAGE_LIST } from "@/lib/packages";
import PricingCard from "@/components/PricingCard";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = {
  title: "Pricing — Beyond Hello",
  description: "Fixed-price website packages. Book online and pay a deposit to lock your slot.",
};

const FAQS = [
  {
    q: "How does the deposit work?",
    a: "You pay a deposit at booking to secure your build slot on the calendar. The remaining balance is invoiced once the site is ready to launch — you're never charged the full amount upfront.",
  },
  {
    q: "What if my project doesn't fit a package?",
    a: "Book a free scoping call from the Custom package. We'll talk through what you need and send a fixed quote before anything is charged.",
  },
  {
    q: "Do you work with clients outside your timezone?",
    a: "Yes — this is a remote, worldwide studio. Calls are scheduled around your timezone, and updates happen async in between.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Your logo and brand assets if you have them, any copy or content you want included, and a few examples of sites you like. If you don't have all of that yet, that's normal — we'll figure it out together on the kickoff call.",
  },
];

export default function PricingPage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="Pricing"
        title="Packages"
        subtitle="Fixed pricing, so you know exactly what you're booking. Pick a package, pay a deposit to lock your build slot, and the rest happens on the calendar."
      />

      <div className="grid gap-5 sm:grid-cols-3">
        {PACKAGE_LIST.map((pkg) => (
          <PricingCard key={pkg.id} pkg={pkg} />
        ))}
      </div>

      <section className="mt-20 max-w-2xl">
        <h2 className="font-display text-2xl font-bold">Questions</h2>
        <div className="mt-6 flex flex-col divide-y divide-line border-t border-line">
          {FAQS.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </div>
          ))}
        </div>
        <Link href="/book" className="btn-primary mt-10">
          Book your build →
        </Link>
      </section>
    </main>
  );
}
