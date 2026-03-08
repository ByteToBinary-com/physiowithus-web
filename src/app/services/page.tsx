import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Comprehensive Physiotherapy Services at Home",
  description:
    "Explore our wide range of home physiotherapy services, including sports injury rehab, back and neck pain treatment, post-surgery recovery, and more. Certified care at your convenience.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesSection />;
}
