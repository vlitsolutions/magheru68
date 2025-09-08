'use client'

import { DollarSign, Heart, Shield, Copy, Check, ExternalLink, Newspaper, Globe, Facebook } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DonationsSection() {
  const [copiedIban, setCopiedIban] = useState(false);
  const [copiedSwift, setCopiedSwift] = useState(false);
  const [copiedAccount, setCopiedAccount] = useState(false);

  const bankDetails = {
    bank: "UNICREDIT BANK",
    account: "Asociația General Magheru 68 județul Vâlcea",
    iban: "RO55 BACX 0000 0008 4348 3003",
    swift: "BACXROBU"
  };

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.iban.replace(/\s/g, ''));
      setCopiedIban(true);
      setTimeout(() => setCopiedIban(false), 2000);
    } catch (err) {
      console.error('Failed to copy IBAN:', err);
    }
  };

  const copySwift = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.swift);
      setCopiedSwift(true);
      setTimeout(() => setCopiedSwift(false), 2000);
    } catch (err) {
      console.error('Failed to copy SWIFT:', err);
    }
  };

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(bankDetails.account);
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
    } catch (err) {
      console.error('Failed to copy account name:', err);
    }
  };


  return (
    <motion.section 
      id="donatii"
      className="py-20 bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px), radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)', color: 'hsl(var(--primary))',
          backgroundSize: '50px 50px'
        }}></div>
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
            <DollarSign className="w-10 h-10 text-primary" />
          </motion.div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Generozitatea în Acțiune
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Donații
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Impact Message */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Fiecare donație contribuie direct la premierea elevilor vâlceni care și-au demonstrat 
            excelența la olimpiadele și concursurile școlare naționale.
          </p>
          
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-gray-700 font-medium">
              &quot;Investiția în educația tinerilor reprezintă investiția în viitorul comunității noastre.&quot;
            </p>
          </div>
        </motion.div>

        {/* Bank Details and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bank Details */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              Detalii Bancare
            </h3>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/30 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">Banca</label>
                  <p className="text-lg font-semibold text-gray-900">{bankDetails.bank}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">Titular cont</label>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-primary/30">
                    <p className="text-lg font-semibold text-gray-900 flex-1">{bankDetails.account}</p>
                    <button
                      onClick={copyAccount}
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedAccount ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Copiat!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm font-medium">Copiază</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">IBAN</label>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-primary/30">
                    <code className="text-lg font-mono text-gray-900 flex-1">{bankDetails.iban}</code>
                    <button
                      onClick={copyIban}
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedIban ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Copiat!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm font-medium">Copiază</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-600 block mb-2">Cod SWIFT</label>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-primary/30">
                    <code className="text-lg font-mono text-gray-900 flex-1">{bankDetails.swift}</code>
                    <button
                      onClick={copySwift}
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      {copiedSwift ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="text-sm font-medium">Copiat!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm font-medium">Copiază</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-6 bg-amber-50 border border-amber-200 rounded-xl">
              <h4 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
                <span className="text-lg">ℹ️</span>
                Important
              </h4>
              <div className="space-y-3 text-sm text-amber-800">
                <p>
                  <strong>Descrierea transferului:</strong> Vă rugăm să specificați 
                  <span className="font-mono bg-amber-100 px-2 py-1 rounded mx-1">&quot;Donatie pentru evenimentul caritabil&quot;</span>
                  pentru a ne asigura că fondurile sunt alocate în mod corespunzător.
                </p>
                <p>
                  <strong>Confirmare transfer:</strong> Pentru o confirmare, trimiteți un e-mail la 
                  <a href="mailto:info@magheru68.ro" className="text-primary underline hover:text-primary/90"> info@magheru68.ro </a> 
                  cu o copie a confirmării transferului.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Transparency & Trust */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Transparență și Încredere
            </h3>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 mb-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Raportare completă</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Toate donațiile sunt gestionate cu maximă transparență. Publicăm rapoarte detaliate 
                despre utilizarea fondurilor și impactul generat în comunitate.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Transparență</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-primary">0%</div>
                  <div className="text-sm text-gray-600">Comisioane</div>
                </div>
              </div>
            </div>

            {/* Media Coverage */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Mediatizare și Recunoaștere</h4>
              
              {/* News Articles */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                <a 
                  href="https://jurnalulolteniei.ro/2024/10/06/33-elevi-de-nota-10-au-primit-premii-de-excelenta-la-gala-educatiei-valcene/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Newspaper className="w-6 h-6 text-blue-600 group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 group-hover:text-primary mb-2 transition-colors">
                      33 elevi de nota 10 au primit premii de excelență la Gala Educației Vâlcene
                    </h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      La Gala Educației Vâlcene au fost premiați elevii cu rezultate excepționale la olimpiadele și concursurile naționale.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>jurnalulolteniei.ro</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Articol de presă</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>

                <a 
                  href="https://saptamana.net/articol/22587-gala-excelentei-in-educatie-moment-festiv-pentru-exponentii-valorilor-valcene"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Newspaper className="w-6 h-6 text-green-600 group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 group-hover:text-primary mb-2 transition-colors">
                      Gala Excelenței în Educație - moment festiv pentru exponenții valorilor vâlcene
                    </h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Evenimentul caritabil care celebrează excelența educațională și sprijină tinerii performeri din Vâlcea.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>saptamana.net</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Articol de presă</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </a>

                {/* TVR Article */}
                <a 
                  href="https://tvr-craiova.ro/stiri/gala-excelentei-in-educatie-la-valcea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-xl border border-red-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-6 h-6 text-red-600 group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 group-hover:text-primary mb-2 transition-colors">
                      Gala Excelenței în Educație la Vâlcea
                    </h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Reportaj TVR Craiova despre evenimentul caritabil organizat în sprijinul elevilor olimpici din județul Vâlcea.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>TVR Craiova</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Reportaj TV</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      TVR
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>

                {/* Facebook Video */}
                <a 
                  href="https://www.facebook.com/adrian.pana.7/videos/valcea-gala-excelen%C8%9Bei-%C3%AEn-educa%C8%9Bie-edi%C8%9Bia-a-iii-a147-de-elevi-155-premii-%C3%AEn-tota/1300144141178113/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600 group-hover:text-primary" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-gray-900 group-hover:text-primary mb-2 transition-colors">
                      Vâlcea - Gala Excelenței în Educație, ediția a III-a
                    </h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      Video de la eveniment: 147 de elevi, 155 premii în total. Momentele speciale ale galei caritabile.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>Adrian Pană</span>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <span>Video Facebook</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Facebook
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                  </div>
                </a>
              </motion.div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-800 font-medium text-center">
                  📺 Urmăriți acoperirea media completă a evenimentelor noastre caritabile și impactul în comunitate
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

    </motion.section>
  );
}