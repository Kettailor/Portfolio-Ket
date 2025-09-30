import nodemailer from "nodemailer";
import { site } from "../data/site.config";

export async function sendMail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });

  await transporter.sendMail({
    from: `Portfolio <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: site.email,
    replyTo: email,
    subject: `Liên hệ từ ${name}`,
    html: `<p><b>Tên:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
  });
}
