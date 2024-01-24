import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex mx-auto max-w-[1700px]">
    <div className="hidden lg:flex flex-col items-center justify-start w-64 sticky top-10 space-y-2 pt-10 bg-[#1C1C1C] min-h-screen">
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/blog" className="hover:underline underline-offset-2">Blog</Link>
    </div>
      <main className="min-h-screen w-full lg:py-12 bg-[#121212]">{children}</main>
    </div>
  );
}
