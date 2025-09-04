'use client'

import { DollarSign, Heart, Users, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DonationsSection() {
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
      id="donatii"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #5271FF 2px, transparent 2px), radial-gradient(circle at 75% 75%, #5271FF 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <DollarSign className="w-10 h-10 text-blue-600" />
          </div>
          
          <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide uppercase">
            Generozitatea în Acțiune
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Donații
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Impact Message */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Fiecare donație contribuie direct la premierea elevilor vâlceni care și-au demonstrat 
            excelența la olimpiadele și concursurile școlare naționale.
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/20 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700 font-medium">
              "Investiția în educația tinerilor reprezintă investiția în viitorul comunității noastre."
            </p>
          </div>
        </div>

        {/* Donation Types */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Donation Categories */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-blue-600" />
              Tipuri de Donații
            </h3>
            
            {[
              {
                title: "Premii pentru olimpici",
                description: "Premii în bani pentru elevii medaliați la olimpiadele naționale și internaționale",
                icon: "🏆",
                amount: "500-2000 lei"
              },
              {
                title: "Burse de excelență",
                description: "Burse pentru elevii cu rezultate excepționale la concursurile școlare",
                icon: "🎓",
                amount: "300-1000 lei"
              },
              {
                title: "Echipamente educaționale",
                description: "Laptop-uri, tablete și cărți pentru elevii premiați",
                icon: "💻",
                amount: "În natură"
              },
              {
                title: "Participare la concursuri",
                description: "Finanțarea transportului și cazării pentru participarea la olimpiade",
                icon: "🚌",
                amount: "200-800 lei"
              }
            ].map((donation, index) => (
              <div 
                key={index}
                className={`bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0 bg-blue-50 rounded-lg p-3">
                    {donation.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{donation.title}</h4>
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {donation.amount}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{donation.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Transparency & Trust */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-600" />
              Transparență și Încredere
            </h3>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-2xl p-8 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Raportare completă</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Toate donațiile sunt gestionate cu maximă transparență. Publicăm rapoarte detaliate 
                despre utilizarea fondurilor și impactul generat în comunitate.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Transparență</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">0%</div>
                  <div className="text-sm text-gray-600">Comisioane</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              {[
                "Certificare oficială pentru activitate non-profit",
                "Rapoarte financiare publice anuale",
                "Feedback direct de la beneficiari",
                "Monitorizare continuă a proiectelor"
              ].map((indicator, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 transform transition-all duration-500 hover:shadow-md ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1100 + index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-sm">{indicator}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-8 md:p-12 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Sprijină Excelența Educațională
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contribuția ta va fi folosită pentru a premia și încuraja elevii vâlceni cu rezultate remarcabile la olimpiadele și concursurile școlare.
          </p>
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-lg font-medium">Detalii complete la eveniment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}