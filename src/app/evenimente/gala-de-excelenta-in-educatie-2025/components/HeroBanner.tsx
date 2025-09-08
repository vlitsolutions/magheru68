'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import HeroSlideshow from "./HeroSlideshow";

interface HeroBannerProps {
  sections: {
    id: string;
    title: string;
  }[];
}

export default function HeroBanner({ sections }: HeroBannerProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background slideshow */}
      <HeroSlideshow />
      
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90"></div>
      
      <div className="relative z-10 text-center text-white px-4 w-[75%] md:max-w-4xl mx-auto">
        <div className="mb-12">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
          }`}>
            <Image
              src="/logo_white.webp"
              alt="Logo Asociația General Magheru 68"
              width={280}
              height={280}
              priority
              sizes="(max-width: 480px) 25vw, (max-width: 768px) 200px, 280px"
              className="mx-auto mb-8 md:mb-12 filter drop-shadow-2xl w-[25vw] max-w-[200px] md:max-w-[280px] md:w-[280px] h-auto"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          
          <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white transform transition-all duration-1000 delay-300 text-center ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="block sm:inline">Gala de Excelența</span>
            <span className="block sm:inline"> </span>
            <span className="block sm:inline">în Educație 2025</span>
          </h1>
          
          <div className={`space-y-4 mb-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/95">
              Ediția a IV-a
            </p>
            
            <div className="relative inline-block">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                19 Septembrie 2025
              </p>
              <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 md:h-1 bg-primary rounded-full"></div>
            </div>
          </div>

          <div className={`max-w-2xl mx-auto mb-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed font-dancing-script bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent font-bold px-4 text-center">
              Promovăm valorile,<br />premiem excelența!
            </p>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs md:text-sm font-medium">Scroll pentru mai multe</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-2 md:w-1 md:h-3 bg-white/60 rounded-full mt-1.5 md:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}