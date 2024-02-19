import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import Test from "../components/home/Test";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto w-full overflow-hidden">
      <Hero />
      <Portfolio />
      <Test />
    </div>
  );
}
