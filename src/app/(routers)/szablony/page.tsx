
import { PORTFOLIO } from "@/src/constants/portfolio";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import TextBacgroud from "@/src/ui/background/TextBacgroud";
import dynamic from "next/dynamic";

const PortfolioItemComponent = dynamic(
  () => import("@/src/components/home/PortfolioItemComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

export default function Szablony() {
  return (
    <div className="anim-opacity mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center ">
      <section className="relative mx-auto py-2 lg:py-12">
        <TextBacgroud text="szablony" />

        <section className="mx-auto">
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-20 lg:grid-cols-4 lg:gap-4">
            <h1 className="text-main relative flex max-w-screen-md flex-col items-start justify-center text-start text-xl font-semibold sm:text-xl lg:text-2xl">
              <strong className="animate-pulse font-semibold text-yellow-500 uppercase">
                Darmowa
              </strong>{" "}
              konficuracja i serwis do kazdej zakupionej strony internetowej
            </h1>
            {PORTFOLIO.map((item, i) => (
              <PortfolioItemComponent item={item} key={i} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
