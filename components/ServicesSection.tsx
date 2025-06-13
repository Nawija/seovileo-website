"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const OFERTALINKS = [
  {
    label: "Landing Page",
    href: "/landing-page",
    src: "",
  },
  {
    label: "Strona internetowa",
    href: "/strona-internetowa",
    src: "",
  },
  {
    label: "Sklep Internetowy",
    href: "/sklep-internetowy",
    src: "",
  },
  {
    label: "audyt seo",
    href: "/audyt-seo",
    src: "",
  },
  {
    label: "projekty graficzne",
    href: "/projekty-graficzne",
    src: "",
  },
];

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // opór
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <section className="mx-auto py-12">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Kompleksowe usługi w jednym miejscu:
      </h2>

      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className="flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 select-none active:cursor-grabbing"
        style={{
          scrollPaddingLeft: "50%",
        }}
      >
        <div className="w-0 shrink-0 lg:w-[20%]" aria-hidden />
        {OFERTALINKS.map(({ href, label, src }) => (
          <Link
            href={href}
            key={label}
            onClick={(e) => {
              if (isDragging) e.preventDefault();
            }}
            draggable="false"
            className="relative w-64 shrink-0 snap-none space-y-2 overflow-hidden rounded-sm bg-gradient-to-br from-zinc-800 to-stone-800 shadow-lg transition hover:shadow-xl"
          >
            <div className="relative h-40 w-full">
              {src ? (
                <Image
                  src={src}
                  fill
                  sizes="180px"
                  alt={label}
                  title={`${label} - Jarek Olszewski`}
                  className="object-cover"
                  draggable="false"
                />
              ) : (
                <div className="bg-main flex h-full w-full items-center justify-center text-gray-400">
                  Brak obrazka
                </div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center pb-2 text-center">
              <h3 className="text-lg font-semibold">{label}</h3>
              <p className="text-sm text-gray-500">Zobacz szczegóły</p>
            </div>
          </Link>
        ))}
      </div>
    
    </section>
  );
}
