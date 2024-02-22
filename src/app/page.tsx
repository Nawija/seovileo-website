import dynamic from "next/dynamic";

import Hero from "../components/home/Hero";
const Portfolio = dynamic(() => import("../components/home/Portfolio"));
const Carousel = dynamic(() => import("../components/home/Carousel"), {
  loading: () => <div className="text-white">Ładowanie...</div>,
});

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto w-full max-w-screen-2xl overflow-hidden">
      <Hero />
      <Portfolio />
      <Carousel />
    </div>
  );
}
