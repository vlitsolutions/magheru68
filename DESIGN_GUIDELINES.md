# Design Guidelines - Asociația General Magheru 68
## Olimpiada de Fapte Bune 2025

### Overview
This document establishes the design standards and patterns for the charity website, ensuring consistency across all current and future content.

### Color Palette
- **Primary Blue**: `#5271FF` (CSS variable: `primary`)
- **Blue Variations**: Use only blue shades for consistency
  - Light blues: `blue-50`, `blue-100`, `blue-200` for backgrounds
  - Medium blues: `blue-400`, `blue-500`, `blue-600` for accents  
  - Dark blues: `blue-700`, `blue-800`, `blue-900` for text highlights
- **Accent Colors** (use sparingly):
  - Yellow/Orange gradients: For special callouts like "Bonus Inclus"
  - Gray scale: For body text and neutral elements

### Typography
- **Font Family**: Poppins (weights: 300, 400, 500, 600, 700)
- **Hierarchy**:
  - Page titles: `text-4xl md:text-6xl font-bold`
  - Section titles: `text-2xl md:text-3xl font-bold` 
  - Card titles: `text-xl md:text-2xl font-semibold`
  - Body text: `text-lg text-gray-700 leading-relaxed`
  - Small text: `text-base` or `text-sm`
- **Important text highlighting**: Use `font-medium text-blue-700` for key terms

### Layout Patterns

#### Section Structure
```jsx
<section className="py-20 bg-[white|gray-50] relative overflow-hidden">
  {/* Background decoration */}
  
  <div className="max-w-7xl mx-auto px-4 relative z-10">
    {/* Central Headline */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-8">
        <Icon className="w-10 h-10 text-blue-600" />
      </div>
      <p className="text-blue-600 font-semibold text-lg mb-4 tracking-wide uppercase">
        Category Label
      </p>
      <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Section Title
      </h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
    </div>
    
    {/* Main content */}
  </div>
</section>
```

#### Card Components
- **Rounded corners**: `rounded-xl md:rounded-2xl` for cards
- **Shadows**: `shadow-lg hover:shadow-2xl` with transitions
- **Hover effects**: `hover:-translate-y-2` or `hover:scale-105`
- **Animations**: Use intersection observer with opacity/translate transitions

#### Grid Layouts
- **Mobile-first approach**: Always start with mobile columns
- **Common patterns**:
  - 2 columns mobile, 4 desktop: `grid-cols-2 md:grid-cols-4`
  - 1 column mobile, 2 desktop: `grid-cols-1 md:grid-cols-2`
  - Cards should be smaller on mobile: `p-3 md:p-6`

### Navigation
- **Desktop**: Horizontal navigation with animated underline
- **Mobile**: 
  - 3-column grid: Logo | Current Section + Underline | Hamburger
  - Current section displays in center with small underline
  - Hamburger menu reveals full navigation

### Component Standards

#### Buttons
- **Primary CTA**: `bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl`
- **Hover effects**: Scale and shadow transforms
- **Icons**: Use Lucide React icons, sized `w-5 h-5`

#### Stats/Numbers
- **Mobile**: `text-2xl` for numbers, `text-lg` for suffix
- **Desktop**: `text-5xl` for numbers, `text-3xl` for suffix
- **Color**: `text-blue-600 font-bold`

#### Special Sections
- **Full-width callouts**: Yellow/orange gradient backgrounds
- **Compact sizing**: Keep additional content sections smaller than main content

### Animation Guidelines
- **Intersection Observer**: Use for scroll-triggered animations
- **Delays**: Stagger animations with `delay-[time]` classes
- **Transitions**: `duration-300` to `duration-1000` based on complexity
- **Hover states**: Always include smooth transitions

### Mobile Considerations
- **Column reordering**: Important content first (event details before descriptive text)
- **Spacing**: Add `space-y-6` between elements on mobile
- **Card density**: More cards per row on mobile with reduced padding
- **Text sizes**: Scale down appropriately (`text-2xl` → `text-xl`)

### Content Structure
- **Three-column content layout**: Use flexbox with equal spacing
- **Centered buttons**: Place call-to-action buttons centered in their containers
- **Consistent messaging**: Highlight key terms like "fond de premiere" in blue

### Accessibility
- **Focus states**: Ensure all interactive elements have visible focus
- **Color contrast**: Maintain WCAG standards
- **Alt text**: Descriptive alt text for all images
- **Semantic HTML**: Use proper heading hierarchy

### File Organization
```
/components
  /sections
    - AboutEventSection.tsx
    - ArtisticMomentsSection.tsx
    - SponsorsSection.tsx
    - RaffleSection.tsx
    - AuctionsSection.tsx
  - StickyHeader.tsx
  - MenuDialog.tsx
```

### Future Development
- Maintain Romanian language throughout
- Keep charity focus with emphasis on student awards
- Use local references (Râmnicu Vâlcea, Hotel Ramada)
- Follow established animation and interaction patterns
- Ensure mobile-responsive design for all new components

### Brand Voice
- Elegant and professional
- Community-focused
- Educational excellence
- Traditional Romanian elements mixed with modern design
- Emphasis on social responsibility and charitable giving

This design system ensures consistency across all sections while maintaining the sophisticated, charity-focused aesthetic appropriate for the Olimpiada de Fapte Bune fundraising event.