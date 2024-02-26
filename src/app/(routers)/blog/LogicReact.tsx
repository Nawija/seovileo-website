"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import dynamic from "next/dynamic";

const BlogPopularComponent = dynamic(
  () => import("@/src/components/blog/BlogPopularComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
);

const LogicReact = ({ mergedData }) => {
  console.log(mergedData)
  const searchParams = useSearchParams();
  const search = searchParams.get("blog");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    if (search && search.length >= 2) {
      const filteredProducts = mergedData.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts([]);
    }
  }, [search]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {filteredProducts.length > 0
          ? filteredProducts.map((item, i) => (
              <BlogPopularComponent item={item} key={i} />
            ))
          : mergedData.map((item, i) => (
              <BlogPopularComponent item={item} key={i} />
            ))}
      </div>
    </>
  );
};

export default LogicReact;
