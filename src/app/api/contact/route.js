import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/mailer";

export async function POST(req) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Thiếu dữ liệu" }, { status: 400 });
  }

  try {
    await sendMail({ name, email, message });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 500 });
  }
}
