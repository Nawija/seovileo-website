"use client";

import { PortfolioItem } from "@/src/types";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItemComponentProps {
  item: PortfolioItem;
}

const PortfolioItemComponent: React.FC<PortfolioItemComponentProps> = ({
  item,
}) => {
  const { id, url, label, desc, prevPrice, price } = item;
  let discountPercent =
    prevPrice !== ""
      ? ((parseFloat(prevPrice) - parseFloat(price)) / parseFloat(prevPrice)) *
        100
      : 0;

  return (
    <Link
      key={label}
      className="bg-main border-second rounded-lg border-2 transition-colors duration-300 hover:border-[#8f6341]"
      href={`/szablony/${id}`}
    >
      <div className="border-second group relative overflow-hidden border-b bg-gradient-to-tr from-[#161616] to-transparent p-2 lg:p-4">
        {prevPrice !== "" && (
          <p className="bg-main absolute left-0 top-0 z-10 rounded-lg px-2.5 py-2 text-[11px] font-semibold tracking-wider text-yellow-500">
            PROMOCJA
          </p>
        )}

        <Image
          src={url}
          alt={label}
          className="h-40 w-full object-cover lg:h-52"
        />
        <div className="text-main absolute left-0 top-0 hidden h-full w-full translate-y-full items-center justify-center bg-gradient-to-tr from-yellow-600/20 to-gray-600/40 transition-all delay-75 duration-500 group-hover:translate-y-0 lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="white"
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
      <div className="flex flex-col items-start justify-start p-3 text-sm">
        <div className="flex-b text-main w-full">
          <p>{label}</p>
          <p
            className={` ${prevPrice > "0" ? "text-green-400" : "text-main"} `}
          >
            {price}
            <span>zł</span>
          </p>
        </div>
        <div className="flex-b text-p mt-1 w-full text-xs lg:text-sm ">
          <p>{desc.length > 23 ? `${desc.slice(0, 23)}...` : desc}</p>
          {prevPrice !== "" && (
            <div className="flex flex-col items-end justify-end pl-0.5 sm:flex-row sm:items-center">
              {prevPrice !== "" && (
                <p className="bg-main flex-c border-main order-1 rounded-full border p-1.5 text-xs font-semibold tracking-wider text-white sm:order-none sm:mr-2">
                  -{discountPercent.toFixed(0)}%
                </p>
              )}
              <p className="line-through">
                {prevPrice}
                <span>zł</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PortfolioItemComponent;
