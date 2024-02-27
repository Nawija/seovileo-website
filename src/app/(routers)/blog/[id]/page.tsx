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
    <div
      className="anim-opacity mx-auto flex h-full w-full flex-grow 
    flex-col items-center justify-start px-6 py-20 text-center"
    >
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h1 className="text-4xl lg:text-6xl">{data.title}</h1>
      <div className="flex-c mb-12 mt-2 space-x-4">
        <small>{data.date}</small>
        <small>Udostepnij</small>
      </div>

      <div className="relative w-full">
        <Image
          src={data.img.url}
          alt={data.title}
          className="-z-10 h-full w-full rounded-2xl object-cover opacity-15"
          fill
        />
        <Image
          src={data.img.url}
          alt={data.title}
          height={600}
          width={600}
          className="z-10 mx-auto mt-44 h-96 rounded-2xl object-cover"
        />
      </div>
      <article
        className="prose flex max-w-screen-lg flex-col items-center justify-start transition-colors duration-300 prose-p:text-gray-200 prose-a:text-emerald-400 hover:prose-a:text-emerald-600 prose-strong:text-white prose-code:text-gray-300"
        dangerouslySetInnerHTML={{ __html: data.desc }}
      />
    </div>
  );
}
