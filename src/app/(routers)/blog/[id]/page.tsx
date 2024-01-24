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

  // Sprawdź, czy popularne lub blog są dostępne w danych i zwróć odpowiednią tablicę
  if (data.data && (data.data.popularne || data.data.blog)) {
    return data.data.popularne || data.data.blog;
  } else {
    // Jeśli nie znaleziono danych, zwróć pustą tablicę lub odpowiedni komunikat błędu
    return [];
  }
};

export default async function Pages({ params }: { params: { id: string } }) {
  const slug = params.id;
  const data = await fetchDatoCmsPopularne(slug);
  return (
    <div className="flex w-full h-full flex-grow flex-col items-center justify-center mx-auto text-center">
      <Image src={data.img.url} alt={data.title} height={600} width={600} className="mb-12" />
      <article
        className="prose prose-headings:underline prose-h1:text-orange-500 prose-a:text-orange-200"
        dangerouslySetInnerHTML={{ __html: data.desc }}
      />
    </div>
  );
}
