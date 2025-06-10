import Breadcrumbs from "@/components/BreadCrumb";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/home/Carousel"));

import PageSpeedScores from "@/components/PageSpeedScores";
import Promotion from "@/components/ui/buttons/Promotion";
import { SecondBtn } from "@/components/ui/buttons/SecondBtn";
import { SuccesBtn } from "@/components/ui/buttons/SuccessBtn";
import { PORTFOLIO } from "@/constants/portfolio";
import { PortfolioItem } from "@/types";
import { Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

const breadcrumbs = [
  {
    title: "Szablony",
    href: "/szablony",
  },
];

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
      className={`flex flex-col items-start justify-start rounded-lg bg-gray-100 p-10 text-black ${className}`}
    >
      <div className="flex-b w-full text-xs">
        <p className="font-medium">Technologia:</p>
        <Link
          href={portfolioItem.tech.link}
          target="_blank"
          className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-1.5 px-3 font-semibold transition-colors duration-300 hover:bg-gray-200"
        >
          <FaLink className="mr-1.5 text-lg" />{" "}
          <p>{portfolioItem.tech.label}</p>
        </Link>
      </div>
      <div className="mb-2 md:mb-3">
        <span className="mt-3 mb-0.5 inline-block">Strona Internetowa</span>

        <h2 className="text-2xl font-bold lg:text-3xl">
          {portfolioItem.label}
        </h2>
      </div>

      <div className="mb-6 flex items-center gap-3 md:mb-10">
        <div className="flex h-7 items-center gap-1 rounded-full bg-yellow-500 px-2 text-black/80">
          <span className="text-sm font-medium">4.9</span>
          <Star size={15} fill="currentColor" />
        </div>

        <span className="text-sm transition duration-100">56 ocen</span>
      </div>

      <div className="mb-8 md:mb-10">
        <span className="mb-3 inline-block text-sm font-semibold md:text-base">
          Zakup obejmuje:
        </span>

        <div className="flex flex-col gap-1 text-start text-sm">
          <Link
            href="#darmowa-konfiguracja"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors duration-300 hover:bg-gray-200"
          >
            1. Darmowa konfiguracja
          </Link>
          <Link
            href="#darmowe-edycje-tekstu"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors duration-300 hover:bg-gray-200"
          >
            2. Darmowe edycje tekstu
          </Link>
          <Link
            href="#wsparcie-techniczne"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors duration-300 hover:bg-gray-200"
          >
            3. Wsparcie techniczne
          </Link>
          <Link
            href="#darmowy-hosting"
            className="rounded-lg border border-gray-200 bg-white p-1.5 px-4 font-semibold transition-colors duration-300 hover:bg-gray-200"
          >
            4. Darmowy hosting
          </Link>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-end gap-2">
          <span className="text-xl font-bold text-emerald-700 md:text-2xl">
            {portfolioItem.price}zł
          </span>
          {portfolioItem.prevPrice !== "" && (
            <span className="mb-0.5 text-red-500 line-through">
              {portfolioItem.prevPrice}zł
            </span>
          )}
        </div>

        <span className="text-sm">brutto</span>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <Truck className="h-6 w-6" />
        <span className="text-sm">2-4 tygodni czas oczekiwania</span>
      </div>

      <div className="flex gap-2.5">
        <Link href={`/zamowienie/szablony/${id}`}>
          <SuccesBtn className="px-3 py-2">Zapytaj Teraz</SuccesBtn>
        </Link>
        <Link href={`/szablony/live/${id}`}>
          <SecondBtn className="px-3 py-2">Zobacz Live</SecondBtn>
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

        <Breadcrumbs breadcrumbs={breadcrumbs} />
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
