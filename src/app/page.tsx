import Link from "next/link";
import { PORTFOLIO, SCROLLING_LABEL } from "../constants";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";

export default function Home() {
  const doubledLabels = [...SCROLLING_LABEL, ...SCROLLING_LABEL];

  return (
    <div className="anim-opacity relative mx-auto">
      <section className="relative mx-auto py-12 lg:py-24">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-2 text-center ">
          <h1 className="text-main relative text-4xl font-semibold md:text-4xl lg:text-6xl">
            Odkryj Nowoczesne Rozwiązania Webowe
          </h1>
          <p className="max-w-screen-md font-medium">
            Jako doświadczony programista, specjalizuję się w tworzeniu
            responsywnych i wydajnych stron internetowych, wykorzystując
            najnowsze technologie, takie jak Gatsby i Next.js. Moja pasja do
            ciągłego doskonalenia i zamiłowanie do nowoczesnych rozwiązań
            pozwalają mi oferować usługi na najwyższym poziomie!
          </p>
          <div className="flex items-center justify-center space-x-5">
            <MainBtn>Indywidualna</MainBtn>
            <SecondBtn>Gotowa</SecondBtn>
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex w-full max-w-screen-md items-center justify-center overflow-x-hidden ">
          <div className="scrolling flex items-center justify-center">
            {doubledLabels.map((label, index) => (
              <p className="ml-12 inline-block" key={index}>
                {label.label}
              </p>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#141414] via-transparent to-[#141414]" />
        </div>
      </section>
      <section className="mx-auto">
        <div className="flex-b">
          <h2 className="text-main text-lg">Most Popular Framer Templates</h2>
          <Link href="/" className="flex-c transition-colors hover:text-white">
            <p className="text-xs">Więcej</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-1.5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PORTFOLIO.map((p) => (
            <Link
              className="bg-main border-second rounded-lg border"
              href={p.href}
            >
              <div className="border-second group relative overflow-hidden border-b bg-gradient-to-tr from-[#161616] to-transparent p-4">
                <img
                  src={p.url}
                  alt="..."
                  className="h-52 w-full object-cover"
                />
                <div className="bg-main absolute left-0 top-0 h-full w-full translate-y-full opacity-30 transition-transform group-hover:translate-y-0"></div>
              </div>
              <div className="flex flex-col items-start justify-start p-4">
                <div className="flex-b text-main w-full">
                  <p>{p.label}</p>
                  <p>
                    {p.price}
                    <span>zł</span>
                  </p>
                </div>
                <div className="flex-b text-p w-full ">
                  <p>{p.label}</p>
                  {p.prevPrice !== "" && (
                    <p className="line-through">
                      {p.prevPrice}
                      <span>zł</span>
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
