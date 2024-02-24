"use client";

import dynamic from "next/dynamic";

const SearchParams = dynamic(() => import("@/src/components/SearchParams"));

export default function SearchBar() {
  return (
    <div className="relative mr-5">
      <form>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Szukaj"
          className="w-44 rounded-md border border-gray-300 px-2 py-1"
        />
      </form>
      <SearchParams />
    </div>
  );
}
