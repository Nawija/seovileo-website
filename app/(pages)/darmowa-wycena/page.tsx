"use client";

import SpinerLoading from "@/components/SpinerLoading";
import { MainBtn } from "@/components/ui/buttons/MainBtn";
import { useRouter } from "next/navigation";
import { useState } from "react";

type RadioOption = {
  label: string;
  value: number;
};

type CheckboxOption = {
  label: string;
  name: string;
  value: number;
  index: number;
};

type RadioSection = {
  label: string;
  name: string;
  type: "radio";
  options: RadioOption[];
  index: number;
};

type CheckboxSection = {
  label: string;
  type: "checkbox";
  options: CheckboxOption[];
};

type FormSection = RadioSection | CheckboxSection;

const formSections: FormSection[] = [
  {
    label: "Jakiego rodzaju stronę potrzebujesz?",
    name: "PageType",
    type: "radio",
    options: [
      { label: "Landing Page (1 strona, oferta)", value: 1400 },
      { label: "Strona firmowa (3-5 podstron)", value: 2000 },
      { label: "Sklep internetowy (produkty, koszyk, płatności)", value: 3500 },
      { label: "Dedykowany system (np. CRM, rezerwacje)", value: 4500 },
    ],
    index: 0,
  },
  {
    label: "Czy potrzebujesz domeny?",
    name: "Domena",
    type: "radio",
    options: [
      { label: "Tak (zakup + konfiguracja domeny)", value: 70 },
      { label: "Nie, mam własną", value: 0 },
    ],
    index: 1,
  },
  {
    label: "Czy potrzebujesz hostingu?",
    name: "Hosting",
    type: "radio",
    options: [
      { label: "Tak (roczna opłata + konfiguracja)", value: 200 },
      { label: "Nie, mam własny", value: 0 },
    ],
    index: 2,
  },
  {
    label: "Dodatkowe funkcje:",
    type: "checkbox",
    options: [
      {
        label: "Blog (system artykułów)",
        name: "Blog",
        value: 300,
        index: 3,
      },
      {
        label: "Strefa klienta (logowanie, konta, panel użytkownika)",
        name: "StrefaKlienta",
        value: 600,
        index: 4,
      },
      {
        label: "Formularz kontaktowy",
        name: "FormularzKontaktowy",
        value: 150,
        index: 5,
      },
      {
        label: "Integracja z mapą Google",
        name: "MapaGoogle",
        value: 50,
        index: 6,
      },
      {
        label: "Optymalizacja SEO (podstawowa)",
        name: "SEO",
        value: 250,
        index: 7,
      },
      {
        label: "Wielojęzyczność (np. PL / EN)",
        name: "Multijezyk",
        value: 400,
        index: 8,
      },
      {
        label: "CMS - możliwość edycji treści (np. panel admina)",
        name: "CMS",
        value: 500,
        index: 9,
      },
      {
        label: "Animacje i efekty scrollowania (premium UI)",
        name: "Animacje",
        value: 300,
        index: 10,
      },
    ],
  },
];

export default function OfertaPage() {
  const router = useRouter();
  const [values, setValues] = useState(Array(10).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalValue = values.reduce((acc, val) => acc + (val || 0), 0);

  const updateValue = (index: number, value: number | null) => {
    setValues((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const res = await fetch("/api/quote", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Błąd serwera");
    } finally {
      setIsSubmitting(false);
      router.push("/dziekuje");
    }
  };

  return (
    <div className="anim-opacity relative min-h-screen w-full pt-36 pb-24">
      <img
        src="https://images.unsplash.com/photo-1700316740839-f5afe22536e4?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="tło"
        className="fixed top-0 left-0 -z-10 h-full w-full object-cover opacity-20"
      />

      <div className="bg-main/80 border-main container mx-auto max-w-4xl rounded-xl border p-8 shadow-2xl">
        <h1 className="mb-12 text-center text-3xl font-bold tracking-wider text-white/70 uppercase">
          Kalkulator Strony internetowej
        </h1>

        <form
          onSubmit={handleSubmit}
          method="POST"
          acceptCharset="UTF-8"
          className="space-y-8"
        >
          {formSections.map((section, i) => (
            <div key={i}>
              <p className="mb-3 font-semibold text-green-300">
                {section.label}
              </p>
              <div className="space-y-2">
                {section.type === "radio" &&
                  section.options.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center space-x-3 text-white/70"
                    >
                      <input
                        type="radio"
                        name={section.name}
                        value={opt.value}
                        checked={values[section.index!] === opt.value}
                        onChange={() => updateValue(section.index!, opt.value)}
                        className="accent-amber-400"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}

                {section.type === "checkbox" &&
                  section.options.map((opt) => (
                    <label
                      key={opt.name}
                      className="flex items-center space-x-3 text-white/70"
                    >
                      <input
                        type="checkbox"
                        name={opt.name}
                        value={opt.value}
                        checked={values[opt.index!] === opt.value}
                        onChange={(e) =>
                          updateValue(
                            opt.index!,
                            e.target.checked ? opt.value : null,
                          )
                        }
                        className="accent-amber-400"
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
              </div>
            </div>
          ))}

          <div>
            <label
              htmlFor="vision"
              className="mb-2 block font-semibold text-green-300"
            >
              Opisz swoją wizję
            </label>
            <textarea
              id="vision"
              name="OpisFirmy"
              className="border-main bg-main w-full rounded-md border px-4 py-3 outline-0"
              rows={4}
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="branding"
              className="mb-2 block font-semibold text-green-300"
            >
              Posiadasz identyfikację wizualną?
            </label>
            <textarea
              id="branding"
              name="IdentyfikacjaFirmy"
              className="border-main bg-main w-full rounded-md border px-4 py-3 outline-0 placeholder:text-black"
              rows={4}
            ></textarea>
            <p className="mt-1 text-sm text-gray-300">
              Napisz czy masz logo, kolory firmowe, grafiki itd.
            </p>
          </div>

          <div>
            <label
              htmlFor="inspiration"
              className="mb-2 block font-semibold text-green-300"
            >
              Wygląd strony - inspiracje
            </label>
            <textarea
              id="inspiration"
              name="Inspiracja"
              placeholder="Linki, style, inspiracje..."
              className="border-main bg-main w-full rounded-md border px-4 py-3 outline-0"
              rows={4}
            ></textarea>
            <p className="mt-1 text-sm text-gray-300">
              Podaj linki do stron, które Ci się podobają lub styl graficzny.
            </p>
          </div>

          <div className="flex items-center justify-between border-t pt-6">
            <p className="text-xl font-bold text-green-400">
              Cena: {totalValue} zł
            </p>
            <MainBtn type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="flex items-center">
                  <SpinerLoading />
                  <p className="pl-2">Wysyłanie...</p>
                </div>
              ) : (
                "Wyślij formularz"
              )}
            </MainBtn>
          </div>
        </form>
      </div>
    </div>
  );
}
