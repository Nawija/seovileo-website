import Breadcrumbs from "@/components/BreadCrumb";
import { SuccesBtn } from "@/components/ui/buttons/SuccessBtn";
import { PORTFOLIO } from "@/constants/portfolio";
import Image from "next/image";
const breadcrumbs = [
  {
    title: "szablony",
    href: "/szablony",
  },
];
export default function ZamowienieSzablonyId({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }
  return (
    <section className="anim-opacity mx-auto max-w-screen-2xl">
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex items-center justify-center px-4 py-16 2xl:container md:px-6 2xl:mx-auto 2xl:px-0">
        <div className="flex w-full flex-col items-start justify-start space-y-9">
          <div className="flex w-full flex-col justify-center space-y-6 xl:flex-row xl:justify-between xl:space-x-6 xl:space-y-0">
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-100 px-10 py-7 sm:flex-row sm:py-0 xl:w-3/5 xl:flex-col xl:py-10 ">
              <div className="flex w-full flex-col items-start justify-start space-y-4 font-bold xl:px-20">
                <p className="text-xl leading-normal text-gray-800 md:text-2xl ">
                  {portfolioItem.label}
                </p>
                <p className="text-base font-bold leading-none text-gray-600 lg:text-lg ">
                  {portfolioItem.price}zł
                </p>
              </div>
              <div className="mt-6 w-52 sm:mt-0 sm:w-96 xl:my-10 xl:w-full xl:px-20">
                <Image
                  src={portfolioItem.url}
                  className="h-full w-full rounded-lg"
                  alt="headphones"
                />
              </div>
            </div>

            <div className="flex flex-col rounded-lg bg-gray-100 p-8 lg:w-full xl:w-3/5">
              <button className="flex w-full flex-row items-center justify-center space-x-2 rounded-lg border border-transparent bg-gray-900 py-4 text-white transition-colors hover:border-gray-300 hover:bg-white hover:text-gray-900 dark:bg-white dark:text-gray-900 dark:hover:border-gray-900 dark:hover:bg-gray-900 dark:hover:text-white">
                <div>
                  <svg
                    className="fill-current"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
                      fill="currentColor"
                    />
                    <path
                      d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-base leading-4">Pay</p>
                </div>
              </button>

              <div className="mt-6 flex flex-row items-center justify-center">
                <hr className="w-full border" />
                <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 ">
                  lub zapłac kartą
                </p>
                <hr className="w-full border" />
              </div>

              <div className="mt-8">
                <input
                  className="w-full rounded-lg border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 ">
                Numer Karty
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="w-full rounded-tl rounded-tr border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="0000 1234 6549 15151"
                  />
                </div>
                <div className="flex flex-row">
                  <input
                    className="w-full rounded-bl border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="MM/YY"
                  />
                  <input
                    className="w-full rounded-br border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="CVC"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 ">
                Nazwa karty
              </label>
              <div className="mt-2 flex-col">
                <div>
                  <input
                    className="w-full rounded border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                    type="email"
                    name=""
                    id=""
                    placeholder="Nazwa karty"
                  />
                </div>
              </div>

              <label className="mt-8 text-base leading-4 text-gray-800 ">
                Adres
              </label>
              <div className="mt-2 flex-col">
                <input
                  className="w-full rounded-lg rounded-bl rounded-br border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                  type="text"
                  name=""
                  id=""
                  placeholder="Kod pocztowy"
                />
                <input
                  className="w-full rounded-lg rounded-bl rounded-br border border-gray-300 p-4 text-base leading-4 text-gray-600 placeholder-gray-600"
                  type="text"
                  name=""
                  id=""
                  placeholder="Ulica"
                />
              </div>

              <SuccesBtn className="mt-8 w-full py-4 text-base leading-4">
                Zapłać {portfolioItem.price} PLN
              </SuccesBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
