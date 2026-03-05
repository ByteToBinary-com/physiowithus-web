import type { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Testimonials - PhysioWithUs",
  description: "Read what our patients have to say about their experience with our physiotherapy services.",
};

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
