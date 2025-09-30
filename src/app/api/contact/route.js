import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Lấy dữ liệu từ form
    const formData = await req.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Cấu hình transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Gửi mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,
      subject: `Liên hệ từ ${name}`,
      text: message,
      html: `
        <h3>Bạn nhận được tin nhắn mới:</h3>
        <p><b>Họ tên:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Nội dung:</b> ${message}</p>
      `,
    });

    return new Response("Gửi mail thành công ✅", { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response("Lỗi: " + err.message, { status: 500 });
  }
}
