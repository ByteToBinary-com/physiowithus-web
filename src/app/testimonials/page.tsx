import type { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Patient Testimonials & Success Stories | PhysioWithUs",
  description:
    "Read what our patients are saying about their successful recovery experiences with PhysioWithUs. Discover the impact of our personalized home physiotherapy services.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
