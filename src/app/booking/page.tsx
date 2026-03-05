import type { Metadata } from "next";
import BookingSection from "@/components/BookingSection";

export const metadata: Metadata = {
  title: "Book an Appointment - PhysioWithUs",
  description: "Book your physiotherapy appointment with us today and start your journey to recovery.",
};

export default function BookingPage() {
  return <BookingSection />;
}
