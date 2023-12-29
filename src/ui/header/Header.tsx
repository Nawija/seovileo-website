"use client";
import { inter } from "@/src/ui/fonts";
import { BurgerMenu } from "@/src/ui/header/BurgerMenu";
import { DesctopNavLinks, MobileNavLinks } from "@/src/ui/header/NavLinks";
import "@/src/ui/header/header.css";
import "aos/dist/aos.css";
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

  useEffect(() => {

    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    
    const handleClickOutside = (e: MouseEvent) => {
      const nav = document.getElementById("mobile-nav");

      if (nav && !nav.contains(e.target as Node) && showMenu) {
        // Kliknięto poza nawigacją, gdy jest otwarta
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
      className={clsx(`flex-b z-[999] w-full border-b bg-white px-4 py-3`, {
        "slide-bottom fixed top-0 z-[999] bg-white/90 ": scrollListenerHeader,
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
      <nav>
        <DesctopNavLinks pathname={pathname} showMenu={showMenu} />
        <MobileNavLinks pathname={pathname} showMenu={showMenu} />
      </nav>
      <BurgerMenu handleMenu={handleMenu} showMenu={showMenu} />
    </header>
  );
}
