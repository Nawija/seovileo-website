import Breadcrumbs from "@/components/BreadCrumb";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("@/components/home/Carousel"));

import CTA from "@/components/CTA";
import EffectLightbox from "@/components/EffectLightbox";
import HeroImage from "@/components/HeroImage";
import PageSpeedScores from "@/components/PageSpeedScores";
import { MainBtn } from "@/components/ui/buttons/MainBtn";
import { SuccesBtn } from "@/components/ui/buttons/SuccessBtn";
import { getPortfolioBySlug } from "@/lib/portfolio";
import { PortfolioItem } from "@/types";
import { Eye, Truck } from "lucide-react";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

function generateIdFromTitle(title: string): string {
  if (typeof title !== "string") return "";
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

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
      className={`border-main flex flex-col items-start justify-start rounded-lg border bg-white/5 p-10 text-white backdrop-blur-2xl ${className}`}
    >
      <div className="flex-b w-full text-xs">
        <p className="font-medium">Technologia:</p>
        <Link
          href={portfolioItem.tech.link}
          target="_blank"
          className="flex items-center justify-center rounded-lg border border-gray-200 bg-white p-1.5 px-3 font-semibold text-gray-700 transition-colors hover:bg-gray-200"
        >
          <FaLink className="mr-1.5 text-lg" />{" "}
          <p>{portfolioItem.tech.label}</p>
        </Link>
      </div>
      <div className="mb-6 md:mb-8">
        <span className="mt-5 mb-0.5 inline-block text-xs tracking-widest text-gray-300 uppercase">
          Strona Internetowa
        </span>

        <h2 className="text-2xl font-bold lg:text-3xl">
          {portfolioItem.label}
        </h2>
      </div>

      <div className="mb-8 md:mb-10">
        <span className="mb-3 inline-block text-sm font-semibold md:text-base">
          Co zawiera:
        </span>

        <div className="flex flex-col gap-1 text-start text-sm text-gray-700">
          {portfolioItem.productDesc
            ?.filter((item) => item?.title) // zostaw tylko te z tytułem
            .map((item, idx) => (
              <Link
                key={idx}
                href={`#${generateIdFromTitle(item.title)}`}
                className="border-main rounded-lg border bg-white/5 p-1.5 px-4 font-semibold text-gray-300 transition-colors hover:bg-gray-300 hover:text-black"
              >
                {idx + 1}. {item.title}
              </Link>
            ))}
        </div>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <Truck className="h-6 w-6" />
        <span className="text-sm">2-4 tygodni czas oczekiwania</span>
      </div>

      <div className="flex w-full flex-col gap-2.5">
        <Link href={`/realizacje/live/${id}`}>
          <MainBtn className="flex w-full items-center justify-center px-3 py-2">
            <Eye className="mr-2" size={16} />
            Zobacz strone
          </MainBtn>
        </Link>
        <Link href={`/zamowienie/realizacje/${id}`}>
          <SuccesBtn className="w-full px-3 py-2">
            Zapytaj o podobną realizacje
          </SuccesBtn>
        </Link>
      </div>
    </div>
  );
};

export default async function ImplementationID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const portfolioItem = await getPortfolioBySlug(id);

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
        <div className="mt-4 py-4 sm:py-8 lg:py-2">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="grid gap-6 lg:flex lg:items-start lg:justify-start">
              <div className="grid gap-6 lg:w-3/4 lg:grid-cols-5">
                <div className="relative w-full lg:col-span-5">
                  <div className="relative h-max w-full">
                    <div className="border-main relative aspect-video w-full overflow-hidden rounded-lg border">
                      <HeroImage
                        src={portfolioItem.url}
                        alt={portfolioItem.titleH1}
                      />
                    </div>

                    <section className="border-main relative mt-10 rounded-lg border p-6 pt-8 pl-2">
                      <h2 className="bg-body absolute -top-4 left-4 mb-3 px-2 text-lg text-green-400 lg:text-xl">
                        {portfolioItem.effects.title}
                      </h2>
                      <p className="mb-6 max-w-screen-lg text-sm text-gray-300">
                        {portfolioItem.effects.desc}
                      </p>
                      <EffectLightbox images={portfolioItem.effects.images} />
                    </section>
                  </div>

                  {/* Mobile version - widoczna tylko na mobile */}
                  <ProductCard
                    portfolioItem={portfolioItem}
                    id={id}
                    className="order-2 mt-12 lg:order-last lg:hidden"
                  />

                  {portfolioItem.titleH1 && (
                    <div className="border-main my-6 rounded-lg border bg-white/5 p-4">
                      <h1 className="max-w-2xl pr-2 pl-4 text-lg font-bold text-white/90 lg:pl-0 lg:text-2xl">
                        {portfolioItem.titleH1}
                      </h1>
                    </div>
                  )}

                  <div className="mt-6 pl-2">
                    <h2 className="text-main mb-3 text-2xl">{`Opis - ${portfolioItem.label} `}</h2>
                    <p className="max-w-5xl pr-4">{portfolioItem.desc}</p>
                  </div>

                  {portfolioItem.pageSpeedScore && (
                    <>
                      <PageSpeedScores
                        performance={portfolioItem.pageSpeedScore.performance}
                        accessibility={
                          portfolioItem.pageSpeedScore.accessibility
                        }
                        bestPractices={
                          portfolioItem.pageSpeedScore.bestPractices
                        }
                        seo={portfolioItem.pageSpeedScore.seo}
                      />
                    </>
                  )}
                  <div className="relative">
                    {portfolioItem.productDesc.map((item, index) => (
                      <div
                        key={index}
                        className="mt-12 mb-6 scroll-m-12 pl-2"
                        id={generateIdFromTitle(item.title)}
                      >
                        <div className="border-main relative rounded-lg border p-4 pt-8">
                          <h2 className="text-main bg-body absolute -top-4 left-4 mb-3 px-2 text-2xl">
                            {item.title}
                          </h2>
                          <p className="max-w-5xl pr-4">{item.desc}</p>
                        </div>

                        {index === 2 && (
                          <CTA
                            title="Zamów podobna stronę"
                            titleBtn="Kliknij tutaj"
                            actionLink={`/zamowienie/realizacje/${portfolioItem.id}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
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
