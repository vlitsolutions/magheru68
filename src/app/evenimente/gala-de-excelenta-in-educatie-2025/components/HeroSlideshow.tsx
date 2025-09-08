'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

// Primary hero image for fast LCP
const heroImage = { name: 'DSC_2575', alt: 'Momente festive de la Gala de Excelența în Educație' };

// Additional slideshow images (loaded progressively)
const slideImages = [
  { name: 'DSC_2575', alt: 'Momente festive de la Gala de Excelența în Educație' },
  { name: 'DDD_6078', alt: 'Atmosfera elegantă a galei de caritate' },
  { name: 'DDD_6167', alt: 'Invitații la evenimentul caritabil educațional' },
  { name: 'DSC_2805', alt: 'Momentele speciale de la gala de excelență' },
  { name: 'IMG_0003', alt: 'Celebrarea excelenței în educație' },
  { name: 'IMG_0024', alt: 'Comunitatea educațională la gala caritabilă' },
  { name: 'IMG_0039', alt: 'Experiența memorabilă de la eveniment' },
  { name: 'IMG_0041', alt: 'Participanții la gala de caritate educațională' },
  { name: 'IMG_0109', alt: 'Atmosfera festivă a galei de excelență' },
  { name: 'IMG_0163', alt: 'Momentele de celebrare a performanțelor' },
  { name: 'IMG_0164', alt: 'Comunitatea unită pentru o cauză nobilă' },
  { name: 'IMG_0200', alt: 'Experiența de neuitat de la gala caritabilă' }
];

// Function to get the appropriate image source based on device
const getImageSrc = (imageName: string) => {
  return `/gala-2024-optimized/${imageName}`;
};

// Generate blur data URL from actual blur image
const getBlurDataURL = (imageName: string) => {
  return `/gala-2024-optimized/${imageName}-blur.webp`;
};

// Get responsive image src based on screen size
const getResponsiveImageSrc = (imageName: string) => {
  if (typeof window === 'undefined') return `${getImageSrc(imageName)}-desktop.webp`;
  
  if (window.innerWidth <= 480) {
    return `${getImageSrc(imageName)}-mobile.webp`;
  } else if (window.innerWidth <= 1024) {
    return `${getImageSrc(imageName)}-tablet.webp`;
  } else {
    return `${getImageSrc(imageName)}-desktop.webp`;
  }
};

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set([heroImage.name]));
  const [slideshowActive, setSlideshowActive] = useState(false);
  const [availableSlides, setAvailableSlides] = useState([heroImage]);

  // Progressive image loading after hero image loads
  useEffect(() => {
    if (!heroImageLoaded) return;

    const loadImagesProgressively = () => {
      const remainingImages = slideImages.slice(1); // Skip DSC_2575 as it's already loaded
      
      // Start all image downloads immediately
      remainingImages.forEach(slide => {
        const img = document.createElement('img');
        img.onload = () => {
          setLoadedImages(prev => {
            const updated = new Set([...prev, slide.name]);
            return updated;
          });

          setAvailableSlides(prev => {
            const newSlides = slideImages.filter(s => 
              prev.some(p => p.name === s.name) || s.name === slide.name
            );
            return newSlides;
          });

          // Start slideshow once we have at least 3 images loaded
          if (!slideshowActive && loadedImages.size + 1 >= 3) {
            setSlideshowActive(true);
          }
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${slide.name}`);
        };
        img.src = getResponsiveImageSrc(slide.name);
      });
    };

    loadImagesProgressively();
  }, [heroImageLoaded, loadedImages.size, slideshowActive]);

  // Auto-advance slides only when slideshow is active
  useEffect(() => {
    if (!slideshowActive || availableSlides.length < 2) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % availableSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideshowActive, availableSlides.length]);

  // Track when hero image loads
  const handleHeroImageLoad = () => {
    setHeroImageLoaded(true);
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {availableSlides.map((slide, index) => (
        <div
          key={slide.name}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
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
              priority={slide.name === heroImage.name}
              fetchPriority={slide.name === heroImage.name ? "high" : "low"}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, 100vw"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL={getBlurDataURL(slide.name)}
              onLoad={slide.name === heroImage.name ? handleHeroImageLoad : undefined}
              style={{
                objectPosition: 'center center'
              }}
            />
          </picture>
        </div>
      ))}
    </div>
  );
}