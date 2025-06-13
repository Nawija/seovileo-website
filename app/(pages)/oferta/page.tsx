import CTA from "@/components/CTA";
import Opinions from "@/components/Opinions";
import ServicesSection from "@/components/ServicesSection";
import { MainBtn } from "@/components/ui/buttons/MainBtn";
import { CircleCheckBig } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

const pageTitle = "Oferta - Tworzenie Stron www 2025 ✅";
const pageDescription =
  "Cennik i oferta usług tworzenia stron internetowych - wizytówka ✅, strona firmowa ✅, sklep online ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/oferta",
  },
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: heroImage,
        width: 350,
        height: 350,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

export default function OfertaPage() {
  return (
    <div className="anim-opacity py-12">
      <section className="mx-auto w-full max-w-screen-2xl">
        <div className="col-span-3 max-w-4xl space-y-6 px-8">
          <h1 className="text-4xl text-white sm:text-5xl lg:text-7xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
            beatae neque ipsa.
          </h1>
          <p className="text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
            expedita at ipsa reiciendis, non nesciunt cupiditate, dicta
            suscipit, dolores quas accusantium cumque ut commodi. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Quod, enim pariatur?
          </p>
          <MainBtn>Skontakuj sie</MainBtn>
        </div>
        <div className="absolute top-0 left-0 -z-10 h-[60vh] w-full opacity-50">
          <Image
            src="/ChatGPT Image 13 cze 2025, 22_30_45.png"
            fill
            className="object-cover"
            alt="..."
          />
          <div className="from-body absolute inset-0 h-full w-full bg-gradient-to-t to-transparent" />
        </div>
      </section>
      <ServicesSection />
      <section className="body-font overflow-hidden text-gray-400">
        <div className="container mx-auto px-5 py-12">
          <div className="mb-20 flex w-full flex-col text-center">
            <h2 className="title-font mb-2 text-3xl font-medium text-gray-200 sm:text-4xl">
              Pakiety
            </h2>
            <p className="mx-auto text-base leading-relaxed text-gray-400 lg:w-2/3">
              zapłac mniej w pakiecie badz widoczny w Google
            </p>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="w-full p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-main border-main relative flex h-full flex-col overflow-hidden rounded-lg border p-6">
                <p className="title-font mb-1 text-sm font-medium tracking-widest">
                  START
                </p>
                <p className="mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-200">
                  <span>1900</span>
                  <span className="ml-1 text-lg font-normal text-gray-400">
                    /netto
                  </span>
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Tumeric plaid portland
                </p>
                <p className="mb-6 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button className="mt-auto flex w-full items-center rounded border-0 bg-gray-400 px-4 py-2 text-white hover:bg-gray-500 focus:outline-none">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-auto h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="mt-3 text-xs text-gray-400">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-main relative flex h-full lg:scale-105 flex-col overflow-hidden rounded-lg border-2 border-emerald-500 p-6 shadow-xl shadow-emerald-300/30">
                <span className="absolute top-0 right-0 rounded-bl bg-emerald-500 px-3 py-1 text-xs tracking-widest text-white">
                  Popularny
                </span>
                <p className="title-font mb-1 text-sm font-medium tracking-widest">
                  PRO
                </p>
                <p className="mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-200">
                  <span>3800</span>
                  <span className="ml-1 text-lg font-normal text-gray-400">
                    /netto
                  </span>
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Tumeric plaid portland
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p className="mb-6 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button className="mt-auto flex w-full items-center rounded border-0 bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600 focus:outline-none">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-auto h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="mt-3 text-xs text-gray-400">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-main border-main relative flex h-full flex-col overflow-hidden rounded-lg border p-6">
                <p className="title-font mb-1 text-sm font-medium tracking-widest">
                  BIZNES
                </p>
                <p className="mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-200">
                  <span>4500</span>
                  <span className="ml-1 text-lg font-normal text-gray-400">
                    /netto
                  </span>
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Tumeric plaid portland
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="mb-6 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button className="mt-auto flex w-full items-center rounded border-0 bg-gray-400 px-4 py-2 text-white hover:bg-gray-500 focus:outline-none">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-auto h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="mt-3 text-xs text-gray-400">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2 xl:w-1/4">
              <div className="bg-main border-main relative flex h-full flex-col overflow-hidden rounded-lg border p-6">
                <p className="title-font mb-1 text-sm font-medium tracking-widest">
                  INDYWIDUALNA
                </p>
                <p className="mb-4 flex items-center border-b border-gray-200 pb-4 text-4xl leading-none text-gray-200">
                  <span>Wycena</span>
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Tumeric plaid portland
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Hexagon neutra unicorn
                </p>
                <p className="mb-2 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Vexillologist pitchfork
                </p>
                <p className="mb-6 flex items-center text-gray-400">
                  <span className="mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center text-green-500">
                    <CircleCheckBig />
                  </span>
                  Mixtape chillwave tumeric
                </p>
                <button className="mt-auto flex w-full items-center rounded border-0 bg-gray-400 px-4 py-2 text-white hover:bg-gray-500 focus:outline-none">
                  Button
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="ml-auto h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="mt-3 text-xs text-gray-400">
                  Literally you probably haven't heard of them jean shorts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Opinions />
      <CTA actionLink="/kontakt" />
    </div>
  );
}
