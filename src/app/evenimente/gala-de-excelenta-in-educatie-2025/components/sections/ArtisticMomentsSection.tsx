'use client'

import { Music, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";




const specialGuests = [

  {
    id: 1,
    name: "Dan Șendrea",
    occupation: "Somelier",
    image: "/invitati/dan_sendrea.webp",
    description: "Somelier, negustor de vinuri bune, ce va face asocierea mancarii cu vinurile italienesti de la vinuri.shop. \"Asocierea vinului cu mancarea este una dintre bucuriile vietii\""
  },
  {
    id: 2,
    name: "Horia Colibășanu",
    occupation: "Alpinist și Scriitor",
    image: "/invitati/horia_colibasanu.webp",
    description: "Cunoscut alpinist român, primul care a cucerit opt dintre cei paisprezece munți de peste 8000 de metri din lume. Autor al mai multor cărți despre aventurile sale montane și speaker motivațional apreciat."
  },
  {
    id: 3,
    name: "Ștefania Uță",
    occupation: "Atletă de Performanță",
    image: "/invitati/stefania_uta.webp",
    description: "Campioană europeană la 400m garduri U20, una dintre cele mai promițătoare atlete din România. La doar 17 ani, deține recorduri naționale și internaționale, reprezentând viitorul atletismului românesc."
  },
  {
    id: 4,
    name: "Miruna Ionescu",
    occupation: "Actriță și Producătoare",
    image: "/invitati/miruna_ionescu.webp",
    description: "Actriță talentată cu o carieră de succes în teatru și film, apreciată pentru versatilitatea sa artistică. Producătoare de proiecte culturale inovatoare și susținătoare activă a artelor performative."
  },
  {
    id: 5,
    name: "Kenny Gabriel",
    occupation: "Baschetbalist Profesionist",
    image: "/invitati/kenny_gabriel.webp",
    description: "Baschetbalist american cu o carieră internațională vastă, inclusiv în România la CS Vâlcea. Fost jucător la Auburn University și campion în Turcia cu Karşıyaka, cu experiență în multiple țări europene."
  },
  {
    id: 6,
    name: "Alina Vuc",
    occupation: "Luptătoare Profesionistă",
    image: "/invitati/alina_vuc.webp",
    description: "Dublă medaliată cu argint la Campionatele Mondiale de Lupte și cvadruplu medaliată la Campionatele Europene. Olimpică la Tokyo 2020 și Rio 2016, una dintre cele mai de succes luptătoare din istoria României."
  },
  {
    id: 7,
    name: "Valentin Albeșteanu",
    occupation: "Violonist și Dirijor",
    image: "/invitati/valentin_albeseanu.png",
    description: "Renumit violonist și dirijor, fiul cunoscutului maestru Ion Albeșteanu. Absolvent al Universității Naționale de Muzică București, colaborator al Orchestrei de Cameră a Radiodifuziunii și președinte de onoare al Asociației ProCultArt, dedicat salvgardării muzicii ușoare și de café-concert."
  }
];

export default function ArtisticMomentsSection() {
  const [currentIndex, setCurrentIndex] = useState(specialGuests.length); // Start at middle set for infinite loop
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationQueue = useRef<(() => void)[]>([]);
  const isProcessing = useRef(false);



  // Handle screen size for responsive carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSize('mobile');
      } else if (window.innerWidth < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    handleResize(); // Set initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Process animation queue
  const processQueue = () => {
    if (isProcessing.current || animationQueue.current.length === 0) return;

    isProcessing.current = true;
    const nextAction = animationQueue.current.shift();
    if (nextAction) {
      nextAction();
      setTimeout(() => {
        isProcessing.current = false;
        processQueue();
      }, 550); // Slightly longer than animation duration
    }
  };

  // Handle infinite loop - reset position after animation completes
  useEffect(() => {
    if (currentIndex <= specialGuests.length - 1) {
      // We've scrolled too far left, instantly reset to the middle copy
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + specialGuests.length);
        setTimeout(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        }, 50);
      }, 500);
    } else if (currentIndex >= specialGuests.length * 2) {
      // We've scrolled too far right, instantly reset to the middle copy
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - specialGuests.length);
        setTimeout(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        }, 50);
      }, 500);
    } else {
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    if (isAnimating) {
      // Add to queue if already animating
      animationQueue.current.push(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
      });
      processQueue();
    } else {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (isAnimating) {
      // Add to queue if already animating
      animationQueue.current.push(() => {
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      });
      processQueue();
    } else {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle touch/swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      setTouchEnd(e.targetTouches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && !isAnimating) {
      handleNext();
    }
    if (isRightSwipe && !isAnimating) {
      handlePrevious();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle mouse drag for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setTouchStart(e.clientX);
    e.preventDefault(); // Prevent text selection
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTouchEnd(e.clientX);
      e.preventDefault();
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && !isAnimating) {
      handleNext();
    }
    if (isRightSwipe && !isAnimating) {
      handlePrevious();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTouchStart(0);
      setTouchEnd(0);
    }
  };




  return (
    <>
      <motion.section
        id="momente-artistice"
        className="py-20 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8"
              initial={{ scale: 0.75, rotate: 45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Music className="w-10 h-10 text-primary" />
            </motion.div>

            <p className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
              Cultură și Artă
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Momente Artistice
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
              Seara va fi înfrumusețată de spectacolele unor artiști de renume, care vor crea o atmosferă
              elegantă și memorabilă pentru toți participanții la bal.
            </p>
          </motion.div>

          {/* Featured Artists Highlight */}
          <motion.div
            className="flex justify-center items-center mb-16 mt-16"
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <div className="relative flex items-center justify-center w-full max-w-6xl px-2">

              {/* Left Card - Mihai Mitoșeru */}
              <div className="relative z-10">
                <div className="w-32 md:w-56 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl md:rounded-2xl shadow-lg border border-blue-600 relative flex flex-col"
                  style={{ boxShadow: '0 8px 32px rgba(30, 64, 175, 0.4), 0 4px 16px rgba(30, 64, 175, 0.3)' }}>
                  <div className="relative -mt-8">
                    <Image
                      src="/artisti/mihai_mitoseru.webp"
                      alt="Mihai Mitoșeru"
                      width={224}
                      height={168}
                      className="w-full h-28 md:h-42 object-cover object-top rounded-lg pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <div className="text-center p-2 flex-1 flex flex-col justify-center">
                    <h3 className="text-xs md:text-lg font-bold text-white mb-1">Mihai Mitoșeru</h3>
                    <p className="text-yellow-300 font-medium text-xs md:text-sm">Prezentator</p>
                  </div>
                </div>
              </div>

              {/* Center Card - Zina Ghițulescu (Bigger) */}
              <div className="relative z-20 -mx-3 md:-mx-6">
                <div className="w-36 md:w-64 bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl md:rounded-2xl shadow-lg border border-blue-700 relative flex flex-col"
                  style={{ boxShadow: '0 12px 40px rgba(30, 64, 175, 0.5), 0 6px 20px rgba(30, 64, 175, 0.4)' }}>
                  <div className="relative -mt-10">
                    <Image
                      src="/artisti/zina_ghitulescu.webp"
                      alt="Zina Ghițulescu"
                      width={256}
                      height={192}
                      className="w-full h-32 md:h-48 object-cover object-top rounded-lg pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <div className="text-center p-2 flex-1 flex flex-col justify-center">
                    <h3 className="text-sm md:text-xl font-bold text-white mb-1">Zina Ghițulescu</h3>
                    <h4 className="text-xs md:text-lg font-bold text-white mb-1">& Band</h4>
                    <p className="text-yellow-300 font-medium text-xs md:text-base">Entertainment</p>
                  </div>
                </div>
              </div>

              {/* Right Card - Bogdan Vladău */}
              <div className="relative z-10">
                <div className="w-32 md:w-56 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl md:rounded-2xl shadow-lg border border-blue-600 relative flex flex-col"
                  style={{ boxShadow: '0 8px 32px rgba(30, 64, 175, 0.4), 0 4px 16px rgba(30, 64, 175, 0.3)' }}>
                  <div className="relative -mt-8">
                    <Image
                      src="/artisti/bogdan_vladau.webp"
                      alt="Bogdan Vladău"
                      width={224}
                      height={168}
                      className="w-full h-28 md:h-42 object-cover object-top rounded-lg pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <div className="text-center p-2 flex-1 flex flex-col justify-center">
                    <h3 className="text-xs md:text-lg font-bold text-white mb-1">Bogdan Vladău</h3>
                    <p className="text-yellow-300 font-medium text-xs md:text-sm">Prezentator</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Special Guests Section */}
          <motion.div
            className="mt-20"
            initial={{ y: 48, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Invitați Speciali
              </h3>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* Swipable Container */}
            <div className="relative py-8 md:py-12">
              {/* Cards Container */}
              <div
                className="relative overflow-hidden select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                style={{
                  WebkitUserSelect: 'none',
                  userSelect: 'none',
                  cursor: isDragging ? 'grabbing' : 'grab'
                }}
              >
                {/* Mobile Navigation Buttons - Overlapping */}
                <button
                  onClick={handlePrevious}
                  className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm text-primary rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Desktop/Tablet Navigation Buttons */}
                <button
                  onClick={handlePrevious}
                  className="hidden md:flex absolute left-8 lg:left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="hidden md:flex absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="relative pt-14 pb-6"> {/* Space for popping images */}
                  <div
                    ref={scrollRef}
                    className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
                    style={{
                      transform: `translateX(-${currentIndex * (
                        screenSize === 'mobile' ? 100 :
                          screenSize === 'tablet' ? 50 :
                            33.333
                      )}%)`,
                    }}
                  >
                    {/* All cards in a continuous row for smooth animation */}
                    {[...specialGuests, ...specialGuests, ...specialGuests].map((guest, index) => (
                      <div
                        key={`${guest.id}-${index}`}
                        className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4 md:px-6 lg:px-8"
                      >
                        <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-200 relative flex flex-col mx-auto max-w-sm md:max-w-md lg:max-w-sm h-full"
                          style={{ boxShadow: '0 8px 32px rgba(30, 64, 175, 0.3), 0 4px 16px rgba(30, 64, 175, 0.2)' }}>
                          <Image
                            src={guest.image}
                            alt={guest.name}
                            width={400}
                            height={200}
                            className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-full h-40 md:h-48 lg:h-52 object-cover object-top rounded-lg pointer-events-none"
                            draggable={false}
                          />
                          <div className="pt-32 md:pt-40 lg:pt-44 p-5 md:p-6 pb-8 text-center flex flex-col flex-1">
                            <div className="mb-6">
                              <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">{guest.name}</h4>
                              <p className="text-blue-700 font-medium text-base md:text-lg mb-4">{guest.occupation}</p>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed flex-1">{guest.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.section>
    </>
  );
}