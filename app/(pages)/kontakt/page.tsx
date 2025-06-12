export const dynamic = "force-static";
import ContactBtns from "@/components/contact/ContactBtns";
import ContactForm from "@/components/contact/ContactForm";
import { Metadata } from "next";

const pageTitle = "Seovileo - Audyty SEO, Strony Internetowe które Sprzedają";
const pageDescription =
  "Tworzymy skuteczne strony www ✅ z myślą o SEO i użytkowniku. UI/UX ✅, audyt ✅, optymalizacja - wszystko w jednym miejscu. ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/kontakt",
  },
  title: pageTitle,
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: heroImage,
        width: 350,
        height: 350,
        alt: pageTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [heroImage],
  },
};

export default function ContactPage() {
  return (
    <div className="anim-opacity mx-auto max-w-screen-md px-4 py-6 text-center text-white/80">
      <div className="px-6 py-1 pb-8 sm:px-12">
        <h1 className="py-12 text-2xl text-white lg:text-3xl">
          Porozmawiajmy o Stronie Internetowej
        </h1>
        <p>
          Masz pytania dotyczące oferty, chcesz sprawdzić dostępność terminu lub
          po prostu porozmawiać? Skontaktuj się ze mną - jako zawsze jestem
          otwarty na rozmowę i pomogę jak tylko potrafię.
        </p>
      </div>

      <ContactBtns />

      <section className="pt-8 text-left">
        <ContactForm />
      </section>
    </div>
  );
}
