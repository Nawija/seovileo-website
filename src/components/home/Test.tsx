"use client";
import { PORTFOLIO } from "@/src/constants";
import { useEffect, useRef, useState } from "react";

export default function Test() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const scroll = (scrollOffset: number): void => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += scrollOffset;
    }
  };

  const onMouseDown = (e: React.MouseEvent): void => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollContainer.current?.offsetLeft ?? 0));
    setScrollLeft(scrollContainer.current?.scrollLeft ?? 0);
  };

  const onMouseLeave = (): void => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const onMouseUp = (): void => {
    setIsDragging(false);
  };

  const onMouseMove = (e: MouseEvent): void => {
    if (!isDragging || !scrollContainer.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.current.offsetLeft;
    const walk = (x - startX) * 3;
    scrollContainer.current.scrollLeft = scrollLeft - walk;
  };

  const checkScrollPosition = (): void => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const atStart = container.scrollLeft === 0;
      const atEnd =
        container.scrollLeft + container.clientWidth === container.scrollWidth;

      setIsAtStart(atStart);
      setIsAtEnd(atEnd);
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("mousedown", onMouseDown as any);
      container.addEventListener("mouseleave", onMouseLeave as any);
      container.addEventListener("mouseup", onMouseUp as any);
      container.addEventListener("mousemove", onMouseMove as any);
      container.addEventListener("scroll", checkScrollPosition);

      return () => {
        container.removeEventListener("mousedown", onMouseDown as any);
        container.removeEventListener("mouseleave", onMouseLeave as any);
        container.removeEventListener("mouseup", onMouseUp as any);
        container.removeEventListener("mousemove", onMouseMove as any);
        container.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, [isDragging, startX, scrollLeft]);

  return (
    <section className="flex w-full flex-col items-center justify-start overflow-hidden py-24 lg:flex-row lg:py-48">
      <h2 className="text-main mb-8 px-3 text-center text-xl font-semibold lg:ml-24 lg:w-96 lg:text-start lg:text-3xl">
        Lorem ipsum dolor sit amet consectetur
      </h2>

      <div className="relative flex w-full justify-between lg:w-3/4">
        <div
          ref={scrollContainer}
          className="no-scrollbar flex snap-x items-start justify-start overflow-x-scroll pb-6"
        >
          {PORTFOLIO.map((p, i) => (
            <div
              key={i}
              className="bg-main border-main mr-10 h-96 w-full flex-shrink-0 snap-center overflow-hidden rounded-lg border p-4 shadow-2xl shadow-white/10 sm:w-1/3"
            >
              <img
                src={p.url}
                draggable="false"
                alt="..."
                className=" h-full w-full object-cover object-top"
              />
            </div>
          ))}
        </div>
        {!isAtStart && (
          <button
            onClick={() => scroll(-330)}
            className="bg-main border-main absolute left-0 top-1/2 z-10 mr-3 rounded border p-1.5 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        )}
        {!isAtEnd && (
          <button
            onClick={() => scroll(330)}
            className="bg-main border-main absolute -right-3 top-1/2 z-10 mr-3 rounded border p-1.5 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
