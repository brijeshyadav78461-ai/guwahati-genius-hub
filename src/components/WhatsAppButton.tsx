import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/918471894433?text=Hi%2C%20I%20want%20to%20know%20about%20AICI%20Coaching%20Center"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-lg transition-transform hover:scale-110 animate-pulse-glow"
    aria-label="Chat on WhatsApp"
    style={{ "--tw-ring-color": "hsl(142 70% 45% / 0.4)" } as React.CSSProperties}
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppButton;
