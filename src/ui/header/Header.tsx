"use client";
import { inter } from "@/src/ui/fonts";
import { BurgerMenu } from "@/src/ui/header/BurgerMenu";
import { DesctopNavLinks, MobileNavLinks } from "@/src/ui/header/NavLinks";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollListenerHeader, setScrollListenerHeader] = useState(false);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScrollListener = () => {
      if (window.scrollY > 450) {
        setScrollListenerHeader(true);
      } else {
        setScrollListenerHeader(false);
      }
    };

    window.addEventListener("scroll", handleScrollListener);
    return () => {
      window.removeEventListener("scroll", handleScrollListener);
    };
  }, []);
  return (
    <header
      className={clsx(`flex-b z-50 w-full border-b bg-white px-4 py-3`, {
        "fixed top-0 bg-white/90 ": scrollListenerHeader,
      })}
    >
      <Link href="/" aria-label="Logo" className="flex-c z-50">
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
      <nav>
        <DesctopNavLinks pathname={pathname} showMenu={showMenu} />
        <MobileNavLinks pathname={pathname} showMenu={showMenu} />
      </nav>
      <BurgerMenu handleMenu={handleMenu} showMenu={showMenu} />
    </header>
  );
}
