'use client'

import { Gift, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RaffleSection() {

  return (
    <motion.section 
      id="tombola"
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Sparkle background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/6 w-4 h-4 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Central Headline */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8"
            initial={{ scale: 0.75, rotate: 45 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Gift className="w-10 h-10 text-primary" />
          </motion.div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Surprize și Premii
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tombola
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Description */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Tombola balului aduce emoția și bucuria câștigului, oferind participanților șansa de a primi 
            premii valoroase în timp ce contribuie la fondul de premiere a elevilor olimpici.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
              <Star className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Premii Garantate</h3>
              <p className="text-gray-600">Toți participanții au șanse reale de câștig cu premii în valoare de mii de lei</p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Acces Accesibil</h3>
              <p className="text-gray-600">Prețuri mici pentru bilete, oferind tuturor șansa de a participa</p>
            </div>
          </div>
        </motion.div>

        {/* Main Prize - Venice Trip */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Premiul Principal
          </motion.h3>
          
          <motion.div 
            className="max-w-5xl mx-auto bg-gradient-to-br from-primary/10 via-primary/5 to-primary/15 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transform transition-all duration-1000 hover:scale-[1.02] mb-12"
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-1/2 relative">
                <div className="aspect-[4/3] md:aspect-auto md:h-full relative overflow-hidden">
                  <Image 
                    src="/venetia.webp" 
                    alt="Venetia - Peisaj romantic cu gondole și canale"
                    width={400}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/20"></div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🇮🇹</span>
                  </div>
                  <div>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wide">Experiența de vis</p>
                    <div className="w-16 h-0.5 bg-primary/50 mt-1"></div>
                  </div>
                </div>

                <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Escapadă Romantică în Veneția
                </h4>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <span className="font-medium text-primary">Câștigătorul și persoana îndrăgită</span> vor trăi o experiență de neuitat în <span className="font-medium text-gray-900">orașul pe apă</span>. Două zile magice printre canalele istorice, unde fiecare colț spune o poveste de dragoste și istorie.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-medium">Tur ghidat prin orașul vechi</span> - descoperiți secretele ascunse ale Piața San Marco, Podul Suspinelor și Palatul Dogilor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-medium">Tur de degustare vinuri cu ghid</span> - oferit de <span className="font-semibold text-primary">Vinuri.Shop</span>, cu vinuri locale și delicatese venetiene autentice</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-medium">Cazare 2 nopți</span> în accommodare selectă în zona centrală, cu priveliști spectaculoase</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><span className="font-medium">Transfer și zbor inclus</span> - plecarea din România în confort total</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200/50 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">✨</span>
                    <p className="font-semibold text-orange-800">Bonus Inclus</p>
                  </div>
                  <p className="text-orange-700 text-sm">Plimbare romantică cu gondola la apus și cină la restaurant cu o stea Michelin</p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-lg font-semibold text-primary">Toate costurile incluse pentru 2 persoane</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Surprises */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4"
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Și Multe Alte Surprize
          </motion.h3>
          
          <motion.p 
            className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Pe lângă marele premiu, tombola oferă <span className="font-semibold text-primary">numeroase surprize valoroase</span> pentru toți participanții
          </motion.p>
          
          <motion.div 
            className="text-center bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20"
            initial={{ y: 32, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎁</span>
            </div>
            
            <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Surprize Misterioase
            </h4>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
              Pregătim pentru voi o selecție spectaculoasă de premii ce vor fi dezvăluite progresiv în seara magică a galei. 
              <span className="font-medium text-primary"> Fiecare bilet aduce cu sine emoția surprizei</span> și șansa de a câștiga experiențe și obiecte de neuitat.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">✨</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Premii Exclusive</h5>
                <p className="text-sm text-gray-600">Obiecte unice și experiențe memorabile</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Șanse Reale</h5>
                <p className="text-sm text-gray-600">Fiecare participant are oportunități multiple</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🌟</span>
                </div>
                <h5 className="font-semibold text-gray-900 mb-2">Revelații Live</h5>
                <p className="text-sm text-gray-600">Surprizele se dezvăluie pe scenă</p>
              </div>
            </div>

            <p className="text-gray-600 italic">
&quot;Să vă lăsați cuprinși de magia necunoscutului...&quot; ✨
            </p>
          </motion.div>
        </div>


        {/* Call to Action */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary to-primary/90 text-white rounded-3xl p-8 md:p-12"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Participă și Sprijină Cauza
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Cu fiecare bilet cumpărat contribui la inițiativele noastre caritabile și îți mărești șansele de câștig
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-medium">Bilete disponibile la eveniment</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}