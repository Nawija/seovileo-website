"use client";
import { useEffect, useRef, useState } from "react";
import CTA from "./CTA";

export function Portfolio({ portfolioItem }) {
  const [activeId, setActiveId] = useState(null);
  const refs = useRef({});

  const generateIdFromTitle = (title) =>
    title.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }, // trigger gdy element jest na środku widoku
    );

    Object.values(refs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {portfolioItem.productDesc.map((item, index) => {
        const id = generateIdFromTitle(item.title);
        const isActive = activeId === id;

        return (
          <div
            key={index}
            id={id}
            ref={(el) => (refs.current[id] = el)}
            className={`mt-12 mb-6 scroll-m-12 pl-2 ${
              isActive ? "border border-yellow-400 bg-yellow-200" : ""
            }`}
          >
            <div className="border-main relative rounded-lg border p-4 pt-8">
              <h2 className="text-main bg-body absolute -top-4 left-4 mb-3 px-2 text-2xl">
                {item.title}
              </h2>
              <p className="max-w-5xl pr-4">{item.desc}</p>
            </div>

            {index === 2 && (
              <CTA
                title="Zamów podobna stronę"
                titleBtn="Kliknij tutaj"
                actionLink={`/zamowienie/realizacje/${portfolioItem.id}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
