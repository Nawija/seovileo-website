import Breadcrumbs from "@/src/components/BreadCrumb";
import Image from "next/image";

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
  const breadcrumbs = [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: data.title.slice(0, 30),
      href: "#",
    },
  ];
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="absolute left-0 top-0 -z-10 h-3/4 w-full rounded-2xl opacity-5">
        <Image
          src={data.img.url}
          alt={data.title}
          className=" object-cover"
          fill
        />
      </div>
      <div
        className="anim-opacity mx-auto flex h-full w-full flex-grow 
    flex-col items-center justify-start px-6 py-20 text-center"
      >
        <h1 className="text-main max-w-screen-xl text-4xl sm:px-2 lg:text-6xl">
          {data.title}
        </h1>
        <div className="flex-c mb-12 mt-2 space-x-4">
          <small>{data.date}</small>
          <small>Udostepnij</small>
        </div>

        <div className="lg: border-main  relative mb-6 h-80 w-full rounded-lg border sm:w-3/4 lg:mb-12 lg:h-[500px]  xl:w-1/2">
          <Image
            src={data.img.url}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
        <article
          className="border-main bg-main prose flex max-w-screen-lg flex-col items-center justify-start border p-3 transition-colors duration-300 prose-headings:text-white prose-h2:text-white prose-p:text-gray-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-600 prose-strong:text-white prose-code:text-gray-300 prose-li:text-gray-300 sm:p-4 lg:p-6"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
      </div>
    </>
  );
}
