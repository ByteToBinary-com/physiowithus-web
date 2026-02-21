import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'PhysioWithUs | Expert Physiotherapy in Noida',
    template: '%s | PhysioWithUs',
  },
  description:
    'Expert physiotherapy clinic in Noida offering sports rehab, orthopedic, neuro physiotherapy and home visit services. 10+ years of experience.',
  keywords: [
    'physiotherapist in Noida',
    'sports rehab Noida',
    'orthopedic physiotherapy Noida',
    'neuro physiotherapy Noida',
    'Home Visit physiotherapy Noida',
    'PhysioWithUs',
  ],
  openGraph: {
    type: 'website',
    url: 'https://physiowithus.com',
    siteName: 'PhysioWithUs',
    title: 'PhysioWithUs | Expert Physiotherapy in Noida',
    description:
      'Expert physiotherapy clinic in Noida offering sports rehab, orthopedic, neuro physiotherapy and home visit services.',
    images: [{ url: 'https://physiowithus.com/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PhysioWithUs | Expert Physiotherapy in Noida',
    description: 'Expert physiotherapy clinic in Noida. 10+ Years Experience. Home Visit Available.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  name: 'PhysioWithUs',
  description:
    'Expert physiotherapy clinic in Noida offering sports rehab, orthopedic, neuro physiotherapy and home visit services.',
  url: 'https://physiowithus.com',
  telephone: '+91-9876543210',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 62',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201309',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '28.6139',
    longitude: '77.3910',
  },
  openingHours: 'Mo-Sa 09:00-19:00',
  priceRange: '₹₹',
  image: 'https://physiowithus.com/og-image.jpg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
