"use client";
import { OPINIONS } from "@/constants/opinions";
import { FaStar } from "react-icons/fa";

function getRandomColor(name: string) {
  const colors = [
    "bg-red-500",
    "bg-brown-500",
    "bg-blue-500",
    "bg-green-600",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-900",
    "bg-orange-500",
    "bg-emerald-600",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
}

import { useRef, useState } from "react";

export default function Opinions() {
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
    <section className="mx-auto py-12 lg:py-24">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Co mówią klienci:
      </h2>

      <div
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        className="hide-scrollbar flex cursor-grab snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-4 pb-6 select-none active:cursor-grabbing"
      >
        <div className="w-0 shrink-0 lg:w-[16%]" aria-hidden />
        {OPINIONS.map((opinia, i) => {
          const bgColor = getRandomColor(opinia.name);

          return (
            <div key={i} className="w-80 shrink-0 snap-center">
              <div className="border-main bg-main relative flex h-full flex-col justify-between rounded-2xl border px-3 py-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <div className="mx-auto mb-4">
                  <div className="border-main flex w-max items-center justify-center gap-1 rounded-xl border p-2">
                    <FaStar className={`h-5 w-5 text-yellow-400`} />
                    <span className="text-sm font-light -tracking-widest text-zinc-400">
                      {opinia.rating} / 5
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-base leading-relaxed text-neutral-300 italic">
                  “{opinia.text}”
                </p>

                <div className="mt-2 flex items-center justify-center gap-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-lg font-light text-white ${bgColor}`}
                  >
                    {opinia.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-sm font-semibold text-gray-200">
                    {opinia.name}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
