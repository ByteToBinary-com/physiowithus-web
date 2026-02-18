import { Button } from "@/components/ui/button";
import { Phone, Users, Star, Clock } from "lucide-react";

const trustBadges = [
  { icon: Users, label: "500+ Patients Treated" },
  { icon: Star, label: "4.9★ Rating" },
  { icon: Clock, label: "10+ Years Experience" },
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(213_94%_55%/0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Expert Physiotherapy Care for{" "}
            <span className="text-primary">Pain-Free Living</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Personalized treatment plans to help you recover faster and live better.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full px-8 text-base sm:w-auto" asChild>
              <a href="#booking">Book Appointment</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full px-8 text-base sm:w-auto" asChild>
              <a href="tel:+1234567890">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center justify-center gap-3 rounded-xl border border-border/60 bg-card/80 px-5 py-4 shadow-sm backdrop-blur"
            >
              <badge.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
