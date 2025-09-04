import type { Metadata } from "next";
import StickyHeader from "./components/StickyHeader";
import HeroBanner from "./components/HeroBanner";
import EventSections from "./components/EventSections";

export const metadata: Metadata = {
  title: "Olimpiada de Fapte Bune 2025 - Ediția a IV-a | Asociația General Magheru 68",
  description: "Alătură-te la Olimpiada de Fapte Bune 2025, ediția a IV-a, pe 19 septembrie 2025. Eveniment caritabil cu momente artistice, donații, licitații și tombola.",
  keywords: ["Olimpiada de Fapte Bune", "2025", "caritate", "septembrie", "donații", "licitații", "tombola", "momente artistice"],
  openGraph: {
    title: "Olimpiada de Fapte Bune 2025 - Ediția a IV-a",
    description: "Alătură-te la Olimpiada de Fapte Bune 2025, ediția a IV-a, pe 19 septembrie 2025. Eveniment caritabil cu momente artistice, donații, licitații și tombola.",
    images: ["/hero-banner-event.jpeg"],
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
    id: "donatii",
    title: "Donații"
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
  }
];

export default function EventPage() {
  return (
    <div className="min-h-screen">
      <StickyHeader sections={sections} />
      <HeroBanner sections={sections} />
      <EventSections />
    </div>
  );
}