# Verdant Grove Studio Website

A static website for Verdant Grove Studio, built with [Astro](https://astro.build).

## Project Structure

```
src/
├── components/        # Reusable Astro components
│   ├── HeroSection.astro
│   ├── OfferingSection.astro
│   ├── PhilosophySection.astro
│   ├── SignatureGardensSection.astro
│   └── NewsletterSection.astro
├── layouts/          # Layout templates
│   └── Layout.astro
├── pages/            # Page routes
│   └── index.astro   # Home page
└── styles/           # Global styles
    └── global.css
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

This creates a static build in the `dist/` directory ready for deployment.

### Preview Build

```bash
npm run preview
```

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablets and desktops
- **Semantic HTML**: Proper accessibility and SEO
- **Global Styles**: Consistent color scheme and typography
- **Component-based**: Modular, reusable Astro components
- **Fast**: Static site generation with Astro

## Color Scheme

- Primary: `#2d5016` (Forest Green)
- Secondary: `#6b8e23` (Olive Green)
- Accent: `#d4a574` (Warm Tan)
- Light Background: `#f9f7f4`
- Dark Text: `#1a1a1a`

## Components

### HeroSection
Large banner with headline, subheadline, and CTA buttons for seasonal offerings.

### OfferingSection
Two-column grid showcasing Fall 2026 and Spring 2027 service offerings.

### PhilosophySection
Brand philosophy with three key values: Peaceful, Bountiful, Beautiful.

### SignatureGardensSection
Gallery of four signature garden packages with images and descriptions.

### NewsletterSection
Email signup form with benefits list for the Spring 2027 garden list.

## Deployment

The built site can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

## Future Enhancements

- [ ] Add actual garden images to SignatureGardensSection
- [ ] Implement email signup backend integration
- [ ] Add testimonials section
- [ ] Create individual product/service pages
- [ ] Add blog for gardening tips
- [ ] Implement contact form
- [ ] Add social media links
