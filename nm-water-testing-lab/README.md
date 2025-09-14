# NM Water Testing Laboratory - React Website

A modern, responsive website for NM Water Testing Laboratory built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Modern Design**: Clean, professional design with NM Water Testing branding
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and transitions using Framer Motion
- **Interactive Components**: Dynamic forms, FAQ accordions, and interactive elements
- **SEO Optimized**: Semantic HTML and proper meta tags
- **Fast Performance**: Built with Vite for optimal performance

## Technology Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

## Pages

- **Home** - Hero section, services overview, why choose us, client types, contact CTA
- **Services** - Comprehensive water testing services, parameters, equipment, pricing
- **Sample Collection** - Step-by-step sampling guides for different water types
- **Laboratory Results** - Understanding test reports and results interpretation
- **About** - Company story, mission, values, team, and facilities
- **Contact** - Contact information, quote form, service areas, directions
- **FAQ** - Frequently asked questions organized by category

## Color Scheme

- **Royal Blue**: #4A6EBE (Primary brand color)
- **Charcoal Black**: #2C2C2C (Strong contrast)
- **Water Blue**: #5BA3D4 (From water drop icon)
- **Light Blue Accent**: #87CEEB (Backgrounds/highlights)
- **Success Green**: #28A745 (Positive results, CTAs)
- **Pure White**: #FFFFFF (Clean backgrounds)
- **Light Gray**: #F8F9FA (Section backgrounds)
- **Medium Gray**: #6C757D (Secondary text)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build the application for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Services.tsx    # Services page
│   ├── SampleCollection.tsx
│   ├── LaboratoryResults.tsx
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── FAQ.tsx         # FAQ page
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## Key Features

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects and micro-interactions
- Loading animations

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- High contrast ratios

### Performance
- Optimized images and assets
- Lazy loading for components
- Efficient bundle splitting
- Fast loading times

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  'royal-blue': '#4A6EBE',
  'charcoal-black': '#2C2C2C',
  'water-blue': '#5BA3D4',
  // ... other colors
}
```

### Content
All content is defined in the respective page components. Update the content directly in the component files.

### Styling
The project uses Tailwind CSS utility classes. Custom styles can be added in `src/index.css` using the `@layer` directive.

## Deployment

The application can be deployed to any static hosting service:

1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting service

Recommended hosting services:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary software for NM Water Testing Laboratory.

## Contact

For questions about this website, contact:
- Email: info@nmwatertesting.co.za
- Phone: +27 60 946 2930
- WhatsApp: +27 60 946 2930