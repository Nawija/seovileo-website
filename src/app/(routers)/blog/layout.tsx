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
    <div className="mx-auto flex max-w-[1500px]">
      <div className="mx-auto hidden min-h-screen flex-col items-stretch justify-stretch rounded-l-xl bg-gradient-to-tr from-sky-100 to-indigo-300 pt-10 text-center lg:flex">
        <div className="flex flex-col items-stretch justify-stretch">
          {BLOG_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className={`my-1 ml-4 w-64 rounded-l-xl px-12 py-2 text-start text-sm transition-colors ${
                pathname === link.href ? "bg-[#F8FAFD]" : "hover:bg-[#F8FAFD]"
              }`}
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <main className="min-h-screen w-full flex-grow">{children}</main>
    </div>
  );
}
