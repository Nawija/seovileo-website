import { SCROLLING_LABEL } from "@/src/constants";
import { MainBtn } from "@/src/ui/buttons/MainBtn";
import { SecondBtn } from "@/src/ui/buttons/SecondBtn";

export default function Hero() {
  const doubledLabels = [...SCROLLING_LABEL, ...SCROLLING_LABEL];
  return (
    <section className="relative mx-auto py-12 lg:py-24">
      <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-2 text-center ">
        <span className="absolute left-1/2 top-0 -z-10 w-max -translate-x-1/2 bg-gradient-to-t from-white/10 to-transparent bg-clip-text text-5xl font-bold tracking-[1.1rem] text-transparent opacity-60 lg:text-[14rem]">
          WEB DEV
        </span>
        <h1 className="text-main relative text-4xl font-semibold md:text-4xl lg:text-6xl">
          Odkryj Nowoczesne Rozwiązania Webowe
        </h1>
        <p className="max-w-screen-md font-medium">
          Jako doświadczony programista, specjalizuję się w tworzeniu
          responsywnych i wydajnych stron internetowych, wykorzystując najnowsze
          technologie, takie jak Gatsby i Next.js. Moja pasja do ciągłego
          doskonalenia i zamiłowanie do nowoczesnych rozwiązań pozwalają mi
          oferować usługi na najwyższym poziomie!
        </p>
        <div className="flex items-center justify-center space-x-5">
          <MainBtn>Indywidualna</MainBtn>
          <SecondBtn>Gotowa</SecondBtn>
        </div>
      </div>
      <div className="relative mx-auto mt-12 flex w-full max-w-screen-md items-center justify-center overflow-x-hidden ">
        <div className="scrolling flex items-center justify-center">
          {doubledLabels.map((label, i) => (
            <p className="ml-12 inline-block" key={i}>
              {label.label}
            </p>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#141414] via-transparent to-[#141414]" />
      </div>
    </section>
  );
}
