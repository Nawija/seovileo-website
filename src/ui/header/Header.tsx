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
      setVisible(lastScrollY > currentScrollY || currentScrollY < 50);
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
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "";
      document.body.style.overflow = "";
    }
    const handleOutsideClick = (event) => {
      // Sprawdź czy nawigacja jest otwarta i czy kliknięcie miało miejsce poza nawigacją
      if (isMenuOpen && !event.target.closest("nav")) {
        setIsMenuOpen(false);
      }
    };

    // Dodanie nasłuchiwacza zdarzeń
    document.addEventListener("click", handleOutsideClick);

    // Usunięcie nasłuchiwacza zdarzeń
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full font-medium">
      <nav
        className={` mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-5 text-sm text-gray-800 transition-transform duration-300 ease-in-out ${
          !visible ? "-translate-y-full" : ""
        }`}
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
          <li>
            <Link className="px-4 py-2" onClick={closeMenu} href="/o-mnie">
              O Mnie
            </Link>
          </li>
          <li>
            <Link className="px-4 py-2" onClick={closeMenu} href="/o-mnie">
              Oferta
            </Link>
          </li>
          <li>
            <Link className="px-4 py-2" onClick={closeMenu} href="/galeria">
              Galeria
            </Link>
          </li>
          <li>
            <Link className="px-4 py-2" onClick={closeMenu} href="/galeria">
              Blog
            </Link>
          </li>
          <li>
            <Link className="px-4 py-2" onClick={closeMenu} href="/kontakt">
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
