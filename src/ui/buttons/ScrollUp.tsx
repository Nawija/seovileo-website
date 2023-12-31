"use client";
import "@/src/ui/buttons/scrollUp.css";

import { useEffect, useState } from "react";

export default function ScrollUp() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    const handleScrollListener = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 800) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    };
    window.addEventListener("scroll", handleScrollListener);
    return () => {
      window.removeEventListener("scroll", handleScrollListener);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bottom-3 right-3 rounded-xl bg-blue-400/70 p-2 text-white lg:p-3 ${
        scrollUp ? "slide-left" : "hidden"
      }`}
      onClick={scrollToTop}
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
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}
