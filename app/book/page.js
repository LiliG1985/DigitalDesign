import BookingForm from "@/components/BookingForm";
import { PACKAGE_LIST, getPackage } from "@/lib/packages";

export const metadata = {
  title: "Book — Beyond Hello",
  description: "Book your website build and lock your slot with a deposit.",
};

export default function BookPage({ searchParams }) {
  const requested = searchParams?.package;
  const initialPackage = getPackage(requested) ? requested : PACKAGE_LIST[1].id;
  const cancelled = searchParams?.cancelled === "1";

  return (
    <main className="py-14">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Book your build</h1>
      <p className="mt-4 max-w-xl text-lg text-paper/80">
        Pick a package and tell us a bit about the project. You'll pay a deposit to lock your
        slot — the rest is invoiced before launch.
      </p>

      {cancelled && (
        <p className="mt-6 rounded-lg border border-yellow/30 bg-yellow/10 px-4 py-3 text-sm text-yellow">
          Checkout was cancelled — no payment was taken. You can pick up where you left off below.
        </p>
      )}

      <div className="mt-10 max-w-xl">
        <BookingForm initialPackage={initialPackage} />
      </div>
    </main>
  );
}
