import { Metadata } from 'next';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us - PhysioWithUs',
  description: 'Get in touch with us to book an appointment or to ask any questions you may have.',
};

export default function ContactPage() {
  return <ContactSection />;
}
