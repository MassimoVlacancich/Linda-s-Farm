import type { Metadata } from "next";
import { Fraunces, Karla } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EasterEggs from "@/components/EasterEggs";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linda's Farm Festival",
  description:
    "A cosy countryside festival: bonfires, hay bales, string lights, and rock, country & blues from 5pm to 1am. Today through Sunday.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${karla.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream text-bark">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <EasterEggs />
      </body>
    </html>
  );
}
