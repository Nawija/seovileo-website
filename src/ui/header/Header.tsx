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
import { MainBtn } from "../buttons/MainBtn";
import { SecondBtn } from "../buttons/SecondBtn";

const navButtons = [
  {
    href: "/uslugi",
    label: "Usługi",
  },
  {
    href: "/darmowa-wycena",
    label: "Wycena",
  },
];

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
      setScrollListenerHeader(window.scrollY > 750 || scrollListenerHeader);
    };

    window.addEventListener("scroll", handleScrollListener);
    window.addEventListener("scroll", handleScrollListener);

    // Add this to handle body overflow
    if (showMenu) {
      document.body.classList.add("body-overflow-hidden");
    } else {
      document.body.classList.remove("body-overflow-hidden");
    }

    return () => {
      window.removeEventListener("scroll", handleScrollListener);
      // Ensure to remove the class when the component is unmounted
      document.body.classList.remove("body-overflow-hidden");
    };
  }, [showMenu]);

  return (
    <header
      className={clsx(`flex-b  z-[999] w-full px-4 py-2.5`, {
        "slide-bottom border-main sticky top-0 z-[999] border-b bg-[#0b0b0be8]":
          scrollListenerHeader,
      })}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" aria-label="Logo" className="flex-c z-[999]">
          <Image
            src="/seovileo.svg"
            height={30}
            width={30}
            priority
            alt="seovileo logo"
          />
          <p
            className={`text-main ml-1 text-sm font-medium md:text-base ${inter.className}`}
          >
            Seovileo
          </p>
        </Link>
        <nav ref={navRef}>
          <DesctopNavLinks pathname={pathname} showMenu={showMenu} />
          <MobileNavLinks
            pathname={pathname}
            showMenu={showMenu}
            handleMenu={handleMenu}
          />
        </nav>
        <div className="hidden items-center justify-center space-x-3 md:flex">
          {navButtons.map((button, index) =>
            index % 2 === 0 ? (
              <SecondBtn key={index}>{button.label}</SecondBtn>
            ) : (
              <MainBtn key={index}>{button.label}</MainBtn>
            ),
          )}
        </div>
        <BurgerMenu handleMenu={handleMenu} showMenu={showMenu} />
      </div>
    </header>
  );
}
