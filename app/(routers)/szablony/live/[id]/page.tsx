"use client";

import "@/app/(routers)/szablony/live/[id]/loader.css";
import WidthLiveControls from "@/components/WidthLiveControls";
import { PORTFOLIO } from "@/constants/portfolio";
import { useState } from "react";

export default function SzablonyID({ params }: { params: { id: string } }) {
  const [iframe, setIframe] = useState("w-full h-full");
  const [isIframeLoading, setIframeLoading] = useState(true);
  const id = params.id;
  const portfolioItem = PORTFOLIO.find((item) => item.id === id);

  if (!portfolioItem) {
    return <div>Obiekt nie znaleziony</div>;
  }

  const handleIframeClassChange = (classChange: any) => {
    setIframe(classChange);
  };

  const handleIframeLoaded = () => {
    setIframeLoading(false);
  };

  return (
    <div className="anim-opacity fixed top-0 left-0 z-[9999999999999] h-screen w-full">
      <WidthLiveControls handleIframeClassChange={handleIframeClassChange} />
      <div className="bg-body relative -z-10 flex h-full w-full rounded-lg">
        {isIframeLoading && (
          <div className="bg-main absolute top-1/2 left-1/2 -mt-12 flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
            <p className="animate-pulse font-medium tracking-wide">
              Przygotowuje stronę
            </p>
            <span className="loader" />
          </div>
        )}

        <div className="h-[calc(100vh-3.8rem)] w-full">
          <iframe
            // onLoad={handleIframeLoaded}
            onLoadCapture={handleIframeLoaded}
            className={`mx-auto transition-all duration-500 ${iframe}`}
            src={portfolioItem.link}
          />
        </div>
      </div>
    </div>
  );
}
