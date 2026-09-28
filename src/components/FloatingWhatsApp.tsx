import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
      {/* Live Helper Tooltip */}
      <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-[#BAE6FD] text-[12px] text-[#0284C7] font-semibold flex items-center gap-2 animate-fade-in">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span>En línea · Coordinación Palermo</span>
      </div>

      {/* Button */}
      <a
        href={CLINIC_INFO.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white px-5 py-3 rounded-full shadow-[0_8px_25px_rgba(2,132,199,0.4)] hover:shadow-[0_10px_30px_rgba(2,132,199,0.5)] transition-all duration-300 active:scale-95"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-[#BAE6FD] group-hover:scale-110 transition-transform" />
        <span className="text-[14px] font-bold">Solicitar turno</span>
      </a>
    </div>
  );
}
