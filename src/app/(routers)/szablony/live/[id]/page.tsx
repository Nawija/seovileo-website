"use client";

import { PORTFOLIO } from "@/src/constants";
import { useState } from "react";

export default function SzablonyID({ params }: { params: { id: string } }) {
  const [iframeWidth, setIframeWidth] = useState("w-full"); // domyślnie pełna szerokość
  const id = params.id;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  const handleIframeWidthChange = (width: any) => {
    setIframeWidth(width);
  };

  return (
    <div className="anim-opacity fixed left-0 top-0 z-[9999999999999] h-screen w-full overflow-hidden">
      <div className="flex-c bg-main border-second space-x-5 border-b p-2 text-sm">
        <p
          className="border-main bg-body cursor-pointer rounded-lg border p-1 px-3"
          onClick={() => handleIframeWidthChange("w-[400px]")}
        >
          M
        </p>
        <p
          className="border-main bg-body cursor-pointer rounded-lg border p-1 px-3"
          onClick={() => handleIframeWidthChange("w-[800px]")}
        >
          T
        </p>
        <p
          className="border-main bg-body cursor-pointer rounded-lg border p-1 px-3"
          onClick={() => handleIframeWidthChange("w-full")}
        >
          D
        </p>
      </div>
      <div className="relative h-full w-full">
        <iframe
          className={`mx-auto h-full transition-all duration-500 ${iframeWidth}`}
          src="https://nazoltej.pl"
        />
      </div>
    </div>
  );
}
