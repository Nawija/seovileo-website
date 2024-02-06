"use client";

import { NAV_LINKS } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState("bg-transparent");

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setVisible(lastScrollY > currentScrollY || currentScrollY < 250);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHeaderBackground("bg-white/70");
      } else {
        setHeaderBackground("bg-transparent");
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", onScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && target && !target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-4 text-sm font-medium text-gray-800 transition-all duration-500 ease-in-out lg:py-3 ${headerBackground} ${
        !visible ? "-translate-y-full" : ""
      }`}
    >
      <nav
        className={` mx-auto flex w-full max-w-screen-2xl items-center justify-between `}
      >
        <div className="flex items-center justify-center">
          <Image
            height={29}
            width={29}
            alt="logo"
            src="/seovileo.svg"
            priority
            className="mr-1"
          />
          <p>Seovileo</p>
        </div>

        <button
          className="flex flex-col items-center justify-center lg:hidden"
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
        <ul
          className={`absolute left-0 top-0 flex h-screen flex-col items-center justify-center space-y-5 bg-white/90 px-24 transition-transform lg:relative lg:h-auto lg:flex-row lg:items-center lg:justify-center lg:space-y-0 lg:bg-transparent ${
            isMenuOpen
              ? "translate-x-0 duration-200 "
              : "-translate-x-full duration-500 lg:translate-x-0"
          } `}
        >
          {NAV_LINKS.map((link) => (
            <li>
              <Link
                href={link.href}
                className={`px-4 py-2 transition-colors duration-200 hover:text-orange-700 ${
                  pathname === link.href ? "text-orange-700" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
