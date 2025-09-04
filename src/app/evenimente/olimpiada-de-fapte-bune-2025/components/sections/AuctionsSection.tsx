'use client'

import { Gavel, Palette, MapPin, Briefcase, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function AuctionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="licitatii"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-50/50 via-transparent to-orange-50/30"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <Gavel className="w-10 h-10 text-blue-600" />
          </div>
          
          <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide uppercase">
            Participare Activă
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Licitații
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Licitațiile de la bal oferă o modalitate elegantă și interactivă de a contribui la fondul 
            de premiere, cu obiecte de valoare donate de parteneri generosi.
          </p>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-yellow-600">Participarea la licitații</span> nu doar că sprijină cauza noastră, 
              dar vă oferă și șansa de a obține piese unice și experiențe de neuitat.
            </p>
          </div>
        </div>

        {/* Auction Categories */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              category: "Opere de Artă",
              description: "Tablouri, sculpturi și obiecte de colecție",
              icon: Palette,
              color: "from-blue-400 to-blue-500",
              items: ["Picturi locale", "Sculptură modernă", "Fotografii de autor", "Artă tradițională"]
            },
            {
              category: "Experiențe",
              description: "Pachete turistice și experiențe exclusive",
              icon: MapPin,
              color: "from-blue-500 to-blue-600",
              items: ["Weekend în munți", "City break Europa", "Experiențe culinare", "Cursuri specializate"]
            },
            {
              category: "Servicii Pro",
              description: "Servicii profesionale donate de specialiști",
              icon: Briefcase,
              color: "from-blue-600 to-blue-700",
              items: ["Consultanță juridică", "Design grafic", "Servicii IT", "Coaching personal"]
            },
            {
              category: "Obiecte Rare",
              description: "Produse artizanale și creații locale",
              icon: Sparkles,
              color: "from-blue-300 to-blue-400",
              items: ["Bijuterii handmade", "Ceramică artistică", "Textile tradiționale", "Mobilier vintage"]
            }
          ].map((auction, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-3 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${auction.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                <div className="relative z-10">
                  <auction.icon className="w-8 h-8 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{auction.category}</h3>
                  <p className="text-sm opacity-90">{auction.description}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {auction.items.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      className={`flex items-center gap-3 text-sm text-gray-600 transform transition-all duration-300 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${1000 + index * 150 + itemIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="group-hover:text-gray-800 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cum Funcționează Licitația
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Procesul nostru de licitație este transparent, echitabil și distractiv pentru toți participanții
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Înregistrare",
                description: "Înregistrează-te la eveniment și primește numărul de licitație",
                icon: "📝"
              },
              {
                step: "02", 
                title: "Explorează",
                description: "Vizionează obiectele disponibile și stabilește-ți bugetul",
                icon: "👀"
              },
              {
                step: "03",
                title: "Licitează",
                description: "Participă activ la licitații și câștigă obiectele dorite",
                icon: "🏆"
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center relative transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1400 + index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-3xl mx-auto shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-yellow-400 rounded-full flex items-center justify-center text-xs font-bold text-yellow-600">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Featured Items Preview */}
        <div className={`mt-16 text-center bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl p-8 md:p-12 transform transition-all duration-1000 delay-1600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Obiecte Speciale 2025
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Anul acesta, licitația include piese excepționale donate de artisti renumiți și parteneri generosi
          </p>
          <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-600" />
            <span className="font-medium text-gray-800">Lista completă disponibilă la eveniment</span>
          </div>
        </div>
      </div>
    </section>
  );
}