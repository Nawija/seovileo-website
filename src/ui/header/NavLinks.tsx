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
    href: "/uslugi",
    label: "Usługi",
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
  {
    href: "/darmowa-wycena",
    label: "Darmowa Wycena",
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
    <ul className="hidden items-center justify-center space-x-6 text-[15px] font-medium md:flex">
      {navLinks.map((l, index) => (
        <li className="flex-c" key={index}>
          {index < navLinks.length - 1 ? (
            <Link
              className={clsx(
                `p-3 relative`,
                {
                  "text-[#2755c1]": pathname === l.href,
                },
                {
                  "transition-colors hover:text-[#2755c1]": pathname !== l.href,
                },
              )}
              href={l.href}
            >
              {l.label}
              <div
                className={clsx(`absolute h-1.5 w-1.5 rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2`, {
                  "bg-[#2755c1] ": pathname === l.href,
                })}
              />
            </Link>
          ) : (
            <Link href={l.href}>
              <MainBtn>{l.label}</MainBtn>
            </Link>
          )}
        </li>
      ))}
    </ul>
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
      className={`absolute left-0 top-0 z-[50] flex h-screen flex-col items-center justify-center space-y-12 border-r bg-white px-20 font-medium drop-shadow-2xl transition-transform duration-200 md:hidden 
      ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      {navLinks.map((l, index) => (
        <li key={index}>
          {index < navLinks.length - 1 ? (
            <Link
              href={l.href}
              onClick={handleMenu}
              className={clsx(`p-3`, {
                "text-[#2755c1]": pathname === l.href,
              })}
            >
              {l.label}
            </Link>
          ) : (
            <Link href={l.href} onClick={handleMenu}>
              <MainBtn>{l.label}</MainBtn>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
