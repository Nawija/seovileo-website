import { SCROLLING_LABEL } from "@/src/constants";
import { MainBtn } from "@/src/ui/buttons/MainBtn";
import { SecondBtn } from "@/src/ui/buttons/SecondBtn";
import Link from "next/link";

export default function Hero() {
  const doubledLabels = [...SCROLLING_LABEL, ...SCROLLING_LABEL];
  return (
    <section className="relative mx-auto py-12 lg:py-24">
      <div className="absolute left-0 top-0 -z-10 h-96 w-full opacity-30 lg:opacity-25">
        <img
          className="-z-10 h-full w-full object-cover"
          src="https://img.freepik.com/darmowe-zdjecie/fale-czastek-3d-futurystyczne-tlo-technologii_1048-18882.jpg?w=1380&t=st=1710754695~exp=1710755295~hmac=b2a264b1a3454bd91d035e9fa4055784df50487c19e33b166ea9c1513eb27f28"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent via-40% to-[#141414]" />
      </div>
      <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-2 text-center ">
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
          <Link href="/darmowa-wycena">
            <MainBtn>Indywidualna</MainBtn>
          </Link>
          <Link href="/szablony">
            <SecondBtn className="px-5 py-2">Gotowa</SecondBtn>
          </Link>
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
