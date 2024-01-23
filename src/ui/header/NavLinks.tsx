"use client";

import { NAV_BTN_LINKS, NAV_LINKS } from "@/src/constants";
import { MainBtn } from "@/src/ui/buttons/MainBtn";
import clsx from "clsx";
import Link from "next/link";
import { SecondBtn } from "../buttons/SecondBtn";

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
    <div className="hidden items-center justify-center space-x-6 text-sm font-medium md:flex">
      <ul className="flex-c space-x-6">
        {NAV_LINKS.map((l, index) => (
          <li className="flex-c" key={index}>
            <Link
              className={clsx(
                `relative p-3`,
                {
                  "text-orange-500": pathname === l.href,
                },
                {
                  "transition-colors hover:text-orange-500":
                    pathname !== l.href,
                },
              )}
              href={l.href}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      {NAV_BTN_LINKS.map((btn, index) => (
        <Link key={index} href={btn.href}>
          {index % 2 === 0 ? (
            <SecondBtn className="w-max">{btn.label}</SecondBtn>
          ) : (
            <MainBtn className="w-max">{btn.label}</MainBtn>
          )}
        </Link>
      ))}
    </div>
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
      className={`border-main absolute left-0 top-0 z-[50] flex h-screen w-screen flex-col items-center justify-center space-y-9 border-r bg-[#fefefead] px-24 text-[15px] font-medium drop-shadow-2xl backdrop-blur-md transition-transform duration-200 ease-in-out md:hidden 
      ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
    >
      {NAV_LINKS.map((l, index) => (
        <li key={index}>
          <Link
            href={l.href}
            onClick={handleMenu}
            className={clsx(`p-3`, {
              "text-second": pathname === l.href,
            })}
          >
            {l.label}
          </Link>
        </li>
      ))}
      {NAV_BTN_LINKS.map((btn, index) => (
        <Link key={index} href={btn.href} onClick={handleMenu}>
          {index % 2 === 0 ? (
            <SecondBtn className="w-max">{btn.label}</SecondBtn>
          ) : (
            <MainBtn className="w-max">{btn.label}</MainBtn>
          )}
        </Link>
      ))}
    </ul>
  );
}
