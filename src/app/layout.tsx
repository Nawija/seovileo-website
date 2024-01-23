import "@/src/app/globals.css";
import ScrollUp from "@/src/ui/buttons/ScrollUp";
import { inter } from "@/src/ui/fonts";
import Footer from "@/src/ui/footer/Footer";
import Header from "@/src/ui/header/Header";
import { MantineProvider } from "@mantine/core";
import type { Metadata } from "next";

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
        <meta name="theme-color" content="#0B0B0B" />
      </head>
      <body className={` ${inter.className}`}>
        <MantineProvider>
          <>
            <Header />
            <main className="text-p min-h-screen">{children}</main>
            <ScrollUp />
            <Footer />
          </>
        </MantineProvider>
      </body>
    </html>
  );
}
