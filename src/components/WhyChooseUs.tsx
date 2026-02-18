import { Award, ClipboardList, Cpu, IndianRupee, Heart } from "lucide-react";

const features = [
  { icon: Award, title: "Certified Therapists", description: "Licensed and experienced professionals" },
  { icon: ClipboardList, title: "Personalized Plans", description: "Tailored to your unique needs" },
  { icon: Cpu, title: "Modern Equipment", description: "State-of-the-art therapy tools" },
  { icon: IndianRupee, title: "Affordable Pricing", description: "Quality care within your budget" },
  { icon: Heart, title: "Patient-Centered Care", description: "Your comfort is our priority" },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-muted/50 py-20 sm:py-24">
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
