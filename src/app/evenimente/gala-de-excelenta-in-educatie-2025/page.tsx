import type { Metadata } from "next";
import StickyHeader from "./components/StickyHeader";
import HeroBanner from "./components/HeroBanner";
import EventSections from "./components/EventSections";
import StickyDonateButton from "./components/StickyDonateButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gala de Excelență în Educație 2025 - Ediția a IV-a | Asociația General Magheru 68",
  description: "Alătură-te la Gala de Excelență în Educație 2025, ediția a IV-a, pe 19 septembrie 2025. Eveniment caritabil cu momente artistice, donații, licitații și tombola.",
  keywords: ["Gala de Excelență în Educație", "2025", "caritate", "septembrie", "donații", "licitații", "tombola", "momente artistice"],
  openGraph: {
    title: "Gala de Excelență în Educație 2025 - Ediția a IV-a",
    description: "Alătură-te la Gala de Excelență în Educație 2025, ediția a IV-a, pe 19 septembrie 2025. Eveniment caritabil cu momente artistice, donații, licitații și tombola.",
    type: "website",
    locale: "ro_RO",
    siteName: "Asociația General Magheru 68",
    images: [
      {
        url: "/hero-banner-event.webp",
        width: 1200,
        height: 630,
        alt: "Gala de Excelență în Educație 2025 - Ediția a IV-a",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gala de Excelență în Educație 2025 - Ediția a IV-a",
    description: "Alătură-te la Gala de Excelență în Educație 2025, ediția a IV-a, pe 19 septembrie 2025. Eveniment caritabil cu momente artistice, donații, licitații și tombola.",
    images: ["/hero-banner-event.webp"],
  },
};

const sections = [
  {
    id: "despre-eveniment",
    title: "Despre Eveniment"
  },
  {
    id: "momente-artistice",
    title: "Momente Artistice"
  },
  {
    id: "licitatii",
    title: "Licitații"
  },
  {
    id: "tombola",
    title: "Tombola"
  },
  {
    id: "sponsori",
    title: "Sponsori și Parteneri"
  },
  {
    id: "donatii",
    title: "Donații"
  }
];

export default function EventPage() {
  return (
    <div className="min-h-screen">
      <StickyHeader sections={sections} />
      <HeroBanner sections={sections} />
      <EventSections />
      <StickyDonateButton />
      <Footer />
    </div>
  );
}