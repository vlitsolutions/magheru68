'use client'

import { Heart, Utensils } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MenuDialog from "../MenuDialog";

export default function AboutEventSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      id="despre-eveniment"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <Heart className="w-10 h-10 text-primary" />
          </div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Misiunea Noastră
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Despre Eveniment
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Olimpiada de Fapte Bune este un bal de strângere de fonduri din orașul Râmnicu Vâlcea, 
            dedicat sprijinirii excelenței educaționale din comunitatea vâlceană.
          </p>
          <p className="text-lg text-gray-500 leading-relaxed">
            Donațiile obținute în urma acestui eveniment vor constitui fond de premiere a elevilor vâlceni 
            care au obținut rezultate remarcabile la olimpiadele și concursurile școlare organizate sub 
            egida Ministerului Educației și Cercetării în anul școlar 2024-2025.
          </p>
        </div>

        {/* Elegant Desktop Layout */}
        <div className={`grid lg:grid-cols-5 gap-12 items-stretch transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          {/* Stats Section - Mobile only */}
          <div className="lg:hidden order-1">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { number: "400", label: "Elevi premiați în 4 ani", suffix: "+" },
                { number: "250.000", label: "Donați în 4 ani", suffix: "+ RON" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-3 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="text-xl font-bold text-primary mb-1">
                    {stat.number}<span className="text-base">{stat.suffix}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Left Side - Stats and Detailed Information */}
          <div className="lg:col-span-3 order-3 lg:order-1 flex flex-col justify-between lg:h-full space-y-6 lg:space-y-0">
            {/* Stats Section - Desktop only */}
            <div className="hidden lg:grid grid-cols-2 gap-6 mb-6">
              {[
                { number: "400", label: "Elevi premiați în 4 ani", suffix: "+" },
                { number: "250.000", label: "Donați în 4 ani", suffix: "+ RON" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-700 hover:scale-105 hover:shadow-xl ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 200}ms` }}
                >
                  <div className="text-4xl font-bold text-primary mb-1">
                    {stat.number}<span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="lg:flex-1 lg:flex lg:items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold text-primary">&quot;Promovăm valorile, premiem excelența&quot;</span> - 
                călauziți de acest principiu nobil, vă invităm să ni vă alăturați la cea de-a IV-a ediție a 
                <span className="font-medium"> Olimpiadei de Fapte Bune</span>, un eveniment caritabil prin care 
                dorim să aducem un omagiu performanțelor și devotamentului pentru învățătură.
              </p>
            </div>
            
            <div className="lg:flex-1 lg:flex lg:items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cu sprijinul dumneavoastră și al altor oameni de bine, putem face vizibile și recompensa 
                eforturile fantastice depuse de către elevii care an de an își depășesc limitele și obțin 
                premii la concursurile naționale și olimpiadele școlare. Toate donațiile obținute urmând 
                să se constituie ca <span className="font-medium text-primary">fond de premiere</span> pentru aceștia.
              </p>
            </div>

            <div className="lg:flex-1 lg:flex lg:items-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                Pentru a întregi experiența, evenimentul va include un <span className="font-medium text-primary">candy bar </span> 
                 cu dulciuri rafinate, un <span className="font-medium text-primary">cigar bar</span> pentru cunoscători și un 
                <span className="font-medium text-primary"> wine bar</span> cu un somelier dedicat care vă va povesti 
                fascinantele istorii ale vinurilor italiene pe care le veți degusta.
              </p>
            </div>

            <div className="flex items-end justify-center pt-4">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/90 text-white px-8 py-4 rounded-2xl font-medium hover:from-primary/90 hover:to-primary/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Utensils className="w-5 h-5" />
                Vezi Meniu Complet
              </button>
            </div>
          </div>

          {/* Right Side - Event Details Card */}
          <div className="lg:col-span-2 order-2 lg:order-2">
            <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="text-2xl">🎪</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Detalii Eveniment</h3>
                  <div className="w-16 h-0.5 bg-white/50 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl">📅</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">19 Septembrie 2025</p>
                      <p className="text-blue-100 text-sm">Vineri</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">18:30 - 23:00</p>
                      <p className="text-blue-100 text-sm">Recepție + Eveniment</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl">🏨</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Hotel Ramada</p>
                      <p className="text-blue-100 text-sm">Râmnicu Vâlcea</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-xl">👔</span>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Dress Code</p>
                      <p className="text-blue-100 text-sm">Cocktail</p>
                    </div>
                  </div>

                  <div className="border-t border-white/20 pt-6 mt-6">
                    <div className="text-center">
                      <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                        <p className="text-sm text-blue-100 mb-1">Preț invitație</p>
                        <p className="text-3xl font-bold">500 RON</p>
                        <p className="text-xs text-blue-200 mt-1">Include: meniu complet, băuturi, tombola</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Inclus - Full Width Row */}
        <div className={`mt-12 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 md:p-6 border border-yellow-200">
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-orange-900 mb-2 flex items-center justify-center gap-2">
                <span className="text-xl md:text-2xl">🎁</span>
                Bonus Inclus
              </h3>
              <p className="text-base text-orange-800 leading-relaxed max-w-xl mx-auto">
                În semn de mulțumire că veți fi alături de noi, fiecare invitație include un 
                <span className="font-medium"> bilet gratuit de participare la tombola</span> ce va fi 
                organizată la finalul evenimentului.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Dialog */}
      <MenuDialog isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </section>
  );
}