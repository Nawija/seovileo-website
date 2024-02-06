"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      setVisible(lastScrollY > currentScrollY || currentScrollY < 80);
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between bg-black px-10 py-3 text-white transition-transform duration-300 ease-in-out text-sm ${
        !visible ? "-translate-y-full" : ""
      }`}
    >
      <div className="flex items-center justify-center">
        <Image height={29} width={29} alt="logo" src="/seovileo.svg" priority className="mr-1" />
        <p>Seovileo</p>
      </div>

      <button
        className="flex flex-col items-center justify-center lg:hidden"
        onClick={toggleMenu}
      >
        <div
          className={`mb-2 h-px w-4 bg-white transition-transform ${
            isMenuOpen
              ? "translate-y-1 rotate-[-135deg]  duration-200"
              : "duration-300"
          }`}
        />
        <div
          className={`h-px w-4 bg-white transition-transform ${
            isMenuOpen
              ? "-translate-y-1 -rotate-45 duration-500"
              : "duration-500"
          }`}
        />
      </button>
      <ul
        className={`absolute left-0 top-full flex h-screen flex-col items-center justify-center space-y-5 bg-black px-24 text-white transition-transform lg:relative lg:h-auto lg:flex-row lg:items-center lg:justify-center lg:space-x-7 lg:space-y-0 ${
          isMenuOpen
            ? "translate-x-0 duration-200 "
            : "-translate-x-full duration-500 lg:translate-x-0"
        } `}
      >
        <li>
          <Link href="/">O Mnie</Link>
        </li>
        <li>
          <Link href="/">Galeria</Link>
        </li>
        <li>
          <Link href="/">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
