"use client";

import { BlogItemTypes } from "@/src/types";
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
      className="bg-main anim-opacity border-main relative overflow-hidden rounded-lg border p-4 pb-12 "
    >
      <div className="relative h-20 w-full lg:h-32">
        <Image
          className="h-full w-full rounded-sm object-cover transition-all duration-300"
          src={imgUrl}
          alt={title}
          fill
        />
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-black/70 to-transparent" />
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
      <p
        className={clsx(
          `absolute bottom-3 w-max rounded-full px-2 py-1 text-xs text-white`,
          {
            "bg-red-500": tags.includes("strony"),
            "bg-pink-400": tags.includes("marketing"),
            "bg-blue-400": tags.includes("technologia"),
            "bg-violet-500": tags.includes("popularne"),
          },
        )}
      >
        {tags}
      </p>
    </Link>
  );
}
