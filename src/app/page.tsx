import { NAV_LINKS } from "../constants";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto">
      <section className="relative mx-auto py-24">
        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-4 text-center ">
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
        <div className="relative mx-auto mt-12 flex max-w-screen-sm items-center justify-center space-x-10 overflow-hidden">
          {NAV_LINKS.map((btn) => (
            <p>{btn.label}</p>
          ))}
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#141414] via-transparent  to-[#141414]" />
        </div>
      </section>
    </div>
  );
}
