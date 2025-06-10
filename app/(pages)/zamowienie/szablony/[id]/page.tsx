import ImplementationForm from "@/components/implementation/ImplementationForm";
import { PORTFOLIO } from "@/constants/portfolio";

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
