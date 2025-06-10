"use client";

import Image from "next/image";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { useEffect, useRef } from "react";

interface EffectImage {
  img: string;
}

interface EffectLightboxProps {
  images: EffectImage[];
}

export default function EffectLightbox({ images }: EffectLightboxProps) {
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    // Initialize PhotoSwipe Lightbox
    lightboxRef.current = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: "a", // selector for gallery items
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
    <div ref={galleryRef} className="flex flex-wrap gap-4">
      {images.map((image, idx) => (
        <a
          key={idx}
          href={`/${image.img}`}
          data-pswp-width={1300}
          data-pswp-height={650}
          target="_blank"
          rel="noreferrer"
          className="relative block h-40 w-60 overflow-hidden rounded-lg border border-gray-200 bg-white/10 shadow-lg"
        >
          <Image
            src={`/${image.img}`}
            alt={`seovileo ${idx + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 15rem"
            draggable={false}
          />
        </a>
      ))}
    </div>
  );
}
