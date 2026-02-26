"use client";

import { useState, useEffect } from "react";
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

const RATE_LIMIT_COOLDOWN = 5 * 60 * 1000; // 5 minutes in milliseconds
const RATE_LIMIT_KEY = "booking_form_last_submit";

const BookingSection = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [condition, setCondition] = useState("");
  const [date, setDate] = useState<Date>();
  const [submitting, setSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);

  // Check rate limit on mount and update countdown
  useEffect(() => {
    const checkRateLimit = () => {
      const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
      if (lastSubmit) {
        const timePassed = Date.now() - parseInt(lastSubmit, 10);
        const remaining = Math.max(0, RATE_LIMIT_COOLDOWN - timePassed);
        setRemainingTime(remaining);
      }
    };

    checkRateLimit();
    const interval = setInterval(checkRateLimit, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Rate limit check
    const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
    if (lastSubmit) {
      const timePassed = Date.now() - parseInt(lastSubmit, 10);
      if (timePassed < RATE_LIMIT_COOLDOWN) {
        const minutesRemaining = Math.ceil((RATE_LIMIT_COOLDOWN - timePassed) / 60000);
        toast({
          title: "Please wait",
          description: `Please wait before submitting another booking request. You can submit again in ${minutesRemaining} minute${minutesRemaining !== 1 ? 's' : ''}.`,
          variant: "destructive",
        });
        return;
      }
    }
    
    // Honeypot validation - if filled, silently fail
    if (honeypot) {
      return;
    }
    
    if (!name || !phone || !condition) return;

    // Validate name (letters and spaces only)
    if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (letters only).",
        variant: "destructive",
      });
      return;
    }

    // Validate phone number format
    if (!/^\+?[\d\s\-().]{7,15}$/.test(phone.trim())) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      toast({
        title: "Configuration Error",
        description: "Booking form is not configured. Please contact us directly.",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone);
      formData.append("condition", condition);
      formData.append("access_key", accessKey);
      if (date) formData.append("date", format(date, "PPP"));

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // Save submission time for rate limiting
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
        setRemainingTime(RATE_LIMIT_COOLDOWN);
        
        toast({
          title: "Appointment Requested!",
          description: "We'll contact you within 1 hour to confirm your booking.",
        });
        setName("");
        setPhone("");
        setCondition("");
        setDate(undefined);
        setHoneypot("");
      } else {
        toast({
          title: "Error",
          description: "Failed to submit. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
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
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
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
            <Button 
              type="submit" 
              className="w-full" 
              size="lg" 
              disabled={submitting || remainingTime > 0}
            >
              {submitting ? "Submitting…" : remainingTime > 0 ? `Please wait ${Math.ceil(remainingTime / 1000)}s` : "Schedule Consultation"}
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
