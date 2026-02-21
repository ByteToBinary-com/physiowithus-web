import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'About Us | Expert Physiotherapists in Noida | PhysioWithUs',
  description:
    'Learn about PhysioWithUs — established in 2014 in Noida. Meet our expert team of certified physiotherapists committed to your recovery and wellbeing.',
};

const values = [
  {
    title: 'Patient-Centered Care',
    description: "Every treatment plan is personalized to the individual patient's needs, goals, and lifestyle.",
    icon: '🎯',
  },
  {
    title: 'Evidence-Based Practice',
    description: 'We use scientifically proven techniques and stay updated with the latest research in physiotherapy.',
    icon: '🔬',
  },
  {
    title: 'Compassionate Approach',
    description: 'We treat every patient with empathy, respect, and genuine care for their wellbeing.',
    icon: '❤️',
  },
  {
    title: 'Continuous Improvement',
    description: 'Our therapists regularly undergo advanced training to provide the highest standard of care.',
    icon: '📈',
  },
];

const team = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Senior Physiotherapist & Clinic Director',
    specialization: 'Orthopedic & Sports Rehabilitation',
    experience: '12 years',
  },
  {
    name: 'Dr. Arjun Mehta',
    role: 'Neuro Physiotherapist',
    specialization: 'Neurological Rehabilitation',
    experience: '8 years',
  },
  {
    name: 'Dr. Neha Gupta',
    role: 'Pediatric Physiotherapist',
    specialization: 'Pediatric & Geriatric Care',
    experience: '6 years',
  },
];

const certifications = [
  'Bachelor of Physiotherapy (BPT)',
  'Master of Physiotherapy (MPT) — Orthopedics',
  'Certified Manual Therapist (CMT)',
  'Dry Needling Certification',
  'Neurological Rehabilitation Specialist',
  'Certified Sports Physiotherapist',
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About PhysioWithUs</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Over a decade of dedicated physiotherapy care in Noida, transforming lives one treatment at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 rounded-2xl p-10 text-center">
            <p className="text-6xl font-bold text-blue-700">2014</p>
            <p className="text-gray-700 mt-3 font-semibold text-lg">Year Established</p>
            <p className="text-gray-500 mt-2 text-sm">Sector 62, Noida, UP</p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-bold text-blue-700">500+</p>
                <p className="text-gray-600 text-xs mt-1">Patients Treated</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="text-2xl font-bold text-blue-700">10+</p>
                <p className="text-gray-600 text-xs mt-1">Years Experience</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              PhysioWithUs was founded in 2014 with a simple mission: to provide world-class physiotherapy care
              that is accessible, affordable, and effective for the people of Noida and surrounding areas.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              What started as a small clinic in Sector 62 has grown into a trusted healthcare institution serving
              hundreds of patients every year. Our founding team of dedicated physiotherapists brought together
              diverse specializations to offer comprehensive care under one roof.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, PhysioWithUs is recognized as one of the leading physiotherapy clinics in Noida, known for
              our patient-first approach, advanced treatment techniques, and genuine commitment to lasting recovery.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-3xl font-bold mx-auto mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                <p className="text-blue-700 text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.specialization}</p>
                <p className="text-emerald-600 text-sm font-semibold mt-2">{member.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Certifications & Qualifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-blue-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">Start Your Recovery Journey Today</h2>
          <p className="text-blue-100 mb-6">
            Our expert team is ready to help you move better and live pain-free.
          </p>
          <CTAButton href="/book" variant="secondary">Book an Appointment</CTAButton>
        </div>
      </section>
    </>
  );
}
