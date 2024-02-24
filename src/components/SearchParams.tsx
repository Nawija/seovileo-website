"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PORTFOLIO } from "../constants";
import { PortfolioItem } from "../types";

export default function SearchParams() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("szukaj") || "");
  const [filteredProducts, setFilteredProducts] = useState<PortfolioItem[]>([]);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length >= 2) {
        const filteredProducts = PORTFOLIO.filter((product: PortfolioItem) =>
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

  const handleClickOutside = (event: any) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setFilteredProducts([]);
    }
  };
  const clearFilterProducts = () => {
    setFilteredProducts([]);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="relative mr-5" ref={inputRef}>
      <form>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Szukaj"
          className="w-44 rounded-md border border-gray-300 px-2 py-1"
        />
      </form>
      {filteredProducts.length > 0 && (
        <div className="border-second anim-opacity no-scrollbar absolute -left-1/2 top-10 z-10 h-[40vh] w-80 overflow-y-auto rounded-lg border bg-gray-100/10 p-6 backdrop-blur-xl lg:left-0">
          <p className="text-main mb-4">Szukane:</p>
          <ul className="flex flex-col items-center justify-center space-y-2">
            {filteredProducts.slice(0, 4).map((product, index) => (
              <li
                key={index}
                className="bg-body border-main w-full rounded-lg border p-2 transition-colors duration-300 hover:border-zinc-300"
              >
                <Link
                  onClick={clearFilterProducts}
                  href={`/szablony/${product.id}`}
                  className="bg-body flex items-start justify-between space-x-2 p-2"
                >
                  <img
                    src={product.url}
                    className="h-16 w-28 rounded-lg object-cover object-top"
                  />
                  <div>
                    <p className="text-main">{product.label}</p>
                    <p className="text-sm">{product.price}zł</p>
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
