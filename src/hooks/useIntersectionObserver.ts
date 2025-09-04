'use client'

import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  fallbackDelay?: number;
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '50px 0px',
    fallbackDelay = 100
  } = options;

  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Check if we're in browser environment and IntersectionObserver is supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      // Fallback: show content after a short delay if IntersectionObserver is not supported
      const fallbackTimer = setTimeout(() => {
        setIsVisible(true);
      }, fallbackDelay);
      return () => clearTimeout(fallbackTimer);
    }

    let fallbackTimer: NodeJS.Timeout;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (fallbackTimer) clearTimeout(fallbackTimer);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
      
      // Only set fallback timer if we're actually observing
      // This prevents immediate visibility on page refresh/navigation
      fallbackTimer = setTimeout(() => {
        setIsVisible(true);
        observer.disconnect();
      }, fallbackDelay * 10); // Much longer fallback - only for actual failures
    }

    return () => {
      if (fallbackTimer) clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [isMounted, threshold, rootMargin, fallbackDelay]);

  return { ref, isVisible };
}