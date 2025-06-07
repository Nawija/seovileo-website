"use client";

import { PortfolioItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import Promotion from "../ui/buttons/Promotion";

interface PortfolioItemComponentProps {
  item: PortfolioItem;
}

const PortfolioItemComponent: React.FC<PortfolioItemComponentProps> = ({
  item,
}) => {
  const { id, url, label, desc, prevPrice, price } = item;
  const discountPercent =
    prevPrice !== ""
      ? ((parseFloat(prevPrice) - parseFloat(price)) / parseFloat(prevPrice)) *
        100
      : 0;

  return (
    <Link
      key={label}
      className="bg-main border-second rounded-lg border-2 transition duration-300 hover:scale-[1.02] hover:border-[#714e33]"
      href={`/szablony/${id}`}
    >
      <div className="border-second relative overflow-hidden border-b bg-gradient-to-tr from-[#161616] to-transparent p-2 lg:p-4">
        {prevPrice !== "" && <Promotion />}

        <Image
          src={url}
          alt={label}
          height={300}
          width={300}
          className="h-36 w-full object-cover lg:h-52"
        />
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
        <div className="flex-b text-p mt-1 w-full text-xs lg:text-sm">
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
