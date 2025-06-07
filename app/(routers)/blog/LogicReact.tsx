"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Breadcrumbs from "@/components/BreadCrumb";
import { PortfolioItemSkeleton } from "@/components/ui/Skeletons";
import { BlogItemTypes, BlogType } from "@/types";
import dynamic from "next/dynamic";

const BlogPopularComponent = dynamic(
  () => import("@/components/blog/BlogPopularComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);
const breadcrumbs = [
  {
    title: "Blog",
    href: "/blog",
  },
];

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

      // Jeśli `product.title` jest unikalne, możemy go użyć do filtrowania duplikatów:
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
      <div className="flex-c bg-url relative h-56 w-full bg-fixed lg:h-60">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          alt=""
        />

        <div className="bg-body border-main w-3/4 rounded-lg border p-2 text-xs text-white sm:w-1/2 lg:w-1/3">
          <input
            type="search"
            className="bg-body h-full w-full p-1 focus:outline-none"
            placeholder="Wyszukaj"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="mx-auto mt-6 grid max-w-screen-2xl grid-cols-2 gap-4 px-2 sm:grid-cols-3 lg:mt-24 lg:grid-cols-5">
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
