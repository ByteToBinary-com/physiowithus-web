import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-muted/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-foreground sm:text-4xl">Find Us</h2>
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Clinic Address</p>
                <p className="text-sm text-muted-foreground">
                  123 Wellness Street, Health City, Mumbai 400001
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Phone</p>
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                  +91 98765 43210
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Timings</p>
                <p className="text-sm text-muted-foreground">Mon – Sat: 8:00 AM – 8:00 PM</p>
                <p className="text-sm text-muted-foreground">Sunday: 9:00 AM – 1:00 PM</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <div className="flex h-64 items-center justify-center text-muted-foreground lg:h-full">
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-border" />
                <p className="mt-2 text-sm">Google Maps Embed</p>
                <p className="text-xs">(Replace with your embed code)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
