import { PortfolioItemSkeleton } from "@/components/ui/Skeletons";
import { getAllPortfolioItems } from "@/lib/portfolio";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";

const pageTitle = "Seovileo - Audyty SEO, Strony Internetowe które Sprzedają";
const pageDescription =
  "Tworzymy skuteczne strony www ✅ z myślą o SEO i użytkowniku. UI/UX ✅, audyt ✅, optymalizacja - wszystko w jednym miejscu. ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/realizacje",
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

const PortfolioItemComponent = dynamic(
  () => import("@/components/home/PortfolioItemComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

export default async function ImplementationPage() {
  const portfolioItems = await getAllPortfolioItems();
  return (
    <div className="anim-opacity mx-auto flex w-full flex-col items-center justify-center">
      <div className="absolute top-0 left-0 -z-10 h-[80vh] w-full opacity-30 lg:opacity-25">
        <Image
          className="-z-10 h-full w-full object-cover opacity-30"
          src="/internet-3116062_1280.jpg"
          alt="fale-czastek-3d-futurystyczne-tlo-technologii"
          fill
          quality={10}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent via-40% to-[#141414]" />
      </div>
      <h1 className="text-main mx-auto mt-24 flex max-w-screen-lg items-center justify-center px-7 text-center text-2xl font-bold lg:text-4xl">
        Darmowa konficuracja kazdej zakupionej strony internetowej!
      </h1>
      <section className="relative mx-auto py-2 lg:pb-12">
        <section className="mx-auto">
          <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-3 px-3 pt-20 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {portfolioItems.map((item, i) => (
              <PortfolioItemComponent item={item} key={i} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
