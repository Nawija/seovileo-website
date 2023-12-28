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

type NavLinkType = {
  pathname: string;
  showMenu: boolean;
};

export function DesctopNavLinks({ pathname }: NavLinkType) {
  return (
    <ul className="hidden items-center justify-center space-x-6 text-[15px] font-medium md:flex">
      {navLinks.map((l, index) => (
        <li className="flex-c" key={index}>
          {index < navLinks.length - 1 ? (
            <Link
              className={clsx(
                `relative overflow-hidden p-3`,
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
export function MobileNavLinks({ pathname, showMenu }: NavLinkType) {
  return (
    <ul
      className={`absolute left-0 top-0 flex h-screen flex-col items-center justify-center space-y-12 border-r bg-white px-20 font-medium drop-shadow-2xl transition-transform md:hidden 
      ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      {navLinks.map((l, index) => (
        <li key={index}>
          {index < navLinks.length - 1 ? (
            <Link className="p-3" href={l.href}>
              {l.label}
            </Link>
          ) : (
            <MainBtn>{l.label}</MainBtn>
          )}
        </li>
      ))}
    </ul>
  );
}
