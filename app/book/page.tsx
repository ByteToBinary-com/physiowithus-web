import type { Metadata } from 'next';
import BookingFormClient from './BookingFormClient';

export const metadata: Metadata = {
  title: 'Book Appointment | PhysioWithUs Noida',
  description:
    'Book a physiotherapy appointment at PhysioWithUs in Noida. Online booking available for sports rehab, orthopedic, neuro physiotherapy and home visits.',
};

export default function BookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book an Appointment</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Fill out the form below and we will confirm your appointment within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Appointment Details</h2>
            <p className="text-gray-500 text-sm mb-8">
              All fields marked with * are required.
            </p>
            <BookingFormClient />
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">📞</div>
              <p className="text-sm font-semibold text-gray-800">Call Us Directly</p>
              <a href="tel:+919876543210" className="text-blue-700 text-sm hover:underline">+91 98765 43210</a>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">🕐</div>
              <p className="text-sm font-semibold text-gray-800">Clinic Hours</p>
              <p className="text-gray-600 text-sm">Mon–Sat: 9 AM – 7 PM</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-sm font-semibold text-gray-800">Our Location</p>
              <p className="text-gray-600 text-sm">Sector 62, Noida</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
