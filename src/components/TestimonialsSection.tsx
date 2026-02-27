import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Star, Plus } from "lucide-react";
import AddTestimonyDialog from "./AddTestimonyDialog";
import { useState } from "react";

const initialTestimonials = [
  {
    name: "Rajesh Mehta",
    condition: "Chronic Back Pain",
    quote: "After just 8 sessions, my back pain reduced by 80%. The team truly understands pain management.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    condition: "Post-Knee Surgery",
    quote: "They guided me through every step of my recovery. I'm walking normally again within 3 months!",
    rating: 5,
  },
  {
    name: "Amit Desai",
    condition: "Sports Injury",
    quote: "As a runner, I needed fast and effective rehab. PhysioWithUs got me back on the track in record time.",
    rating: 5,
  },
  {
    name: "Sunita Rao",
    condition: "Neck & Shoulder Stiffness",
    quote: "The personalized treatment plan made all the difference. I feel 10 years younger!",
    rating: 4,
  },
];

const TestimonialsSection = () => {
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [open, setOpen] = useState(false);

    const handleAddTestimony = (testimony: { name: string; testimony: string; rating: number }) => {
        setTestimonials([
          {
            name: testimony.name,
            condition: "New Testimony",
            quote: testimony.testimony,
            rating: testimony.rating,
          },
          ...testimonials,
        ]);
        setOpen(false);
      };

  return (
    <>
      <section id="testimonials" className="relative bg-muted/50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">What Our Patients Say</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real stories from real patients who trusted us with their recovery.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/60">
                <CardContent className="p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="icon" className="absolute bottom-8 right-8 h-16 w-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center">
              <Plus className="h-10 w-10" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <AddTestimonyDialog onAddTestimony={handleAddTestimony} />
          </DialogContent>
        </Dialog>
      </section>
    </>
  );
};

export default TestimonialsSection;
