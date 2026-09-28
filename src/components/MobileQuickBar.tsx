import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, Phone } from "lucide-react";

export default function MobileQuickBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#BAE6FD] p-2.5 sm:hidden shadow-[0_-4px_20px_rgba(2,132,199,0.15)]">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#F0F9FF] text-[#0284C7] text-[13px] font-bold py-3 rounded-full border border-[#BAE6FD] active:scale-95 transition-transform"
          aria-label="Llamar a la clínica"
        >
          <Phone className="w-4 h-4 text-[#0284C7]" />
          <span>Llamar</span>
        </a>

        <a
          href={CLINIC_INFO.getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white text-[13.5px] font-bold py-3 rounded-full shadow-[0_4px_14px_rgba(2,132,199,0.35)] active:scale-95 transition-transform"
          aria-label="Solicitar turno por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#BAE6FD]" />
          <span>Solicitar turno</span>
        </a>
      </div>
    </div>
  );
}
