"use client";

import { BLOG_LINKS } from "@/src/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="mx-auto flex max-w-[1700px]">
      <div className="border-main sticky top-10 mx-auto hidden min-h-screen flex-col items-stretch justify-stretch border-r bg-[#171717] pt-10 text-center lg:flex">
        <div className="flex flex-col items-stretch justify-stretch">
          {BLOG_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`mx-4 w-64 rounded-lg px-12 py-2 my-1 text-start text-sm ${
                pathname === link.href
                  ? "bg-[#323232ed]"
                  : "hover:bg-[#323232ed]"
              }`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <main className="min-h-screen w-full flex-grow bg-[#1d1d1e]">
        {children}
      </main>
    </div>
  );
}
