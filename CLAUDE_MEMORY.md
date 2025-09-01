# Claude Memory - Asociația General Magheru 68 Website

## Project Overview
- **Organization Name**: Asociația General Magheru 68
- **Project Type**: Charity website for events and social initiatives
- **Main Color**: #5271FF (brand color used as background on homepage)
- **Language**: Romanian (all content and URLs in Romanian)

## Technology Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Language**: TypeScript
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Project Structure
```
src/
├── app/
│   ├── layout.tsx (Root layout with SEO metadata)
│   ├── page.tsx (Homepage with logo hero and next event preview)
│   ├── globals.css (Tailwind config with brand colors)
│   └── evenimente/ (Events directory - Romanian naming)
│       └── olimpiada-de-fapte-bune-2025/
│           └── page.tsx (Event page template)
public/
├── logo-transparent-e1676430439366.png (Main logo)
├── logo_black_transparent-1024x1024.png (Alternative logo)
└── hero-banner-event.jpeg (Event banner image)
```

## Key Features Implemented
1. **Homepage**: 
   - Centered logo hero with brand color (#5271FF) background
   - Next event preview card (Olimpiada de Fapte Bune 2025)
   - Responsive design
   
2. **Event Page Template**:
   - Full-height banner with black opacity overlay
   - Logo, event title, date in center
   - Navigation menu with 6 sections: Despre Eveniment, Momente Artistice, Donații, Licitații, Tombola, Sponsori
   - 6 cards with TODO placeholders for each section
   - Icons from Lucide React for each section

3. **SEO Optimization**:
   - Romanian metadata and language settings
   - Open Graph and Twitter card support
   - Proper meta tags for search engines
   - Performance optimizations in next.config.ts

## Event Information
- **Current Event**: Olimpiada de Fapte Bune 2025, Ediția a IV-a
- **Date**: 19 Septembrie 2025
- **URL Path**: `/evenimente/olimpiada-de-fapte-bune-2025` (Romanian paths)

## Brand Guidelines
- **Primary Color**: #5271FF
- **Logo**: Transparent logo with organization branding
- **Language**: All content in Romanian
- **Tone**: Elegant, stylish, modern for charity organization

## Next Steps / TODOs
1. Add actual content for event page sections (currently marked with TODO)
2. Create additional pages (blog, about, contact)
3. Implement blog functionality
4. Add more events
5. Set up CMS or data management for events
6. Add donation functionality
7. Implement contact forms
8. Add social media integration

## Development Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - Code linting

## Performance Optimizations
- Image optimization with WebP/AVIF formats
- Package import optimization for lucide-react
- Compression enabled
- ETag generation
- Optimized device sizes for responsive images

## Notes
- All file paths and URLs use Romanian naming conventions
- Website is fully responsive and mobile-friendly
- Uses modern React patterns and Next.js 15 features
- SEO optimized for Romanian search engines