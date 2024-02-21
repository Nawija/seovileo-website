import { BLOG_LINKS } from "@/src/constants";
import fetchDatoCms from "@/src/lib/fetchDatoCms";
import { PortfolioItemSkeleton } from "@/src/ui/Skeletons";
import TextBacgroud from "@/src/ui/background/TextBacgroud";
import dynamic from "next/dynamic";
import Link from "next/link";

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
    allBlogs(first: 4) {
      id
      date
      slug
      title
      img {
        url
      }
    }
}`;

export default async function Blog() {
  const data = await fetchDatoCms(query);
  return (
    <div className="anim-opacity">
      <div className="absolute left-12 top-1/2 -rotate-90">
        <TextBacgroud text="BLOG" />
      </div>
      <div className="flex items-start justify-start">
        <div className="sticky top-24 mr-12 mt-32 hidden w-64 flex-col items-start justify-start lg:flex">
          {BLOG_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="border-main border-l p-1 py-2 pl-5 transition-colors duration-300 hover:border-white hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] px-4 lg:mt-32">
          <h1 className="border-main mb-8 border-b pb-1 text-lg font-semibold uppercase">
            Popolarne posty
          </h1>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 ">
            {data.allPopularnes.map((item: any, i: any) => (
              <BlogPopularComponent item={item} key={i} />
            ))}
          </div>
          <img
            src="https://img.freepik.com/darmowe-zdjecie/kreatywne-tlo-o-wysokim-kacie-z-szarymi-ksztaltami_23-2148811502.jpg?size=626&ext=jpg&ga=GA1.1.1304961695.1684166548&semt=ais"
            className="my-8 h-44 w-full rounded-lg object-cover shadow-xl shadow-white/10"
          />
          <h2 className="border-main mb-3 mt-12 border-b pb-2 text-lg font-semibold uppercase">
            Najnowsze posty
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {data.allBlogs.map((item: any, i: any) => (
              <BlogPopularComponent item={item} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
