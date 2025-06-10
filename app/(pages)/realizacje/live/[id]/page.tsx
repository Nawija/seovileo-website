import { PORTFOLIO } from "@/constants/portfolio";
import ClientWraper from "./ClientWraper";

export default async function SzablonyID({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await Promise.resolve(params);
  const { id } = awaitedParams;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  return <ClientWraper portfolioLink={portfolioItem.link} portfolioID={portfolioItem.id} />;
}
