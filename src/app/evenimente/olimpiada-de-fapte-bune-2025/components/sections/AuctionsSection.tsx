'use client'

import { Gavel, Sparkles } from "lucide-react";
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
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <Gavel className="w-10 h-10 text-primary" />
          </div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Participare Activă
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Licitații
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
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