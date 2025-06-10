import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json(); // <- poprawka tutaj

  const { name, email, message, templateName } = data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "Brakuje danych" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const mailOptions = {
    from: `"Formularz zamówienia" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER!,
    subject: `Nowe zamówienie: ${templateName}`,
    text: `
Imię i nazwisko: ${name}
Email: ${email}
Szablon: ${templateName}
Wiadomość:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Błąd przy wysyłaniu e-maila:", error);
    return NextResponse.json(
      { success: false, error: "Nie udało się wysłać e-maila" },
      { status: 500 }
    );
  }
}
