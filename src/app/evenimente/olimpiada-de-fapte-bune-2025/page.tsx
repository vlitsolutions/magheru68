import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Heart,
  Music,
  DollarSign,
  Gavel,
  Gift,
  Users,
  ArrowLeft 
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

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
    title: "Despre Eveniment",
    icon: Heart,
    color: "text-red-500"
  },
  {
    id: "momente-artistice",
    title: "Momente Artistice",
    icon: Music,
    color: "text-purple-500"
  },
  {
    id: "donatii",
    title: "Donații",
    icon: DollarSign,
    color: "text-green-500"
  },
  {
    id: "licitatii",
    title: "Licitații",
    icon: Gavel,
    color: "text-yellow-600"
  },
  {
    id: "tombola",
    title: "Tombola",
    icon: Gift,
    color: "text-pink-500"
  },
  {
    id: "sponsori",
    title: "Sponsori",
    icon: Users,
    color: "text-blue-500"
  }
];

export default function EventPage() {
  return (
    <div className="min-h-screen">
      <div 
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/hero-banner-event.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <Link href="/" className="absolute top-4 left-4 md:top-8 md:left-8">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Acasă
            </Button>
          </Link>

          <Image
            src="/logo-transparent-e1676430439366.png"
            alt="Logo Asociația General Magheru 68"
            width={200}
            height={200}
            className="mx-auto mb-8"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Olimpiada de Fapte Bune 2025
          </h1>
          
          <p className="text-xl md:text-2xl mb-2 opacity-90">
            Ediția a IV-a
          </p>
          
          <p className="text-2xl md:text-3xl font-light mb-12">
            19 Septembrie 2025
          </p>

          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="outline"
                asChild
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <a href={`#${section.id}`}>
                  {section.title}
                </a>
              </Button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.id} id={section.id} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className={`h-6 w-6 ${section.color}`} />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {/* TODO: Adăugați conținutul pentru {section.title} */}
                    Conținutul pentru această secțiune va fi adăugat în curând. 
                    Vă rugăm să reveniți pentru mai multe informații despre {section.title.toLowerCase()}.
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/">
              Înapoi la Pagina Principală
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}