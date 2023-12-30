"use client";

import HeroAnim from "@/public/hero-anim.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";

export default function Home() {
  const lottieHeroAnimRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="anim-opacity">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center lg:flex-row">
        <div className="flex-c mx-auto flex flex-col items-center justify-center px-4 py-12 text-center lg:w-[72rem]">
          <small className="mb-2 text-sm tracking-[0.5rem] text-black">
            WEB DEVELOPMENT
          </small>
          <h1 className="mx-auto max-w-screen-lg text-3xl font-medium lg:text-5xl">
            Strony Internetowe Oparte Na{" "}
            <span className="text-main-color">Najnowszych Trendach</span>{" "}
            Technologicznych
          </h1>
          <p className="mt-12 opacity-80">
            Witaj na mojej stronie internetowej, gdzie jako jednoosobowy
            developer stawiam na najnowsze trendy technologiczne. Jako pasjonat
            programowania i projektowania, dedykuję się tworzeniu stron
            internetowych, które nie tylko odzwierciedlają moje umiejętności,
            ale również są zgodne z najnowszymi osiągnięciami w dziedzinie
            technologii internetowej. Tutaj znajdziesz moje projekty, które są
            rezultatem nieustannego poszukiwania nowości oraz dbałości o jakość
            wykonania.
          </p>
        </div>
      </div>
      <div className="w-full border bg-white flex-c relative">
        <div className="w-full lg:w-[80%] mx-auto">
          <Lottie lottieRef={lottieHeroAnimRef} animationData={HeroAnim} />
        </div>
      </div>
    </div>
  );
}
