import { Award, ClipboardList, Cpu, IndianRupee, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Therapists",
    description: "Our team consists of licensed and experienced physical therapists dedicated to providing the highest quality of care.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Plans",
    description: "We create customized treatment plans tailored to your specific condition, goals, and lifestyle for a more effective recovery.",
  },
  {
    icon: Cpu,
    title: "Modern Equipment",
    description: "Our clinic is equipped with state-of-the-art therapeutic tools and technology to ensure you receive the most advanced treatments.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "We are committed to making quality healthcare accessible by offering competitive and transparent pricing options.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your comfort, needs, and goals are at the forefront of everything we do, ensuring a positive and supportive experience.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-muted/50 py-20 sm:py-24 border-t border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">Why Choose Us</h2>
        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
