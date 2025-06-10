"use client";

import Breadcrumbs from "@/components/BreadCrumb";
import { MessageSquareText } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SuccesBtn } from "../ui/buttons/SuccessBtn";

type PortfolioItemType = {
  id: string;
  tech: {
    label: string;
    link: string;
  };
  href: string;
  url: string | StaticImageData;
  color: string;
  label: string;
  desc: string;
  prevPrice: string;
  price: string;
  link: string;
};

export default function ImplementationForm({
  portfolioItem,
}: {
  portfolioItem: PortfolioItemType;
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
      <div
        style={{ backgroundColor: `${portfolioItem.color}` }}
        className={`absolute top-0 left-1/2 -z-10 h-[25vh] w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] lg:blur-[300px]`}
      />
      <Toaster position="bottom-right" />
      <Breadcrumbs />
      <div className="flex items-center justify-center px-4 py-6 md:px-6 md:py-16 2xl:container 2xl:mx-auto 2xl:px-0">
        <div className="flex w-full flex-col items-start justify-start space-y-9">
          <div className="flex w-full flex-col justify-center space-y-6 xl:flex-row xl:justify-between xl:space-y-0 xl:space-x-6">
            {/* Karta z szablonem */}
            <div className="border-main flex flex-col items-center justify-center rounded-xl border bg-white/5 px-10 py-7 shadow-md backdrop-blur-lg sm:flex-row sm:py-0 xl:w-3/5 xl:flex-col xl:py-10">
              <div className="flex w-full flex-col items-start space-y-4 font-bold xl:px-10">
                <p className="text-base text-white md:text-2xl">
                  {portfolioItem.label}
                </p>
                <Image
                  src={portfolioItem.url}
                  className="h-full w-full rounded-lg object-contain"
                  width={400}
                  height={300}
                  alt={portfolioItem.label}
                />
              </div>
            </div>

            {/* Formularz */}
            <form
              onSubmit={handleSubmit}
              className="border-main flex flex-col space-y-4 rounded-xl border bg-white/5 p-8 backdrop-blur-lg lg:w-full xl:w-3/6"
            >
              <input
                type="hidden"
                name="templateName"
                value={portfolioItem.label}
              />

              <div>
                <label className="text-sm font-medium text-gray-100">
                  Imię i nazwisko
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-main mt-1 w-full rounded-lg border bg-gray-200 p-3 text-sm shadow-sm placeholder:text-gray-700 focus:border-black focus:outline-none"
                  placeholder="Jan Kowalski"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-100">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-main mt-1 w-full rounded-lg border bg-gray-200 p-3 text-sm shadow-sm placeholder:text-gray-700 focus:border-black focus:outline-none"
                  placeholder="Twój email"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-100">
                  Wiadomość
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-main mt-1 w-full rounded-lg border bg-gray-200 p-3 text-sm shadow-sm placeholder:text-gray-700 focus:border-black focus:outline-none"
                  placeholder="Napisz swoją wiadomość..."
                  required
                />
              </div>
              <div className="flex items-center justify-end px-2 space-x-2">
                <MessageSquareText size={17} />
                <p className="text-sm">Odpisuje w ciagu 24h</p>
              </div>

              <SuccesBtn
                type="submit"
                disabled={loading}
                className={`mt-4 w-full py-4 text-base ${loading ? "cursor-not-allowed opacity-70" : ""}`}
              >
                {loading ? "Wysyłanie..." : `Zamów szablon`}
              </SuccesBtn>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
