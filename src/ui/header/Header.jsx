"use client";

import { NAV_LINKS } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MainBtn } from "../buttons/MainBtn";
import { SecondBtn } from "../buttons/SecondBtn";

const Header = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbarAndHeaderBackground = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      const newVisible = lastScrollY > currentScrollY || currentScrollY < 40;

      if (newVisible !== visible) setVisible(newVisible);
      if (currentScrollY !== lastScrollY) setLastScrollY(currentScrollY);
    }
  }, [lastScrollY, visible]);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbarAndHeaderBackground);
    return () =>
      window.removeEventListener("scroll", controlNavbarAndHeaderBackground);
  }, [controlNavbarAndHeaderBackground]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      const target = event.target;
      if (isMenuOpen && target && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`bg-body border-main sticky top-0 z-50 w-full border-b px-6 py-4 text-sm font-medium transition-all duration-500 ease-in-out lg:py-3 ${
        !visible ? "-translate-y-[120%]" : ""
      }`}
    >
      <nav
        className={` mx-auto flex w-full max-w-screen-2xl items-center justify-between `}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="z-10 mr-12 flex items-center justify-center text-white"
        >
          <Image
            height={27}
            width={27}
            alt="logo"
            src="/seovileo.svg"
            priority
            className="mr-1"
          />
          <p>Seovileo</p>
        </Link>
        <ul
          className={`border-main bg-main absolute left-0 top-0 flex h-screen flex-col items-center justify-center space-y-7 border-r px-28 backdrop-blur-sm transition-transform lg:absolute lg:left-1/2 lg:top-1/2 lg:h-auto lg:-translate-x-1/2 lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:rounded-lg lg:border lg:bg-none lg:p-3 lg:px-0 lg:backdrop-blur-none ${
            isMenuOpen
              ? "translate-x-0 duration-200 "
              : "-translate-x-full duration-500"
          } `}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`rounded-xl px-4 py-2 text-base font-semibold transition-colors duration-500 hover:text-white lg:text-sm lg:font-medium ${
                  pathname === link.href ? "text-white" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <SecondBtn className="mr-4 hidden lg:flex">Szablony</SecondBtn>
          <MainBtn className=" hidden lg:flex">Wycena</MainBtn>
        </div>
        <button
          className="flex flex-col items-center justify-center p-2 lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`mb-2 h-px w-5 bg-white transition-transform ${
              isMenuOpen
                ? "translate-y-1 rotate-[-135deg]  duration-200"
                : "duration-300"
            }`}
          />
          <div
            className={`h-px w-5 bg-white transition-transform ${
              isMenuOpen
                ? "-translate-y-1 -rotate-45 duration-500"
                : "duration-500"
            }`}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
