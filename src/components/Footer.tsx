'use client'

import { Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Logo and Organization */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-6">
              <Image 
                src="/logo_white.webp" 
                alt="Asociația General Magheru 68" 
                width={80}
                height={80}
                className="h-20 w-auto"
                style={{ width: 'auto', height: '80px' }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Asociația General Magheru 68</h3>
            <p className="text-gray-400 mb-4 text-lg">Râmnicu Vâlcea</p>
            <p className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0">
              Sprijinind excelența educațională și premiind elevii cu rezultate remarcabile la olimpiadele și concursurile școlare naționale.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Email:</p>
                <a 
                  href="mailto:info@magheru68.ro" 
                  className="text-lg hover:text-blue-400 transition-colors"
                >
                  info@magheru68.ro
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Președinte:</p>
                <p className="text-lg mb-2">Vasile Căprescu</p>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <span className="text-lg">073539350</span>
                  <a 
                    href="https://wa.me/40733539350" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2025 Asociația General Magheru 68. Toate drepturile rezervate.</p>
            <div className="mt-2 md:mt-0 text-center md:text-right">
              <p className="mb-1">Gala de Excelența în Educație - Ediția a IV-a</p>
              <p className="text-sm">
                © 2025 by{" "}
                <a 
                  href="https://vlit-solutions.ro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors underline"
                >
                  VLIT Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}