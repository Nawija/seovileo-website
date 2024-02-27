"use client";

import { BlogItemTypes } from "@/src/types";
import Link from "next/link";

export default function BlogPopularComponent({
  item,
}: {
  item: BlogItemTypes;
}) {
  const { slug, title, date, tags } = item;
  const imgUrl = item.img && item.img.url ? item.img.url : "";
  return (
    <Link
      href={`/blog/${slug}`}
      className="bg-main anim-opacity border-main overflow-hidden rounded-lg border p-4 "
    >
      <div className="relative h-28 w-full lg:h-40">
        <img
          className="h-full w-full rounded-lg object-cover transition-all duration-300"
          src={imgUrl}
          alt={title}
        />
      </div>
      <div className="flex flex-col items-start justify-center space-y-1 px-2 py-2 lg:space-y-2 lg:px-3 lg:py-3">
        <div className="text-smoke flex items-start justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="mr-1 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <small>{date}</small>
        </div>
        <p>
          {title.slice(0, 40) + "... "}
          <small className="text-main">wiecej</small>
        </p>
      </div>
      <p>{tags}</p>
    </Link>
  );
}
