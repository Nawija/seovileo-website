"use client";

import Image from "next/image";
import { useState } from "react";
import ShimmerLoader from "./loader/ShimmerLoader";

export default function HeroImage({ src, alt }: { src: string; alt: string }) {
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
        priority
        onLoadingComplete={() => setLoaded(true)}
        className={`object-contain object-top transition-opacity p-2 bg-white/5 duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
