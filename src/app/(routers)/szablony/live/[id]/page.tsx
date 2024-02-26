"use client";

import WidthLiveControls from "@/src/components/WidthLiveControls";
import { PORTFOLIO } from "@/src/constants/portfolio";

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
    <div className="anim-opacity fixed left-0 top-0 z-[9999999999999] h-screen w-full">
      <WidthLiveControls handleIframeClassChange={handleIframeClassChange} />
      <div className="bg-body relative -z-10 flex h-full w-full rounded-lg">
        {isIframeLoading && (
          <div className="flex-c bg-main absolute left-1/2 top-1/2 -mt-12 h-full w-full -translate-x-1/2 -translate-y-1/2">
            <span className="loader" />
          </div>
        )}

        <iframe
          onLoad={handleIframeLoaded}
          className={`mx-auto h-full bg-white transition-all duration-500 ${iframe}`}
          src={portfolioItem.link}
        />
      </div>
    </div>
  );
}
