import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
  description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale. Alătură-te evenimentelor noastre și contribuie la o cauză nobilă.",
  keywords: ["caritate", "evenimente", "olimpiada de fapte bune", "donații", "voluntariat", "comunitate", "România", "Asociația General Magheru 68"],
  authors: [{ name: "Asociația General Magheru 68" }],
  robots: "index, follow",
  openGraph: {
    title: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
    description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale.",
    type: "website",
    locale: "ro_RO",
    siteName: "Asociația General Magheru 68",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
    description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
