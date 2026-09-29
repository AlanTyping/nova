"use client";

import { Treatment, CLINIC_INFO } from "@/data/clinicData";
import { X, MessageCircle, ArrowUpRight, Shield } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface TreatmentModalProps {
  treatment: Treatment | null;
  onClose: () => void;
}

export default function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (treatment) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A2638]/50 backdrop-blur-md transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card - Editorial Split Layout */}
      <div className="relative w-full max-w-[950px] bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[92vh] sm:max-h-[85vh] animate-fade-in">
        
        {/* Close button - absolute floating over everything */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 backdrop-blur-md text-[#0A2638] hover:bg-white hover:scale-105 flex items-center justify-center transition-all focus:outline-none shadow-md cursor-pointer"
          aria-label="Cerrar detalles del tratamiento"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Image side */}
        <div className="relative h-44 sm:h-56 md:h-auto md:w-5/12 bg-[#0A2638] shrink-0">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
          {/* Subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638]/70 via-[#0A2638]/20 to-transparent" />
        </div>

        {/* Right: Content side */}
        <div className="md:w-7/12 flex flex-col h-full max-h-[calc(92vh-11rem)] sm:max-h-[calc(92vh-14rem)] md:max-h-[85vh] overflow-y-auto bg-white">
          <div className="p-5 sm:p-8 md:p-12 flex-1">
            {/* Title */}
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#0A2638] font-normal leading-tight mb-3 sm:mb-4">
              {treatment.name}
            </h3>
            
            {/* Tagline */}
            <p className="text-[15px] sm:text-[18px] font-serif text-[#0284C7] italic mb-4 sm:mb-6 leading-relaxed">
              &quot;{treatment.tagline}&quot;
            </p>
            
            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#475569] leading-relaxed mb-6 sm:mb-8">
              {treatment.fullDescription}
            </p>

            {/* Details (Indicado para & Sesiones) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 py-5 sm:py-8 border-y border-[#F1F5F9] mb-6 sm:mb-8">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-[#94A3B8] font-bold mb-1.5 sm:mb-2.5">
                  Indicado para
                </span>
                <p className="text-[13px] text-[#334155] leading-relaxed pr-2 sm:pr-4">
                  {treatment.recommendedFor}
                </p>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.15em] text-[#94A3B8] font-bold mb-1.5 sm:mb-2.5">
                  Duración estimada
                </span>
                <p className="text-[13px] text-[#334155] leading-relaxed">
                  {treatment.sessions}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <span className="block text-[10px] uppercase tracking-[0.15em] text-[#94A3B8] font-bold mb-3.5 sm:mb-5">
                Abordaje Clínico y Beneficios
              </span>
              <ul className="space-y-3 sm:space-y-4">
                {treatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] shrink-0 mt-2" />
                    <span className="text-[13.5px] sm:text-[14px] text-[#334155] leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer / CTA */}
          <div className="p-4 sm:p-6 md:px-12 md:py-8 bg-white border-t border-[#F1F5F9] shrink-0">
            <a onClick={(e) => e.preventDefault()}
              href="#"
              className="group w-full inline-flex items-center justify-between bg-[#0A2638] hover:bg-[#0284C7] text-white px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-md hover:shadow-lg active:scale-98"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#BAE6FD]" />
                <span className="text-[13.5px] sm:text-[14.5px] font-medium tracking-wide">Agendar consulta médica</span>
              </div>
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#BAE6FD] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <div className="mt-3 sm:mt-5 flex items-center justify-center gap-1.5 text-[11px] sm:text-[11.5px] text-[#94A3B8]">
              <Shield className="w-3.5 h-3.5" />
              <span>Tratamiento en Palermo · Av. Santa Fe 3250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

