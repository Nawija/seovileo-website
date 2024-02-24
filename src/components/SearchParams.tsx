"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PORTFOLIO } from "../constants";

export default function SearchParams() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("szukaj") || "");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length >= 2) {
        const filteredProducts = PORTFOLIO.filter((product) =>
          product.label.toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredProducts(filteredProducts);
      } else {
        setFilteredProducts([]);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [search]);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <div className="relative mr-5">
      <form>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Szukaj"
          className="rounded-md border border-gray-300 px-2 py-1"
        />
      </form>
      {search.length > 2 && (
        <div className="border-second absolute left-0 top-10 z-10 w-96 rounded-lg border bg-gray-100/10 p-6 backdrop-blur-xl">
          <p className="text-main mb-4">Szukane:</p>
          <ul className="flex flex-col items-start justify-start space-y-2">
            {filteredProducts.map((product, index) => (
              <li
                key={index}
                className=" bg-body border-main w-full rounded-lg border p-2"
              >
                <Link
                  href={product.href}
                  className="bg-body flex items-start justify-start space-x-2"
                >
                  <img
                    src={product.url}
                    className="h-20 w-32 rounded-lg object-cover object-top"
                  />
                  <div className="mt-2">
                    <p>{product.label}</p>
                    <p>{product.price}zł</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
