import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Our Services - PhysioWithUs",
  description: "Explore the wide range of physiotherapy services we offer to help you on your recovery journey.",
};

export default function ServicesPage() {
  return <ServicesSection />;
}
