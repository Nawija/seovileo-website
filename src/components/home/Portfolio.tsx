import { PORTFOLIO } from "@/src/constants/index";
import { PortfolioItem } from "@/src/types";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="mx-auto">
      <div className="flex-b">
        <h2 className="text-main text-lg lg:text-2xl">
          Most Popular Framer Templates
        </h2>
        <Link
          href="/"
          className="flex-c transition-colors duration-300 hover:text-white"
        >
          <Link href="/szablony" className="text-xs lg:text-sm">Więcej</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-1.5 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {PORTFOLIO.map((p: PortfolioItem, i: number) => {
          let discountPercent =
            p.prevPrice !== ""
              ? ((parseFloat(p.prevPrice) - parseFloat(p.price)) /
                  parseFloat(p.prevPrice)) *
                100
              : 0;
          return (
            <Link
              key={i}
              className="bg-main border-second rounded-lg border"
              href={p.href}
            >
              <div className="border-second group relative overflow-hidden border-b bg-gradient-to-tr from-[#161616] to-transparent p-2 lg:p-4">
                {p.prevPrice !== "" && (
                  <p className="bg-main absolute left-0 top-0 rounded-lg p-2 text-xs font-semibold tracking-wider text-yellow-500">
                    PROMOCJA
                  </p>
                )}

                <img
                  src={p.url}
                  alt="..."
                  className="h-44 w-full object-cover lg:h-52"
                />
                <div className="text-main absolute left-0 top-0 hidden h-full w-full translate-y-full items-center justify-center bg-[rgba(28,28,28,0.8)] opacity-80 transition-transform duration-300 group-hover:translate-y-0 lg:flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.2}
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start p-4">
                <div className="flex-b text-main w-full">
                  <p>{p.label}</p>
                  <p>
                    {p.price}
                    <span>zł</span>
                  </p>
                </div>
                <div className="flex-b text-p mt-1 w-full text-sm ">
                  <p>
                    {p.desc.length > 17 ? `${p.desc.slice(0, 17)}...` : p.desc}
                  </p>
                  {p.prevPrice !== "" && (
                    <div className="flex flex-col items-end justify-end sm:items-center sm:flex-row">
                      {p.prevPrice !== "" && (
                        <p className="bg-main flex-c border-main order-1 sm:order-none sm:mr-2 rounded-full border p-1.5 text-xs font-semibold tracking-wider text-white">
                          -{discountPercent.toFixed(0)}%
                        </p>
                      )}
                      <p className="text-red-600 line-through">
                        {p.prevPrice}
                        <span>zł</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
