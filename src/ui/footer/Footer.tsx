"use client";
import { inter } from "@/src/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-c px-4 mt-24 py-20 bg-main border-t border-main">
      <Link href="/" aria-label="Logo" className="flex-c">
        <Image
          src="/seovileo.svg"
          height={30}
          width={30}
          priority
          alt="seovileo logo"
        />
        <p className={`ml-1 text-sm font-medium ${inter.className}`}>
          Seovileo
        </p>
      </Link>
    </footer>
  );
}
