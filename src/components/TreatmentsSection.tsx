"use client";

import { useState } from "react";
import Image from "next/image";
import { TREATMENTS, Treatment, CLINIC_INFO } from "@/data/clinicData";
import TreatmentModal from "./TreatmentModal";
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Star } from "lucide-react";

export default function TreatmentsSection() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [activeTabId, setActiveTabId] = useState<string>(TREATMENTS[0].id);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas las especialidades" },
    { id: "estetica", label: "Estética & Sonrisa" },
    { id: "ortodoncia", label: "Ortodoncia" },
    { id: "implantes", label: "Implantes & Prótesis" },
    { id: "integral", label: "Salud General & Niños" },
  ];

  const filteredTreatments = filterCategory === "all"
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === filterCategory);

  const activeTreatment = TREATMENTS.find((t) => t.id === activeTabId) || TREATMENTS[0];

  return (
    <section id="tratamientos" className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#E0F2FE]">
      {/* Background Subtle Celeste Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-r from-[#E0F2FE]/40 via-[#F0F9FF]/60 to-[#E0F2FE]/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Especialidades Médicas en Palermo
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.1] text-[#0F172A] mb-5">
            Todo lo que necesitás, <br className="hidden sm:block" />
            <span className="italic text-[#0284C7]">en un mismo lugar.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] font-light leading-relaxed max-w-2xl">
            Reunimos todas las especialidades para acompañarte de manera integral, con una mirada preventiva y mínimamente invasiva.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilterCategory(cat.id)}
              className={`text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                filterCategory === cat.id
                  ? "bg-[#0284C7] text-white shadow-sm font-semibold"
                  : "bg-[#F0F9FF] text-[#334155] hover:bg-[#E0F2FE] hover:text-[#0284C7] border border-[#BAE6FD]/60"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Highlight Showcase (Interactive Tab & Spotlight) */}
        <div className="bg-gradient-to-br from-[#F0F9FF] via-[#F8FAFC] to-[#E0F2FE]/40 rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#BAE6FD] mb-16 shadow-[0_10px_30px_rgba(2,132,199,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Quick Treatment Selector */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7] mb-3.5">
                  Seleccioná una especialidad
                </p>
                <div className="flex flex-wrap lg:flex-col gap-2">
                  {TREATMENTS.map((t) => {
                    const isActive = t.id === activeTabId;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setActiveTabId(t.id)}
                        className={`text-left text-[14px] font-medium px-4 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-[#0284C7] text-white shadow-[0_4px_12px_rgba(2,132,199,0.3)] font-semibold scale-[1.01]"
                            : "bg-white text-[#334155] hover:bg-[#E0F2FE] hover:text-[#0284C7] border border-[#E2E8F0]"
                        }`}
                      >
                        <span className="truncate">{t.name}</span>
                        {isActive && <ArrowRight className="w-4 h-4 text-[#BAE6FD]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Detailed Spotlight of Selected Treatment */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#BAE6FD] shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-[#E0F2FE]">
                  <Image
                    src={activeTreatment.image}
                    alt={activeTreatment.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#0284C7]/90 text-white text-[11px] px-3 py-1 rounded-full backdrop-blur-xs font-semibold shadow-xs">
                    {activeTreatment.sessions}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[12px] font-bold text-[#0284C7] uppercase tracking-wider bg-[#F0F9FF] px-2.5 py-0.5 rounded border border-[#BAE6FD]">
                    {activeTreatment.categoryLabel}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#0F172A] mb-2 font-normal">
                  {activeTreatment.name}
                </h3>
                <p className="text-[14px] font-semibold text-[#0284C7] italic mb-3">
                  "{activeTreatment.tagline}"
                </p>
                <p className="text-[14.5px] text-[#475569] leading-relaxed mb-6">
                  {activeTreatment.shortDescription}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  {activeTreatment.benefits.slice(0, 2).map((benefit, i) => (
                    <div
                      key={i}
                      className="text-[13px] text-[#1E293B] bg-[#F0F9FF] p-2.5 rounded-xl flex items-center gap-2 border border-[#E0F2FE]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                      <span className="truncate">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E0F2FE]">
                <button
                  onClick={() => setSelectedTreatment(activeTreatment)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[14px] font-semibold px-6 py-2.5 rounded-full shadow-[0_4px_12px_rgba(2,132,199,0.25)] transition-all active:scale-95 cursor-pointer"
                >
                  <span>Conocer tratamiento</span>
                  <ArrowRight className="w-4 h-4 text-[#BAE6FD]" />
                </button>
                <a
                  href={CLINIC_INFO.getWhatsAppUrl(
                    `Hola Clínica Dental Nova, quisiera consultar por el tratamiento de ${activeTreatment.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-[14px] font-semibold text-[#0284C7] hover:text-[#0369A1] px-4 py-2.5 transition-colors"
                >
                  <span>Consultar por WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Filtered Catalogue Grid */}
        <div className="border-t border-[#E0F2FE] pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
            <div>
              <p className="text-[12px] uppercase tracking-widest font-bold text-[#0284C7]">
                Catálogo Clínico Completo
              </p>
              <h3 className="font-serif text-2xl text-[#0F172A] font-normal">
                Todas nuestras especialidades en Palermo
              </h3>
            </div>
            <p className="text-[13.5px] text-[#64748B] max-w-md">
              Hacé clic en cualquier especialidad para ver beneficios clínicos, indicaciones y plan de tratamiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTreatments.map((treatment, index) => (
              <div
                key={treatment.id}
                onClick={() => setSelectedTreatment(treatment)}
                className="group cursor-pointer bg-white hover:bg-[#F0F9FF] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#38BDF8] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(2,132,199,0.12)] flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[12px] font-serif font-bold text-[#0284C7]">
                      0{index + 1}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#F0F9FF] group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-colors border border-[#BAE6FD]">
                      <ArrowUpRight className="w-4 h-4 text-[#0284C7] group-hover:text-white" />
                    </span>
                  </div>
                  <span className="text-[10.5px] uppercase tracking-wider font-bold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded inline-block mb-2">
                    {treatment.categoryLabel}
                  </span>
                  <h4 className="font-serif text-[19px] text-[#0F172A] group-hover:text-[#0284C7] font-medium mb-2 transition-colors">
                    {treatment.name}
                  </h4>
                  <p className="text-[13px] text-[#64748B] line-clamp-3 leading-relaxed mb-4">
                    {treatment.shortDescription}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E2E8F0] group-hover:border-[#BAE6FD] flex items-center justify-between text-[12px]">
                  <span className="text-[#64748B] font-medium">{treatment.sessions}</span>
                  <span className="font-semibold text-[#0284C7] group-hover:underline flex items-center gap-1">
                    Ver detalle
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  );
}
