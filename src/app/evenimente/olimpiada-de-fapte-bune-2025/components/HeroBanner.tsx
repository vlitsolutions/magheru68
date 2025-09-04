'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroBannerProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export default function HeroBanner({ sections }: HeroBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with priority loading */}
      <Image
        src="/hero-banner-event.webp"
        alt="Olimpiada de Fapte Bune 2025 - Ediția a IV-a"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
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
              sizes="280px"
              className="mx-auto mb-12 filter drop-shadow-2xl"
              style={{ width: '280px', height: 'auto' }}
            />
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 leading-tight text-white transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            Olimpiada de Fapte Bune 2025
          </h1>
          
          <div className={`space-y-4 mb-12 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-2xl md:text-3xl font-light text-white/95">
              Ediția a IV-a
            </p>
            
            <p className="text-3xl md:text-4xl font-semibold text-primary">
              19 Septembrie 2025
            </p>
          </div>

          <div className={`max-w-2xl mx-auto mb-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Promovăm valorile, premiem, excelența!
            </p>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Scroll pentru mai multe</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}