// page.tsx (główna strona bloga)
import dynamic from "next/dynamic";
import { getAllBlogPosts } from "@/lib/mdx";

const LogicReact = dynamic(() => import("./LogicReact"));

const Blog = async () => {
  const mergedData = getAllBlogPosts();
  

  return (
    <div className="anim-opacity">
      <LogicReact mergedData={mergedData} />
    </div>
  );
};

export default Blog;