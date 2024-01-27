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
      <div className="sticky top-10 mx-auto hidden min-h-screen flex-col items-stretch justify-stretch bg-[#D3E3FD] pt-10 text-center lg:flex rounded-l-xl">
        <div className="flex flex-col items-stretch justify-stretch">
          {BLOG_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`ml-4 w-64 rounded-l-xl px-12 py-2 my-1 text-start text-sm transition-colors ${
                pathname === link.href
                  ? "bg-[#F8FAFD]"
                  : "hover:bg-[#F8FAFD]"
              }`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <main className="min-h-screen w-full flex-grow px-6 py-10 border rounded-r-xl border-l-0 border-[#D3E3FD]">
        {children}
      </main>
    </div>
  );
}
