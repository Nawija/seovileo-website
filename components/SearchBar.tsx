"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";

import { PORTFOLIO } from "../constants/portfolio";
import { PortfolioItem } from "../types";
import SpinerLoading from "./SpinerLoading";

const SearchParams = dynamic(() => import("@/components/SearchParams"));

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("szukaj") || "");
  const [isSearching, setIsSearching] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<PortfolioItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (search.length >= 2) {
      setIsSearching(true);
      const timer = setTimeout(() => {
        const filtered = PORTFOLIO.filter((product: PortfolioItem) =>
          product.label.toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredProducts(filtered);
        setIsSearching(false);
      }, 200);

      return () => clearTimeout(timer);
    } else {
      setFilteredProducts([]);
      setIsSearching(false);
    }
  }, [search]);

  function modelOp() {
    setIsModalOpen(true);
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
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

  const handleSearchIconClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full" ref={inputRef}>
      <form className="relative w-40">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          onFocus={modelOp}
          placeholder="Szukaj"
          className="border-mian w-full text-[16px] rounded-md border bg-white px-2 py-1 outline-0 placeholder:text-zinc-500 lg:flex"
        />
        {search.length > 0 ? (
          <IoClose
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-lg text-zinc-500"
            onClick={() => {
              setSearch("");
              setFilteredProducts([]);
            }}
          />
        ) : (
          <IoSearch
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-lg text-zinc-500"
            onClick={handleSearchIconClick}
          />
        )}
      </form>
      <Suspense fallback={null}>
        {isModalOpen && search.length >= 2 && (
          <div className="bg-main/10 border-main absolute top-full left-1/2 ml-4 sm:ml-0 w-max z-10 mt-4 -translate-x-1/2 rounded-lg border p-2 backdrop-blur-lg">
            <div className="anim-opacity w-full lg:p-3">
              {isSearching ? (
                <SpinerLoading />
              ) : filteredProducts.length > 0 ? (
                <div className="flex flex-col items-center justify-center w-full space-y-4">
                  {filteredProducts.slice(0, 4).map((item, index) => (
                    <SearchParams
                      item={item}
                      key={index}
                      closeModal={clearFilterProducts}
                      clearFilterProducts={clearFilterProducts}
                    />
                  ))}
                </div>
              ) : (
                <p className="py-4 text-center text-sm text-zinc-500">
                  Brak wyników dla{" "}
                  <span className="text-zinc-400">”{search}”</span>
                </p>
              )}
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
}
