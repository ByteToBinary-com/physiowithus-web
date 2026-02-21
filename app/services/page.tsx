import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Physiotherapy Services in Noida | PhysioWithUs',
  description:
    'Explore PhysioWithUs services: sports rehab, orthopedic physiotherapy, neuro physiotherapy, home visits, post-surgery rehab, and pediatric physiotherapy in Noida.',
};

const services = [
  {
    title: 'Sports Rehabilitation',
    description:
      'Comprehensive sports injury recovery programs for athletes of all levels. We treat sprains, strains, ligament tears, fractures and overuse injuries using targeted manual therapy, exercise rehabilitation and injury prevention strategies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Orthopedic Physiotherapy',
    description:
      'Expert treatment for musculoskeletal conditions including arthritis, back pain, neck pain, shoulder injuries, knee pain, and post-fracture rehabilitation. Our therapists restore function and reduce pain effectively.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Neuro Physiotherapy',
    description:
      "Specialized rehabilitation for neurological conditions: stroke recovery, Parkinson's disease management, multiple sclerosis, spinal cord injuries, and traumatic brain injuries. We focus on improving movement, balance, and independence.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Home Visit Physiotherapy',
    description:
      'Professional physiotherapy care delivered to your doorstep. Ideal for elderly patients, post-surgery recovery, and those with limited mobility. Our therapists bring all necessary equipment to your home.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Post-Surgery Rehabilitation',
    description:
      'Structured recovery programs following orthopedic surgeries including joint replacements, ACL reconstruction, rotator cuff repair, and spinal surgeries. We work closely with your surgeon to ensure safe, progressive recovery.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Pediatric Physiotherapy',
    description:
      'Gentle, child-friendly physiotherapy for developmental delays, cerebral palsy, scoliosis, sports injuries, and other pediatric conditions. Our therapists create fun, engaging sessions that motivate young patients.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Physiotherapy Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Comprehensive, evidence-based physiotherapy treatments to help you recover, move better, and live pain-free.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-blue-100 mb-6">
            Contact us or book an initial consultation and our therapists will create a personalized treatment plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/book" variant="secondary">Book Consultation</CTAButton>
            <CTAButton href="/contact" variant="secondary">Contact Us</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
