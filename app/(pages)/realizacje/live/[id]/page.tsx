import { getPortfolioBySlug } from "@/lib/portfolio";
import ClientWraper from "./ClientWraper";

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
