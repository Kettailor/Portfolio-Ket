"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const nav = [
    { href: "/", label: "Trang chủ" },
    { href: "/projects", label: "Dự án" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/contact", label: "Liên hệ" },
  ];

  return (
    <nav className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold text-lg">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="rounded-full" />
          <span>Portfolio</span>
        </Link>
        <div className="hidden md:flex space-x-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                pathname === n.href
                  ? "text-blue-600 font-medium"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {n.label}
            </Link>
          ))}
        </div>

        <div className="relative w-52">
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            <Image
              src="/images/logo.png"
              alt="Search Logo"
              width={18}
              height={18}
              className="opacity-70, rounded-full"
            />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full pl-10 pr-3 py-2 border rounded-xl focus:ring-2 focus:ring-blue-500/50 text-sm"
          />
        </div>
      </div>
    </nav>
  );
}
