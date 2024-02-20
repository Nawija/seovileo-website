import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/home/Hero"));
const Portfolio = dynamic(() => import("../components/home/Portfolio"));
const Carousel = dynamic(() => import("../components/home/Carousel"), {
  loading: () => <div>Ładowanie...</div>,
});

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto w-full overflow-hidden">
      <Hero />
      <Portfolio />
      <Carousel />
    </div>
  );
}
