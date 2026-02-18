const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">About Our Clinic</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              At PhysioWithUs, we believe that every patient deserves personalized, evidence-based
              physiotherapy. Founded over a decade ago, our clinic has grown from a small practice
              into a trusted rehabilitation centre — all while keeping the same patient-first
              philosophy.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our founder, <span className="font-semibold text-foreground">Dr. Ananya Sharma</span>,
              brings over 15 years of clinical experience in musculoskeletal and sports
              rehabilitation. She leads a team of certified therapists dedicated to helping you move
              better and live pain-free.
            </p>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Specializations</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-accent/40">
              <div className="flex h-full items-center justify-center p-8 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                    <span className="text-3xl font-bold text-primary">AS</span>
                  </div>
                  <p className="font-semibold text-foreground">Dr. Ananya Sharma</p>
                  <p className="mt-1 text-sm text-muted-foreground">Founder & Lead Physiotherapist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
