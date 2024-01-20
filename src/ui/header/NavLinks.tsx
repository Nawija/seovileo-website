"use client";

import { MainBtn } from "@/src/ui/buttons/MainBtn";
import clsx from "clsx";
import Link from "next/link";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/galeria",
    label: "Galeria",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/kontakt",
    label: "Kontakt",
  },
];

type DesctopNavLinksType = {
  pathname: string;
  showMenu: boolean;
};
type MobileNavLinksType = {
  pathname: string;
  showMenu: boolean;
  handleMenu: () => void;
};

export function DesctopNavLinks({ pathname }: DesctopNavLinksType) {
  return (
    <>
      <ul className="hidden items-center justify-center space-x-6 text-sm font-medium md:flex">
        {navLinks.map((l, index) => (
          <li className="flex-c" key={index}>
            <Link
              className={clsx(
                `relative p-3`,
                {
                  "text-orange-500": pathname === l.href,
                },
                {
                  "transition-colors hover:text-orange-500": pathname !== l.href,
                },
              )}
              href={l.href}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export function MobileNavLinks({
  pathname,
  showMenu,
  handleMenu,
}: MobileNavLinksType) {
  return (
    <ul
      id="mobile-nav"
      className={`border-main absolute left-0 top-0 z-[50] flex h-screen w-screen flex-col items-center justify-center space-y-9 border-r bg-[#46171785] px-24 text-[15px] font-medium drop-shadow-2xl backdrop-blur-md transition-transform duration-200 ease-in-out md:hidden 
      ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      {navLinks.map((l, index) => (
        <li key={index}>
          {index < navLinks.length - 1 ? (
            <Link
              href={l.href}
              onClick={handleMenu}
              className={clsx(`p-3`, {
                "text-second": pathname === l.href,
              })}
            >
              {l.label}
            </Link>
          ) : (
            <Link href={l.href} onClick={handleMenu}>
              <MainBtn className="w-max">{l.label}</MainBtn>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
