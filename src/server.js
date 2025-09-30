const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");

const { site } = require("./data/site.config.js");
const { projects } = require("./data/projects.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// View engine + layouts
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layout"); // views/layout.ejs

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

// Globals cho mọi view
app.use((req, res, next) => {
  res.locals.site = site;
  res.locals.currentPath = req.path;
  next();
});

// Routes
app.get("/", (req, res) => {
  res.render("index", { projects: projects.slice(0, 3) });
});

app.get("/projects", (req, res) => {
  res.render("projects", { projects });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact", { sent: false });
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .render("contact", { sent: false, error: "Vui lòng điền đủ thông tin." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Portfolio <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: site.email,
      replyTo: email,
      subject: `Liên hệ từ ${name}`,
      text: message,
      html: `<p><b>Tên:</b> ${name}</p><p><b>Email:</b> ${email}</p><p>${message}</p>`,
    });

    res.render("contact", { sent: true });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .render("contact", {
        sent: false,
        error: "Có lỗi khi gửi email. Thử lại sau.",
      });
  }
});

// 404
app.use((req, res) => {
  res.status(404).render("layout", {
    title: "Không tìm thấy",
    body: `<div class="max-w-3xl mx-auto py-16 text-center"><h1 class="text-3xl font-bold mb-4">404 - Không tìm thấy</h1><a href="/" class="text-blue-600 underline">Quay về trang chủ</a></div>`,
  });
});

app.listen(PORT, () =>
  console.log(`✅ Server chạy tại http://localhost:${PORT}`)
);
