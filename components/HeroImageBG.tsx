"use client";

import Image from "next/image";
import { useState } from "react";
import ShimmerLoader from "./loader/ShimmerLoader";

export default function HeroImageBG({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <ShimmerLoader />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        quality={10}
        priority
        onLoadingComplete={() => setLoaded(true)}
        className={`bg-white/5 object-cover p-2 transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
