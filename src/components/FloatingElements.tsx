import { MessageCircle, Phone, CalendarDays } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const FloatingElements = () => {
  const isMobile = useIsMobile();

  return (
    <>
      {/* WhatsApp floating button - hidden on mobile where bottom bar shows */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(145_60%_45%)] text-white shadow-lg transition-transform hover:scale-110 md:bottom-8 md:right-8"
        style={{ display: isMobile ? "none" : "flex" }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Mobile sticky bottom bar */}
      {isMobile && (
        <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur">
          <a
            href="tel:+1234567890"
            className="flex flex-1 flex-col items-center gap-0.5 py-3 text-xs font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-5 w-5" />
            Call
          </a>
          <a
            href="#booking"
            className="flex flex-1 flex-col items-center gap-0.5 bg-primary py-3 text-xs font-medium text-primary-foreground"
          >
            <CalendarDays className="h-5 w-5" />
            Book
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 flex-col items-center gap-0.5 py-3 text-xs font-medium text-foreground transition-colors hover:text-primary"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingElements;
