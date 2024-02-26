"use client";

import Breadcrumbs from "@/src/components/BreadCrumb";
import fetchDatoCms from "@/src/lib/fetchDatoCms";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPopularComponent = dynamic(
  () => import("@/src/components/blog/BlogPopularComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  }
);

const query = `{
    allPopularnes(first: 4) {
      id
      date
      slug
      title
      img {
        url
      }
    }
    allBlogs {
      id
      date
      slug
      title
      img {
        url
      }
    }
}`;

const breadcrumbs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Blog = () => {
  const [data, setData] = useState({
    allPopularnes: [],
    allBlogs: [],
  });
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("blog") || "");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDatoCms(query);
      setData(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length >= 2) {
        const filteredProducts = data.allBlogs.filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
      } else {
        setFilteredProducts([]);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search, data.allBlogs]);

  return (
    <>
      <div className="flex-c relative h-56 w-full lg:h-60">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          alt=""
        />
        <div className="bg-body border-main w-3/4 rounded-lg border p-2 text-xs text-white sm:w-1/2 lg:w-1/3">
          <input
            type="search"
            placeholder="Wyszukaj"
            className="bg-body h-full w-full focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="anim-opacity mx-auto max-w-screen-2xl">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="mx-auto mt-8 px-4 lg:mt-32">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item, i) => (
                <BlogPopularComponent item={item} key={i} />
              ))
            ) : (
              <div>No products found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
