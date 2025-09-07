'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

// Images from gala-2024 optimized
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

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [randomizedImages, setRandomizedImages] = useState(slideImages);

  // Randomize slides on mount
  useEffect(() => {
    const shuffled = [...slideImages].sort(() => Math.random() - 0.5);
    setRandomizedImages(shuffled);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % randomizedImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [randomizedImages]);

  // Track when first image loads for LCP optimization
  const handleFirstImageLoad = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {randomizedImages.map((slide, index) => (
        <div
          key={slide.name}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={`/gala-2024-optimized/${slide.name}-desktop.webp`}
            alt={slide.alt}
            fill
            priority={index === 0} // Priority loading only for first image (LCP)
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL={`data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==`}
            onLoad={index === 0 ? handleFirstImageLoad : undefined}
            style={{
              objectPosition: 'center center'
            }}
          />
        </div>
      ))}
    </div>
  );
}