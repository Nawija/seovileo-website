"use client";

import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useRef, useState } from "react";
import ShimmerLoader from "./loader/ShimmerLoader";

interface EffectImage {
  img: string;
  height: number;
  width: number;
}

interface EffectLightboxProps {
  images: EffectImage[];
}

export default function EffectLightbox({ images }: EffectLightboxProps) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  useEffect(() => {
    if (!galleryRef.current) return;

    lightboxRef.current = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "fade",
    });

    lightboxRef.current.init();

    return () => {
      lightboxRef.current?.destroy();
      lightboxRef.current = null;
    };
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div
      ref={galleryRef}
      className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-2 pb-4"
    >
      {images.map((image, idx) => (
        <a
          key={idx}
          href={`/${image.img}`}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
          className="border-main relative h-40 w-[80%] shrink-0 snap-center overflow-hidden rounded-lg border bg-white/5 sm:w-[33%] lg:w-[28%]"
        >
          {!loadedImages[idx] && <ShimmerLoader />}
          <Image
            src={`/${image.img}`}
            alt={`seovileo ${idx + 1}`}
            fill
            className={`object-contain transition-opacity duration-500 ${loadedImages[idx] ? "opacity-100" : "opacity-0"}`}
            onLoadingComplete={() => handleImageLoad(idx)}
            sizes="(max-width: 768px) 100vw, 80vw"
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
}
