import { PORTFOLIO } from "@/src/constants";

export default function SzablonyID({ params }: { params: { id: string } }) {
  const id = params.id;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  return (
    <div className="anim-opacity z-[99999] h-screen w-full overflow-hidden">
      <iframe
        className="fixed left-0 top-0  h-full w-full"
        src="https://nazoltej.pl"
      ></iframe>
    </div>
  );
}
