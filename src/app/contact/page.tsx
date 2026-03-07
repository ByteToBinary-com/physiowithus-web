import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us for Home Physiotherapy | PhysioWithUs",
  description:
    "Get in touch with PhysioWithUs to book a home physiotherapy appointment, ask questions, or inquire about our services. Your path to recovery starts here.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
