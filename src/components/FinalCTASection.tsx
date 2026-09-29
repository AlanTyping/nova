"use client";
import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, ShieldCheck, MapPin, Phone, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#0A2638] via-[#0F3B57] to-[#0A2638] text-white relative overflow-hidden">
      {/* Luminous Celeste Glow Orbs */}
      <div
        className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#0284C7]/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-[#38BDF8]/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top subtle pill */}
        <div className="inline-flex items-center gap-2 bg-[#0284C7]/30 text-[#BAE6FD] text-[12px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 border border-[#38BDF8]/40 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          Atención Odontológica en Palermo
        </div>

        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-normal leading-tight text-white mb-6 max-w-3xl mx-auto">
          ¿Querés empezar a{" "}
          <span className="italic text-[#38BDF8] font-normal">cuidar tu sonrisa?</span>
        </h2>

        {/* Text */}
        <p className="text-lg sm:text-xl text-[#BAE6FD] font-normal max-w-xl mx-auto mb-10 leading-relaxed">
          Coordiná tu consulta con nuestro equipo médico en Palermo.
        </p>

        {/* Primary CTA Button with Celeste & White Glow */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <a onClick={(e) => e.preventDefault()}
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#38BDF8] via-white to-[#38BDF8] hover:from-white hover:to-white text-[#0A2638] text-[16px] font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-[0_10px_35px_rgba(56,189,248,0.4)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.5)] active:scale-[0.98] group"
          >
            <MessageCircle className="w-5 h-5 text-[#0284C7] group-hover:scale-110 transition-transform" />
            <span>Solicitar turno por WhatsApp</span>
          </a>
        </div>

        {/* Local confirmation points */}
        <div className="pt-8 border-t border-[#0284C7]/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[13px] text-[#BAE6FD] max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#38BDF8]" />
            <span>Av. Santa Fe 3250</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-[#38BDF8]" />
            <span>(011) 4821-3640</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>Turnos puntuales y sin espera</span>
          </div>
        </div>
      </div>
    </section>
  );
}
