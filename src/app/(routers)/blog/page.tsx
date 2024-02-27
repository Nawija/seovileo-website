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
        blurUpThumb(quality: 1)
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
        blurUpThumb(quality: 1)
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
