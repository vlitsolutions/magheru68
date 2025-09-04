import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#5271FF' }}>
      <main className="flex flex-col items-center justify-center min-h-screen px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo_white.png"
              alt="Logo"
              width={300}
              height={300}
              priority
              className="mb-8"
            />
            <h1 className="text-white text-2xl md:text-3xl font-light mb-4">
              Asociația General Magheru 68
            </h1>
            <p className="text-white/80 text-lg max-w-md">
               dedicată sprijinirii excelenței educaționale în comunitatea vâlceană
            </p>
          </div>
          
          <div className="lg:ml-16">
            <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Următorul Eveniment
                  </h2>
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      Olimpiada de Fapte Bune 2025
                    </h3>
                    <p className="text-lg text-gray-600 mb-1">
                      Ediția a IV-a
                    </p>
                    <p className="text-lg font-medium text-gray-800">
                      19 Septembrie 2025, ora 18:30
                    </p>
                    <p className="text-sm text-gray-500">
                      Hotel Ramada, Râmnicu Vâlcea
                    </p>
                  </div>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90">
                    <Link href="/evenimente/olimpiada-de-fapte-bune-2025">
                      Vezi Detalii
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
