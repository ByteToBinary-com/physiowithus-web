import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Best Physiotherapist in Noida | PhysioWithUs',
  description:
    'PhysioWithUs offers expert physiotherapy in Noida — sports rehab, orthopedic, neuro physiotherapy & home visits. 10+ years experience. Book today!',
};

const services = [
  {
    title: 'Sports Rehabilitation',
    description:
      'Recover faster from sports injuries with targeted exercise programs, manual therapy, and injury prevention strategies for athletes of all levels.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Orthopedic Physiotherapy',
    description:
      'Specialized treatment for bone and joint conditions including arthritis, back pain, knee pain, and fracture rehabilitation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Neuro Physiotherapy',
    description:
      "Comprehensive rehabilitation for neurological conditions such as stroke, Parkinson's disease, multiple sclerosis and spinal cord injuries.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Home Visit Service',
    description:
      'Convenient physiotherapy at your doorstep. Our therapists bring professional care to patients unable to visit the clinic.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      'PhysioWithUs helped me recover from a knee injury in record time. The therapists are highly professional and the treatment plan was tailored specifically to my needs.',
    name: 'Rahul Sharma',
    role: 'Software Engineer, Noida',
    rating: 5,
  },
  {
    quote:
      'After my stroke, I was worried about my recovery. The neuro physiotherapy team at PhysioWithUs guided me through every step. I am now back to my daily routine.',
    name: 'Sunita Verma',
    role: 'Retired Teacher, Noida',
    rating: 5,
  },
  {
    quote:
      'The home visit service is a game changer! No need to travel with a bad back. The therapist was punctual, professional and very effective.',
    name: 'Amit Gupta',
    role: 'Business Owner, Sector 62',
    rating: 5,
  },
];

const stats = [
  { value: '500+', label: 'Patients Treated' },
  { value: '10+', label: 'Years Experience' },
  { value: '4+', label: 'Specialized Services' },
  { value: '🏠', label: 'Home Visit Available' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Physiotherapy Clinic in Noida
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
            Expert Physiotherapy <br className="hidden md:block" />Care in Noida
          </h1>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            10+ Years of Experience &nbsp;|&nbsp; Home Visit Available &nbsp;|&nbsp; Trusted by 500+ Patients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/book" variant="secondary">
              Book Appointment
            </CTAButton>
            <Link
              href="/services"
              className="inline-block px-6 py-3 rounded-lg font-semibold border-2 border-blue-200 text-blue-100 hover:bg-blue-800 transition-colors text-center"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-emerald-100 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Comprehensive physiotherapy treatments tailored to your recovery goals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <CTAButton href="/services">Explore All Services</CTAButton>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 bg-blue-50 rounded-2xl p-10 flex items-center justify-center">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-700">10+</p>
              <p className="text-gray-700 mt-2 font-medium">Years Serving Noida</p>
              <p className="text-gray-500 text-sm mt-1">Est. 2014</p>
            </div>
          </div>
          <div className="flex-[2]">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About PhysioWithUs</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Since 2014, PhysioWithUs has been Noida&apos;s trusted physiotherapy clinic, helping hundreds of patients
              regain mobility, reduce pain, and improve quality of life. Our team of certified physiotherapists
              combines evidence-based practice with compassionate care.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Located in Sector 62, Noida, we offer a full range of physiotherapy services — from sports
              rehabilitation to neurological recovery — both in-clinic and at your home.
            </p>
            <CTAButton href="/about" variant="secondary">
              Learn More About Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Patients Say</h2>
            <p className="text-gray-600">Real experiences from real patients.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} quote={t.quote} name={t.name} role={t.role} rating={t.rating} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Recovery?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Book an appointment today and take the first step towards a pain-free life.
          </p>
          <CTAButton href="/book" variant="secondary">
            Book Appointment Now
          </CTAButton>
        </div>
      </section>
    </>
  );
}
