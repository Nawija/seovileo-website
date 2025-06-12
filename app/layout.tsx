import "@/app/globals.css";
import { inter } from "@/components/fonts";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Providers from "../components/ProgressBarProvider";
import Header from "../components/header/Header";
const ScrollUp = dynamic(() => import("@/components/ui/buttons/ScrollUp"));
const Footer = dynamic(() => import("@/components/footer/Footer"));

export const metadata: Metadata = {
  metadataBase: new URL("https://seovileo.pl"),
  openGraph: {
    url: "https://seovileo.pl/",
    siteName: "Seovileo",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <head>
        <meta name="theme-color" content="#141414" />
      </head>
      <body className={`${inter.className}`}>
        <Header />
        <Providers>
          <main className="min-h-screen">{children}</main>
        </Providers>
        <div
          id="bgBlur"
          className="anim-opacity fixed inset-0 -z-10 h-full w-full"
        />
        <ScrollUp />
        <Footer />
      </body>
    </html>
  );
}
