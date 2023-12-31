"use client";

import CircleBlur from "@/src/ui/background/CircleBlur";
import Test from "./Test";

// import { LottieRefCurrentProps } from "lottie-react";
// import { useRef } from "react";

export default function Home() {
  // const lottieHeroAnimRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="anim-opacity">
      <div className="relative px-3 py-12 text-white md:py-24">
        <CircleBlur />
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center text-center ">
          <small className="mb-3 text-sm tracking-[0.4rem]">
            WEB DEVELOPMENT
          </small>
          <h1 className="mx-auto max-w-screen-lg text-2xl font-medium md:text-3xl lg:text-5xl">
            Strony Internetowe Oparte Na{" "}
            <span className="text-main-color">Najnowszych Trendach</span>{" "}
            Technologicznych
          </h1>
          <p className="mt-12 max-w-screen-sm text-sm font-medium opacity-80">
            Witaj na mojej stronie internetowej, gdzie jako jednoosobowy
            developer stawiam na najnowsze trendy technologiczne. Jako pasjonat
            programowania i projektowania, dedykuję się tworzeniu stron
            internetowych, które nie tylko odzwierciedlają moje umiejętności,
            ale również są zgodne z najnowszymi osiągnięciami w dziedzinie
            technologii internetowej.
          </p>
        </div>
      </div>
      {/* <div className="flex-c relative w-full border bg-white">
        <div className="relative h-80 w-full">
          <Lottie
            style={{ height: "500" }}
            lottieRef={lottieHeroAnimRef}
            animationData={HeroAnim}
            interactivity={interactivity}
          />
        </div>
      </div> */}

      <Test />
    </div>
  );
}
