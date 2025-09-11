export interface SponsorImage {
  filename: string;
  type: 'squared' | 'rectangular' | 'wide';
  description?: string;
}

export interface Sponsor {
  name: string;
  images: SponsorImage[];
}

export const sponsors: Sponsor[] = [
  { 
    name: "Scandia Sibiu", 
    images: [{ filename: "scandia_sibiu.png", type: "squared" }] 
  },
  { 
    name: "Diana", 
    images: [{ filename: "diana.png", type: "squared" }] 
  },
  { 
    name: "Valoris", 
    images: [{ filename: "valoris.jpg", type: "squared" }] 
  },
  { 
    name: "Annabella", 
    images: [{ filename: "annabella.png", type: "squared" }] 
  },
  { 
    name: "Avicarvil", 
    images: [{ filename: "avicarvil.jpeg", type: "squared" }] 
  },
  { 
    name: "DoinaMed", 
    images: [{ filename: "doinamed.png", type: "squared" }] 
  },
  { 
    name: "Nurvil", 
    images: [{ filename: "nurvil.svg", type: "squared" }] 
  },
  { 
    name: "VinuriShop", 
    images: [{ filename: "vinuri_shop.png", type: "squared" }] 
  },
  { 
    name: "PCPrint", 
    images: [{ filename: "pcpprint.png", type: "squared" }] 
  },
  { 
    name: "Paradis-Nobless", 
    images: [{ filename: "paradis_noblesse_white.png", type: "squared" }] 
  },
  { 
    name: "Stil Diamonds", 
    images: [{ filename: "stil_diamonds.jpg", type: "squared" }] 
  },
  { 
    name: "Arbusto Coffee", 
    images: [{ filename: "arbusto.png", type: "squared" }] 
  },
  { 
    name: "Hotel Ramada", 
    images: [{ filename: "ramada.jpg", type: "squared" }] 
  },
  { 
    name: "Dumbrafox", 
    images: [{ filename: "dumbrafox.jpeg", type: "squared" }] 
  },
  { 
    name: "Boromir", 
    images: [{ filename: "boromir.png", type: "squared" }] 
  },
  { 
    name: "Necci Restaurant", 
    images: [{ filename: "necci.png", type: "squared" }] 
  },
  { 
    name: "Taverna D'Amicii", 
    images: [{ filename: "damici_white.png", type: "squared" }] 
  },
  { 
    name: "Antares Gas", 
    images: [{ filename: "antares_gas.png", type: "squared" }] 
  },
  { 
    name: "A-Rosa Ski Resort", 
    images: [{ filename: "a-rosa.png", type: "squared" }] 
  },
  { 
    name: "Cofetaria Gustul Copilariei", 
    images: [{ filename: "cofetaria_gustul_copilariei_white.jpg", type: "squared" }] 
  },
  { 
    name: "High Class Bar by Bojete Gabriel", 
    images: [{ filename: "high_class_bar_white.jpg", type: "squared" }] 
  },
  { 
    name: "Posada Aqua Resort", 
    images: [] 
  },
  { 
    name: "Hotel Maria", 
    images: [] 
  }
];