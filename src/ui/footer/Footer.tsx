"use client";
import { inter } from "@/src/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <header className="flex-c px-4 py-24 border-t bg-white">
      <Link href="/" aria-label="Logo" className="flex-c">
        <Image
          src="/seovileo.svg"
          height={40}
          width={40}
          priority
          alt="seovileo logo"
        />
        <p className={`ml-1 text-lg font-semibold ${inter.className}`}>
          Seovileo
        </p>
      </Link>
    </header>
  );
}
