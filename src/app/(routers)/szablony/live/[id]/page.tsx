"use client";

import { PORTFOLIO } from "@/src/constants";
import { MainBtn } from "@/src/ui/buttons/MainBtn";
import Link from "next/link";
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
      <div className="flex-b bg-main border-second border-b p-2 text-sm">
        <div />
        <div className="flex-c space-x-5">
          <p
            className="border-main bg-body cursor-pointer rounded-lg border p-1 px-3"
            onClick={() =>
              handleIframeClassChange(
                "w-[430px] h-full lg:h-[800px] px-4 py-12 border rounded-lg border-gray-100 bg-gray-300",
              )
            }
          >
            M
          </p>
          <p
            className="border-main bg-body cursor-pointer rounded-lg border p-1 px-3"
            onClick={() => handleIframeClassChange("w-[820px] h-[95%]")}
          >
            T
          </p>
          <p
            className="border-main bg-body cursor-pointer rounded-lg border p-1 px-3"
            onClick={() => handleIframeClassChange("w-full h-full")}
          >
            D
          </p>
        </div>
        <Link href={`/szablony/${id}`}>
          <MainBtn>X</MainBtn>
        </Link>
      </div>
      <div className="bg-body flex-c relative h-full w-full rounded-lg">
        {isIframeLoading && (
          <div className="flex-c w-full bg-main h-full absolute top-1/2 left-1/2 -mt-12 -translate-x-1/2 -translate-y-1/2">
            <span className="loader"></span>
          </div>
        )}
        <iframe
          onLoad={handleIframeLoaded}
          className={`mx-auto h-full transition-all duration-500 ${iframe}`}
          src={portfolioItem.link}
        />
      </div>
    </div>
  );
}
