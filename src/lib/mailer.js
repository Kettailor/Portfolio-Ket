import nodemailer from "nodemailer";

export async function sendMail({ name, email, message }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_PORT === "465", // Gmail: true nếu 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"${name}" <${email}>`,
    to: process.env.SMTP_USER, // nhận mail ở hòm thư cấu hình
    subject: `Liên hệ từ ${name}`,
    text: message,
    html: `
      <h3>Tin nhắn mới từ form liên hệ:</h3>
      <p><strong>Họ tên:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Nội dung:</strong></p>
      <p>${message}</p>
    `,
  });
}
