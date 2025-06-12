"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MainBtn } from "../ui/buttons/MainBtn";

const FormField = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  label,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  label?: string;
}) => {
  return (
    <div className="relative w-full max-w-4xl">
      {label && (
        <label htmlFor={name} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <div className={`relative`}>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`border-main bg-main outline-brand w-full rounded border p-2 pr-10 text-white/80 outline-0 lg:pr-2`}
        />
      </div>
    </div>
  );
};

const MessageStatus = ({
  status,
  loading,
  statusType,
}: {
  status: string | null;
  loading: boolean;
  statusType: "success" | "error" | null;
}) => (
  <div className="flex items-center space-x-2 text-sm">
    {loading && (
      <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-emerald-500 border-t-transparent"></div>
    )}
    <p
      className={`ml-2 ${
        statusType === "success"
          ? "text-green-600"
          : statusType === "error"
            ? "text-red-700"
            : "text-black"
      }`}
    >
      {status}
    </p>
  </div>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);
  const [statusType, setStatusType] = useState<"success" | "error" | null>(
    null,
  );
  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Wysyłanie...");
    setLoading(true);
    setStatusType(null);

    try {
      const phoneDigitsOnly = formData.phone.replace(/\D/g, "");
      if (phoneDigitsOnly.length < 9) {
        setStatus("Numer telefonu musi zawierać co najmniej 9 cyfr.");
        setStatusType("error");
        return;
      }
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Wiadomość wysłana!");
        setStatusType("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          message: "",
        });

        setTimeout(() => {
          router.push("/dziekuje");
        }, 500);
      } else {
        setStatus("Błąd podczas wysyłania.");
        setStatusType("error");
      }
    } catch (error) {
      console.error("Błąd podczas wysyłania formularza:", error);
      setStatus("Błąd podczas wysyłania.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-main z-[9999] mx-auto max-w-2xl rounded-lg border bg-white/5 p-4 px-6 text-start text-white/80">
      <p className="text-center text-2xl">Formularz kontaktowy</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <FormField
          name="name"
          placeholder="Imię i nazwisko"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormField
          name="email"
          type="email"
          placeholder="Adres e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormField
          name="phone"
          placeholder="Nr telefonu"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Kilka słów o tym jaka strona Cię interesuje."
          required
          className="outline-brand border-main bg-main w-full rounded border p-2 outline-0"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <div className="ml-auto w-full text-end">
          <MainBtn type="submit">
            {status ? (
              <MessageStatus
                status={status}
                loading={loading}
                statusType={statusType}
              />
            ) : (
              <span>Wyślij wiadomość</span>
            )}
          </MainBtn>
        </div>
      </form>
    </div>
  );
}
