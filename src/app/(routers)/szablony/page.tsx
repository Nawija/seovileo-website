import { PORTFOLIO } from "@/src/constants/portfolio";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import dynamic from "next/dynamic";

const PortfolioItemComponent = dynamic(
  () => import("@/src/components/home/PortfolioItemComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

import SzablonyBg from "@/public/internet-3116062_1280.jpg";
import Image from "next/image";
export default function Szablony() {
  return (
    <div className="anim-opacity mx-auto flex w-full flex-col items-center justify-center ">
      <div className="absolute left-0 top-0 -z-10 h-96 w-full opacity-30 lg:opacity-25">
        <Image
          className="-z-10 h-full w-full object-cover"
          src={SzablonyBg}
          alt="fale-czastek-3d-futurystyczne-tlo-technologii"
          fill
          quality={10}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent via-40% to-[#141414]" />
      </div>
      <h1 className="text-main mx-auto mt-20 flex max-w-screen-lg items-center justify-center px-7 text-center text-2xl font-medium lg:text-6xl">
        Darmowa konficuracja kazdej zakupionej strony internetowej
      </h1>
      <section className="relative mx-auto py-2 lg:py-12">
        <section className="mx-auto">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-3 px-3 pt-20 sm:grid-cols-3 lg:mt-12 lg:grid-cols-4 lg:gap-4">
            {PORTFOLIO.map((item, i) => (
              <PortfolioItemComponent item={item} key={i} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
