import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { site } from "../data/site.config";



export const metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: "/favicon.ico",    
    shortcut: "/favicon.ico",
    apple: "/logo.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
