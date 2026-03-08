import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  metadataBase: new URL("https://physiowithus.com"),
  title: {
    default: "PhysioWithUs | Expert Home Physiotherapy & Rehabilitation @699",
    template: "%s | PhysioWithUs",
  },
  description:
    "PhysioWithUs offers professional physiotherapy and rehabilitation services at home, delivered by certified physiotherapists with personalized care and convenient booking.",
  keywords: [
    "physiotherapy",
    "home physiotherapy",
    "rehabilitation",
    "physical therapy",
    "certified physiotherapists",
    "sports injury",
    "back pain",
    "neck pain",
    "post-surgery rehab",
    "pediatric physiotherapy",
  ],
  authors: [{ name: "PhysioWithUs" }],
  creator: "PhysioWithUs",
  publisher: "PhysioWithUs",
  alternates: {
    canonical: "https://physiowithus.com",
  },
  openGraph: {
    title: "PhysioWithUs | Expert Home Physiotherapy & Rehabilitation",
    description:
      "Convenient, certified physiotherapy at your home. Personalized treatment plans for a faster recovery.",
    url: "https://physiowithus.com",
    siteName: "PhysioWithUs",
    images: [
      {
        url: "/physiowithus.png",
        width: 1200,
        height: 630,
        alt: "PhysioWithUs Home Physiotherapy Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PhysioWithUs | Expert Home Physiotherapy & Rehabilitation",
    description:
      "Get professional physiotherapy care in the comfort of your home. Book your appointment today!",
    images: ["/physiowithus.png"],
    creator: "@physiowithus",
  },
  icons: {
    icon: "/physiowithus_icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingElements />
          </div>
        </Providers>
      </body>
    </html>
  );
}
