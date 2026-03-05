import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'About Us - PhysioWithUs',
  description: 'Learn more about our team of dedicated physiotherapists and our mission to provide excellent care.',
};

export default function AboutPage() {
  return <AboutSection />;
}
