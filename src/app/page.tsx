import CircleBlur from "../ui/background/CircleBlur";
import CardSection from "./CardSection";
import GridSection from "./GridSection";
import NumersSection from "./NumbersSection";
import Realization from "./Realization";
import TextHero from "./TextHero";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[2000px] ">
      <div className="absolute left-0 top-0 -z-10 h-screen w-full">
        <CircleBlur />
      </div>
      <TextHero />
      <Realization />
      <GridSection />
      <NumersSection />
      <CardSection />
    </div>
  );
}
