"use client";
import { inter } from "@/src/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-c mt-24 border-t bg-stone-200 px-4 py-20">
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
