'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

// Primary hero image for instant LCP
const heroImage = { name: 'DSC_2575', alt: 'Momente festive de la Gala de Excelență în Educație' };

// Curated slideshow images (only best 3 for performance)
const slideImages = [
  { name: 'DSC_2575', alt: 'Momente festive de la Gala de Excelență în Educație' },
  { name: 'DDD_6078', alt: 'Atmosfera elegantă a galei de caritate' },
  { name: 'DSC_2805', alt: 'Momentele speciale de la gala de excelență' },
  { name: 'IMG_0163', alt: 'Momentele de celebrare a performanțelor' }
];

const getImageSrc = (imageName: string) => `/gala-2024-optimized/${imageName}`;
const getBlurDataURL = (imageName: string) => `/gala-2024-optimized/${imageName}-blur.webp`;

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideshowStarted, setSlideshowStarted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Use Intersection Observer to detect when hero is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Start slideshow after hero image loads and component is visible
  useEffect(() => {
    if (!isVisible) return;

    const startSlideshow = () => {
      setSlideshowStarted(true);
      
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideImages.length);
      }, 4000);
    };

    // Delay slideshow start for better initial performance
    const timer = setTimeout(startSlideshow, 1000);

    return () => {
      clearTimeout(timer);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Static hero image - always visible for fast LCP */}
      <div className="absolute inset-0">
        <picture>
          <source
            media="(max-width: 480px)"
            srcSet={`${getImageSrc(heroImage.name)}-mobile.webp`}
          />
          <source
            media="(max-width: 1024px)"
            srcSet={`${getImageSrc(heroImage.name)}-tablet.webp`}
          />
          <source
            media="(min-width: 1025px)"
            srcSet={`${getImageSrc(heroImage.name)}-desktop.webp`}
          />
          <Image
            src={`${getImageSrc(heroImage.name)}-desktop.webp`}
            alt={heroImage.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={getBlurDataURL(heroImage.name)}
          />
        </picture>
      </div>

      {/* Slideshow images - only render when slideshow starts */}
      {slideshowStarted && slideImages.slice(1).map((slide, index) => {
        const slideIndex = index + 1; // Offset by 1 since we skip hero image
        const isActive = currentSlide === slideIndex;
        
        return (
          <div
            key={slide.name}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out will-change-transform ${
              isActive ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              transform: isActive ? 'translateX(0)' : 'translateX(100%)',
            }}
          >
            <picture>
              <source
                media="(max-width: 480px)"
                srcSet={`${getImageSrc(slide.name)}-mobile.webp`}
              />
              <source
                media="(max-width: 1024px)"
                srcSet={`${getImageSrc(slide.name)}-tablet.webp`}
              />
              <source
                media="(min-width: 1025px)"
                srcSet={`${getImageSrc(slide.name)}-desktop.webp`}
              />
              <Image
                src={`${getImageSrc(slide.name)}-desktop.webp`}
                alt={slide.alt}
                fill
                loading="lazy"
                fetchPriority="low"
                sizes="100vw"
                className="object-cover object-center"
                placeholder="blur"
                blurDataURL={getBlurDataURL(slide.name)}
              />
            </picture>
          </div>
        );
      })}
    </div>
  );
}