import Image from "next/image";
import seoDotsBg from "@/public/seo-tlo.png";

export default function Dots() {
  return (
    <div className="absolute -top-20 left-0 h-[30vh] w-full md:h-[60vh]">
      <Image
        src={seoDotsBg}
        fill
        priority
        quality={10}
        className="object-cover"
        alt="seo tło"
      />
    </div>
  );
}
