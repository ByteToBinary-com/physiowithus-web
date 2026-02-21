# PhysioWithUs

A modern, SEO-optimized physiotherapy clinic website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Features

- 🏥 5 pages: Home, Services, About, Contact, Book Appointment
- 📱 Mobile-first responsive design
- 🔍 SEO optimized with metadata, OG tags, sitemap, robots.txt
- 📊 LocalBusiness structured data (Schema.org)
- 📅 Appointment booking form with API route
- ⚡ Optimized with Next.js Image and Font optimization

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ByteToBinary-com/physiowithus.git
cd physiowithus

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout (Navbar + Footer + SEO)
│   ├── page.tsx          # Homepage
│   ├── services/         # Services page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── book/             # Book Appointment page
│   ├── api/book/         # Booking API route
│   ├── robots.ts         # robots.txt generation
│   └── sitemap.ts        # sitemap.xml generation
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── ServiceCard.tsx
│   └── TestimonialCard.tsx
└── .env.example
```

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ByteToBinary-com/physiowithus)

Or manually:
```bash
npm install -g vercel
vercel
```

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Landing page with hero, services, testimonials |
| Services | `/services` | Detailed service listings |
| About | `/about` | Clinic story, team, values |
| Contact | `/contact` | Contact form and clinic details |
| Book | `/book` | Appointment booking form |

## SEO Keywords

- Physiotherapist in Noida
- Sports Rehab in Noida
- Orthopedic Physiotherapy Noida
- Neuro Physiotherapy Noida
- Home Visit Physiotherapy Noida
