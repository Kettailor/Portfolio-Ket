import Image from "next/image";
import { site } from "../site.config";
import Link from "next/link";

export default function HomePage() {
    return (
        <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="text-4xl font-extrabold">
                    Xin chào, mình là <span className="text-blue-600">{site.name}</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700">{site.role}</p>
                <p className="mt-4 text-gray-600">{site.description}</p>
                <div className="mt-6">
                    <Link
                        href="/projects"
                        className="inline-block bg-blue-600 text-white px-5 py-3 rounded-xl"
                    >
                        Xem dự án
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-block ml-3 border px-5 py-3 rounded-xl"
                    >
                        Liên hệ
                    </Link>
                </div>
            </div>
            <div className="justify-self-center">
                <Image
                    src="/images/avatar.jpg"
                    alt="Avatar"
                    width={224}
                    height={224}
                    className="rounded-full object-cover shadow"
                />
            </div>
        </section>
    );
}
