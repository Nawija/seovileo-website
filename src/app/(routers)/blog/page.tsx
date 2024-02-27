import fetchDatoCms from "@/src/lib/fetchDatoCms";

import dynamic from "next/dynamic";
const LogicReact = dynamic(() => import("./LogicReact"));

const query = `{
    allPopularnes(first: 4) {
      id
      tags
      date
      slug
      title
      img {
        url
      }
    }
    allBlogs {
      id
      tags
      date
      slug
      title
      img {
        url
      }
    }
}`;

const Blog = async () => {
  const data = await fetchDatoCms(query);
  const dataArray = [{ ...data.allBlogs, ...data.allPopularnes }];
  const mergedData = Object.values(dataArray[0]);

  return (
    <div className="anim-opacity">
      <LogicReact mergedData={mergedData} />
    </div>
  );
};

export default Blog;
