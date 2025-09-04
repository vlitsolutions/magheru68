'use client'

import { Users, Building, Heart, Handshake, Award, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SponsorsSection() {
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
      id="sponsori"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background network pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#5271FF"/>
              <line x1="10" y1="10" x2="30" y2="10" stroke="#5271FF" strokeWidth="0.5"/>
              <line x1="10" y1="10" x2="10" y2="30" stroke="#5271FF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <Users className="w-10 h-10 text-blue-600" />
          </div>
          
          <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide uppercase">
            Comunitatea de Susținători
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sponsori și Parteneri
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Parteneriatul cu companii și organizații responsabile social ne permite să amplificăm 
            impactul pozitiv și să ajungem la mai multe persoane în nevoie.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-primary">Împreună suntem mai puternici. </span> 
              Fiecare parteneriat reprezintă o nouă oportunitate de a face bine în comunitate.
            </p>
          </div>
        </div>

        {/* Partnership Types */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              type: "Companii Locale",
              description: "Întreprinderi din comunitatea noastră",
              icon: Building,
              color: "from-blue-400 to-blue-500",
              features: ["Susținere financiară", "Donații în natură", "Voluntariat corporativ", "Expertise tehnică"]
            },
            {
              type: "Instituții Publice",
              description: "Colaborări cu autoritățile locale",
              icon: Globe,
              color: "from-blue-400 to-cyan-400",
              features: ["Sprijin logistic", "Promovare oficială", "Facilitarea proceselor", "Validare publică"]
            },
            {
              type: "ONG-uri Partner",
              description: "Organizații non-profit aliate",
              icon: Handshake,
              color: "from-blue-600 to-blue-700",
              features: ["Schimb de experiență", "Proiecte comune", "Rețele de voluntari", "Resurse partajate"]
            },
            {
              type: "Susținători Individuali",
              description: "Ambasadori ai cauzei noastre",
              icon: Heart,
              color: "from-blue-300 to-blue-400",
              features: ["Donații recurente", "Promovare organică", "Feedback valoros", "Implicare directă"]
            }
          ].map((partner, index) => (
            <div 
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-3 overflow-hidden ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${partner.color} p-6 text-white relative`}>
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
                <div className="relative z-10 text-center">
                  <partner.icon className="w-10 h-10 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{partner.type}</h3>
                  <p className="text-sm opacity-90">{partner.description}</p>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {partner.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className={`flex items-start gap-3 text-sm text-gray-600 transform transition-all duration-300 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${1000 + index * 150 + featureIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                      <span className="group-hover:text-gray-800 transition-colors leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl mb-16 transform transition-all duration-1000 delay-1200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-12">
            <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Beneficiile Parteneriatului
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Colaborarea cu noi oferă companiilor și organizațiilor oportunități valoroase de dezvoltare și impact social
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vizibilitate",
                description: "Promovare în toate materialele și canalele noastre de comunicare",
                icon: "📢",
                benefits: ["Logo pe materiale", "Mențiuni în presă", "Social media", "Website oficial"]
              },
              {
                title: "Impact Social",
                description: "Contribuție directă la îmbunătățirea comunității locale",
                icon: "🌟",
                benefits: ["Proiecte măsurabile", "Rapoarte de impact", "Feedback comunitate", "Recunoaștere publică"]
              },
              {
                title: "Networking",
                description: "Conectare cu alte organizații și lideri din comunitate",
                icon: "🤝",
                benefits: ["Evenimente exclusive", "Întâlniri B2B", "Colaborări noi", "Dezvoltare relații"]
              }
            ].map((benefit, index) => (
              <div 
                key={index}
                className={`text-center bg-gray-50 rounded-2xl p-8 hover:bg-blue-50 transition-colors duration-300 transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1400 + index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                
                <div className="space-y-2">
                  {benefit.benefits.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`flex items-center justify-center gap-2 text-sm text-gray-500 transform transition-all duration-300 ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${1600 + index * 150 + itemIndex * 50}ms` }}
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Partners Showcase */}
        <div className={`bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-3xl p-8 md:p-12 mb-16 transform transition-all duration-1000 delay-1600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Partenerii Noștri 2025
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Mulțumim tuturor organizațiilor și companiilor care ne susțin în misiunea noastră de a construi o comunitate mai bună
            </p>
            
            {/* Placeholder for partner logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <div 
                  key={index}
                  className={`bg-white/70 backdrop-blur-sm rounded-xl p-6 h-24 flex items-center justify-center border border-white/50 transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1800 + index * 100}ms` }}
                >
                  <span className="text-gray-400 font-medium text-sm">Logo Partner</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action for New Partners */}
        <div className={`text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-8 md:p-12 transform transition-all duration-1000 delay-2000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Devino Partenerul Nostru
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Căutăm organizații care împărtășesc valorile noastre și doresc să contribuie la bunăstarea comunității
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-medium">Contactează-ne la eveniment pentru detalii</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}