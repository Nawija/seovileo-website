import { BLOG_LINKS } from "@/src/constants";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1700px]">
      <div className="border-main sticky top-10 mx-auto hidden min-h-screen w-64 flex-col items-center justify-start space-y-2 border-r bg-[#171717] pt-10 text-center lg:flex">
        <div className="flex flex-col items-start justify-center">
          {BLOG_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="underline-offset-2 hover:underline"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <main className="min-h-screen w-full flex-grow bg-[#1d1d1e]">
        {children}
      </main>
    </div>
  );
}
