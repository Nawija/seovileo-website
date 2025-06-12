import { getPortfolioBySlug } from "@/lib/portfolio";
import { notFound } from "next/navigation";
import ClientWraper from "./ClientWraper";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const portfolioItem = await getPortfolioBySlug(id);
  console.log(portfolioItem);

  if (!portfolioItem) {
    notFound();
  }

  return {
    alternates: {
      canonical: `https://seovileo.pl/realizacje/live/${id}`,
    },
    title: `${portfolioItem.label} | Podgląd strony internetowej | Seovileo`,
    description: portfolioItem.desc?.substring(0, 160),
    openGraph: {
      title: `${portfolioItem.label} | Podgląd strony internetowej | Seovileo`,
      description: portfolioItem.desc?.substring(0, 160) || "",
      images: [
        {
          url: portfolioItem.url,
          width: 1200,
          height: 630,
          alt: portfolioItem.titleH1 || portfolioItem.label,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${portfolioItem.label} | Podgląd strony internetowej | Seovileo`,
      description: portfolioItem.desc?.substring(0, 160) || "",
      images: [portfolioItem.url],
    },
  };
}

export default async function ImplementationID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const portfolioItem = await getPortfolioBySlug(id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  return (
    <ClientWraper
      portfolioLink={portfolioItem.link}
      portfolioID={portfolioItem.id}
    />
  );
}
