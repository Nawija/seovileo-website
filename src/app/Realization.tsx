import s1 from "@/public/portfolio/1.jpg";
import s2 from "@/public/portfolio/2.jpg";
import s3 from "@/public/portfolio/3.jpg";
import s4 from "@/public/portfolio/4.jpg";
import s5 from "@/public/portfolio/5.jpg";
import s6 from "@/public/portfolio/6.jpg";
import { MainBtn } from "@/src/ui/buttons/MainBtn";
import { SecondBtn } from "@/src/ui/buttons/SecondBtn";
import Image from "next/image";
import Link from "next/link";

const portfolioImg = [
  { img: s1, title: "Portfolio", time: "0.1" },
  { img: s2, title: "Nazoltej", time: "0.2" },
  { img: s3, title: "Emelab", time: "0.3" },
  { img: s4, title: "Jarek Olszewski", time: "0.4" },
  { img: s5, title: "Portfolio", time: "0.5" },
  { img: s6, title: "Portfolio Xyz", time: "0.6" },
  { img: s3, title: "Emelab", time: "0.3" },
  { img: s1, title: "Portfolio", time: "0.1" },
  { img: s2, title: "Nazoltej", time: "0.2" },
  { img: s4, title: "Jarek Olszewski", time: "0.4" },
];

export default function Realization() {
  return (
    <section className="z-10 mx-auto flex flex-col items-center justify-center overflow-x-hidden py-12 text-center md:py-24 border-b border-main">
      <h2 className="text-main mb-6 text-2xl tracking-wide">Realizacje</h2>
      <div className="mx-auto grid max-w-screen-2xl grid-cols-2 gap-2 px-3 text-start md:grid-cols-3 md:gap-4 lg:grid-cols-5">
        {portfolioImg.map((i, id) => (
          <Link
            href="/"
            key={id}
            className="border-main group relative h-64 w-full overflow-hidden rounded-lg border md:h-80"
          >
            <Image
              src={i.img}
              alt="..."
              height={200}
              width={100}
              priority={id < 5}
              placeholder="blur"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 30vw,
                  (max-width: 1280px) 20vw,
                  15vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/10" />
            <p className="absolute bottom-2 left-2 z-10 max-w-36 text-lg text-white">
              {i.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex-c mt-20 space-x-4">
        <Link href="/">
          <SecondBtn>Zobacz Wiecej</SecondBtn>
        </Link>
        <Link href="/">
          <MainBtn>Galeria</MainBtn>
        </Link>
      </div>
    </section>
  );
}
