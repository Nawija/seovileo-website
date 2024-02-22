import { PORTFOLIO } from "@/src/constants";
import { SecondBtn } from "@/src/ui/buttons/SecondBtn";
import { SuccesBtn } from "@/src/ui/buttons/SuccessBtn";
import Link from "next/link";

export default function SzablonyID({ params }: { params: { id: string } }) {
  const id = params.id;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  return (
    <div className="anim-opacity">
      <div className="flex-s space-x-5 px-2 py-2 text-sm lg:px-6">
        <Link
          href="/szablony"
          className="transition-colors duration-300 hover:text-white"
        >
          Powrót
        </Link>
        <li>
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-white"
          >
            Start
          </Link>
        </li>
        <li>
          <Link
            href="/szablony"
            className="transition-colors duration-300 hover:text-white"
          >
            Szablony
          </Link>
        </li>
      </div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 ">
          <div className="grid gap-6 lg:flex lg:items-start lg:justify-start">
            <div className="grid gap-6 lg:w-3/4 lg:grid-cols-5">
              <div className="relative w-full overflow-hidden lg:col-span-5 ">
                {portfolioItem.prevPrice !== "" && (
                  <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1 text-sm uppercase tracking-wider text-white">
                    PROMOCJA
                  </span>
                )}

                <button className="hover: duration-100focus-visible:ring absolute right-4 top-4 inline-block rounded-lg border bg-white p-1.5 text-center text-sm font-semibold  outline-none ring-red-500 transition hover:text-red-300 active:text-red-400 md:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                <div className="w-full gap-6 lg:flex">
                  <img
                    src={portfolioItem.url}
                    alt="Photo by Himanshu Dewangan"
                    className="h-96 w-full rounded-lg object-cover object-top lg:h-[700px]"
                  />

                  <div className="order-last mt-6 flex gap-1  lg:order-first lg:mt-0 lg:flex-col lg:gap-6">
                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={portfolioItem.smallUrl1}
                        alt="Photo by Himanshu Dewangan"
                        className="h-40 w-full object-cover object-top"
                      />
                    </div>

                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={portfolioItem.smallUrl2}
                        loading="lazy"
                        alt="Photo by Himanshu Dewangan"
                        className="h-52 w-full object-cover object-top"
                      />
                    </div>

                    <div className="overflow-hidden rounded-lg">
                      <img
                        src={portfolioItem.smallUrl3}
                        alt="Photo by Himanshu Dewangan"
                        className="h-64 w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 scroll-m-28 pl-2" id="1">
                  <h2 className="text-main mb-3 text-2xl">Opis produktu</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima neque nostrum qui dolores officia vel reprehenderit,
                    molestiae perferendis itaque quas maxime? Consequatur
                    aliquam facilis pariatur? Architecto deserunt neque
                    voluptatem sit ab repellat facilis beatae alias magni
                    molestias nulla, reprehenderit totam animi harum dolores!
                    Fuga fugit porro excepturi optio rerum rem! Recusandae,
                    alias hic, tempore aspernatur voluptatum quaerat labore
                    atque a consequuntur tenetur iusto officiis porro? Minus
                    reiciendis ducimus laboriosam laborum animi id, aperiam
                    pariatur quam facere exercitationem rem, ut necessitatibus
                    ad consequuntur accusamus quas dolorem sunt eligendi,
                    repellat praesentium ipsum molestias quo. Mollitia hic
                    reiciendis accusamus incidunt laboriosam enim commodi
                    architecto possimus consectetur harum, dolorem eum veniam,
                    eligendi ratione voluptatem dolores ipsum quam molestiae id,
                    voluptatum sunt exercitationem atque odit! Asperiores, culpa
                    commodi.
                  </p>
                </div>
                <div className="mt-12 pl-2">
                  <h2 className="text-main mb-3 text-2xl">Opis produktu</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima neque nostrum qui dolores officia vel reprehenderit,
                    molestiae perferendis itaque quas maxime? Consequatur
                    aliquam facilis pariatur? Architecto deserunt neque
                    voluptatem sit ab repellat facilis beatae alias magni
                    molestias nulla, reprehenderit totam animi harum dolores!
                    Fuga fugit porro excepturi optio rerum rem! Recusandae,
                    alias hic, tempore aspernatur voluptatum quaerat labore
                    atque a consequuntur tenetur iusto officiis porro? Minus
                    reiciendis ducimus laboriosam laborum animi id, aperiam
                    pariatur quam facere exercitationem rem, ut necessitatibus
                    ad consequuntur accusamus quas dolorem sunt eligendi,
                    repellat praesentium ipsum molestias quo. Mollitia hic
                    reiciendis accusamus incidunt laboriosam enim commodi
                    architecto possimus consectetur harum, dolorem eum veniam,
                    eligendi ratione voluptatem dolores ipsum quam molestiae id,
                    voluptatum sunt exercitationem atque odit! Asperiores, culpa
                    commodi.
                  </p>
                </div>
                <div className="mt-12 pl-2">
                  <h2 className="text-main mb-3 text-2xl">Opis produktu</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima neque nostrum qui dolores officia vel reprehenderit,
                    molestiae perferendis itaque quas maxime? Consequatur
                    aliquam facilis pariatur? Architecto deserunt neque
                    voluptatem sit ab repellat facilis beatae alias magni
                    molestias nulla, reprehenderit totam animi harum dolores!
                    Fuga fugit porro excepturi optio rerum rem! Recusandae,
                    alias hic, tempore aspernatur voluptatum quaerat labore
                    atque a consequuntur tenetur iusto officiis porro? Minus
                    reiciendis ducimus laboriosam laborum animi id, aperiam
                    pariatur quam facere exercitationem rem, ut necessitatibus
                    ad consequuntur accusamus quas dolorem sunt eligendi,
                    repellat praesentium ipsum molestias quo. Mollitia hic
                    reiciendis accusamus incidunt laboriosam enim commodi
                    architecto possimus consectetur harum, dolorem eum veniam,
                    eligendi ratione voluptatem dolores ipsum quam molestiae id,
                    voluptatum sunt exercitationem atque odit! Asperiores, culpa
                    commodi.
                  </p>
                </div>
                <div className="mt-12 pl-2">
                  <h2 className="text-main mb-3 text-2xl">Opis produktu</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima neque nostrum qui dolores officia vel reprehenderit,
                    molestiae perferendis itaque quas maxime? Consequatur
                    aliquam facilis pariatur? Architecto deserunt neque
                    voluptatem sit ab repellat facilis beatae alias magni
                    molestias nulla, reprehenderit totam animi harum dolores!
                    Fuga fugit porro excepturi optio rerum rem! Recusandae,
                    alias hic, tempore aspernatur voluptatum quaerat labore
                    atque a consequuntur tenetur iusto officiis porro? Minus
                    reiciendis ducimus laboriosam laborum animi id, aperiam
                    pariatur quam facere exercitationem rem, ut necessitatibus
                    ad consequuntur accusamus quas dolorem sunt eligendi,
                    repellat praesentium ipsum molestias quo. Mollitia hic
                    reiciendis accusamus incidunt laboriosam enim commodi
                    architecto possimus consectetur harum, dolorem eum veniam,
                    eligendi ratione voluptatem dolores ipsum quam molestiae id,
                    voluptatum sunt exercitationem atque odit! Asperiores, culpa
                    commodi.
                  </p>
                </div>
              </div>
            </div>

            <div className="top-24 order-first flex flex-col items-start justify-start rounded-lg bg-gray-100 p-10 text-black lg:sticky lg:order-last lg:w-80">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block ">Strona Internetowa</span>
                <h2 className="text-2xl font-bold lg:text-3xl">
                  {portfolioItem.label}
                </h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <div className="flex h-7 items-center gap-1 rounded-full bg-yellow-500 px-2 text-black/80">
                  <span className="text-sm font-medium">4.2</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                <span className="text-sm  transition duration-100">
                  56 ocen
                </span>
              </div>

              <div className="mb-8 md:mb-10">
                <span className="mb-3 inline-block text-sm font-semibold  md:text-base">
                  Zakup obejmuje:
                </span>

                <ol className="flex flex-col flex-wrap gap-1 pl-6 text-sm">
                  <li className="list-decimal font-semibold">
                    <Link href="#1" className="hover:underline">
                      Darmowa configuracja
                    </Link>
                  </li>
                  <li className="list-decimal font-semibold">
                    Darmowa edycja tekstu
                  </li>
                  <li className="list-decimal font-semibold">
                    Gwarancja roczna
                  </li>
                  <li className="list-decimal font-semibold">
                    Wsparcie techniczne
                  </li>
                  <li className="list-decimal font-semibold">
                    Darmowy hosting
                  </li>
                </ol>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className=" text-xl font-bold text-emerald-700 md:text-2xl">
                    {portfolioItem.price}zł
                  </span>
                  {portfolioItem.prevPrice !== "" && (
                    <span className="mb-0.5 text-red-500 line-through">
                      {portfolioItem.prevPrice}zł
                    </span>
                  )}
                </div>

                <span className="text-sm ">brutto</span>
              </div>

              <div className="mb-6 flex items-center gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>

                <span className="text-sm">2-4 godzin czas oczekiwania</span>
              </div>

              <div className="flex gap-2.5">
                <SuccesBtn>Kup Teraz</SuccesBtn>
                <Link href={`/szablony/live/${id}`}>
                  <SecondBtn>Zobacz Live</SecondBtn>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
