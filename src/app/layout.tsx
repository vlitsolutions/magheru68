import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://magheru68.ro'),
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
    images: [
      {
        url: "/logo_black.png",
        width: 300,
        height: 300,
        alt: "Asociația General Magheru 68 Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
    description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale.",
    images: ["/logo_black.png"],
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
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
