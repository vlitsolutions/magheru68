'use client'

import { Music } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ArtisticMomentsSection() {
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
      id="momente-artistice"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <Music className="w-10 h-10 text-blue-600" />
          </div>
          
          <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide uppercase">
            Cultură și Artă
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Momente Artistice
          </h2>
          
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Description */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Seara va fi înfrumusețată de spectacolele unor artiști de renume, care vor crea o atmosferă 
            elegantă și memorabilă pentru toți participanții la bal.
          </p>
        </div>

        {/* Performance Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
          {[
            {
              title: "Muzică Live",
              description: "Artiști locali și naționali",
              icon: "🎵",
              color: "from-blue-400 to-blue-500"
            },
            {
              title: "Dans & Coregrafii",
              description: "Spectacole de dans contemporan",
              icon: "💃",
              color: "from-blue-500 to-blue-600"
            },
            {
              title: "Teatru Social",
              description: "Prezentări cu tematică socială",
              icon: "🎭",
              color: "from-blue-600 to-blue-700"
            },
            {
              title: "Artă & Meșteșuguri",
              description: "Expoziții tradiționale",
              icon: "🎨",
              color: "from-blue-300 to-blue-400"
            }
          ].map((performance, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${performance.color} rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10 text-center">
                <div className="text-2xl md:text-4xl mb-2 md:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {performance.icon}
                </div>
                <h3 className="text-base md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                  {performance.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {performance.description}
                </p>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Featured Artists Section */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Invitați Speciali
            </h3>
            <p className="text-lg text-gray-600">
              Artiști de renume care vor încânta publicul cu spectacole de excepție
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {[
              "Ștefania Uță",
              "Alina Vuc", 
              "Miruna Ionescu",
              "Bogdan Vlădău",
              "Kenny Gabriel"
            ].map((artist, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-gradient-to-b from-blue-50 to-transparent rounded-xl transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-blue-600" />
                </div>
                <p className="font-medium text-gray-900">{artist}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}