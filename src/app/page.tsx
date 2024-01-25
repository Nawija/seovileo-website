import blackHeroBg from "@/public/czarne kwadraty tło.jpg";
import Image from "next/image";
import { MainBtn } from "../ui/buttons/MainBtn";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px] ">
      <section className="relative flex h-[60vh] flex-col items-center justify-center">
        <Image
          src={blackHeroBg}
          alt="czarne kwadraty tło"
          fill
          className="object-cover opacity-50"
        />
        <h1 className="mx-auto max-w-screen-lg px-6 text-center text-2xl sm:text-3xl lg:text-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste
          eveniet aspernatur
        </h1>
        <MainBtn className="mt-12">Zobacz</MainBtn>
      </section>
      <section className="border-main border-y py-24">
        <div className="container mx-auto flex flex-wrap px-5">
          <div className="mb-20 flex w-full flex-wrap">
            <h2 className="title-font text-second mb-4 text-2xl font-medium sm:text-3xl lg:mb-0 lg:w-1/3">
              Master Cleanse Reliac Heirloom
            </h2>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3 lg:pl-6">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full object-cover object-center"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-main border-main border-y py-80"></section>
    </div>
  );
}
