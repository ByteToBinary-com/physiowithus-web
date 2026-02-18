const footerLinks = {
  "Quick Links": ["Home", "Services", "About Us", "Testimonials", "Contact"],
  Services: [
    "Sports Injury Rehab",
    "Back & Neck Pain",
    "Post-Surgery Rehab",
    "Pediatric Physio",
    "Home Visits",
    "Dry Needling",
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-foreground/[0.03] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-sm font-bold text-primary-foreground">P</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Physio<span className="text-primary">WithUs</span>
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Expert physiotherapy care for pain-free living. Personalized treatment plans built around you.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground">{title}</h4>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>+91 98765 43210</li>
              <li>info@physiowithus.com</li>
              <li>123 Wellness Street, Mumbai</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} PhysioWithUs. All rights reserved. <a href="#" className="hover:text-primary">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
