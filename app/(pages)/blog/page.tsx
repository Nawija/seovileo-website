import { getAllBlogPosts } from "@/lib/mdx";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LogicReact = dynamic(() => import("./LogicReact"));

const Blog = async () => {
  const mergedData = getAllBlogPosts();

  return (
    <div className="anim-opacity">
      <Suspense fallback={<div>Ładowanie wyników...</div>}>
        <LogicReact mergedData={mergedData} />
      </Suspense>
    </div>
  );
};

export default Blog;
