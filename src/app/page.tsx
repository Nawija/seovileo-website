import HeroBg from "@/public/elegancka-miekka-blekitna-krzywa-wyklada-abstrakcjonistycznego-seo.jpg";
import Image from "next/image";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";
import NumersSection from "./NumbersSection";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto text-gray-800">
      <section className="relative h-[90vh] w-full overflow-hidden lg:h-[70vh]">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full rotate-180 object-cover"
          src={HeroBg}
          alt="elegancka-miekka-blekitna-krzywa-wyklada-abstrakcjonistycznego-seo"
          placeholder="blur"
          priority
          fill
        />
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full rotate-180 object-cover"
          src="https://images.unsplash.com/photo-1652449823136-b279fbe5dfd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkwfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-gray-50 via-white/50 to-gray-50/90 " />

        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-4 text-center ">
          <h1 className="relative text-4xl font-semibold md:text-4xl lg:text-6xl">
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
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2"></div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl items-center gap-8 px-4 pb-8 sm:pb-16 md:grid md:grid-cols-2 lg:px-6 lg:pb-24 xl:gap-16">
          <img
            className="w-full shadow-2xl shadow-sky-100"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <div className="mt-24 px-4 md:mt-0">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Lets create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light  md:text-lg ">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a
              href="#"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300  inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4"
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
              Poznaj Ofertę
            </h2>

            <p className="mx-auto max-w-screen-md text-center  md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:gap-8">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 lg:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                od 700zł
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Strona Internetowa
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 md:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                od 200zł
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Gotowe Szablony
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 md:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                od 900zł
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Pozycjonowanie SEO
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 md:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                Wycena
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Proejkty Graficzne
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 text-center md:px-8">
          <h2 className="mb-8 text-2xl font-bold text-gray-800 lg:mb-12 lg:text-3xl">
            Gotowe szablony
          </h2>

          <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/564x/04/a4/4a/04a44a824058d96e4ccc871d3faa9031.jpg"
                  loading="lazy"
                  alt="Photo by Rachit Tank"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />

                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  PROMOCJA
                </span>
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Timely Watch
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    $150.00 zł
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    $300.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/564x/5e/21/4f/5e214fb7a1c6d6a7154dc88672c0bb33.jpg"
                  loading="lazy"
                  alt="Photo by Galina N"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Fancy Plant
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    220.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/564x/d2/27/f8/d227f8283b580743535ae21d3ae5b1b2.jpg"
                  loading="lazy"
                  alt="Photo by eniko kis"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Elderly Cam
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    250.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/236x/17/a8/ac/17a8ac19326e77d93cdd563be6cf400a.jpg"
                  loading="lazy"
                  alt="Photo by Irene Kredenets"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Shiny Shoe
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    290.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/236x/01/d2/33/01d233aa419390b115b2cb1ee6b41282.jpg"
                  loading="lazy"
                  alt="Photo by Charles Deluvio"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Spiky Plant
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    400.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/474x/49/70/35/497035dc62fada6477bc5ecd26d008fd.jpg"
                  loading="lazy"
                  alt="Photo by Fernando Lavin"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Wieldy Film
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    199.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/236x/40/77/8d/40778d21d3d184869549c62bfdb0fd6c.jpg"
                  loading="lazy"
                  alt="Photo by Kiran CK"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                  sale
                </span>
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Sturdy Stand
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    120.00 zł
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    240.00 zł
                  </span>
                </div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3"
              >
                <img
                  src="https://i.pinimg.com/236x/12/23/0f/12230fc3812bd8d4e034e32cbe1bba4f.jpg"
                  loading="lazy"
                  alt="Photo by Fakurian Design"
                  className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-110"
                />
              </a>

              <div>
                <a
                  href="#"
                  className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg"
                >
                  Lazy Bottle
                </a>

                <div className="flex items-end gap-2">
                  <span className="font-bold text-gray-800 lg:text-lg">
                    170.00 zł
                  </span>
                </div>
              </div>
            </div>
          </div>
          <SecondBtn className="mt-12">Więcej</SecondBtn>
        </div>
      </div>

      <NumersSection />

      <section className="">
        <div className=" mx-auto flex max-w-screen-xl flex-wrap px-5 py-24">
          <h2 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl md:w-2/5">
            Kickstarter Actually Pinterest Brunch Bitters Occupy
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="text-base leading-relaxed">
              Taxidermy bushwick celiac master cleanse microdosing seitan.
              Fashion axe four dollar toast truffaut, direct trade kombucha
              brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki
              drinking vinegar tacos.
            </p>
            <div className="mt-6 flex md:mt-4">
              <a className="inline-flex items-center text-sky-700">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
