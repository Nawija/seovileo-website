import { PortfolioItemSkeleton } from "@/components/ui/Skeletons";
import { PORTFOLIO } from "@/constants/portfolio";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Szablony stron internetowych - darmowa konfiguracja",
  description:
    "Stwórz profesjonalną, nowoczesną stronę internetową, gotowe szablony napisane w najnowszych technologiach. Szybkość działania powala",
};

const PortfolioItemComponent = dynamic(
  () => import("@/components/home/PortfolioItemComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

import SzablonyBg from "@/public/internet-3116062_1280.jpg";
import Image from "next/image";
export default function Szablony() {
  return (
    <div className="anim-opacity mx-auto flex w-full flex-col items-center justify-center ">
      <div className="absolute left-0 top-0 -z-10 h-[80vh] w-full opacity-30 lg:opacity-25">
        <Image
          className="-z-10 h-full w-full object-cover opacity-30"
          src={SzablonyBg}
          alt="fale-czastek-3d-futurystyczne-tlo-technologii"
          fill
          quality={10}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent via-40% to-[#141414]" />
      </div>
      <h1 className=" text-main mx-auto mt-24 flex max-w-screen-lg items-center justify-center px-7 text-center text-2xl font-bold lg:text-4xl">
        Darmowa konficuracja kazdej zakupionej strony internetowej!
      </h1>
      <section className="relative mx-auto py-2 lg:pb-12">
        <section className="mx-auto">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-3 px-3 pt-20 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {PORTFOLIO.map((item, i) => (
              <PortfolioItemComponent item={item} key={i} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
