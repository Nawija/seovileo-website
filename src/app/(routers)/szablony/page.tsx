import { PORTFOLIO } from "@/src/constants";
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
    <div className="anim-opacity flex w-full flex-col items-center justify-center ">
      <section className="relative mx-auto py-2 lg:py-12">
        <div className="mx-auto flex h-full flex-col items-center justify-center space-y-7 px-2 text-center ">
          <TextBacgroud text="szablony" />
          <h1 className="text-main relative text-4xl font-semibold md:text-4xl lg:text-6xl">
            Darmowa konficuracja do kazdej strony
          </h1>
          <p className="max-w-screen-md font-medium">
            Jako doświadczony programista, specjalizuję się w tworzeniu
            responsywnych i wydajnych stron internetowych, wykorzystując
            najnowsze technologie, takie jak Gatsby i Next.js
          </p>
        </div>
        <section className="mx-auto">
          <div className="mt-10 grid grid-cols-2 gap-3 lg:mt-20 lg:grid-cols-4 lg:gap-4">
            {PORTFOLIO.map((item, i) => (
              <PortfolioItemComponent item={item} key={i} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
