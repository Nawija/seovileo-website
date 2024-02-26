import Breadcrumbs from "@/src/components/BreadCrumb";
import fetchDatoCms from "@/src/lib/fetchDatoCms";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import dynamic from "next/dynamic";
import LogicReact from "./LogicReact";

const BlogPopularComponent = dynamic(
  () => import("@/src/components/blog/BlogPopularComponent"),
  {
    loading: () => <PortfolioItemSkeleton />,
  },
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

const Blog = async () => {
  const data = await fetchDatoCms(query);
  const mergedData = [{...data.allBlogs, ...data.allPopularnes}];
  return (
    <>
      <div className="flex-c relative h-56 w-full lg:h-60">
        <img
          src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          alt=""
        />
        <div className="bg-body border-main w-3/4 rounded-lg border p-2 text-xs text-white sm:w-1/2 lg:w-1/3"></div>
      </div>
      <div className="anim-opacity mx-auto max-w-screen-2xl">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="mx-auto mt-8 px-4 lg:mt-32">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <LogicReact mergedData={mergedData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
