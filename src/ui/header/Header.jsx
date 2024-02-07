"use client";

import { NAV_LINKS } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { MainBtn } from "../buttons/MainBtn";

const Header = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");

  const controlNavbarAndHeaderBackground = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      const newVisible = lastScrollY > currentScrollY || currentScrollY < 600;
      const newHeaderBackground =
        currentScrollY > 0 ? "bg-white/90 shadow-xl" : "bg-transparent";

      if (newVisible !== visible) setVisible(newVisible);
      if (currentScrollY !== lastScrollY) setLastScrollY(currentScrollY);
      if (newHeaderBackground !== headerBackground)
        setHeaderBackground(newHeaderBackground);
    }
  }, [lastScrollY, visible, headerBackground]);

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
      className={`fixed top-0 z-50 w-full px-6 py-4 text-sm font-medium text-gray-800 transition-all duration-500 ease-in-out lg:py-3 ${headerBackground} ${
        !visible ? "-translate-y-[120%]" : ""
      }`}
    >
      <nav
        className={` mx-auto flex w-full max-w-screen-2xl items-center justify-between `}
      >
        <Link
          href="/"
          onClick={closeMenu}
          className="z-10 mr-12 flex items-center justify-center"
        >
          <Image
            height={29}
            width={29}
            alt="logo"
            src="/seovileo.svg"
            priority
            className="mr-1"
          />
          <p>Seovileo</p>
        </Link>
        <ul
          className={`absolute left-0 top-0 flex h-screen flex-col items-center justify-center space-y-7 border-r border-sky-100 bg-gradient-to-b from-white/90 to-sky-100/90 px-24 backdrop-blur-sm transition-transform lg:relative lg:h-auto lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:border-0 lg:bg-none lg:backdrop-blur-none ${
            isMenuOpen
              ? "translate-x-0 duration-200 "
              : "-translate-x-full duration-500 lg:translate-x-0"
          } `}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`px-4 py-2 text-base font-semibold transition-colors duration-200 hover:text-sky-700 lg:text-sm lg:font-medium ${
                  pathname === link.href ? "text-sky-700" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <MainBtn className="lg:hidden">Wycena</MainBtn>
          </li>
        </ul>
        <button
          className="flex flex-col items-center justify-center p-2 lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`mb-2 h-px w-5 bg-black transition-transform ${
              isMenuOpen
                ? "translate-y-1 rotate-[-135deg]  duration-200"
                : "duration-300"
            }`}
          />
          <div
            className={`h-px w-5 bg-black transition-transform ${
              isMenuOpen
                ? "-translate-y-1 -rotate-45 duration-500"
                : "duration-500"
            }`}
          />
        </button>
        <MainBtn className="hidden lg:flex">Wycena</MainBtn>
      </nav>
    </header>
  );
};

export default Header;
