import { BLOG_LINKS } from "@/src/constants";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex max-w-[1700px]">
      <div className="border-main sticky top-10 mx-auto hidden min-h-screen w-64 flex-col items-center justify-start space-y-2 border-r bg-[#1a1919] pt-10 text-center lg:flex">
        <div className="flex items-start justify-center flex-col">
          {BLOG_LINKS.map((link) => (
            <Link
              href={link.href}
              className="underline-offset-2 hover:underline"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <main className="min-h-screen w-full flex-grow bg-[#161616]">
        {children}
      </main>
    </div>
  );
}
