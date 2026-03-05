import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

const servicesLinks = [
  "Sports Injury Rehab",
  "Back & Neck Pain",
  "Post-Surgery Rehab",
  "Pediatric Physio",
  "Home Visits",
  "Dry Needling",
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-gray-900 text-gray-300 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-lg font-bold text-white">
                Physio<span className="text-primary">WithUs</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed">
              Expert physiotherapy care for pain-free living. Personalized treatment plans built around you.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-3 space-y-2">
              {servicesLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-primary">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>+91 98765 43210</li>
              <li>info@physiowithus.com</li>
              <li>123 Wellness Street, Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} PhysioWithUs. All rights reserved. <a href="#" className="hover:text-primary">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
