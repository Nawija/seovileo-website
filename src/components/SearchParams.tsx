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
  const { id, url, label, price } = item;
  return (
    <li className="bg-body border-main w-full rounded-lg border p-2 transition-colors duration-300 hover:border-zinc-300">
      <Link
        onClick={(e) => {
          clearFilterProducts();
          closeModal();
        }}
        href={`/szablony/${id}`}
        className="bg-body flex items-start justify-between space-x-2 p-2"
      >
        <Image
          alt="label"
          src={url}
          className="h-16 w-28 rounded-lg object-cover object-top"
        />
        <div>
          <p className="text-main">{label}</p>
          <p className="text-sm">{price}zł</p>
        </div>
      </Link>
    </li>
  );
}
