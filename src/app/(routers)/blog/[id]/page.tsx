import { NAV_LINKS } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";

const fetchDatoCmsPopularne = async (id: string) => {
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
        popularne(filter: {slug: {eq: "${id}"}}) {
          id
          img {
            url
          }
          title
          desc(markdown: true)
          date
        }
        blog(filter: {slug: {eq: "${id}"}}) {
          id
          img {
            url
          }
          title
          desc(markdown: true)
          date
        }
      }`,
    }),
  });
  const data = await res.json();
  if (data.data && (data.data.popularne || data.data.blog)) {
    return data.data.popularne || data.data.blog;
  } else {
    return [];
  }
};

export default async function Pages({ params }: { params: { id: string } }) {
  const slug = params.id;
  const data = await fetchDatoCmsPopularne(slug);
  return (
    <div className="flex items-start justify-center sticky">
      <div className="anim-opacity mx-auto flex h-full w-full flex-grow flex-col items-center justify-start px-6 py-20 text-center">
        <h1 className="text-4xl lg:text-6xl">{data.title}</h1>
        <div className="mt-12 h-px w-1/3 bg-yellow-500" />
        <div className="flex-c mb-12 mt-2 space-x-4">
          <small>{data.date}</small>
          <small>Udostepnij</small>
        </div>

        <Image
          src={data.img.url}
          alt={data.title}
          height={600}
          width={600}
          className="mb-10 max-h-96 w-full object-cover rounded-2xl shadow-xl"
        />
        <article
          className="prose flex flex-col items-center justify-start prose-a:text-orange-500 prose-strong:text-black prose-code:text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center w-64">
        <div className="flex flex-col items-center justify-center py-12 bg-[#D3E3FD] rounded-xl w-full pr-2">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`mx-4 my-1 rounded-xl transition-colors rounded-l-none py-2 hover:bg-[#F8FAFD] w-full text-sm`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-12 mt-4 border border-main border-r-0 rounded-xl w-full pr-2">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`mx-4 my-1 rounded-xl transition-colors rounded-l-none py-2 text-sm hover:bg-[#D3E3FD] w-full`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center py-12 mt-4 border border-main border-r-0 rounded-xl w-full pr-2">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`mx-4 my-1 rounded-xl transition-colors rounded-l-none py-2 text-sm hover:bg-[#D3E3FD] w-full`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
