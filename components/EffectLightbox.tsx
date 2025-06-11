"use client";

import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useRef } from "react";

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
          className="border-main relative h-40 w-[80%] shrink-0 snap-center overflow-hidden rounded-lg border bg-white/5 shadow-lg sm:w-[33%] lg:w-[28%]"
        >
          <Image
            src={`/${image.img}`}
            alt={`seovileo ${idx + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
}
