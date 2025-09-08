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

// Function to get the appropriate image source based on device
const getImageSrc = (imageName: string) => {
  return `/gala-2024-optimized/${imageName}`;
};

// Generate blur data URL from actual blur image
const getBlurDataURL = (imageName: string) => {
  return `/gala-2024-optimized/${imageName}-blur.webp`;
};

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [allImagesPreloaded, setAllImagesPreloaded] = useState(false);
  const [randomizedImages, setRandomizedImages] = useState(slideImages);

  // Randomize slides on mount
  useEffect(() => {
    const shuffled = [...slideImages].sort(() => Math.random() - 0.5);
    setRandomizedImages(shuffled);
  }, []);

  // Preload all images after first image loads
  useEffect(() => {
    if (firstImageLoaded && !allImagesPreloaded) {
      const preloadImages = async () => {
        const imagePromises = randomizedImages.slice(1).map(async (slide) => {
          return new Promise<void>((resolve) => {
            const img = document.createElement('img');
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Still resolve on error to continue
            
            // Preload appropriate image size based on screen
            if (window.innerWidth <= 480) {
              img.src = `${getImageSrc(slide.name)}-mobile.webp`;
            } else if (window.innerWidth <= 1024) {
              img.src = `${getImageSrc(slide.name)}-tablet.webp`;
            } else if (window.innerWidth <= 1440) {
              img.src = `${getImageSrc(slide.name)}-desktop.webp`;
            } else {
              img.src = `${getImageSrc(slide.name)}-large.webp`;
            }
          });
        });

        try {
          await Promise.all(imagePromises);
          setAllImagesPreloaded(true);
        } catch (error) {
          console.warn('Some images failed to preload:', error);
          setAllImagesPreloaded(true);
        }
      };

      preloadImages();
    }
  }, [firstImageLoaded, randomizedImages, allImagesPreloaded]);

  // Auto-advance slides only after images are ready
  useEffect(() => {
    if (!firstImageLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % randomizedImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [randomizedImages, firstImageLoaded]);

  // Track when first image loads
  const handleFirstImageLoad = () => {
    setFirstImageLoaded(true);
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
              media="(max-width: 1440px)"
              srcSet={`${getImageSrc(slide.name)}-desktop.webp`}
            />
            <source
              media="(min-width: 1441px)"
              srcSet={`${getImageSrc(slide.name)}-large.webp`}
            />
            <Image
              src={`${getImageSrc(slide.name)}-desktop.webp`}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 100vw, (max-width: 1440px) 100vw, 100vw"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL={getBlurDataURL(slide.name)}
              onLoad={index === 0 ? handleFirstImageLoad : undefined}
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