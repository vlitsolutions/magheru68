'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface StickyHeaderProps {
  sections: Array<{
    id: string;
    title: string;
  }>;
}

export default function StickyHeader({ sections }: StickyHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [underlineStyle, setUnderlineStyle] = useState<{ width: number; left: number }>({ width: 0, left: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get current section title
  const getCurrentSectionTitle = () => {
    const currentSection = sections.find(section => section.id === activeSection);
    return currentSection ? currentSection.title : 'Olimpiada de Fapte Bune';
  };

  // Function to update underline position
  const updateUnderlinePosition = (sectionId: string) => {
    const activeButton = document.querySelector(`a[href="#${sectionId}"]`);
    const navContainer = document.querySelector('nav');
    
    if (activeButton && navContainer) {
      const buttonRect = activeButton.getBoundingClientRect();
      const navRect = navContainer.getBoundingClientRect();
      
      setUnderlineStyle({
        width: buttonRect.width,
        left: buttonRect.left - navRect.left
      });
    } else {
      setUnderlineStyle({ width: 0, left: 0 });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Find the active section
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);
      
      const current = sectionElements.find(element => {
        const rect = element!.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (current) {
        const newActiveSection = current.id;
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
          
          // Update URL hash without scrolling
          if (window.location.hash !== `#${newActiveSection}`) {
            window.history.replaceState(null, '', `#${newActiveSection}`);
          }
          
          // Update underline position with a slight delay to ensure DOM is updated
          setTimeout(() => updateUnderlinePosition(newActiveSection), 50);
        }
      }
    };

    // Handle initial hash from URL
    if (typeof window !== 'undefined' && window.location.hash) {
      const initialHash = window.location.hash.slice(1);
      if (sections.some(section => section.id === initialHash)) {
        setActiveSection(initialHash);
        setTimeout(() => updateUnderlinePosition(initialHash), 100);
      }
    }

    const handleResize = () => {
      if (activeSection) {
        updateUnderlinePosition(activeSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll(); // Call once to set initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [sections, activeSection]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const header = document.querySelector('header');
      if (isMobileMenuOpen && header && !header.contains(target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={isScrolled ? "/logo_black.png" : "/logo_white.png"}
              alt="Logo Asociația General Magheru 68"
              width={100}
              height={70}
              className="h-14 w-auto transition-all duration-300"
            />
          </Link>

          <nav className="flex items-center gap-2 relative">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <Button
                  key={section.id}
                  variant="ghost"
                  asChild
                  className={`relative transition-all hover:bg-primary/10 ${
                    isScrolled 
                      ? isActive 
                        ? 'text-primary font-medium' 
                        : 'text-gray-700 hover:text-primary'
                      : isActive 
                        ? 'text-white font-medium' 
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <a href={`#${section.id}`}>
                    {section.title}
                  </a>
                </Button>
              );
            })}
            
            {/* Animated underline */}
            {activeSection && underlineStyle.width > 0 && (
              <div 
                className={`absolute bottom-2 h-0.5 rounded-full transition-all duration-300 ease-out ${
                  isScrolled ? 'bg-primary' : 'bg-white'
                }`}
                style={{
                  width: `${underlineStyle.width}px`,
                  left: `${underlineStyle.left}px`,
                }}
              />
            )}
          </nav>

          <Button
            asChild
            className={`transition-all ${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
            }`}
            variant={isScrolled ? "default" : "outline"}
          >
            <Link href="/">
              Acasă
            </Link>
          </Button>
        </div>

        {/* Mobile Layout - Grid with Equal Spacing */}
        <div className="grid md:hidden grid-cols-3 items-center gap-4">
          {/* Logo */}
          <div className="flex justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src={isScrolled ? "/logo_black.png" : "/logo_white.png"}
                alt="Logo Asociația General Magheru 68"
                width={100}
                height={70}
                className="h-12 w-auto transition-all duration-300"
              />
            </Link>
          </div>

          {/* Center - Current Section with underline */}
          <div className="flex flex-col items-center relative overflow-hidden">
            <div className={`font-medium text-sm text-center transition-all duration-500 transform ${
              isScrolled ? 'text-gray-900' : 'text-white'
            } ${activeSection ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
            key={activeSection}>
              {getCurrentSectionTitle()}
            </div>
            <div className={`h-0.5 w-8 mt-1 rounded-full transition-all duration-300 ${
              isScrolled ? 'bg-primary' : 'bg-white'
            } ${activeSection ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
          </div>

          {/* Right - Hamburger Menu */}
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-all ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary hover:bg-primary/10' 
                  : 'text-white hover:text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 right-0 z-40 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md' : 'bg-black/20 backdrop-blur-md'
          } border-t ${isScrolled ? 'border-primary/10' : 'border-white/10'}`}>
            <nav className="px-4 py-4 space-y-2">
              {sections.map((section) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                      isScrolled
                        ? isActive
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                        : isActive
                          ? 'bg-white/20 text-white font-medium'
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {section.title}
                  </a>
                );
              })}
              
              {/* Mobile Home Link */}
              <div className={`border-t pt-2 mt-2 ${isScrolled ? 'border-primary/10' : 'border-white/10'}`}>
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
                    isScrolled
                      ? 'text-gray-700 hover:bg-primary/5 hover:text-primary'
                      : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  Acasă
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}