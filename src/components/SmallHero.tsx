import smallHeroImage from "@/public/blog/laptop-na-wpol-zamkniety-w-ciemnosci-z-kolorowymi-swiecacymi-okularami-i-papierowym-kubkiem.jpg";
import Image from "next/image";

export default function SmallHero() {
  return (
    <div className="relative -z-10 h-[50vh] lg:h-[70vh] w-full">
      <Image
        src={smallHeroImage}
        fill
        className=" object-cover"
        alt="laptop na wpol zamkniety w ciemnosci z kolorowymi swiecacymi okularami i papierowym kubkiem"
      />
      <div className="text-main absolute left-1/2 top-[15%] md:top-[30%] z-10 -translate-x-1/2 text-xl text-center font-semibold tracking-wider lg:text-6xl">
        Porady, wskazówki - Blog
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-[#0B0B0B]" />
    </div>
  );
}
