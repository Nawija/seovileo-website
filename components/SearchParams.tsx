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
  const { id, url, label } = item;
  return (
    <Link
      onClick={() => {
        clearFilterProducts();
        closeModal();
      }}
      href={`/realizacje/${id}`}
      className="bg-main/30 hover:bg-main border-main flex w-full items-start justify-between rounded-lg border p-2 backdrop-blur-lg transition-colors"
    >
      <Image
        alt="label"
        src={url}
        className="h-10 w-max object-contain object-top pr-1 sm:h-16"
        height={55}
        width={110}
      />
      <div className="flex w-32 flex-col items-end justify-end text-end sm:w-48">
        <p className="text-main">{label}</p>
        <div className="flex w-full flex-col items-end justify-end text-sm"></div>
      </div>
    </Link>
  );
}
