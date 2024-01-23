"use client";

import { Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [opened, { open, close }] = useDisclosure(false);
  const [showMenu, setShowMenu] = useState(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <header className="text-main border-main bg-body sticky top-0 z-[999] w-full border-b px-4 py-2">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
        {/* Your Logo */}
        <Link href="/" aria-label="Logo" className="flex-c z-[999]">
          <Image
            src="/seovileo.svg"
            height={30}
            width={30}
            priority
            alt="seovileo logo"
          />
          <p className="ml-1 text-sm font-medium">Seovileo</p>
        </Link>

        {/* Mantine Drawer */}
        <Drawer
          opened={opened}
          onClose={close}
          position="right"
          size="xl"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
          title="Header is sticky"
        >
          {content}
        </Drawer>

        <button onClick={open}>Menu</button>
      </div>
    </header>
  );
}
