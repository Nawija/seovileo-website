import "@/src/app/globals.css";
import { inter } from "@/src/ui/fonts";
import Footer from "@/src/ui/footer/Footer";
import Header from "@/src/ui/header/Header";
import type { Metadata } from "next";
import ScrollUp from "@/src/ui/buttons/ScrollUp";

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
        <meta name="theme-color" content="#F3F4F6" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <div className="h-[200vh]" />
        <ScrollUp />
        <Footer />
      </body>
    </html>
  );
}
