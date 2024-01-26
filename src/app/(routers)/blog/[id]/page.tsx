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
  return (
    <div className="anim-opacity mx-auto flex h-full w-full flex-grow flex-col items-center justify-start text-start ">
      <h1 className="text-4xl text-gray-200 lg:text-6xl">{data.title}</h1>
      <div className="mt-12 h-px w-1/3 bg-yellow-500" />
      <div className="mb-12 mt-2 flex-c space-x-4">
        <small>{data.date}</small>
        <small>Udostepnij</small>
      </div>

      <Image
        src={data.img.url}
        alt={data.title}
        height={600}
        width={600}
        className="mb-10 max-h-96 w-full object-cover"
      />
      <article
        className="prose flex flex-col items-center justify-start text-start text-white/80 prose-h1:text-yellow-400 prose-h2:text-yellow-400 prose-h3:text-yellow-400 prose-p:text-white/80 prose-a:text-orange-200 prose-strong:text-white prose-code:text-gray-400"
        dangerouslySetInnerHTML={{ __html: data.desc }}
      />
    </div>
  );
}
