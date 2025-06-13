"use client";

import { BlogItemTypes } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { MdDateRange } from "react-icons/md";

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
      className="bg-main anim-opacity border-main relative overflow-hidden rounded-lg border p-4 pb-12"
    >
      <div className="relative h-32 w-full">
        <Image
          className="h-full w-full rounded-sm object-cover transition-all duration-300"
          src={imgUrl}
          alt={title}
          fill
        />
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      <div className="flex flex-col items-start justify-center space-y-1 px-2 py-2 lg:space-y-2 lg:px-3 lg:py-3">
        <div className="text-smoke flex items-start justify-start">
          <MdDateRange className="flex-c mr-1" />
          <small>{date}</small>
        </div>
        <p>
          {title.slice(0, 40) + "... "}
          <small className="text-main">wiecej</small>
        </p>
      </div>
      <div className="absolute bottom-3 w-full overflow-x-auto hide-scrollbar">
        <div className="flex w-max snap-x snap-mandatory gap-2 ">
          {tags.slice(0, 3).map((tag) => (
            <p
              key={tag}
              className={clsx(
                "w-max shrink-0 snap-start rounded-full px-3 py-1 text-xs text-white",
                {
                  "bg-violet-500": tag === "strona",
                  "bg-pink-400": tag === "marketing",
                  "bg-sky-400": tag === "landing",
                  "bg-green-400": tag === "seo",
                  "bg-blue-400": tag === "technologia",
                  "bg-red-500": tag === "hot",
                  "bg-gray-500": ![
                    "strona",
                    "marketing",
                    "landing",
                    "seo",
                    "technologia",
                    "hot",
                  ].includes(tag),
                },
              )}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
}
