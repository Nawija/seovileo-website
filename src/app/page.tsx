import xx from "@/public/xx.png";
import Image from "next/image";
import CarouselPortfolio from "./CarouselPortfolio";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[2000px] ">
      <section className="flex-c relative h-[50vh] bg-[#EDECEB] py-24">
        <div className="z-20 flex max-w-screen-md flex-col items-center justify-center space-y-4 px-10 text-start">
          <h1 className="text-3xl font-medium">Hero</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quaerat assumenda doloribus harum dolor eligendi! Deserunt, eligendi
            consectetur placeat hic nulla repellendus quia magni dolores ex
            culpa quod, iste perferendis, quibusdam sint porro.
          </p>
        </div>
        <div >
          <Image src={xx} alt="..." fill className="object-cover" />
        </div>
      </section>
      <section className="mx-auto my-24 mr-24 flex max-w-screen-xl flex-col items-center justify-center space-x-4 md:flex-row">
        <div className="font-semibold ">
          <small className="text-orange-500">Zobacz</small>
          <p className="lg:text-2xl">Najnowsze realizacje</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <CarouselPortfolio />
        </div>
      </section>
    </div>
  );
}
