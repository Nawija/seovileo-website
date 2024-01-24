"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BurgerMenu, NavLinksDesctop, NavLinksMobile } from "./NavLinks";
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

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
        `sticky top-0 z-[999] flex w-full items-center justify-between bg-main px-3 py-1 font-normal  text-white/70 lg:py-0 border-b border-main`,
      )}
    >
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex-c relative z-50 pl-1 lg:py-3">
          <div className="relative flex-c">
            <Image src="/seovileo.svg" height={30} width={30} alt="logo seovileo" className="mr-1" />
            <p
              className={`transition-transform ${
                showMenu ? "animate-pulse text-white" : ""
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
