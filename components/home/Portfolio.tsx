import { getAllPortfolioItems } from "@/lib/portfolio";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { PortfolioItemSkeleton } from "../ui/Skeletons";

const PortfolioItemComponent = dynamic(
  () => import("./PortfolioItemComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

export default async function Portfolio() {
  const portfolioItems = await getAllPortfolioItems();
  return (
    <section className="mx-auto">
      <div className="flex items-center justify-between lg:px-1">
        <h2 className="text-main text-lg lg:text-xl">Realizacje - strony internetowe</h2>
        <Link
          href="/realizacje"
          className="flex items-center justify-center transition-colors duration-300 hover:text-white"
        >
          <p className="text-xs lg:text-sm">Więcej</p>
          <ArrowRight size={15} />
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {portfolioItems
          ?.slice(0, 8)
          .map((item, index) => (
            <PortfolioItemComponent key={item.label + index} item={item} />
          ))}
      </div>
    </section>
  );
}
