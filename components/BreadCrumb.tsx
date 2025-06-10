"use client";

import { ArrowLeftToLine } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const router = useRouter();
  const liClass =
    "snap-start shrink-0 whitespace-nowrap hover:text-white transition-colors duration-300 ml-2";

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const title = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
    return { href, title };
  });

  return (
    <nav aria-label="Breadcrumb">
      <div className="overflow-x-auto">
        <ol className="mt-3 flex w-max snap-x snap-mandatory items-center space-x-5 px-2 py-2 text-xs lg:px-6 lg:text-sm">
          <li key="back" className={liClass}>
            <button
              onClick={() => router.back()}
              className="flex cursor-pointer items-center justify-center"
            >
              <ArrowLeftToLine size={18} className="mr-1" />
              Powrót
            </button>
          </li>

          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className={`list-disc capitalize ${liClass}`}>
              {index === breadcrumbs.length - 1 ? (
                <span>{breadcrumb.title}</span>
              ) : (
                <Link href={breadcrumb.href}>{breadcrumb.title}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
