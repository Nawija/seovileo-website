import a1 from "@/public/a1.webp";
import a2 from "@/public/a2.webp";
import a3 from "@/public/a3.webp";
import a4 from "@/public/a4.webp";
import HeroBg from "@/public/wysoka-plama-seo.jpg";
import Image from "next/image";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto text-gray-800">
      <section className="relative h-[70vh] w-full overflow-hidden">
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

        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-8 px-8 text-center">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
            Odkryj Nowoczesne Rozwiązania Webowe
          </h1>
          <p className="max-w-screen-md font-medium">
            Jako doświadczony programista, specjalizuję się w tworzeniu
            responsywnych i wydajnych stron internetowych, wykorzystując
            najnowsze technologie, takie jak Gatsby i Next.js 14. Moja pasja do
            ciągłego doskonalenia i zamiłowanie do nowoczesnych rozwiązań
            pozwalają mi oferować usługi na najwyższym poziomie.
          </p>
          <div className="flex items-center justify-center space-x-5">
            <MainBtn>Indywidualna</MainBtn>
            <SecondBtn>Gotowa</SecondBtn>
          </div>
        </div>
      </section>
      <section>
        <div className=" py-6 sm:py-8 lg:pb-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
              Poznaj Ofertę
            </h2>

            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
              <div>
                <a
                  href="#"
                  className="group relative flex h-80 items-end overflow-hidden rounded-lg bo-white p-4 shadow-2xl shadow-xl"
                >
                  <Image
                    src={a1}
                    alt="Photo by Austin Wade"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    fill
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    <span className="text-gray-500">Personalizowana</span>
                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                      Strona Internetowa
                    </span>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="group relative flex h-80 items-end overflow-hidden rounded-lg bo-white p-4 shadow-2xl shadow-xl"
                >
                  <Image
                    src={a2}
                    alt="Photo by Austin Wade"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    fill
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    <span className="text-gray-500">Gotowe</span>
                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                      Szablony Stron
                    </span>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="group relative flex h-80 items-end overflow-hidden rounded-lg bo-white p-4 shadow-2xl shadow-xl"
                >
                  <Image
                    src={a3}
                    alt="Photo by Austin Wade"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    fill
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    <span className="text-gray-500">Google</span>
                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                      Optymalizacja SEO
                    </span>
                  </div>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  className="group relative flex h-80 items-end overflow-hidden rounded-lg bo-white p-4 shadow-2xl shadow-xl"
                >
                  <Image
                    src={a4}
                    alt="Photo by Austin Wade"
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    fill
                  />

                  <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                    <span className="text-gray-500">Usługa</span>
                    <span className="text-lg font-bold text-gray-800 lg:text-xl">
                      Projekty Graficzne
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 py-8 sm:py-16 md:grid md:grid-cols-2 lg:px-6 lg:py-24 xl:gap-16">
          <img
            className="w-full dark:hidden"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <img
            className="hidden w-full dark:block"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
            >
              Get started
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <div className="py-6 sm:py-8 lg:py-24">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Our Team by the numbers
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl lg:p-8">
              <div className="text-xl font-bold text-yellow-500 sm:text-2xl md:text-3xl">
                200
              </div>
              <div className="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl md:p-8">
              <div className="text-xl font-bold text-yellow-500 sm:text-2xl md:text-3xl">
                500+
              </div>
              <div className="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl md:p-8">
              <div className="text-xl font-bold text-yellow-500 sm:text-2xl md:text-3xl">
                1000+
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Customers
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl md:p-8">
              <div className="text-xl font-bold text-yellow-500 sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Coffee breaks
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
