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
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Meniul Galei
                </h3>
                <p className="text-gray-600 mb-2">
                  Preparate cu dragoste de echipa noastră de parteneri de la <span className="font-semibold text-gray-800">Hotel Ramada</span>
                </p>
              </div>

              {/* Romantismul intra in platou - Aperitive */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Romantismul intră în platou</h4>
                  <p className="text-sm text-gray-600">Aperitive și gustări rafinate</p>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Ciuperca umplută cu bacon și brânză</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Mușlitoș din crab</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Pachețele de primăvară cu pui și legume</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Ceafă de porc crud uscată</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Somon fumé în coșuleț filo</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Chifteluțe cu susan</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Raffaello cu parmezan</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Cocktail din măsline aromatizate</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Spumă de brânză cu castravete și ardei</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Mini caprese</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">Ruladă de pui în crustă de sfeclă</p>
                  </div>
                </div>
              </div>

              {/* Placeri aromate - Felul principal */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Plăceri aromate</h4>
                  <p className="text-sm text-gray-600">Felul principal</p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <p className="text-gray-800 font-medium mb-1">Cotlet de porc împanat</p>
                      <p className="text-gray-700 text-sm mb-2">Piept de curcan la cuptor cu sos de piper verde</p>
                      <p className="text-gray-600 text-xs">Servit cu cartofi gratinați și salată de sfeclă roșie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Băuturile Galei
                </h3>
                <p className="text-gray-600 mb-2">
                  Selecție rafinată oferită de partenerii noștri <span className="font-semibold text-gray-800">Vinuri.Shop</span> și <span className="font-semibold text-gray-800">High Class Bar</span>
                </p>
              </div>

              {/* Vinuri.Shop */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Vinuri.Shop</h4>
                  <p className="text-sm text-gray-600">Selecție premium de vinuri italiene</p>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Wine List */}
                  <div className="space-y-3">
                    <h5 className="font-semibold text-gray-800 mb-3">Selecția de Vinuri</h5>

                    <div className="space-y-2">
                      <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Ornella Bellia - Pinot Grigio Venetia</p>
                          <p className="text-gray-600 text-xs">Vin alb sec</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-rose-50 border border-rose-200 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Ornella Bellia - Pinot Grigio Rosato</p>
                          <p className="text-gray-600 text-xs">Vin rozé sec</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">Col de Mar Millesimato</p>
                          <p className="text-gray-600 text-xs">Prosecco Venezia Extra Dry</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Premium Experience */}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-800 mb-2">Experiență Premium</h5>
                      <p className="font-medium text-purple-900 text-sm mb-1">Degustare cu Somelier Dan Sendrea</p>
                      <p className="text-purple-700 text-xs">Selecții premium de vinuri și prosecco italienești cu povești fascinante</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* High Class Bar Cocktails */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">High Class Bar by Bojete Gabriel</h4>
                  <p className="text-sm text-gray-600">Cocktailuri artizanale și băuturi premium</p>
                </div>

                {/* Cu alcool */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Cu alcool</h5>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="font-medium text-green-800 text-sm">Hugo</p>
                      <p className="text-green-700 text-xs">Prosecco, sirop de soc, mentă, lime, apă minerală</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="font-medium text-orange-800 text-sm">Aperol Spritz</p>
                      <p className="text-orange-700 text-xs">Prosecco, Aperol, portocală, apă minerală</p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="font-medium text-amber-800 text-sm">Cuba Libre</p>
                      <p className="text-amber-700 text-xs">Rom, lime, Coca Cola</p>
                    </div>
                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-3">
                      <p className="font-medium text-pink-800 text-sm">Summer Cocktail</p>
                      <p className="text-pink-700 text-xs">Suc de piersică, portocale, vodka, Peachtree, grenadine</p>
                    </div>
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-3">
                      <p className="font-medium text-teal-800 text-sm">Gin Tonic</p>
                      <p className="text-teal-700 text-xs">Gin, apă tonică, grapefruit/piper roșu și rozmarin</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="font-medium text-red-800 text-sm">Negroni</p>
                      <p className="text-red-700 text-xs">Gin, Campari, Vermut roșu</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="font-medium text-yellow-800 text-sm">Old Fashioned</p>
                      <p className="text-yellow-700 text-xs">Whisky, bitter de portocală, zahăr brun, coajă portocală</p>
                    </div>
                  </div>
                </div>

                {/* Fără alcool */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3">Fără alcool</h5>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                      <p className="font-medium text-orange-800 text-sm">Autumn Vibes</p>
                      <p className="text-orange-700 text-xs">Suc piersică, portocale, grenadine</p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="font-medium text-blue-800 text-sm">Hawaiian</p>
                      <p className="text-blue-700 text-xs">Sprite, sirop bluecuracao, afine</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="font-medium text-green-800 text-sm">Green Apple</p>
                      <p className="text-green-700 text-xs">Suc mere verzi, bluecuracao, felii măr</p>
                    </div>
                  </div>
                </div>

                {/* Shot-uri și Whisky */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Shot-uri</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <p className="text-gray-700 text-sm">B52</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <p className="text-gray-700 text-sm">Kamikaze cu arome</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <p className="text-gray-700 text-sm">Jager</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Whisky Premium</h5>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                      <p className="font-medium text-amber-800 text-sm">Johnnie Walker Black Label</p>
                    </div>
                  </div>
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