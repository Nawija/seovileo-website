import dynamic from "next/dynamic";

import Opinions from "@/components/Opinions";
import { MainBtn } from "@/components/ui/buttons/MainBtn";
import { SecondBtn } from "@/components/ui/buttons/SecondBtn";
import { Metadata } from "next";
import Image from "next/image";
import Hero from "../components/home/Hero";
const Portfolio = dynamic(() => import("../components/home/Portfolio"));
const Carousel = dynamic(() => import("../components/home/Carousel"), {
  loading: () => <div className="text-white">Ładowanie...</div>,
});

const pageTitle = "Seovileo - Audyty SEO, Strony Internetowe które Sprzedają";
const pageDescription =
  "Tworzymy skuteczne strony www ✅ z myślą o SEO i użytkowniku. UI/UX ✅, audyt ✅, optymalizacja - wszystko w jednym miejscu. ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/",
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

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto w-full">
      <Hero />
      <div className="mx-auto max-w-7xl px-3">
        <Portfolio />
      </div>

      <section className="bg-main text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-12 md:flex-row lg:py-24">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h2 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
              Pozycjonowanie Google
            </h2>
            <p className="mb-8 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              obcaecati repudiandae voluptates saepe accusamus optio quod dolor
              fugiat adipisci itaque voluptate enim, inventore ducimus sapiente
              repellendus error ratione corrupti asperiores natus laborum!
            </p>
            <div className="flex justify-center gap-4">
              <MainBtn>Button</MainBtn>
              <SecondBtn>Button</SecondBtn>
            </div>
          </div>
          <div className="border-main w-[95%] rounded-lg border p-3 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className="h-full w-full rounded-lg object-cover"
              height={700}
              width={433}
              alt="pozycjonowanie-google"
              src="/1_1.webp"
            />
          </div>
        </div>
      </section>

      <Opinions />

      <section className="bg-main text-zinc-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-5 py-12 md:flex-row lg:py-24">
          <div className="order-2 mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
            <h2 className="mb-4 text-3xl font-medium text-white sm:text-4xl">
              Google Lighthouse
            </h2>
            <p className="mb-8 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              obcaecati repudiandae voluptates saepe accusamus optio quod dolor
              fugiat adipisci itaque voluptate enim, inventore ducimus sapiente
              repellendus error ratione corrupti asperiores natus laborum!
            </p>
            <div className="flex justify-center gap-4">
              <MainBtn>Button</MainBtn>
              <SecondBtn>Button</SecondBtn>
            </div>
          </div>
          <div className="border-main w-[95%] rounded-lg border p-3 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className="h-full w-full rounded-lg object-cover"
              height={700}
              width={433}
              alt="pozycjonowanie-google"
              src="/1_1 (1).webp"
            />
          </div>
        </div>
      </section>
      <div className="bg-body relative h-[60vh]">
        <Image
          src="/cover.webp"
          fill
          alt="seovileo"
          className="h-full w-full object-contain"
        />
      </div>
      <section className="bg-main text-zinc-400">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h2 className="title-font mb-4 text-2xl font-semibold text-white sm:text-3xl">
              Zapisz sie na Newsletter
            </h2>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep.
            </p>
          </div>
          <div className="mx-auto flex w-full max-w-2xl flex-col items-end space-y-4 px-8 sm:flex-row sm:space-y-0 sm:space-x-4 sm:px-0 lg:w-2/3">
            <div className="relative w-full flex-grow">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-opacity-50 w-full rounded-lg px-3 py-0.5 border-main text-base leading-8 text-gray-700 ease-in-out bg-gray-100"
              />
            </div>
            <MainBtn className="w-40">Zapisz się</MainBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
