"use client";
// import PortfolioItemComponent from "@/src/components/home/PortfolioItemComponent";
import { PORTFOLIO } from "@/src/constants";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import { Suspense, lazy, useEffect, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const PortfolioItemComponent = lazy(() =>
  delay(42000).then(
    () => import("@/src/components/home/PortfolioItemComponent"),
  ),
);

export default function Szablony() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    // Update the key every time the component mounts
    setKey(Math.random());
  }, []);
  return (
    <div className="anim-opacity flex w-full flex-col items-center justify-center">
      <section className="relative mx-auto py-12 lg:py-24">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-2 text-center ">
          <span className="absolute left-1/2 top-10 -z-10 w-max -translate-x-1/2 bg-gradient-to-t from-white/10 to-transparent bg-clip-text py-2 text-4xl font-bold uppercase tracking-[1rem] text-transparent opacity-60 sm:py-12 lg:text-[14rem]">
            szablony
          </span>
          <h1 className="text-main relative text-4xl font-semibold md:text-4xl lg:text-6xl">
            Nowoczesne gotowe strony internetowe
            <br />
            darmowa konficuracja
          </h1>
          <p className="max-w-screen-md font-medium">
            Jako doświadczony programista, specjalizuję się w tworzeniu
            responsywnych i wydajnych stron internetowych, wykorzystując
            najnowsze technologie, takie jak Gatsby i Next.js
          </p>
        </div>
        <section className="mx-auto">
          <div className="mt-24 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {PORTFOLIO.map((item) => (
              <Suspense fallback={<PortfolioItemSkeleton />} key={key}>
                <PortfolioItemComponent item={item} />
              </Suspense>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
