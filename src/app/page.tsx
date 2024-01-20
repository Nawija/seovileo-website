import Image from "next/image";
import CarouselPortfolio from "./CarouselPortfolio";
import uiux from "@/public/uiux.png"

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[2000px] ">
      <section className="flex items-center justify-center flex-col relative md:flex-row">
        <div className="z-20 flex max-w-screen-md flex-col items-start justify-center space-y-4 px-10 text-start">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-main">Strony Internetowe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quaerat assumenda doloribus harum dolor eligendi! Deserunt, eligendi
            consectetur placeat hic nulla repellendus quia magni dolores ex
            culpa quod, iste perferendis, quibusdam sint porro.
          </p>
        </div>
        <div>
          <Image
            src={uiux}
            alt="..."
            className=" object-cover"
          />
        </div>
      </section>
      <section className="mx-auto my-24 flex flex-col items-center justify-center space-x-4 md:flex-row lg:ml-24">
        <div className="mb-8 text-center font-semibold lg:ml-80 lg:text-start">
          <small className="text-orange-900">Zobacz</small>
          <p className="text-xl lg:text-2xl text-main">Najnowsze realizacje</p>
        </div>
        <div className="relative w-screen overflow-hidden">
          <CarouselPortfolio />
        </div>
      </section>
    </div>
  );
}
