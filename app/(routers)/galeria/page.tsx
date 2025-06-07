import { GaleriaTypes } from "@/types";
import Image from "next/image";
import Link from "next/link";

const fetchPhotoDatoCms = async () => {
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
        allBlogs {
          img {
            id
            url
            blurUpThumb
          }
        }
      }`,
    }),
  });
  return await res.json();
};
export default async function Galeria() {
  const datoCmsPhoto = await fetchPhotoDatoCms();

  return (
    <>
      <div className="anim-opacity mx-2 mt-5 columns-1 gap-4 text-sm sm:columns-2 lg:px-2 xl:columns-3 2xl:columns-5">
        <div className="after:content shadow-highlight after:shadow-highlight bg-main border-main relative mb-5 flex h-[350px] flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border px-6 text-center after:pointer-events-none after:absolute after:inset-0 after:rounded-lg lg:pt-0">
          <p className="max-w-[40ch] sm:max-w-[32ch]">
            Serdecznie witam, galeria zdjęć, które uwieczniły wyjątkowe chwile z
            tego niepowtarzalnego wydarzenia.
          </p>
          <p className="max-w-[40ch] sm:max-w-[32ch]">
            Mam nadzieję, że każda z zamieszczonych fotografii pozwoli na
            współdzielenie emocji i przeżyć związanych z tym wyjątkowym
            momentem.
          </p>
          <p className="absolute bottom-2 right-12 mb-4 text-sm text-white/80">
            Galeria
          </p>
        </div>
        {datoCmsPhoto.data.allBlogs.map((photo: GaleriaTypes) => (
          <Link
            key={photo.img.id}
            href={`/galeria/${photo.img.id}`}
            shallow
            passHref
            className="after:content after:shadow-highlight group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg"
          >
            <Image
              alt="..."
              className="transform rounded-lg shadow-xl brightness-75 transition will-change-auto group-hover:brightness-100"
              src={photo.img.url}
              placeholder="blur"
              blurDataURL={photo.img.blurUpThumb}
              width={620}
              height={580}
              sizes="(max-width: 640px) 90vw,
                (max-width: 1280px) 50vw,
                (max-width: 1536px) 33vw,
                25vw"
            />
          </Link>
        ))}
      </div>
      <footer className="border-second mt-12 border-t p-6 text-center font-semibold sm:p-12">
        Dziękuję za skorzystanie z moich usług, Podziel się opinią na{" "}
        <Link
          href="/"
          target="_blank"
          className="font-semibold text-white transition-colors hover:text-white/50"
          rel="noreferrer"
        >
          Google
        </Link>{" "}
        lub{" "}
        <Link
          href="/"
          target="_blank"
          className="font-semibold text-white transition-colors hover:text-white/50"
          rel="noreferrer"
        >
          Facebook
        </Link>
      </footer>
    </>
  );
}
