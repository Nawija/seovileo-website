import { BLOG_LINKS } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";

interface BlogType {
  id: string;
  date: string;
  slug: string;
  title: string;
  img: {
    url: string;
  };
}

const fetchDatoCms = async () => {
  const res = await fetch("https://graphql.datocms.com/", {
    next: { revalidate: 600 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        allBlogs(first: 4) {
          id
          date
          slug
          title
          img {
            url
          }
        }
      }`,
    }),
  });
  return await res.json();
};

const fetchDatoCmsPopularne = async () => {
  const res = await fetch("https://graphql.datocms.com/", {
    next: { revalidate: 0 },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
        allPopularnes(first: 4) {
          id
          date
          slug
          title
          img {
            url
          }
        }
      }`,
    }),
  });
  return await res.json();
};

export default async function Blog() {
  const fetchData = await fetchDatoCms();
  const fetchDataPopularne = await fetchDatoCmsPopularne();
  const data: BlogType[] = await fetchData.data.allBlogs;
  const dataPopularne: BlogType[] = await fetchDataPopularne.data.allPopularnes;
  return (
    <div className="anim-opacity">
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
          <span className="absolute left-1/2 top-24 -z-10 w-max -translate-x-1/2 -rotate-90 bg-gradient-to-t from-white/10 to-transparent bg-clip-text py-12 text-4xl font-bold uppercase tracking-[1rem] text-transparent opacity-60 sm:py-20 lg:text-[14rem]">
            blog
          </span>
        </div>
        <div className="mx-auto mt-8 max-w-[1400px] px-4 lg:mt-32">
          <h1 className="border-main mb-8 border-b pb-1 text-lg font-semibold uppercase">
            Popolarne posty
          </h1>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4 ">
            {data.map((d, i) => (
              <Link
                href={`/blog/${d.slug}`}
                key={i}
                className="bg-main border-main overflow-hidden rounded-lg border p-4 "
              >
                <div className="relative h-28 w-full lg:h-40">
                  <Image
                    className="rounded-lg object-cover transition-all duration-300"
                    src={d.img.url}
                    alt={d.title}
                    priority={i < 4}
                    fill
                  />
                </div>
                <div className="flex flex-col items-start justify-center space-y-1 px-2 py-2 lg:space-y-2 lg:px-3 lg:py-3">
                  <div className="text-smoke flex items-start justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="currentColor"
                      className="mr-1 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <small>{d.date}</small>
                  </div>
                  <p className="pb-2 text-sm transition-colors duration-300 sm:text-base">
                    {d.title.length > 50
                      ? `${d.title.slice(0, 60)} ...`
                      : d.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <img
            src="https://img.freepik.com/darmowe-zdjecie/kreatywne-tlo-o-wysokim-kacie-z-szarymi-ksztaltami_23-2148811502.jpg?size=626&ext=jpg&ga=GA1.1.1304961695.1684166548&semt=ais"
            className="my-8 h-44 w-full rounded-lg object-cover shadow-2xl shadow-white/20"
          />
          <h2 className="border-main mb-3 mt-12 border-b pb-2 text-lg font-semibold uppercase">
            Najnowsze posty
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {dataPopularne.map((d, i) => (
              <Link
                href={`/blog/${d.slug}`}
                key={i}
                className="group overflow-hidden lg:mb-5"
              >
                <div className="relative h-28 w-full lg:h-32">
                  <Image
                    className=" object-cover brightness-75 transition duration-300 group-hover:scale-95 group-hover:brightness-105"
                    src={d.img.url}
                    alt={d.title}
                    priority={i < 4}
                    fill
                  />
                </div>
                <div className=" flex flex-col items-start justify-center space-y-1 px-2 py-2 lg:space-y-2 lg:px-3 lg:py-3">
                  <div className="text-smoke flex items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.4}
                      stroke="currentColor"
                      className="mr-1 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <small>{d.date}</small>
                  </div>
                  <p className="pb-2 text-sm sm:text-base">
                    {d.title.length > 50
                      ? `${d.title.slice(0, 60)} ...`
                      : d.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
