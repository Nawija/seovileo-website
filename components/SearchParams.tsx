"use client";

import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "../types";

export default function SearchParams({
  item,
  clearFilterProducts,
  closeModal,
}: {
  item: PortfolioItem;
  clearFilterProducts: () => void;
  closeModal: () => void;
}) {
  const { id, url, label, price, prevPrice } = item;
  return (
    <Link
      onClick={() => {
        clearFilterProducts();
        closeModal();
      }}
      href={`/szablony/${id}`}
      className="bg-main/30 hover:bg-main transition-colors rounded-lg border border-main flex w-full items-start p-2 backdrop-blur-lg justify-between"
    >
      <Image
        alt="label"
        src={url}
        className="h-10 sm:h-16 w-max object-contain object-top pr-1"
        height={55}
        width={110}
      />
      <div className="flex flex-col items-end justify-end text-end w-32 sm:w-48">
        <p className="text-main">{label}</p>
        <div className="flex w-full flex-col items-end justify-end text-sm">
          <p>{price}zł</p>
          {prevPrice && (
            <div className="mt-2 flex items-center justify-center text-sm">
              <p className="mr-2 text-xs text-yellow-500">Promocja</p>
              <small className="text-red-700 line-through">{prevPrice}zł</small>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
