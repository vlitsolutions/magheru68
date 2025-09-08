'use client'

import { Users} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SponsorsSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('sponsori');
      if (section) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        setScrollY(window.scrollY - sectionTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section 
      id="sponsori"
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Full Width Spinning Globe Background with Parallax */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div 
          className="absolute inset-0 opacity-8 flex items-center justify-center"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        >
          <div className="w-full h-full min-w-[600px] min-h-[600px] md:min-w-[1200px] md:min-h-[800px] animate-spin" style={{ animationDuration: '60s' }}>
            <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
              {/* Large Centered Globe outline */}
              <circle cx="400" cy="400" r="320" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary"/>
              <circle cx="400" cy="400" r="290" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-50"/>
              <circle cx="400" cy="400" r="260" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary opacity-30"/>
              
              {/* Longitude lines */}
              <ellipse cx="400" cy="400" rx="320" ry="140" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <ellipse cx="400" cy="400" rx="320" ry="230" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <ellipse cx="400" cy="400" rx="280" ry="320" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <ellipse cx="400" cy="400" rx="180" ry="320" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <ellipse cx="400" cy="400" rx="90" ry="320" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              
              {/* Latitude lines */}
              <line x1="80" y1="400" x2="720" y2="400" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <line x1="120" y1="260" x2="680" y2="260" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <line x1="120" y1="540" x2="680" y2="540" stroke="currentColor" strokeWidth="2" className="text-primary opacity-25"/>
              <line x1="160" y1="170" x2="640" y2="170" stroke="currentColor" strokeWidth="1" className="text-primary opacity-20"/>
              <line x1="160" y1="630" x2="640" y2="630" stroke="currentColor" strokeWidth="1" className="text-primary opacity-20"/>
              
              {/* Network nodes distributed across the globe */}
              <g className="text-primary">
                <circle cx="580" cy="150" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0s', animationDuration: '3s' }}/>
                <circle cx="220" cy="200" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}/>
                <circle cx="680" cy="420" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '4s' }}/>
                <circle cx="120" cy="380" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}/>
                <circle cx="500" cy="120" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '3.2s' }}/>
                <circle cx="300" cy="650" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}/>
                <circle cx="620" cy="580" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.2s', animationDuration: '3.8s' }}/>
                <circle cx="200" cy="140" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2.2s', animationDuration: '2.2s' }}/>
                <circle cx="550" cy="520" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3.6s' }}/>
                <circle cx="100" cy="300" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.8s', animationDuration: '2.9s' }}/>
                <circle cx="700" cy="250" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.2s', animationDuration: '3.3s' }}/>
                <circle cx="400" cy="100" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.4s', animationDuration: '2.7s' }}/>
                <circle cx="350" cy="400" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.7s', animationDuration: '3.1s' }}/>
                <circle cx="450" cy="300" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '2.4s' }}/>
                <circle cx="280" cy="180" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.1s', animationDuration: '3.7s' }}/>
                <circle cx="650" cy="160" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.9s', animationDuration: '2.6s' }}/>
                <circle cx="180" cy="550" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.4s', animationDuration: '3.4s' }}/>
                <circle cx="720" cy="350" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2.1s', animationDuration: '2.8s' }}/>
                <circle cx="80" cy="400" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.9s', animationDuration: '3.9s' }}/>
                <circle cx="520" cy="380" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.6s', animationDuration: '2.3s' }}/>
                <circle cx="380" cy="220" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.1s', animationDuration: '3.0s' }}/>
                <circle cx="260" cy="480" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2.3s', animationDuration: '2.9s' }}/>
                <circle cx="580" cy="450" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.3s', animationDuration: '3.5s' }}/>
                <circle cx="320" cy="120" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.6s', animationDuration: '2.7s' }}/>
                <circle cx="680" cy="500" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2.4s', animationDuration: '3.2s' }}/>
                <circle cx="120" cy="220" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '1.7s', animationDuration: '2.5s' }}/>
                <circle cx="480" cy="600" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '0.8s', animationDuration: '3.6s' }}/>
                <circle cx="600" cy="220" r="4" fill="currentColor" className="animate-pulse" style={{ animationDelay: '2.0s', animationDuration: '2.8s' }}/>
              </g>
              
              {/* Connection lines between nodes */}
              <g className="text-primary opacity-15">
                <line x1="580" y1="150" x2="500" y2="120" stroke="currentColor" strokeWidth="1"/>
                <line x1="220" y1="200" x2="120" y2="380" stroke="currentColor" strokeWidth="1"/>
                <line x1="680" y1="420" x2="620" y2="580" stroke="currentColor" strokeWidth="1"/>
                <line x1="300" y1="650" x2="550" y2="520" stroke="currentColor" strokeWidth="1"/>
                <line x1="200" y1="140" x2="400" y2="100" stroke="currentColor" strokeWidth="1"/>
                <line x1="100" y1="300" x2="700" y2="250" stroke="currentColor" strokeWidth="1"/>
                <line x1="350" y1="400" x2="450" y2="300" stroke="currentColor" strokeWidth="1"/>
                <line x1="280" y1="180" x2="380" y2="220" stroke="currentColor" strokeWidth="1"/>
                <line x1="650" y1="160" x2="720" y2="350" stroke="currentColor" strokeWidth="1"/>
                <line x1="180" y1="550" x2="260" y2="480" stroke="currentColor" strokeWidth="1"/>
                <line x1="520" y1="380" x2="580" y2="450" stroke="currentColor" strokeWidth="1"/>
                <line x1="320" y1="120" x2="600" y2="220" stroke="currentColor" strokeWidth="1"/>
                <line x1="80" y1="400" x2="120" y2="220" stroke="currentColor" strokeWidth="1"/>
                <line x1="680" y1="500" x2="480" y2="600" stroke="currentColor" strokeWidth="1"/>
              </g>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-20">
        {/* Central Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8"
            initial={{ scale: 0.75, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Users className="w-10 h-10 text-primary" />
          </motion.div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Comunitatea de Susținători
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sponsori și Parteneri
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Description */}
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-16"
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl p-8 md:p-10 shadow-lg border border-primary/20 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
              Organizatori Principali
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                <span className="font-bold text-primary">Asociația &ldquo;General Magheru 68&rdquo;</span> în parteneriat cu
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <span className="bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 font-semibold text-gray-800 shadow-sm">
                  Inspectoratul Școlar Județean Vâlcea
                </span>
                <span className="bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 font-semibold text-gray-800 shadow-sm">
                  Consiliul Județean Vâlcea
                </span>
                <span className="bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 font-semibold text-gray-800 shadow-sm">
                  Asociația &ldquo;Anton Pann 273&rdquo; Rm. Vâlcea
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-primary">Împreună construim viitorul educației. </span> 
              Prin colaborarea cu instituțiile de stat și organizațiile civice, amplificăm impactul pozitiv în comunitatea vâlceană.
            </p>
          </div>
        </motion.div>

        {/* Current Partners Showcase */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 mb-16"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Partenerii Noștri 2025
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Mulțumim tuturor organizațiilor și companiilor care ne susțin în misiunea noastră de a construi o comunitate mai bună
            </p>
            
            {/* Sponsors Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              {[
                "Scandia Sibiu", "Diana", "Valoris", "Annabella", "Avicarvil",
                "DoinaMed", "Nurvil", "VinuriShop", "PCPrint", "Paradis-Nobless",
                "Posada Center", "Stil Diamonds", "Arbusto Coffee", "Hotel Ramada", "Dumbrafox",
                "Boromir", "Necci Restaurant", "Taverna D'Amicii", "Antares Gas", "Hotel Maria",
                "A-Rosa Ski Resort"
              ].map((sponsor, index) => (
                <div 
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-4 md:p-6 h-20 md:h-24 flex items-center justify-center border border-white/50 group hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <span className="text-gray-600 font-semibold text-xs md:text-sm leading-tight group-hover:text-primary transition-colors">
                      {sponsor}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8 text-center"
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4 border border-white/40 inline-block">
                <p className="text-primary font-semibold text-sm">
                  📍 Logouri disponibile în curând
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action for New Partners */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-3xl p-8 md:p-12"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Devino Partenerul Nostru
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Căutăm organizații care împărtășesc valorile noastre și doresc să contribuie la bunăstarea comunității
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-medium">Contactează-ne la eveniment pentru detalii</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}