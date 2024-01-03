"use client";

import { inter } from "@/src/ui/fonts";
import { BurgerMenu } from "@/src/ui/header/BurgerMenu";
import { DesctopNavLinks, MobileNavLinks } from "@/src/ui/header/NavLinks";
import "@/src/ui/header/header.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollListenerHeader, setScrollListenerHeader] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    const handleScrollListener = () => {
      setScrollListenerHeader(window.scrollY > 450 || scrollListenerHeader);
    };

    window.addEventListener("scroll", handleScrollListener);
    return () => {
      window.removeEventListener("scroll", handleScrollListener);
    };
  }, [scrollListenerHeader]);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node) && showMenu) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <header
      className={clsx(`flex-b z-[999] w-full border-b bg-[rgba(255,255,255,0.96)] px-4 py-2.5`, {
        "slide-bottom sticky top-0 z-[999] ": scrollListenerHeader,
      })}
    >
      <Link href="/" aria-label="Logo" className="flex-c z-[999]">
        <Image
          src="/seovileo.svg"
          height={35}
          width={35}
          priority
          alt="seovileo logo"
        />
        <p className={`ml-1 font-semibold ${inter.className}`}>Seovileo</p>
      </Link>
      <nav ref={navRef}>
        <DesctopNavLinks pathname={pathname} showMenu={showMenu} />
        <MobileNavLinks
          pathname={pathname}
          showMenu={showMenu}
          handleMenu={handleMenu}
        />
      </nav>
      <BurgerMenu handleMenu={handleMenu} showMenu={showMenu} />
    </header>
  );
}
