import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atiwitch Jitamornpak | Data Science & AI Portfolio",
  description:
    "Portfolio of Atiwitch Jitamornpak — Data Science & AI Enthusiast. Bridging Applied Statistics and Enterprise AI Solutions.",
  keywords: [
    "Data Science",
    "AI",
    "Machine Learning",
    "RAG",
    "Portfolio",
    "Atiwitch",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
