"use client";

import { PORTFOLIO } from "@/src/constants";
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
      <div className="flex-b bg-main border-second border-b p-2 px-4 text-sm">
        <p className="flex md:hidden">Więcej opcji na PC</p>
        <div className="hidden md:flex" />
        <div className="hidden items-center justify-center space-x-5 md:flex">
          <button
            className="border-main bg-body cursor-pointer rounded-lg border px-2.5 py-2"
            onClick={() =>
              handleIframeClassChange(
                "w-[430px] h-full lg:h-[730px] px-4 py-12 lg:mt-12 rounded-3xl border border-main bg-zinc-800",
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </button>
          <p
            className="border-main bg-body cursor-pointer rounded-lg border px-2.5 py-2"
            onClick={() =>
              handleIframeClassChange(
                "w-[700px] h-full lg:h-[90%] px-4 py-12 lg:mt-2 rounded-3xl border border-main bg-zinc-800",
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </p>
          <p
            className="border-main bg-body cursor-pointer rounded-lg border px-2.5 py-2"
            onClick={() => handleIframeClassChange("w-full h-full")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
          </p>
        </div>
        <Link href={`/szablony`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="white"
            className="h-10 w-10 p-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>
      <div className="bg-body relative flex h-full w-full rounded-lg">
        {isIframeLoading && (
          <div className="flex-c bg-main absolute left-1/2 top-1/2 -mt-12 h-full w-full -translate-x-1/2 -translate-y-1/2">
            <span className="loader"></span>
          </div>
        )}
        <iframe
          onLoad={handleIframeLoaded}
          className={`relative mx-auto h-full transition-all duration-500 ${iframe}`}
          src={portfolioItem.link}
        />
      </div>
    </div>
  );
}
