"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

import { PORTFOLIO } from "../constants/portfolio";
import { PortfolioItem } from "../types";

const SearchParams = dynamic(() => import("@/components/SearchParams"));

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("szukaj") || "");
  const [filteredProducts, setFilteredProducts] = useState<PortfolioItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("bg-hidden");
    } else {
      document.body.classList.remove("bg-hidden");
    }
  }, [isModalOpen]);

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
    }, 200);

    return () => clearTimeout(timer);
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mr-5" ref={inputRef}>
      <form className="relative">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          onFocus={modelOp}
          placeholder="Szukaj"
          className="w-40 rounded-md border border-gray-300 px-2 py-1 lg:flex"
        />
        <IoSearch
          className="absolute right-2 top-1.5 text-lg text-zinc-400"
          onClick={handleSearchIconClick}
        />
      </form>
      {isModalOpen && (
        <div className="fixed left-0 top-16 z-10 max-h-80 overflow-y-scroll rounded-lg lg:left-1/2 lg:h-full lg:max-h-full lg:w-1/3 lg:-translate-x-1/2 lg:overflow-auto">
          <div className="anim-opacity border-second w-full transform space-y-3 rounded-lg border bg-gradient-to-br from-pink-700 from-20% via-violet-500 to-sky-400 p-3 sm:w-1/2 lg:w-full lg:p-6">
            <button
              className="absolute right-2 top-2 text-white"
              onClick={closeModal}
            >
              <IoIosCloseCircle className="text-2xl" />
            </button>
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Wpisz 2 litery aby rozpoczać"
              className="hidden w-full rounded-md border border-gray-300 px-2 py-1 lg:flex"
            />
            <ul className="flex flex-col items-center justify-center space-y-2">
              {filteredProducts.slice(0, 4).map((item, index) => (
                <SearchParams
                  item={item}
                  key={index}
                  closeModal={closeModal}
                  clearFilterProducts={clearFilterProducts}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
