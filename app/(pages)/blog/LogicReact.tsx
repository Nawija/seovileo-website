"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import Breadcrumbs from "@/components/BreadCrumb";
import { PortfolioItemSkeleton } from "@/components/ui/Skeletons";
import { BlogItemTypes, BlogType } from "@/types";
import dynamic from "next/dynamic";
import Image from "next/image";

const BlogPopularComponent = dynamic(
  () => import("@/components/blog/BlogPopularComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

interface LogicReactProps {
  mergedData: BlogType[];
}

const LogicReact = ({ mergedData }: LogicReactProps) => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("blog") || "");
  const [filteredProducts, setFilteredProducts] = useState(mergedData);

  useEffect(() => {
    if (search) {
      const byTag = mergedData.filter((product) =>
        product.tags[0].toLowerCase().includes(search.toLowerCase()),
      );

      const byTitle = mergedData.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );

      const combined = [...byTag, ...byTitle];
      const unique = Array.from(
        new Map(combined.map((item) => [item.title, item])).values(),
      );

      setFilteredProducts(unique);
    } else {
      setFilteredProducts(mergedData);
    }
  }, [search, mergedData]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <div className="relative flex h-56 w-full items-center justify-center lg:h-60">
        <Image
          src="/strona-internetowa.avif"
          className="-z-10 object-cover opacity-80"
          alt="strona internetowa"
          priority
          fill
        />

        <div className="bg-body border-main w-3/4 rounded-lg border p-2 text-xs text-white sm:w-1/2 lg:w-1/3">
          <Suspense fallback={<p>Ładowanie...</p>}>
            <input
              type="search"
              className="bg-body h-full w-full p-1 focus:outline-none"
              placeholder="Wyszukaj"
              value={search}
              onChange={handleSearchChange}
            />
          </Suspense>
        </div>
      </div>
      <Breadcrumbs />
      <div className="mx-auto mt-6 grid max-w-screen-2xl grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:mt-24 lg:grid-cols-5">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item: BlogItemTypes, i: number) => (
            <BlogPopularComponent item={item} key={i} />
          ))
        ) : (
          <div>
            <p>Brak szukanych</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogicReact;
