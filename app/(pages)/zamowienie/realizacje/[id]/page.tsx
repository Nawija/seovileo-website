import ImplementationForm from "@/components/implementation/ImplementationForm";
import { PORTFOLIO } from "@/constants/portfolio";
import { Metadata } from "next";

const pageTitle = "Seovileo - Audyty SEO, Strony Internetowe które Sprzedają";
const pageDescription =
  "Tworzymy skuteczne strony www ✅ z myślą o SEO i użytkowniku. UI/UX ✅, audyt ✅, optymalizacja - wszystko w jednym miejscu. ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/zamowienie",
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

export default async function ZamowienieSzablonyId({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return (
      <div className="text-center text-red-600">Obiekt nie znaleziony</div>
    );
  }

  return <ImplementationForm portfolioItem={portfolioItem} />;
}
