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
    <div className="anim-opacity mx-auto max-w-[1700px] bg-[#121212] px-12 pt-12">
      <h1 className="mb-3 text-lg font-semibold uppercase">Popolarne posty</h1>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((d, i) => (
          <Link
            href={`/blog/${d.slug}`}
            key={i}
            className="group overflow-hidden lg:mb-5"
          >
            <div className="relative h-28 w-full lg:h-40">
              <Image
                className="object-cover"
                src={d.img.url}
                alt={d.title}
                priority={i < 4}
                fill
              />
            </div>
            <div className="bg-second flex flex-col items-start justify-center space-y-1 px-2 py-2 lg:space-y-2 lg:px-3 lg:py-3">
              <div className="text-p flex items-center justify-start">
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
              <p className="pb-2 text-sm group-hover:underline sm:text-base">
                {d.title.length > 50 ? `${d.title.slice(0, 60)} ...` : d.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <img
        src="https://img.freepik.com/darmowe-zdjecie/technologia-panoramiczny-baner_23-2151213588.jpg?w=1800&t=st=1706094937~exp=1706095537~hmac=191115e09f52f79a56bd34146e25b2144d34dd5ba0dc5f2a92dd49b595f51821"
        className="h-44 w-full object-cover"
      />
      <h2 className="mb-3 mt-12 text-lg font-semibold uppercase">
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
                className="object-cover"
                src={d.img.url}
                alt={d.title}
                priority={i < 4}
                fill
              />
            </div>
            <div className="bg-second flex flex-col items-start justify-center space-y-1 px-2 py-2 lg:space-y-4 lg:px-3 lg:py-3">
              <div className="text-p flex items-center justify-start">
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
              <p className="pb-2 text-sm group-hover:underline sm:text-base">
                {d.title.length > 50 ? `${d.title.slice(0, 60)} ...` : d.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
