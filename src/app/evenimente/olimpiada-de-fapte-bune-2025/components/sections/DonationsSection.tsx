'use client'

import { DollarSign, Heart, Shield, Copy, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function DonationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="donatii"
      className="py-20 bg-white relative overflow-hidden"
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
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className={`inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8 transform transition-all duration-700 delay-300 ${
            isVisible ? 'scale-100 rotate-0' : 'scale-75 rotate-45'
          }`}>
            <DollarSign className="w-10 h-10 text-primary" />
          </div>
          
          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Generozitatea în Acțiune
          </p>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Donații
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Impact Message */}
        <div className={`max-w-4xl mx-auto text-center mb-16 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-light mb-8">
            Fiecare donație contribuie direct la premierea elevilor vâlceni care și-au demonstrat 
            excelența la olimpiadele și concursurile școlare naționale.
          </p>
          
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-gray-700 font-medium">
              &quot;Investiția în educația tinerilor reprezintă investiția în viitorul comunității noastre.&quot;
            </p>
          </div>
        </div>

        {/* Bank Details and CTA */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bank Details */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
          }`}>
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
          </div>

          {/* Right Column - Transparency & Trust */}
          <div className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'
          }`}>
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

            {/* Trust Indicators */}
            <div className="space-y-4">
              {[
                "Certificare oficială pentru activitate non-profit",
                "Rapoarte financiare publice anuale",
                "Feedback direct de la beneficiari",
                "Monitorizare continuă a proiectelor"
              ].map((indicator, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 transform transition-all duration-500 hover:shadow-md ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${1100 + index * 100}ms` }}
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-sm">{indicator}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}