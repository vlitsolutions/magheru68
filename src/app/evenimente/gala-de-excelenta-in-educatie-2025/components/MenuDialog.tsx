'use client'

import { useState } from "react";
import { X, Utensils, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MenuDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuDialog({ isOpen, onClose }: MenuDialogProps) {
  const [activeTab, setActiveTab] = useState<'food' | 'drinks'>('food');

  if (!isOpen) return null;

  const foodMenu = {
    aperitive: [
      "Platou de brânzeturi românești cu miere și nuci",
      "Cărnați de Pleșcoi cu muștar de Tecuci",
      "Salată de icre de știucă cu măsline",
      "Bruschette cu roșii confiate și busuioc"
    ],
    felulPrincipal: [
      "Ciorbă de burtă tradițională",
      "Mici la grătar cu muștar și pâine de casă",
      "Papanași cu smântână și dulceață de vișine",
      "Sarmale în foi de varză cu mămăligă și smântână",
      "Miel la proțap cu garnitură de legume de sezon"
    ],
    deserturi: [
      "Tort Amandine cu cremă de ciocolată",
      "Clătite cu brânză dulce și stafide",
      "Cozonac cu nucă și rahat",
      "Înghețată artizanală cu fructe de pădure"
    ]
  };

  const drinksMenu = {
    aperitive: [
      "Țuică de prună din Vâlcea (50ml)",
      "Pălincă de pere Williams (50ml)", 
      "Vin fiert cu scorțișoară și cuișoare",
      "Cocktail de bun venit cu șampanie"
    ],
    vinuri: [
      "Fetească Neagră - Cramele Halewood",
      "Riesling Italian - Villa Zorești",
      "Cabernet Sauvignon - Domeniul Bogdan",
      "Rosé de Odobești - tradiție vâlceană",
      "Șampanie românească - Casa de Vinuri Tohani"
    ],
    nealcoolice: [
      "Suc natural de mere din Vâlcea", 
      "Limonadă cu menta și lime",
      "Ceai de munte cu miere",
      "Apă minerală Covasna și Bucovina",
      "Cafea românească proaspăt măcinată"
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-6 relative">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
          </div>
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Meniu Complet</h2>
              <p className="text-primary-foreground/80">Gala de Excelența în Educație 2025</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('food')}
            className={`flex-1 py-4 px-6 font-medium transition-all ${
              activeTab === 'food'
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            <Utensils className="w-5 h-5 inline mr-2" />
            Mâncare
          </button>
          <button
            onClick={() => setActiveTab('drinks')}
            className={`flex-1 py-4 px-6 font-medium transition-all ${
              activeTab === 'drinks'
                ? 'text-primary border-b-2 border-primary bg-primary/5'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
            }`}
          >
            <Wine className="w-5 h-5 inline mr-2" />
            Băuturi
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'food' ? (
            <div className="space-y-8">
              {/* Aperitive */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🥗 Aperitive
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {foodMenu.aperitive.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Felul Principal */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🍽️ Felul Principal
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {foodMenu.felulPrincipal.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deserturi */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🍰 Deserturi
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {foodMenu.deserturi.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Aperitive */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🥃 Aperitive
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {drinksMenu.aperitive.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vinuri */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🍷 Vinuri
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {drinksMenu.vinuri.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nealcoolice */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  🥤 Băuturi Nealcoolice
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {drinksMenu.nealcoolice.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            <span className="font-medium">Notă:</span> Meniul poate suferi modificări minore în funcție de disponibilitatea ingredientelor de sezon
          </p>
        </div>
      </div>
    </div>
  );
}