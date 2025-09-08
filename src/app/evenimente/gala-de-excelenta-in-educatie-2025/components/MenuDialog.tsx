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
              <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                  🍽️ Meniul Galei
                </h3>
                <p className="text-gray-700 mb-2">
                  Preparate cu dragoste de echipa noastră de parteneri de la <span className="font-semibold text-primary">Hotel Ramada</span>
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-800 font-medium">
                    📋 Meniul complet va fi disponibil în curând
                  </p>
                  <p className="text-yellow-700 text-sm mt-2">
                    Vă vom anunța cu detaliile complete ale preparatelor care vă așteaptă la gală
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
                  🍷 Băuturile Galei
                </h3>
                <p className="text-gray-700 mb-2">
                  Selecție rafinată oferită de partenerii noștri <span className="font-semibold text-primary">Vinuri.Shop</span> și <span className="font-semibold text-primary">Barul de Băuturi</span>
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-yellow-800 font-medium">
                    🍾 Lista completă de băuturi va fi disponibilă în curând
                  </p>
                  <p className="text-yellow-700 text-sm mt-2">
                    Pregătim o selecție specială de vinuri și băuturi pentru o seară de neuitat
                  </p>
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