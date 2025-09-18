'use client';

import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeWithLogoProps {
  url: string;
  size?: number;
  logoSrc?: string;
  logoSize?: number;
  className?: string;
}

export function QRCodeWithLogo({
  url,
  size = 300,
  logoSrc = '/logo_black.webp',
  logoSize = 60,
  className = ''
}: QRCodeWithLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!canvasRef.current) return;

      try {
        setIsLoading(true);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) return;

        // Set canvas size
        canvas.width = size;
        canvas.height = size;

        // Generate QR code data URL with high error correction for logo overlay
        const qrDataUrl = await QRCode.toDataURL(url, {
          width: size,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          errorCorrectionLevel: 'H' // High error correction allows up to 30% data loss
        });

        // Load QR code image
        const qrImage = new Image();
        qrImage.onload = () => {
          // Draw QR code
          ctx.drawImage(qrImage, 0, 0, size, size);

          // Load and draw logo
          const logo = new Image();
          logo.crossOrigin = 'anonymous';
          logo.onload = () => {
            // Calculate maximum safe logo size (should not exceed 25% of QR code area to maintain scannability)
            const maxLogoSize = Math.min(logoSize, size * 0.25);

            // Calculate logo dimensions maintaining aspect ratio
            const logoAspectRatio = logo.naturalWidth / logo.naturalHeight;
            let logoWidth = maxLogoSize;
            let logoHeight = maxLogoSize;

            if (logoAspectRatio > 1) {
              // Logo is wider than tall
              logoHeight = maxLogoSize / logoAspectRatio;
            } else {
              // Logo is taller than wide
              logoWidth = maxLogoSize * logoAspectRatio;
            }

            const logoX = (size - logoWidth) / 2;
            const logoY = (size - logoHeight) / 2;

            // Draw white background with rounded corners for better integration
            const backgroundPadding = 8;
            const backgroundRadius = Math.max(logoWidth, logoHeight) / 2 + backgroundPadding;

            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, backgroundRadius, 0, 2 * Math.PI);
            ctx.fill();

            // Add subtle border to help with contrast
            ctx.strokeStyle = '#E5E7EB';
            ctx.lineWidth = 2;
            ctx.stroke();

            // Draw logo with proper aspect ratio
            ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
            setIsLoading(false);
          };
          logo.onerror = () => {
            // If logo fails to load, just show QR code without logo
            setIsLoading(false);
          };
          logo.src = logoSrc;
        };
        qrImage.src = qrDataUrl;

      } catch (error) {
        console.error('Error generating QR code:', error);
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, [url, size, logoSrc, logoSize]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg"
          style={{ width: size, height: size }}
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className={`border border-gray-200 rounded-lg shadow-lg ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}