"use client";

import "@/app/(pages)/dziekuje/multicolor.css";
import { MultiColorBtn } from "@/components/ui/buttons/MultiColorBtn";
import confetti from "canvas-confetti";
import Link from "next/link";
import { useEffect } from "react";

export default function DziekujePage() {
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="anim-opacity flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="w-full max-w-2xl space-y-6 p-1">
        <h1 className="animate-multicolor p-4 text-5xl font-bold">
          Dziękuje za wiadomość!
        </h1>
        <p className="text-lg text-white">
          Twoja wiadomość została pomyślnie wysłana. Skontaktuje się z Tobą jak
          najszybciej!
        </p>

        <Link href="/">
          <MultiColorBtn className="px-4 py-2">
            Powrót na stronę główną{" "}
          </MultiColorBtn>
        </Link>
      </div>
    </div>
  );
}
