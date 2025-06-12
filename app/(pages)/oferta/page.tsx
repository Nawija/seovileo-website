import CTA from "@/components/CTA";
import { Metadata } from "next";

const pageTitle = "Oferta - Tworzenie Stron www 2025 ✅";
const pageDescription =
  "Cennik i oferta usług tworzenia stron internetowych - wizytówka ✅, strona firmowa ✅, sklep online ✅ Seovileo - sprawdź nas!";

const heroImage = "/seovileo-logo.webp";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://seovileo.pl/oferta",
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

export default function OfertaPage() {
  return (
    <section className="anim-opacity mx-auto max-w-screen-2xl px-6 py-16 text-white md:px-12 lg:px-24">
      {/* Hero */}
      <header className="mx-auto mb-20 max-w-4xl text-center">
        <h1 className="mb-6 text-3xl font-bold md:text-5xl">
          Oferta Tworzenia Stron Internetowych 2025
        </h1>
        <p className="text-lg text-green-200 md:text-xl">
          Nowoczesne, responsywne i dopasowane do Twojego biznesu. Profesjonalna
          strona www to nie koszt - to inwestycja.
        </p>
      </header>

      {/* Cennik pakietów */}
      <div className="mb-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-main border-main rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Strona Wizytówka</h2>
          <p className="mb-4 text-green-200">
            Idealna dla małych firm, freelancerów i usługodawców.
          </p>
          <ul className="mb-4 list-inside list-disc text-gray-400">
            <li>1-3 podstrony</li>
            <li>Formularz kontaktowy</li>
            <li>Hosting i domena</li>
          </ul>
          <p className="text-lg font-bold">Cena: 1500 - 3000zł</p>
        </div>

        <div className="bg-main border-main rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Strona Firmowa</h2>
          <p className="mb-4 text-green-200">
            Profesjonalna strona z ofertą, galerią i rozbudowaną strukturą.
          </p>
          <ul className="mb-4 list-inside list-disc text-gray-400">
            <li>5-10 podstron</li>
            <li>CMS (np. WordPress)</li>
            <li>Optymalizacja SEO</li>
          </ul>
          <p className="text-lg font-bold">Cena: 4000 - 8000zł</p>
        </div>

        <div className="bg-main border-main rounded-2xl border p-6 shadow-sm transition hover:shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Sklep Internetowy</h2>
          <p className="mb-4 text-green-200">
            Sprzedawaj produkty online z pełną automatyzacją.
          </p>
          <ul className="mb-4 list-inside list-disc text-gray-400">
            <li>Integracje płatności i wysyłki</li>
            <li>Panel zarządzania produktami</li>
            <li>Projekt graficzny premium</li>
          </ul>
          <p className="text-lg font-bold">Cena: 10000 - 30000+zł</p>
        </div>
      </div>

      {/* Dlaczego warto */}
      <section className="mx-auto mb-20 max-w-3xl text-white">
        <h2 className="mb-4 text-2xl font-bold">
          Dlaczego warto zainwestować w stronę www?
        </h2>
        <p className="mb-4">
          Strona internetowa to dziś podstawowe narzędzie komunikacji z
          klientem. Działa 24/7, buduje wizerunek, przyciąga nowych klientów i
          zwiększa sprzedaż.
        </p>
        <p className="mb-4">
          Dobrze zaprojektowana strona daje przewagę nad konkurencją i pozwala
          zaistnieć w świadomości odbiorców. To inwestycja, która się zwraca.
        </p>
      </section>

      {/* Co wpływa na koszt */}
      <section className="bg-main border-main rounded-2xl border px-6 py-12 md:px-12">
        <div className="mx-auto max-w-3xl text-green-200">
          <h2 className="mb-4 text-2xl font-semibold">Co wpływa na koszt?</h2>
          <ul className="list-inside list-disc text-gray-400">
            <li>Złożoność projektu i liczba podstron</li>
            <li>Indywidualny projekt graficzny</li>
            <li>Wybór technologii (CMS, autorski kod)</li>
            <li>Integracje z zewnętrznymi systemami</li>
            <li>Poziom wsparcia i utrzymania</li>
          </ul>
        </div>
      </section>

      <CTA
        title="Darmowy kalkulator strony internetowej"
        actionLink="/darmowa-wycena"
        titleBtn="Darmowa wycena"
      />
    </section>
  );
}
