// ./app/(routers)/zamowienie/szablony/[id]/ZamowienieForm.tsx
"use client";

import Breadcrumbs from "@/components/BreadCrumb";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SuccesBtn } from "../ui/buttons/SuccessBtn";
import Image from "next/image";

const breadcrumbs = [{ title: "szablony", href: "/szablony" }];

export default function ImplementationForm({
  portfolioItem,
}: {
  portfolioItem: any;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Uzupełnij wszystkie pola.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          templateName: portfolioItem.label,
        }),
      });

      if (!res.ok) throw new Error("Błąd wysyłki");

      toast.success("Wiadomość wysłana pomyślnie!");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast.error("Wystąpił błąd. Spróbuj ponownie.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="anim-opacity mx-auto max-w-screen-2xl">
      <Toaster position="bottom-right" />
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className="flex items-center justify-center px-4 py-16 md:px-6 2xl:container 2xl:mx-auto 2xl:px-0">
        <div className="flex w-full flex-col items-start justify-start space-y-9">
          <div className="flex w-full flex-col justify-center space-y-6 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6">
            {/* Karta z szablonem */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-gray-100 px-10 py-7 shadow-md sm:flex-row sm:py-0 xl:w-3/5 xl:flex-col xl:py-10">
              <div className="flex w-full flex-col items-start space-y-4 font-bold xl:px-20">
                <p className="text-xl text-gray-800 md:text-2xl">
                  {portfolioItem.label}
                </p>
                <p className="text-base text-gray-600 lg:text-lg">
                  {portfolioItem.price} zł
                </p>
              </div>
              <div className="mt-6 w-52 sm:mt-0 sm:w-96 xl:my-10 xl:w-full xl:px-20">
                <Image
                  src={portfolioItem.url}
                  className="h-full w-full rounded-lg object-cover"
                  width={800}
                  height={600}
                  alt={portfolioItem.label}
                />
              </div>
            </div>

            {/* Formularz */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 rounded-xl bg-white p-8 shadow-md ring-1 ring-gray-200 lg:w-full xl:w-3/5"
            >
              <input
                type="hidden"
                name="templateName"
                value={portfolioItem.label}
              />

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Imię i nazwisko
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:outline-none"
                  placeholder="Jan Kowalski"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:outline-none"
                  placeholder="Twój email"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Wiadomość
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-1 w-full rounded-lg border border-gray-300 p-3 text-sm shadow-sm focus:border-black focus:outline-none"
                  placeholder="Napisz swoją wiadomość..."
                  required
                />
              </div>

              <SuccesBtn
                type="submit"
                disabled={loading}
                className={`mt-4 w-full py-4 text-base ${loading ? "cursor-not-allowed opacity-70" : ""}`}
              >
                {loading
                  ? "Wysyłanie..."
                  : `Zamów szablon: ${portfolioItem.label}`}
              </SuccesBtn>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
