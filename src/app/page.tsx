import uiux from "@/public/uiux.png";
import Image from "next/image";
import CarouselPortfolio from "./CarouselPortfolio";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px] ">
      <div className="absolute left-0 top-0 -z-10 h-[85vh] w-full bg-gradient-to-br from-[#2f1414] via-[#141414] to-[#251710]" />
      <section className="relative mt-10 flex flex-col items-center justify-center md:flex-row">
        <div className="z-20 flex max-w-screen-md flex-col items-start justify-center space-y-4 px-10 text-start">
          <h1 className="text-main text-3xl font-medium sm:text-4xl lg:text-8xl mb-6">
            Strony Internetowe
          </h1>
          <p className="text-gray-200">
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
            height={548}
            width={455}
            className="object-cover"
            priority
          />
        </div>
      </section>
      <section className="mx-auto my-24 flex flex-col items-center justify-center space-x-4 md:flex-row lg:ml-24">
        <div className="mb-8 text-center font-semibold lg:ml-52 lg:text-start">
          <small className="text-orange-500">
            Zobacz
          </small>
          <p className="mt-1 text-xl lg:text-2xl">
            Najnowsze realizacje
          </p>
        </div>
        <div className="relative w-screen overflow-hidden">
          <CarouselPortfolio />
        </div>
      </section>
    </div>
  );
}
