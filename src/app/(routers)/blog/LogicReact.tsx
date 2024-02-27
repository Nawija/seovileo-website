"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Breadcrumbs from "@/src/components/BreadCrumb";
import { BlogType, PortfolioItem } from "@/src/types";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
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

const LogicReact = ({ mergedData }: { mergedData: BlogType }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("blog") || "");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (search) {
      const filteredProducts = mergedData.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <div className="flex-c relative h-56 w-full lg:h-60">
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
      <div className="mx-auto mt-8 grid max-w-screen-2xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 lg:mt-32 lg:grid-cols-5">
        {filteredProducts.length > 0
          ? filteredProducts.map((item, i) => (
              <BlogPopularComponent item={item} key={i} />
            ))
          : mergedData.map((item, i) => (
              <BlogPopularComponent item={item} key={i} />
            ))}
      </div>
    </div>
  );
};

export default LogicReact;
