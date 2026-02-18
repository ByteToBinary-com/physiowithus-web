import { Card, CardContent } from "@/components/ui/card";
import { Activity, Bone, Stethoscope, Baby, Home, Hand } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Sports Injury Rehabilitation",
    description: "Get back in the game with targeted recovery programs designed for athletes of all levels.",
  },
  {
    icon: Bone,
    title: "Back & Neck Pain",
    description: "Proven techniques to relieve chronic pain and restore your full range of motion.",
  },
  {
    icon: Stethoscope,
    title: "Post-Surgery Rehabilitation",
    description: "Structured recovery plans to help you heal faster and regain strength after surgery.",
  },
  {
    icon: Baby,
    title: "Pediatric Physiotherapy",
    description: "Gentle, effective therapy tailored for children's developmental and movement needs.",
  },
  {
    icon: Home,
    title: "Home Visit Physiotherapy",
    description: "Professional care delivered to your doorstep for patients who prefer treatment at home.",
  },
  {
    icon: Hand,
    title: "Dry Needling & Manual Therapy",
    description: "Advanced hands-on techniques to release tension, reduce pain, and improve mobility.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Comprehensive physiotherapy solutions for every stage of recovery.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="flex flex-col items-start p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
