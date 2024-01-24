"use client";
import { inter } from "@/src/ui/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-c text-gray-200 px-4 py-20 bg-[#1C1C1C]">
      <Link href="/" aria-label="Logo" className="flex-c">
        <Image
          src="/seovileo.svg"
          height={40}
          width={40}
          priority
          alt="seovileo logo"
        />
        <p className={`ml-1 text-lg font-medium ${inter.className}`}>
          Seovileo
        </p>
      </Link>
    </footer>
  );
}
