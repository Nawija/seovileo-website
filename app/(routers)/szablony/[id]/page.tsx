import Breadcrumbs from "@/components/BreadCrumb";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/home/Carousel"));

import Promotion from "@/components/ui/buttons/Promotion";
import { SecondBtn } from "@/components/ui/buttons/SecondBtn";
import { SuccesBtn } from "@/components/ui/buttons/SuccessBtn";
import { PORTFOLIO } from "@/constants/portfolio";
import { PortfolioItem } from "@/types";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const breadcrumbs = [
  {
    title: "Szablony",
    href: "/szablony",
  },
];

type Props = {
  params: { id: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;
  const portfolioItem: PortfolioItem | undefined = PORTFOLIO.find(
    (item) => item.id === id,
  );

  return {
    title: `Szablon strony internetowej ${portfolioItem?.label} | Darmowa konfiguracja `,
    description: `Błyskawiczna strona internetowa wykonana w nowoczensej technolgoii. Kup szablon teraz za ${portfolioItem?.price}zł a my zajmiemy sie konfiguracja! `,
    metadataBase: new URL("https://seovileo.com"),
  };
}
export default function SzablonyID({ params }: { params: { id: string } }) {
  const id = params.id;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  return (
    <>
      <div className="anim-opacity mx-auto max-w-screen-2xl">
        <div
          style={{ backgroundColor: `${portfolioItem.color}` }}
          className={`absolute left-1/2 top-0 -z-10 h-[25vh] w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] lg:blur-[300px]`}
        />

        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="mt-4 py-4 sm:py-8 lg:py-10">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
            <div className="grid gap-6 lg:flex lg:items-start lg:justify-start">
              <div className="grid gap-6 lg:w-3/4 lg:grid-cols-5">
                <div className="relative w-full overflow-hidden lg:col-span-5 ">
                  <div className="relative order-first h-auto w-full lg:max-h-[700px]">
                    <Image
                      src={portfolioItem.url}
                      alt="Photo by Himanshu Dewangan"
                      className="border-main h-full w-full rounded-lg border object-contain object-top"
                    />
                    {portfolioItem.prevPrice !== "" && <Promotion />}
                  </div>

                  <div className="order-2 mt-12 flex flex-col items-start justify-start rounded-lg bg-gray-100 p-10 text-black lg:order-last lg:hidden ">
                    <div className="flex-b w-full text-xs">
                      <p className="font-medium">Technologia:</p>
                      <Link
                        href={portfolioItem.tech.link}
                        target="_blank"
                        className="flex-c rounded-lg border border-gray-200  bg-white p-1.5 px-3 font-semibold transition-colors duration-300  hover:bg-gray-200"
                      >
                        <FaLink className="mr-1.5 text-lg" />{" "}
                        <p>{portfolioItem.tech.label}</p>
                      </Link>
                    </div>
                    <div className="mb-2 md:mb-3">
                      <span className="mb-0.5 mt-3 inline-block">
                        Strona Internetowa
                      </span>

                      <h2 className="text-2xl font-bold lg:text-3xl">
                        {portfolioItem.label}
                      </h2>
                    </div>

                    <div className="mb-6 flex items-center gap-3 md:mb-10 ">
                      <div className="flex h-7 items-center gap-1 rounded-full bg-yellow-500 px-2 text-black/80">
                        <span className="text-sm font-medium">4.2</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      <span className="text-sm  transition duration-100">
                        56 ocen
                      </span>
                    </div>

                    <div className="mb-8 md:mb-10">
                      <span className="mb-3 inline-block text-sm font-semibold  md:text-base">
                        Zakup obejmuje:
                      </span>

                      <div className="flex flex-col gap-1 text-start text-sm">
                        <Link
                          href="#darmowa-konfiguracja"
                          className="rounded-lg border border-gray-200  bg-white p-1.5 px-4 font-semibold transition-colors duration-300  hover:bg-gray-200"
                        >
                          1. Darmowa konfiguracja
                        </Link>
                        <Link
                          href="#darmowe-edycje-tekstu"
                          className="rounded-lg border border-gray-200 bg-white p-1.5 px-4  font-semibold transition-colors duration-300  hover:bg-gray-200"
                        >
                          2. Darmowe edycje tekstu
                        </Link>
                        <Link
                          href="#wsparcie-techniczne"
                          className="rounded-lg border border-gray-200 bg-white p-1.5 px-4  font-semibold transition-colors duration-300  hover:bg-gray-200"
                        >
                          3. Wsparcie techniczne
                        </Link>
                        <Link
                          href="#darmowy-hosting"
                          className="rounded-lg border border-gray-200  bg-white p-1.5 px-4 font-semibold transition-colors duration-300  hover:bg-gray-200"
                        >
                          4. Darmowy hosting
                        </Link>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-end gap-2">
                        <span className=" text-xl font-bold text-emerald-700 md:text-2xl">
                          {portfolioItem.price}zł
                        </span>
                        {portfolioItem.prevPrice !== "" && (
                          <span className="mb-0.5 text-red-500 line-through">
                            {portfolioItem.prevPrice}zł
                          </span>
                        )}
                      </div>

                      <span className="text-sm ">brutto</span>
                    </div>

                    <div className="mb-6 flex items-center gap-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                        />
                      </svg>

                      <span className="text-sm">
                        2-4 godzin czas oczekiwania
                      </span>
                    </div>

                    <div className="flex gap-2.5">
                      <Link href={`/zamowienie/szablony/${id}`}>
                        <SuccesBtn>Kup Teraz</SuccesBtn>
                      </Link>
                      <Link href={`/szablony/live/${id}`}>
                        <SecondBtn className="px-5 py-2">Zobacz Live</SecondBtn>
                      </Link>
                    </div>
                  </div>
                  <h1 className="pb-2 pl-4 pr-2 pt-10 text-3xl font-medium text-gray-200 lg:pl-0 lg:text-4xl">
                    Nowoczesna i szybka strona internetowa {portfolioItem.label}{" "}
                    - od projektanta i programisty seovileo
                  </h1>

                  <div className="mt-12 pl-2">
                    <h2 className="text-main mb-3 text-2xl">Opis produktu</h2>
                    <p>{portfolioItem.desc}</p>
                  </div>
                  <div
                    className="mt-12 scroll-m-12 pl-2"
                    id="darmowa-konfiguracja"
                  >
                    <h2 className="text-main mb-3 text-2xl">
                      Darmowa configuracja
                    </h2>
                    <p className="max-w-screen-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci dicta facere repudiandae iure culpa iste placeat
                      illum, tempore ipsa in ex consequatur aliquam porro fuga?
                      Aliquam aliquid soluta exercitationem reiciendis corrupti
                      ipsum explicabo dignissimos nostrum culpa, sequi mollitia!
                      Harum nihil voluptatibus dolores vel qui ipsa quas? Ex
                      beatae unde soluta, aliquid doloremque pariatur veniam ut
                      incidunt, quia atque iste. Atque enim consectetur,
                      officiis veritatis labore nisi. Est ab rerum blanditiis
                      maiores, reiciendis cupiditate velit accusamus similique
                      voluptatum?
                    </p>
                  </div>
                  <div
                    className="mt-12 scroll-m-12 pl-2"
                    id="darmowe-edycje-tekstu"
                  >
                    <h2 className="text-main mb-3 text-2xl">
                      Darmowe edycje tekstu
                    </h2>
                    <p className="max-w-screen-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci dicta facere repudiandae iure culpa iste placeat
                      illum, tempore ipsa in ex consequatur aliquam porro fuga?
                      Aliquam aliquid soluta exercitationem reiciendis corrupti
                      ipsum explicabo dignissimos nostrum culpa, sequi mollitia!
                      Harum nihil voluptatibus dolores vel qui ipsa quas? Ex
                      beatae unde soluta, aliquid doloremque pariatur veniam ut
                      incidunt, quia atque iste. Atque enim consectetur,
                      officiis veritatis labore nisi. Est ab rerum blanditiis
                      maiores, reiciendis cupiditate velit accusamus similique
                      voluptatum?
                    </p>
                  </div>

                  <div
                    className="mt-12 scroll-m-12 pl-2"
                    id="wsparcie-techniczne
                  "
                  >
                    <h2 className="text-main mb-3 text-2xl">
                      Wsparcie techniczne
                    </h2>
                    <p className="max-w-screen-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci dicta facere repudiandae iure culpa iste placeat
                      i ipsa quas? Ex beatae unde soluta, aliquid dnditiis
                      maiores, reiciendis cupiditate velit accusamus similique
                      voluptatum?
                    </p>
                  </div>
                  <div className="mt-12 scroll-m-12 pl-2" id="darmowy-hosting">
                    <h2 className="text-main mb-3 text-2xl">Darmowy Hosting</h2>
                    <p className="mb-12 max-w-screen-lg">
                      Ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci dicta facere repudiandae iure culpa iste placeat
                      illum, tempore ipsa in ex consequatur aliquam porro fuga?
                      Aliquam aliquid soluta exercitationem reiciendis corrupti
                      ipsum explicabo dignissimos nostrum culpa, sequi mollitia!
                      Harum nihil vo doloremque pariatur veniam ut incidunt,
                      quia atque iste. Atque enim consectetur, officiis
                      veritatis labore nisi. Est ab rerum blanditiis maiores,
                      reiciendis cupiditate velit accusamus similique
                      voluptatum?
                    </p>
                    <p className="max-w-screen-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Adipisci dicta facere repudiandae iure culpa iste placeat
                      illm culpa, sequi mollitia! Harum nihil voluptatibus
                      dolores vel qui ipsa quas? Ex beatae unde soluta, aliquid
                      doloremque pariatur veniam ut incidunt, quia atque iste.
                      Atque enim consectetur, officiis veritatis labore nisi.
                      Est ab rerum blanditiis maiores, reiciendis cupiditate
                      velit accusamus similique voluptatum?
                    </p>
                  </div>
                </div>
              </div>

              <div className="top-24 order-2 hidden flex-col items-start justify-start rounded-lg bg-gray-100 p-10 text-black lg:sticky lg:order-last lg:flex lg:w-[330px]">
                <div className="flex-b w-full text-xs">
                  <p className="font-medium">Technologia:</p>
                  <Link
                    href={portfolioItem.tech.link}
                    target="_blank"
                    className="flex-c rounded-lg border border-gray-200  bg-white p-1.5 px-3 font-semibold transition-colors duration-300  hover:bg-gray-200"
                  >
                    <FaLink className="mr-1.5 text-lg" />{" "}
                    <p>{portfolioItem.tech.label}</p>
                  </Link>
                </div>
                <div className="mb-2 md:mb-3">
                  <span className="mb-0.5 mt-3 inline-block">
                    Strona Internetowa
                  </span>

                  <h2 className="text-2xl font-bold lg:text-3xl">
                    {portfolioItem.label}
                  </h2>
                </div>

                <div className="mb-6 flex items-center gap-3 md:mb-10 ">
                  <div className="flex h-7 items-center gap-1 rounded-full bg-yellow-500 px-2 text-black/80">
                    <span className="text-sm font-medium">4.2</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>

                  <span className="text-sm  transition duration-100">
                    56 ocen
                  </span>
                </div>

                <div className="mb-8 md:mb-10">
                  <span className="mb-3 inline-block text-sm font-semibold  md:text-base">
                    Zakup obejmuje:
                  </span>

                  <div className="flex flex-col gap-1 text-start text-sm">
                    <Link
                      href="#darmowa-konfiguracja"
                      className="rounded-lg border border-gray-200  bg-white p-1.5 px-4 font-semibold transition-colors duration-300  hover:bg-gray-200"
                    >
                      1. Darmowa konfiguracja
                    </Link>
                    <Link
                      href="#darmowe-edycje-tekstu"
                      className="rounded-lg border border-gray-200 bg-white p-1.5 px-4  font-semibold transition-colors duration-300  hover:bg-gray-200"
                    >
                      2. Darmowe edycje tekstu
                    </Link>
                    <Link
                      href="#wsparcie-techniczne"
                      className="rounded-lg border border-gray-200 bg-white p-1.5 px-4  font-semibold transition-colors duration-300  hover:bg-gray-200"
                    >
                      3. Wsparcie techniczne
                    </Link>
                    <Link
                      href="#darmowy-hosting"
                      className="rounded-lg border border-gray-200  bg-white p-1.5 px-4 font-semibold transition-colors duration-300  hover:bg-gray-200"
                    >
                      4. Darmowy hosting
                    </Link>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className=" text-xl font-bold text-emerald-700 md:text-2xl">
                      {portfolioItem.price}zł
                    </span>
                    {portfolioItem.prevPrice !== "" && (
                      <span className="mb-0.5 text-red-500 line-through">
                        {portfolioItem.prevPrice}zł
                      </span>
                    )}
                  </div>

                  <span className="text-sm ">brutto</span>
                </div>

                <div className="mb-6 flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>

                  <span className="text-sm">2-4 godzin czas oczekiwania</span>
                </div>

                <div className="flex gap-2.5">
                  <Link href={`/zamowienie/szablony/${id}`}>
                    <SuccesBtn>Kup Teraz</SuccesBtn>
                  </Link>
                  <Link href={`/szablony/live/${id}`}>
                    <SecondBtn className="px-5 py-2">Zobacz Live</SecondBtn>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-second border-t">
        <Carousel />
      </div>
    </>
  );
}
