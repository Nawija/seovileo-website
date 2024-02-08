import HeroBg from "@/public/elegancka-miekka-blekitna-krzywa-wyklada-abstrakcjonistycznego-seo.jpg";
import Image from "next/image";
import Link from "next/link";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";
import NumersSection from "./NumbersSection";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto text-gray-800">
      <section className="relative h-screen w-full overflow-hidden lg:h-[70vh]">
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
          src="https://images.unsplash.com/photo-1530578294319-9d6b376c11ca?q=80&w=3304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-gray-50 via-white/50 to-gray-50/90 " />

        <div className="mx-auto flex h-full max-w-screen-xl flex-col items-center justify-center space-y-7 px-8 text-center ">
          <h1 className="relative text-3xl font-semibold md:text-4xl lg:text-6xl">
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
              Our Team by the numbers
            </h2>

            <p className="mx-auto max-w-screen-md text-center  md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 lg:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                200
              </div>
              <div className="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 md:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                500+
              </div>
              <div className="text-sm font-semibold sm:text-base">People</div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 md:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                1000+
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Customers
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-4 shadow-2xl shadow-sky-100 md:p-8">
              <div className="text-xl font-bold text-sky-600 sm:text-2xl md:text-3xl">
                A couple
              </div>
              <div className="text-sm font-semibold sm:text-base">
                Coffee breaks
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="border-y-2 border-sky-100 bg-white py-24">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">
              Poznaj Ofertę
            </h2>

            <div className="grid grid-cols-2 gap-4 text-center md:gap-6 lg:grid-cols-4">
              <Link
                href="/"
                className="flex flex-col items-center justify-center rounded-2xl border-t-2 border-dotted border-yellow-400 p-10 shadow-xl shadow-sky-100 transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="bg-gradient mb-5 h-16 w-16 rounded-full p-2 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <p className="font-bold text-sky-700">Strona Internetowa</p>
              </Link>
              <Link
                href="/"
                className="flex flex-col items-center justify-center rounded-2xl border-t-2 border-dotted border-yellow-400 p-10 shadow-xl shadow-sky-100 transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="bg-gradient mb-5 h-16 w-16 rounded-full p-2 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"
                  />
                </svg>

                <p className="font-bold text-sky-700">Szablony Stron</p>
              </Link>
              <Link
                href="/"
                className="flex flex-col items-center justify-center rounded-2xl border-t-2 border-dotted border-yellow-400 p-10 shadow-xl shadow-sky-100 transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="bg-gradient mb-5 h-16 w-16 rounded-full p-2 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                  />
                </svg>

                <p className="font-bold text-sky-700">Pozycjonowanie SEO</p>
              </Link>
              <Link
                href="/"
                className="flex flex-col items-center justify-center rounded-2xl border-t-2 border-dotted border-yellow-400 p-10 shadow-xl shadow-sky-100 transition-all duration-300 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="bg-gradient mb-5 h-16 w-16 rounded-full p-2 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>

                <p className="font-bold text-sky-700">Projekt Graficzny</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
      <NumersSection />
    </div>
  );
}
