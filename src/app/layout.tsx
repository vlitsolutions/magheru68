import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://magheru68.ro'),
  title: {
    default: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
    template: "%s | Asociația General Magheru 68"
  },
  description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale. Alătură-te evenimentelor noastre și contribuie la o cauză nobilă.",
  keywords: ["caritate", "evenimente", "olimpiada de fapte bune", "donații", "voluntariat", "comunitate", "România", "Asociația General Magheru 68", "Râmnicu Vâlcea", "Gala de Excelența în Educație"],
  authors: [{ name: "Asociația General Magheru 68" }],
  publisher: "Asociația General Magheru 68",
  creator: "Asociația General Magheru 68",
  robots: "index, follow",
  applicationName: "Asociația General Magheru 68",
  category: "Non-profit Organization",
  classification: "Charity",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  openGraph: {
    title: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
    description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale.",
    type: "website",
    locale: "ro_RO",
    url: "https://magheru68.ro",
    siteName: "Asociația General Magheru 68",
    images: [
      {
        url: "/logo_black.webp",
        width: 300,
        height: 300,
        alt: "Asociația General Magheru 68 - Logo oficial al asociației",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asociația General Magheru 68 - Evenimente și Inițiative Sociale",
    description: "Asociația General Magheru 68 dedicată îmbunătățirii comunității prin evenimente și inițiative sociale.",
    images: ["/logo_black.webp"],
    creator: "@magheru68",
    site: "@magheru68",
  },
  alternates: {
    canonical: "https://magheru68.ro",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${poppins.variable} ${dancingScript.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
