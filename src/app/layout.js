import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Scribble - Avishka Gihan's Next.js Blog",
    template: "%s | Avishka Gihan's Scribble",
  },
  description:
    "Join me, Avishka Gihan, on Scribble, where I share my thoughts, experiences, and insights on Next.js development. Explore cutting-edge web development techniques and best practices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
