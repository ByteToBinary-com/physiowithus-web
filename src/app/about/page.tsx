import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About Our Expert Physiotherapy Team | PhysioWithUs",
  description:
    "Meet the certified and experienced physiotherapists at PhysioWithUs. Learn about our mission to provide personalized, high-quality home physiotherapy and rehabilitation services.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutSection />;
}
