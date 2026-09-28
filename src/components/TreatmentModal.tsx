"use client";

import { Treatment, CLINIC_INFO } from "@/data/clinicData";
import { X, CheckCircle2, Clock, Calendar, MessageCircle, ArrowUpRight, Sparkles, Shield } from "lucide-react";
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A2638]/70 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#BAE6FD] max-h-[90vh] flex flex-col animate-fade-in">
        {/* Header with image & Celeste gradient overlay */}
        <div className="relative h-48 sm:h-56 w-full bg-[#0A2638] shrink-0">
          <Image
            src={treatment.image}
            alt={treatment.name}
            fill
            className="object-cover opacity-80"
            sizes="(max-width: 768px) 100vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638] via-[#0A2638]/60 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white hover:text-[#0A2638] flex items-center justify-center transition-colors focus:outline-none backdrop-blur-xs border border-white/30"
            aria-label="Cerrar detalles del tratamiento"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#BAE6FD] bg-[#0284C7]/80 px-3 py-1 rounded-full mb-2 inline-block backdrop-blur-xs border border-[#7DD3FC]/40">
              {treatment.categoryLabel}
            </span>
            <h3 id="modal-title" className="font-serif text-2xl sm:text-3xl text-white font-medium">
              {treatment.name}
            </h3>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Tagline & Description */}
          <div>
            <p className="text-sm sm:text-[15px] font-semibold text-[#0284C7] italic mb-3">
              "{treatment.tagline}"
            </p>
            <p className="text-[14.5px] text-[#475569] leading-relaxed">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key clinical benefits */}
          <div className="bg-[#F0F9FF] p-5 rounded-2xl border border-[#BAE6FD]">
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#0284C7] mb-3.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0EA5E9]" />
              Beneficios y Abordaje Clínico
            </h4>
            <ul className="space-y-2.5">
              {treatment.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#1E293B]">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendation and duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#0A2638] font-bold mb-1">
                <Calendar className="w-4 h-4 text-[#0284C7]" />
                <span>Indicado para:</span>
              </div>
              <p className="text-[#64748B]">{treatment.recommendedFor}</p>
            </div>
            <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0]">
              <div className="flex items-center gap-2 text-[#0A2638] font-bold mb-1">
                <Clock className="w-4 h-4 text-[#0284C7]" />
                <span>Estimación de sesiones:</span>
              </div>
              <p className="text-[#64748B]">{treatment.sessions}</p>
            </div>
          </div>
        </div>

        {/* Modal Footer / Action */}
        <div className="p-5 sm:p-6 bg-[#F0F9FF] border-t border-[#BAE6FD] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-[12.5px] text-[#64748B] text-center sm:text-left flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-[#0284C7]" />
            <span>Consultorio Palermo · Av. Santa Fe 3250</span>
          </div>
          <a
            href={CLINIC_INFO.getWhatsAppUrl(
              `Hola Clínica Dental Nova, me interesa consultar y solicitar un turno para el tratamiento de ${treatment.name}.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[14px] font-semibold px-6 py-3 rounded-full shadow-[0_4px_14px_rgba(2,132,199,0.3)] transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-[#BAE6FD]" />
            <span>Consultar por este tratamiento</span>
            <ArrowUpRight className="w-4 h-4 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
}
