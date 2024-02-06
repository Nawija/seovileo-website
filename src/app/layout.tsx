import "@/src/app/globals.css";
import { inter } from "@/src/ui/fonts";
import Footer from "@/src/ui/footer/Footer";
import type { Metadata } from "next";
import Header from "../ui/header/Header";

export const metadata: Metadata = {
  title: "Seovileo-website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
