import type { Metadata } from "next";
import { Providers } from "./providers";
import "@/index.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

export const metadata: Metadata = {
  title: "PhysioWithUs - Professional Physiotherapy Services",
  description: "Expert physiotherapy and rehabilitation services",
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
