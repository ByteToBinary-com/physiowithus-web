import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Book Your Home Physiotherapy Appointment | PhysioWithUs",
  description:
    "Conveniently book your home physiotherapy session with PhysioWithUs. Our certified therapists are ready to help you on your journey to recovery. Schedule your appointment today.",
  alternates: {
    canonical: "/booking",
  },
};

export default function BookingPage() {
  return <BookingSection />;
}
