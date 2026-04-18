import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export const WhatsAppFab = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full grid place-items-center bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition animate-[fab-in_0.7s_2s_cubic-bezier(0.34,1.56,0.64,1)_both]"
  >
    <span aria-hidden className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-pulse-ring" />
    <MessageCircle size={26} />
  </a>
);
