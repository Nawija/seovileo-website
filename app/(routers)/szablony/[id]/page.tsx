import Breadcrumbs from "@/components/BreadCrumb";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/home/Carousel"));

import PageSpeedScores from "@/components/PageSpeedScores";
import Promotion from "@/components/ui/buttons/Promotion";
import { SecondBtn } from "@/components/ui/buttons/SecondBtn";
import { SuccesBtn } from "@/components/ui/buttons/SuccessBtn";
import { PORTFOLIO } from "@/constants/portfolio";
import { PortfolioItem } from "@/types";
import { Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

interface ProductCardProps {
  portfolioItem: PortfolioItem;
  id: string;
  className?: string;
}

const ProductCard = ({
  portfolioItem,
  id,
  className = "",
}: ProductCardProps) => {
  return (
    <div
      className={`flex flex-col items-start justify-start rounded-lg bg-white/5 border border-main backdrop-blur-2xl p-10 text-white ${className}`}
    >
      <div className="flex-b w-full text-xs">
        <p className="font-medium">Technologia:</p>
        <Link
          href={portfolioItem.tech.link}
          target="_blank"
          className="flex items-center justify-center rounded-lg border text-gray-700 border-gray-200 bg-white p-1.5 px-3 font-semibold transition-colors hover:bg-gray-200"
        >
          <FaLink className="mr-1.5 text-lg" />{" "}
          <p>{portfolioItem.tech.label}</p>
        </Link>
      </div>
      <div className="mb-6 md:mb-8">
        <span className="mt-5 mb-0.5 inline-block text-gray-300 text-xs uppercase tracking-widest">Strona Internetowa</span>

        <h2 className="text-2xl font-bold lg:text-3xl">
          {portfolioItem.label}
        </h2>
      </div>

      <div className="mb-8 md:mb-10">
        <span className="mb-3 inline-block text-sm font-semibold md:text-base">
          Co zawiera:
        </span>

        <div className="flex flex-col gap-1 text-start text-sm text-gray-700">
          <Link
            href="#darmowa-konfiguracja"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors hover:bg-gray-200"
          >
            1. Panel AdminCMS
          </Link>
          <Link
            href="#darmowe-edycje-tekstu"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors hover:bg-gray-200"
          >
            2. Wysyłanie maili
          </Link>
          <Link
            href="#wsparcie-techniczne"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors hover:bg-gray-200"
          >
            3. Newsletter
          </Link>
          <Link
            href="#darmowy-hosting"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors hover:bg-gray-200"
          >
            4. Strefa Klienta
          </Link>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <Truck className="h-6 w-6" />
        <span className="text-sm">2-4 tygodni czas oczekiwania</span>
      </div>

      <div className="flex w-full flex-col gap-2.5">
        <Link href={`/szablony/live/${id}`}>
          <SecondBtn className="w-full px-3 py-2">Zobacz Live</SecondBtn>
        </Link>
        <Link href={`/zamowienie/szablony/${id}`}>
          <SuccesBtn className="w-full px-3 py-2">
            Zapytaj o podobną realizacje
          </SuccesBtn>
        </Link>
      </div>
    </div>
  );
};

const ProductDescription = ({
  portfolioItem,
}: {
  portfolioItem: PortfolioItem;
}) => {
  const sections = [
    {
      id: "darmowa-konfiguracja",
      title: "Darmowa configuracja",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci dicta facere repudiandae iure culpa iste placeat
        illum, tempore ipsa in ex consequatur aliquam porro fuga?
        Aliquam aliquid soluta exercitationem reiciendis corrupti
        ipsum explicabo dignissimos nostrum culpa, sequi mollitia!
        Harum nihil voluptatibus dolores vel qui ipsa quas? Ex
        beatae unde soluta, aliquid doloremque pariatur veniam ut
        incidunt, quia atque iste. Atque enim consectetur,
        officiis veritatis labore nisi. Est ab rerum blanditiis
        maiores, reiciendis cupiditate velit accusamus similique
        voluptatum?`,
    },
    {
      id: "darmowe-edycje-tekstu",
      title: "Darmowe edycje tekstu",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci dicta facere repudiandae iure culpa iste placeat
        illum, tempore ipsa in ex consequatur aliquam porro fuga?
        Aliquam aliquid soluta exercitationem reiciendis corrupti
        ipsum explicabo dignissimos nostrum culpa, sequi mollitia!
        Harum nihil voluptatibus dolores vel qui ipsa quas? Ex
        beatae unde soluta, aliquid doloremque pariatur veniam ut
        incidunt, quia atque iste. Atque enim consectetur,
        officiis veritatis labore nisi. Est ab rerum blanditiis
        maiores, reiciendis cupiditate velit accusamus similique
        voluptatum?`,
    },
    {
      id: "wsparcie-techniczne",
      title: "Wsparcie techniczne",
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci dicta facere repudiandae iure culpa iste placeat
        i ipsa quas? Ex beatae unde soluta, aliquid dnditiis
        maiores, reiciendis cupiditate velit accusamus similique
        voluptatum?`,
    },
    {
      id: "darmowy-hosting",
      title: "Darmowy Hosting",
      content: [
        `Ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci dicta facere repudiandae iure culpa iste placeat
        illum, tempore ipsa in ex consequatur aliquam porro fuga?
        Aliquam aliquid soluta exercitationem reiciendis corrupti
        ipsum explicabo dignissimos nostrum culpa, sequi mollitia!
        Harum nihil vo doloremque pariatur veniam ut incidunt,
        quia atque iste. Atque enim consectetur, officiis
        veritatis labore nisi. Est ab rerum blanditiis maiores,
        reiciendis cupiditate velit accusamus similique
        voluptatum?`,
        `Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci dicta facere repudiandae iure culpa iste placeat
        illm culpa, sequi mollitia! Harum nihil voluptatibus
        dolores vel qui ipsa quas? Ex beatae unde soluta, aliquid
        doloremque pariatur veniam ut incidunt, quia atque iste.
        Atque enim consectetur, officiis veritatis labore nisi.
        Est ab rerum blanditiis maiores, reiciendis cupiditate
        velit accusamus similique voluptatum?`,
      ],
    },
  ];

  return (
    <>
      <h1 className="pt-10 pr-2 pb-2 pl-4 text-3xl font-medium text-gray-200 lg:pl-0 lg:text-4xl">
        Nowoczesna i szybka strona internetowa {portfolioItem.label} - od
        projektanta i programisty seovileo
      </h1>

      <div className="mt-12 pl-2">
        <h2 className="text-main mb-3 text-2xl">Opis produktu</h2>
        <p>{portfolioItem.desc}</p>
      </div>

      <PageSpeedScores
        performance={87}
        accessibility={95}
        bestPractices={72}
        seo={99}
      />

      {sections.map((section) => (
        <div
          key={section.id}
          className="mt-12 scroll-m-12 pl-2"
          id={section.id}
        >
          <h2 className="text-main mb-3 text-2xl">{section.title}</h2>
          {Array.isArray(section.content) ? (
            section.content.map((paragraph, index) => (
              <p
                key={index}
                className={`max-w-screen-lg ${index === 0 ? "mb-12" : ""}`}
              >
                {paragraph}
              </p>
            ))
          ) : (
            <p className="max-w-screen-lg">{section.content}</p>
          )}
        </div>
      ))}
    </>
  );
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const id = params.id;
//   const portfolioItem: PortfolioItem | undefined = PORTFOLIO.find(
//     (item) => item.id === id,
//   );

//   return {
//     title: `Szablon strony internetowej ${portfolioItem?.label} | Darmowa konfiguracja `,
//     description: `Błyskawiczna strona internetowa wykonana w nowoczensej technolgoii. Kup szablon teraz za ${portfolioItem?.price}zł a my zajmiemy sie konfiguracja! `,
//     metadataBase: new URL("https://seovileo.com"),
//   };
// }

export default async function SzablonyID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center text-2xl">
        Obiekt nie znaleziony
      </div>
    );
  }

  return (
    <>
      <div className="anim-opacity mx-auto max-w-screen-2xl">
        <div
          style={{ backgroundColor: `${portfolioItem.color}` }}
          className={`absolute top-0 left-1/2 -z-10 h-[25vh] w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] lg:blur-[300px]`}
        />

        <Breadcrumbs />
        <div className="mt-4 py-4 sm:py-8 lg:py-10">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid gap-6 lg:flex lg:items-start lg:justify-start">
              <div className="grid gap-6 lg:w-3/4 lg:grid-cols-5">
                <div className="relative w-full lg:col-span-5">
                  <div className="relative order-first h-max w-full">
                    <Image
                      src={portfolioItem.url}
                      alt="Photo by Himanshu Dewangan"
                      height={600}
                      width={900}
                      className="border-main h-full w-full rounded-lg border object-contain object-top"
                    />
                    {portfolioItem.prevPrice !== "" && <Promotion />}
                  </div>

                  {/* Mobile version - widoczna tylko na mobile */}
                  <ProductCard
                    portfolioItem={portfolioItem}
                    id={id}
                    className="order-2 mt-12 lg:order-last lg:hidden"
                  />

                  {/* Opis produktu */}
                  <ProductDescription portfolioItem={portfolioItem} />
                </div>
              </div>

              {/* Desktop version - sticky sidebar */}
              <ProductCard
                portfolioItem={portfolioItem}
                id={id}
                className="top-24 order-2 hidden lg:sticky lg:order-last lg:flex lg:w-[330px]"
              />
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
