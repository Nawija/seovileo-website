"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Breadcrumbs from "@/src/components/BreadCrumb";
import { PortfolioItemSkeleton } from "@/src/components/ui/Skeletons";
import { BlogItemTypes, BlogType } from "@/src/types";
import dynamic from "next/dynamic";

const BlogPopularComponent = dynamic(
  () => import("@/src/components/blog/BlogPopularComponent"),
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

const LogicReact = ({ mergedData }: any) => {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("blog") || "");
  const [filteredProducts, setFilteredProducts] = useState(mergedData);

  useEffect(() => {
    if (search) {
      const newfilteredProducts = mergedData.filter((product: BlogType) =>
        product.tags[0].toLowerCase().includes(search.toLowerCase()),
      );

      const filteredProducts = mergedData.filter((product: BlogType) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );

      const dataMerged = [{ ...newfilteredProducts, ...filteredProducts }];
      const mergedDataFilterArray = Object.values(dataMerged[0]);

      setFilteredProducts(mergedDataFilterArray);
    }
  }, [search]);

  const handleSearchChange = (event: any) => {
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
