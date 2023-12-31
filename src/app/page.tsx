"use client";

import { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";

export default function Home() {
  const lottieHeroAnimRef = useRef<LottieRefCurrentProps>(null);

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "loop",
        frames: [45, 60],
      },
    ],
  };

  return (
    <div className="anim-opacity">
      <div className="relative px-4 py-24 text-white">
        <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden bg-[#00024C]">
          <div className="absolute left-0 top-0 h-[40vw] w-[40vw] rounded-full bg-sky-400 blur-[80px] lg:-left-24 lg:-top-24 lg:h-[20vw] lg:w-[20vw] lg:blur-[103px]" />
        </div>
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center text-center ">
          <small className="mb-2 text-sm tracking-[0.5rem]">
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
    </div>
  );
}
