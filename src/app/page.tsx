import browser from "@/public/browser.png";
import grid from "@/public/seo-grid.png";
import seoBg from "@/public/seo-tlo.png";
import Image from "next/image";
import Link from "next/link";
import Realization from "../components/home/Realization";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[1800px] ">
      <div className="absolute -top-20 left-0 h-[30vh] w-full md:h-[60vh]">
        <Image
          src={seoBg}
          fill
          priority
          quality={10}
          className="object-cover"
          alt="seo tło"
        />
      </div>
      <div className="mx-auto max-w-screen-2xl px-3 py-10 text-center md:pt-20">
        <div className="mx-auto mb-4 w-max rounded-3xl bg-gradient-to-r from-[#41a63a]  to-[#b0b301] p-0.5">
          <div className=" flex items-center justify-center rounded-3xl bg-[#101017e8] px-5 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="text-second mr-2 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
            <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <h1 className="text-main text-2xl font-semibold sm:text-3xl md:text-5xl lg:text-6xl">
          Lorem ipsum is placeholder <br />
          <span className="w-max bg-gradient-to-tr from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Strony Internetowe
          </span>
        </h1>
        <p className="text-p mx-auto mt-12 max-w-screen-md">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visuals
          placeholder text commonly used in the graphic, print, and publishing
          industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="relative mx-auto my-12 w-max lg:my-24">
        <Image
          src={browser}
          height={1200}
          width={1200}
          priority
          className="mx-auto mt-20"
          alt="przegladarka seovileo"
        />
        <div className="absolute left-1/2 top-[60%] -z-50 h-[20vw] w-[20vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 blur-[100px]"></div>
        <div className="flex-b absolute bottom-0 left-0 w-full p-10">
          <p className="mr-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quisquam corporis explicabo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nisi earum rerum officia.
          </p>
          <Link href="/">
            <SecondBtn className="w-max">Sprawdz testy</SecondBtn>
          </Link>
        </div>
      </div>
      <Realization />
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-10 px-3 py-10 text-start md:flex-row md:space-y-0 md:py-20">
        <div className="w-full max-w-screen-sm space-y-5 px-4 md:w-3/4">
          <h2 className="text-main text-lg font-semibold md:text-xl lg:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non beatae
            maiores ullam!
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            nam at explicabo similique doloribus ullam esse aliquam ducimus
            itaque facilis porro molestiae nobis pariatur, repellendus vero,
            minima velit! Qui, ratione?
          </p>
          <div className="flex-s space-x-4">
            <SecondBtn>Wiecej</SecondBtn>
            <MainBtn>Testy</MainBtn>
          </div>
        </div>
        <div className="relative h-full w-full max-w-screen-sm px-4 md:w-full">
          <Image
            src={grid}
            alt="siatka grid"
            height={700}
            width={700}
            className="object-cover"
          />
        </div>
      </div>
      <div className=" border-main flex flex-col items-center justify-center space-y-10 border-y bg-black py-24 text-start md:flex-row md:space-y-0">
        <section className="mx-auto flex max-w-screen-xl flex-col items-start justify-center px-4 py-12 md:flex-row md:py-24">
          <div className="text-main top-24 mb-32 h-full w-full px-4 text-center text-3xl md:sticky md:mb-0 md:w-1/2 md:text-start md:text-3xl">
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
          </div>
          <div className="flex flex-col items-center justify-center px-4 md:pl-12">
            <div className="flex items-center justify-center">
              <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
                1
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo doloribus eius error esse sint tempore
                eligendi, deleniti aliquid ratione. A tempora expedita natus
                placeat eveniet quaerat corporis rerum soluta?
              </p>
            </div>
            <div className="bg-gradient my-6 h-24 w-px" />
            <div className="flex items-center justify-center">
              <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
                2
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo doloribus eius error esse sint tempore
                eligendi, deleniti aliquid ratione. A tempora expedita natus
                placeat eveniet quaerat corporis rerum soluta?
              </p>
            </div>
            <div className="bg-gradient my-6 h-24 w-px" />
            <div className="flex items-center justify-center">
              <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
                3
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo doloribus eius error esse sint tempore
                eligendi, deleniti aliquid ratione. A tempora expedita natus
                placeat eveniet quaerat corporis rerum soluta?
              </p>
            </div>
            <div className="bg-gradient my-6 h-24 w-px" />
            <div className="flex items-center justify-center">
              <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
                4
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo doloribus eius error esse sint tempore
                eligendi, deleniti aliquid ratione. A tempora expedita natus
                placeat eveniet quaerat corporis rerum soluta?
              </p>
            </div>
            <div className="bg-gradient my-6 h-24 w-px" />
            <div className="flex items-center justify-center">
              <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
                5
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam explicabo doloribus eius error esse sint tempore
                eligendi, deleniti aliquid ratione. A tempora expedita natus
                placeat eveniet quaerat corporis rerum soluta?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
