'use client'

import { Gift, Star, Zap, Trophy, Ticket } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function RaffleSection() {
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
      id="tombola"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Sparkle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <Gift className="w-10 h-10 text-primary" />
          </div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Surprize și Premii
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tombola
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Tombola balului aduce emoția și bucuria câștigului, oferind participanților șansa de a primi 
            premii valoroase în timp ce contribuie la fondul de premiere a elevilor olimpici.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Premii Garantate</h3>
              <p className="text-gray-600">Toți participanții au șanse reale de câștig cu premii în valoare de mii de lei</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Acces Accesibil</h3>
              <p className="text-gray-600">Prețuri mici pentru bilete, oferind tuturor șansa de a participa</p>
            </div>
          </div>
        </div>

        {/* Prize Categories */}
        <div className="mb-16">
          <h3 className={`text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Categorii de Premii
          </h3>
          
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {[
              {
                category: "Electronice",
                description: "Gadgeturi și aparatură electronică",
                icon: "📱",
                color: "from-primary to-primary/90",
                prizes: ["Smartphone-uri", "Tablete", "Căști wireless", "Smart watch-uri"],
                value: "500-3000 lei"
              },
              {
                category: "Electrocasnice",
                description: "Aparate pentru casă și bucătărie",
                icon: "🏠",
                color: "from-primary/90 to-primary/80",
                prizes: ["Aspiratoare robot", "Cafetiere", "Blendere", "Friteuze cu aer"],
                value: "200-1500 lei"
              },
              {
                category: "Experiențe",
                description: "Vouchere și experiențe memorabile",
                icon: "🎁",
                color: "from-primary/80 to-primary/70",
                prizes: ["Vouchere SPA", "Cine city", "Restaurante", "Activități outdoor"],
                value: "100-800 lei"
              },
              {
                category: "Premii Speciale",
                description: "Premii unice și de colecție",
                icon: "⭐",
                color: "from-primary/110 to-primary",
                prizes: ["Bijuterii", "Opere de artă", "Obiecte vintage", "Produse handmade"],
                value: "300-2000 lei"
              }
            ].map((prize, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-3 overflow-hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${prize.color} p-6 text-white relative`}>
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      {prize.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{prize.category}</h4>
                    <p className="text-sm opacity-90 mb-3">{prize.description}</p>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                      {prize.value}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <ul className="space-y-2">
                    {prize.prizes.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        className={`flex items-center gap-2 text-sm text-gray-600 transform transition-all duration-300 ${
                          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${1100 + index * 150 + itemIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="group-hover:text-gray-800 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Participate */}
        <div className={`bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 mb-16 transform transition-all duration-1000 delay-1300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Cum Participi la Tombolă
            </h3>
            <p className="text-lg text-gray-600">
              Procesul este simplu și transparent pentru toți participanții
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Achiziționează", description: "Cumpără bilete de tombolă la intrare", icon: <Ticket className="w-6 h-6" /> },
              { step: "2", title: "Depune", description: "Completează biletele cu datele tale", icon: "✏️" },
              { step: "3", title: "Așteaptă", description: "Urmărește extragerea live pe scenă", icon: "👀" },
              { step: "4", title: "Câștigă", description: "Ridică premiul dacă ești norocos", icon: "🎉" }
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40 transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1500 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  {typeof step.icon === 'string' ? step.icon : step.icon}
                </div>
                <div className="text-xs font-bold text-primary mb-2 bg-primary/10 rounded-full w-6 h-6 flex items-center justify-center mx-auto">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-3xl p-8 md:p-12 transform transition-all duration-1000 delay-1600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Participă și Sprijină Cauza
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Cu fiecare bilet cumpărat contribui la inițiativele noastre caritabile și îți mărești șansele de câștig
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-medium">Bilete disponibile la eveniment</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}