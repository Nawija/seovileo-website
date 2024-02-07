import HeroBg from "@/public/wysoka-plama-seo.jpg";
import Image from "next/image";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto text-gray-800">
      <section className="h-[90vh] w-full overflow-hidden">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full rotate-180 object-cover"
          src={HeroBg}
          alt="hero"
          quality={100}
          placeholder="blur"
          priority
          fill
        />
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          src="https://img.freepik.com/darmowe-zdjecie/elegancka-miekka-blekitna-krzywa-wyklada-abstrakcjonistycznego-tlo_1017-19950.jpg?w=2000&t=st=1707295802~exp=1707296402~hmac=b38019373c5522197904477528efe58f9c385c507e62024a15eb84c97bc5609d"
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-gray-50 via-white/50 to-gray-50/90 " />

        <div className="mx-auto -mt-20 flex h-full max-w-screen-lg flex-col items-center justify-center space-y-8 px-8 text-center">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl">
            Odkryj Nowoczesne Rozwiązania Webowe
          </h1>
          <p>
            Jako doświadczony programista, specjalizuję się w tworzeniu
            responsywnych i wydajnych stron internetowych, wykorzystując
            najnowsze technologie, takie jak Gatsby i Next.js 14. Moja pasja do
            ciągłego doskonalenia i zamiłowanie do nowoczesnych rozwiązań
            pozwalają mi oferować usługi na najwyższym poziomie.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <MainBtn>Indywidualna Strona</MainBtn>
            <SecondBtn>Gotowe Szablony</SecondBtn>
          </div>
        </div>
      </section>
    </div>
  );
}
