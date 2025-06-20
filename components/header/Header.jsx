"use client";

import { NAV_LINKS } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
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
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          />
        )}
      </AnimatePresence>
      <header
        className={`relative bg-transparent z-50 w-full py-4 text-sm font-medium transition-all duration-500 ease-in-out lg:py-3`}
      >
        <nav
          className={`mx-auto flex w-full max-w-screen-2xl px-4 md:px-8 items-center justify-between`}
        >
          <Link href="/" onClick={closeMenu} className="z-10 mr-12 text-white">
            <Logo h={27} w={27} />
          </Link>
          <div
            className={`border-main bg-main absolute top-0 left-0 flex h-screen w-72 flex-col items-start justify-start border-r pt-24 pl-12 text-start transition-transform lg:absolute lg:top-1/2 lg:left-1/2 lg:h-auto lg:w-max lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:items-center lg:justify-center lg:rounded-lg lg:border lg:bg-none lg:px-4 lg:py-2 lg:pl-0 lg:backdrop-blur-none ${
              isMenuOpen
                ? "translate-x-0 duration-200"
                : "-translate-x-full duration-500"
            } `}
          >
            <div className="mb-12 ml-3 lg:hidden">
              <Suspense fallback={null}>
                <SearchBar />
              </Suspense>
            </div>
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

              <SecondBtn className="fixed top-2 right-0 p-2 px-3 lg:hidden">
                <BsMoonStarsFill className="text-lg" />
              </SecondBtn>
            </ul>
          </div>
          <div className="hidden items-center justify-center space-x-3 lg:flex">
            <Suspense fallback={null}>
              <SearchBar />
            </Suspense>
            <SecondBtn className="p-2 px-3">
              <BsMoonStarsFill className="text-base" />
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
    </>
  );
};

export default Header;
