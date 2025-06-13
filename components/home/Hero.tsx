import { MainBtn } from "@/components/ui/buttons/MainBtn";
import { SecondBtn } from "@/components/ui/buttons/SecondBtn";
import { SCROLLING_LABEL } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const scrollingContent = [
    ...SCROLLING_LABEL,
    ...SCROLLING_LABEL,
    ...SCROLLING_LABEL,
  ];

  return (
    <section className="relative mx-auto py-12 lg:py-36">
      <div className="absolute top-0 left-0 -z-10 h-96 w-full opacity-30 lg:opacity-25">
        <Image
          className="-z-10 h-full w-full object-cover"
          src="/fale-czastek-3d-futurystyczne-tlo-technologii.webp"
          alt="fale-czastek-3d-futurystyczne-tlo-technologii"
          fill
          quality={10}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent via-40% to-[#141414]" />
      </div>
      <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-5 px-2 text-center">
        <h1 className="text-main relative text-4xl font-semibold sm:px-4 md:text-4xl lg:text-6xl">
          Nowoczesne Rozwiązania Webowe
        </h1>
        <p className="max-w-screen-md px-3 py-4 font-medium">
          Jako doświadczony programista, specjalizuję się w tworzeniu
          responsywnych i wydajnych stron internetowych, wykorzystując najnowsze
          technologie, takie jak Gatsby i Next.js. Moja pasja do ciągłego
          doskonalenia i zamiłowanie do nowoczesnych rozwiązań pozwalają mi
          oferować usługi na najwyższym poziomie!
        </p>
        <div className="flex items-center justify-center space-x-5 py-6">
          <Link href="/darmowa-wycena">
            <MainBtn>Darmowa Wycena</MainBtn>
          </Link>
          <Link href="/kontakt">
            <SecondBtn className="px-5 py-2">Kontakt</SecondBtn>
          </Link>
        </div>
      </div>
      <div className="relative mx-auto mt-12 flex w-full max-w-screen-md items-center justify-center overflow-x-hidden">
        <div className="scroller flex whitespace-nowrap">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex shrink-0">
              {scrollingContent.map((label, i) => (
                <p className="mx-6 inline-block" key={`${index}-${i}`}>
                  {label.label}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#141414] via-transparent to-[#141414]" />
      </div>
    </section>
  );
}
