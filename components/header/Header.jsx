"use client";

import { NAV_LINKS } from "@/constants";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";

import { Logo } from "@/components/ui/Logo";
import { Suspense } from "react";
import { SecondBtn } from "../ui/buttons/SecondBtn";

const SearchBar = dynamic(() => import("@/components/SearchBar"));

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
  }, []);

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
      className={`relative z-50 w-full px-6 py-4 text-sm font-medium transition-all duration-500 ease-in-out lg:py-3`}
    >
      <nav
        className={`mx-auto flex w-full max-w-screen-2xl items-center justify-between`}
      >
        <Link href="/" onClick={closeMenu} className="z-10 mr-12 text-white">
          <Logo h={27} w={27} />
        </Link>
        <div
          className={`border-main bg-main absolute top-0 left-0 flex h-screen w-72 flex-col items-center justify-center border-r text-start backdrop-blur-sm transition-transform lg:absolute lg:top-1/2 lg:left-1/2 lg:h-auto lg:w-max lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:items-center lg:justify-center lg:rounded-lg lg:border lg:bg-none lg:px-4 lg:py-2 lg:backdrop-blur-none ${
            isMenuOpen
              ? "translate-x-0 duration-200"
              : "-translate-x-full duration-500"
          } `}
        >
          <ul className="space-y-5 lg:flex lg:space-y-0">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`rounded-xl px-4 py-2 text-lg font-semibold transition-colors duration-300 hover:text-white lg:text-sm lg:font-medium ${
                    pathname === link.href ? "text-white" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <div className="lg:hidden">
              <Suspense fallback={null}>
                <SearchBar />
              </Suspense>
            </div>
            <SecondBtn className="fixed top-2 right-0 p-2 px-3 lg:hidden">
              <BsMoonStarsFill className="text-lg" />
            </SecondBtn>
          </ul>
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
          <SecondBtn className="p-2 px-3">
            <BsMoonStarsFill className="text-lg" />
          </SecondBtn>
        </div>
        <button
          aria-label="Menu"
          className="flex flex-col items-end justify-center p-2 lg:hidden"
          onClick={toggleMenu}
        >
          <div
            className={`mb-2 h-[2px] bg-white transition-transform ${
              isMenuOpen
                ? "w-5 translate-y-1 rotate-[-135deg] duration-200"
                : "w-5 duration-300"
            }`}
          />
          <div
            className={`h-[2px] w-5 bg-white transition-transform ${
              isMenuOpen
                ? "-translate-y-1.5 rotate-[315deg] duration-500"
                : "duration-500"
            }`}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
