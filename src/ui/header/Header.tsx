"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BurgerMenu, NavLinksDesctop, NavLinksMobile } from "./NavLinks";

export function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("body-overflow-hidden");
    } else {
      document.body.classList.remove("body-overflow-hidden");
    }
  }, [showMenu]);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("body-overflow-hidden");
    } else {
      document.body.classList.remove("body-overflow-hidden");
    }
  }, [showMenu]);

  function handleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <header
      className={clsx(
        `sticky top-0 z-[999] flex w-full items-center justify-between px-3 py-1 transition-colors duration-300 font-normal lg:py-0`,
        { "bg-white": isScrolled },
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex-c relative z-50 pl-1 lg:py-3">
          <div className="flex-c relative">
            <Image
              src="/seovileo.svg"
              height={29}
              width={29}
              alt="logo seovileo"
              className="mr-1"
            />
            <p
              className={`text-sm font-semibold text-black/90 transition-transform ${
                showMenu ? "animate-pulse" : ""
              }`}
            >
              Seovileo
            </p>
          </div>
        </Link>
        <BurgerMenu showMenu={showMenu} handleMenu={handleMenu} />
        <NavLinksDesctop pathname={pathname} />
        <NavLinksMobile
          showMenu={showMenu}
          pathname={pathname}
          handleMenu={handleMenu}
        />
      </div>
    </header>
  );
}
