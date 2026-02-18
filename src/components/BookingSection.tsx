import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const conditions = [
  "Back Pain",
  "Neck Pain",
  "Sports Injury",
  "Post-Surgery Rehab",
  "Joint Pain",
  "Pediatric Issue",
  "Other",
];

const BookingSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");
  const [date, setDate] = useState<Date>();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !condition) return;
    setSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Appointment Requested!",
        description: "We'll contact you within 1 hour to confirm your booking.",
      });
      setName("");
      setPhone("");
      setCondition("");
      setDate(undefined);
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="booking" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-border/60 bg-card p-8 shadow-lg shadow-primary/5 sm:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Book an Appointment</h2>
            <p className="mt-2 text-muted-foreground">
              Fill in the form and we'll get back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label>Condition</Label>
              <Select value={condition} onValueChange={setCondition} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your condition" />
                </SelectTrigger>
                <SelectContent>
                  {conditions.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={submitting}>
              {submitting ? "Submitting…" : "Schedule Consultation"}
            </Button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" /> We respond within 1 hour
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
