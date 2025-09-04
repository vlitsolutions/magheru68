'use client'

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyDonateButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkDonationsSection = () => {
      const donationsSection = document.getElementById('donatii');
      if (!donationsSection) return;

      const rect = donationsSection.getBoundingClientRect();
      const isInDonationsSection = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      setIsVisible(!isInDonationsSection);
    };

    const handleScroll = () => {
      checkDonationsSection();
    };

    // Initial check
    checkDonationsSection();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDonations = () => {
    const donationsSection = document.getElementById('donatii');
    if (donationsSection) {
      donationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToDonations}
      className={`fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white px-6 py-4 rounded-full shadow-2xl transform transition-all duration-300 ease-out flex items-center gap-3 font-semibold ${
        isVisible 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
      }`}
      style={{
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5), 0 6px 12px rgba(0, 0, 0, 0.15)'
      }}
    >
      <Heart className="w-5 h-5 animate-pulse" />
      <span className="hidden sm:inline">Donează Acum</span>
      <span className="sm:hidden">Donează</span>
    </button>
  );
}