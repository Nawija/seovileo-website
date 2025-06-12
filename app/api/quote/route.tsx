import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const entries = Array.from(formData.entries());
  const fields: Record<string, string | string[]> = {};

  for (const [key, value] of entries) {
    if (fields[key]) {
      // Jeśli już istnieje — zamieniamy na tablicę
      if (Array.isArray(fields[key])) {
        (fields[key] as string[]).push(value.toString());
      } else {
        fields[key] = [fields[key] as string, value.toString()];
      }
    } else {
      fields[key] = value.toString();
    }
  }

  // Oblicz łączną cenę
  const total = Object.values(fields)
    .flat()
    .map((v) => Number(v))
    .filter((n) => !isNaN(n))
    .reduce((acc, curr) => acc + curr, 0);

  const emailHtml = `
    <h2>Nowa wycena strony internetowej</h2>
    <p><strong>Całkowita cena:</strong> ${total} zł</p>
    <ul>
      ${Object.entries(fields)
        .map(([key, val]) => {
          if (Array.isArray(val)) {
            return `<li><strong>${key}:</strong> ${val.join(", ")}</li>`;
          }
          return `<li><strong>${key}:</strong> ${val}</li>`;
        })
        .join("")}
    </ul>
  `;

  // Konfiguracja nodemailer (Gmail przykład – najlepiej dodać ENV)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // np. twojemail@gmail.com
      pass: process.env.EMAIL_PASS, // hasło lub app password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Wycena strony`,
      to: process.env.EMAIL_RECEIVER,
      subject: "Nowa wycena strony internetowej",
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: "Wysłano wycenę!" });
  } catch (error) {
    console.error("Błąd podczas wysyłania e-maila:", error);
    return NextResponse.json(
      { success: false, message: "Błąd podczas wysyłania e-maila." },
      { status: 500 },
    );
  }
}
