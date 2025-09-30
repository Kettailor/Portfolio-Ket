export const metadata = { title: "Liên hệ" };

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Liên hệ</h1>
      <form className="mt-6 space-y-4" method="POST" action="/api/contact">
        <div>
          <label className="block text-sm font-medium">Họ và tên</label>
          <input name="name" className="mt-1 w-full border rounded-xl p-3" required/>
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="email" className="mt-1 w-full border rounded-xl p-3" required/>
        </div>
        <div>
          <label className="block text-sm font-medium">Nội dung</label>
          <textarea name="message" rows="5" className="mt-1 w-full border rounded-xl p-3" required></textarea>
        </div>
        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">Gửi</button>
      </form>
    </section>
  );
}


