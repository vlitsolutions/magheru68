'use client'

import { Gavel, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AuctionsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const categories = [
    {
      name: "Sport",
      icon: "🏆",
      color: "red",
      items: [
        { title: "Minge Tenis Simona Halep", subtitle: "Semnată de campioana noastră olimpică", icon: "🎾" },
        { title: "Tricou Naționala României", subtitle: "Semnat de golgheterul echipei naționale", icon: "⚽" },
        { title: "Set Universitatea Craiova", subtitle: "Tricoul oficial + mingea echipei", icon: "⚽" },
        { title: "Tricou FC Dinamo", subtitle: "Echipa curentă, ediție limitată", icon: "⚽" },
        { title: "Mănuși Florian Prunea", subtitle: "Portarul legendar al echipe Dinamo", icon: "🧤" },
        { title: "Tricou FCSB", subtitle: "Echipa curentă, ediție limitată", icon: "⚽" },
        { title: "Echipament Alina Vuc", subtitle: "Piesă autentică din competițiile internaționale", icon: "🏃‍♀️" },
        { title: "Minge Națională Semnată", subtitle: "Oficială, cu autografele lotului României", icon: "⚽" },
        { title: "Echipament Ștefania Uță", subtitle: "Piesă de colecție din cariera atletei", icon: "🏃‍♀️" },
        { title: "Set CS Vâlcea 1924", subtitle: "Tricou + minge Kenny Gabriel", icon: "🏀" },
        { title: "Set SCM Râmnicu Vâlcea", subtitle: "Vestimentație jucătoare + minge oficială", icon: "🏐" },
        { title: "Piolet Horia Colibășanu", subtitle: "Echipament utilizat în expedițiile legendare", icon: "⛏️" },
        { title: "Mănuși Cătălin Moroșanu", subtitle: "Campionul român de K1 și kickboxing", icon: "🥊" },
        { title: "Șort Stoica", subtitle: "Echipament din competițiile MMA", icon: "🥊" },
        { title: "Tricou Zarioiu", subtitle: "Vestimentația luptătorului MMA", icon: "🥊" }
      ]
    },
    {
      name: "Cultură",
      icon: "🎨",
      color: "purple",
      items: [
        { title: "Tablou Original I", subtitle: "Lucrare semnată, tehnică mixtă pe pânză", icon: "🖼️" },
        { title: "Tablou Original II", subtitle: "Pictură în ulei, peisaj românesc", icon: "🖼️" },
        { title: "Tablou Original III", subtitle: "Artă contemporană, stil abstract", icon: "🖼️" },
        { title: "Tablou Alexandru Ghinea", subtitle: "Opera semnată de artistul consacrat", icon: "🖼️" }
      ]
    },
    {
      name: "Speciale",
      icon: "✨",
      color: "yellow",
      items: [
        { title: "Fosilă Amonit Secționată", subtitle: "Paralegoceras sundaicum - cochilie fosilizată rară, specimen paleontologic autentic", icon: "🐚" },
        { title: "Colier din Aur Alb de 18k", subtitle: "Cu pandantiv incrustat cu Tanzanit de 0.8ct și Diamante de 0.10ct de la partenerul Stil Diamonds", icon: "💎" }
      ]
    }
  ];

  // Dynamic calculation of items per page based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) { // Mobile: 2x2 = 4 items
        setItemsPerPage(4);
      } else if (width < 1024) { // Tablet: 3x2 = 6 items  
        setItemsPerPage(6);
      } else { // Desktop: 6x2 = 12 items
        setItemsPerPage(12);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Calculate paginated items
  const currentItems = categories[activeCategory]?.items || [];
  const totalPages = Math.ceil(currentItems.length / itemsPerPage);
  const paginatedItems = currentItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' | 'hover') => {
    const colors = {
      red: {
        bg: 'from-red-500 to-red-600',
        text: 'text-red-600',
        border: 'border-red-100',
        hover: 'hover:text-red-600'
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-100',
        hover: 'hover:text-purple-600'
      },
      yellow: {
        bg: 'from-yellow-500 to-orange-500',
        text: 'text-yellow-600',
        border: 'border-yellow-100',
        hover: 'hover:text-yellow-600'
      }
    };
    return colors[color as keyof typeof colors]?.[variant] || '';
  };

  const handleCategoryChange = (categoryIndex: number) => {
    setActiveCategory(categoryIndex);
    setCurrentPage(0);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <motion.section
      id="licitatii"
      className="py-20 bg-gray-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4 }}
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-50/50 via-transparent to-orange-50/30"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
            <Gavel className="w-10 h-10 text-primary" />
          </motion.div>

          <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
            Participare Activă
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Licitații
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
            Licitațiile de la bal oferă o modalitate elegantă și interactivă de a contribui la fondul
            de premiere, cu obiecte de valoare donate de parteneri generosi.
          </p>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-yellow-100">
            <p className="text-lg text-gray-700">
              <span className="font-semibold text-yellow-600">Participarea la licitații</span> nu doar că sprijină cauza noastră,
              dar vă oferă și șansa de a obține piese unice și experiențe de neuitat.
            </p>
          </div>
        </motion.div>

        {/* Auction Catalogue */}
        <motion.div
          className="mt-16"
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Catalogue Header */}
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Catalogul Licitației 2025
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Descoperiți colecția excepțională de obiecte donate de parteneri generosi,
              organizate în trei categorii distincte pentru seara voastră specială
            </motion.p>
            <motion.div
              className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />
          </div>

          {/* Category Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => handleCategoryChange(index)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${activeCategory === index
                    ? `bg-gradient-to-r ${getColorClasses(category.color, 'bg')} text-white shadow-lg`
                    : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg border border-gray-200'
                  }`}
                initial={{ y: 32, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
                <div className="bg-white/20 rounded-full px-2 py-1 text-xs">
                  {category.items.length} obiecte
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Content */}
          <motion.div
            key={`${activeCategory}-${currentPage}`}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Items Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 overflow-hidden border ${getColorClasses(categories[activeCategory].color, 'border')}`}
                  initial={{ y: 32, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`bg-gradient-to-br from-${categories[activeCategory].color}-50 to-${categories[activeCategory].color}-100 p-6 md:p-8 aspect-[4/3]`}>
                    <div className="h-full flex items-center justify-center text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <h5 className={`font-bold text-gray-900 mb-1 md:mb-2 text-sm md:text-base ${getColorClasses(categories[activeCategory].color, 'hover')} transition-colors leading-tight`}>
                      {item.title}
                    </h5>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button
                  onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${currentPage === 0
                      ? 'text-gray-400 cursor-not-allowed'
                      : `text-gray-600 hover:text-white hover:bg-gradient-to-r ${getColorClasses(categories[activeCategory].color, 'bg')} hover:shadow-lg`
                    }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, pageIndex) => (
                    <button
                      key={pageIndex}
                      onClick={() => handlePageChange(pageIndex)}
                      className={`w-8 h-8 rounded-full font-medium transition-all duration-300 ${currentPage === pageIndex
                          ? `bg-gradient-to-r ${getColorClasses(categories[activeCategory].color, 'bg')} text-white shadow-lg`
                          : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        }`}
                    >
                      {pageIndex + 1}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => handlePageChange(Math.min(totalPages - 1, currentPage + 1))}
                  disabled={currentPage === totalPages - 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${currentPage === totalPages - 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : `text-gray-600 hover:text-white hover:bg-gradient-to-r ${getColorClasses(categories[activeCategory].color, 'bg')} hover:shadow-lg`
                    }`}
                >
                  <span className="hidden sm:inline">Următor</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-yellow-100 via-orange-100 to-yellow-100 rounded-3xl p-8 md:p-12 border border-yellow-200"
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-200/50 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                Și Multe Alte Surprize
              </h4>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Catalogul complet cu toate obiectele disponibile va fi prezentat în seara evenimentului.
                <span className="font-semibold text-yellow-700"> Fiecare licitație contribuie direct la fondul de premiere</span> al elevilor olimpici.
              </p>
              <div className="bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                <span className="font-medium text-gray-800">Participarea este deschisă tuturor invitaților</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}