import seoBg from "@/public/seo-tlo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-screen-2xl">
      <Image
        src={seoBg}
        height={1100}
        width={1100}
        priority
        quality={10}
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
        alt="seo tło"
      />
      <div className="px-3 py-10 text-center md:py-20">
        <div className="mx-auto mb-4 w-max rounded-3xl bg-gradient-to-r from-[#a63a45]  to-[#b35701] p-0.5">
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
        <h1 className="text-2xl font-semibold sm:text-3xl md:text-5xl lg:text-6xl">
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
        <div className="relative">
          <Image
            src="/browser.svg"
            height={1300}
            width={1300}
            priority
            className="mx-auto mt-20"
            alt="przegladarka seovileo"
          />
          <div className="absolute left-1/3 top-1/3 h-80 w-80"></div>
        </div>
      </div>
    </div>
  );
}
