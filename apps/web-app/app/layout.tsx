import type { Metadata } from "next";
import { Poppins, Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import UpperFooter from "@/components/UpperFooter";
import BackToTop from "@/components/BackToTop";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "sahibinden",
  description: "Modern marketplace built with Next.js and Tailwind 4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${openSans.variable}`}
    >
      <body className="antialiased">
        <Header />
        <main className="pt-[76px]">
          {children}
        </main>
        <UpperFooter />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}