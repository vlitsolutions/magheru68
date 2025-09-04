'use client'

import { Users} from "lucide-react";
import { motion } from "framer-motion";

export default function SponsorsSection() {


  return (
    <motion.section 
      id="sponsori"
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Background network pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="network" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-primary"/>
              <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
              <line x1="10" y1="10" x2="10" y2="30" stroke="currentColor" strokeWidth="0.5" className="text-primary"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#network)"/>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Parteneriatul cu companii și organizații responsabile social ne permite să amplificăm 
            impactul pozitiv și să ajungem la mai multe persoane în nevoie.
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-primary/20">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-primary">Împreună suntem mai puternici. </span> 
              Fiecare parteneriat reprezintă o nouă oportunitate de a face bine în comunitate.
            </p>
          </div>
        </motion.div>

        {/* Current Partners Showcase */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 mb-16"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 1.0 }}
        >
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Partenerii Noștri 2025
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Mulțumim tuturor organizațiilor și companiilor care ne susțin în misiunea noastră de a construi o comunitate mai bună
            </p>
            
            {/* Placeholder for partner logos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-6 h-24 flex items-center justify-center border border-white/50"
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: 1.15 + index * 0.08 }}
                >
                  <span className="text-gray-400 font-medium text-sm">Logo Partner</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action for New Partners */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-3xl p-8 md:p-12"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 1.3 }}
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