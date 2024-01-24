import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-start mx-auto max-w-[1700px]">
    <div className="flex flex-col items-center justify-start w-64 sticky top-10 space-y-2 pt-10 bg-[#1C1C1C] h-screen">
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
      <Link href="/" className="hover:underline underline-offset-2">Strona Internetowa</Link>
    </div>
      <main className="text-p min-h-screen">{children}</main>
    </div>
  );
}
