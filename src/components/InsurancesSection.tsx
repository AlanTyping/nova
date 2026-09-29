"use client";

import { useState } from "react";
import { INSURANCES } from "@/data/clinicData";
import { ChevronDown, ShieldCheck } from "lucide-react";

export default function InsurancesSection() {
  const [selectedId, setSelectedId] = useState<number | null>(0);

  const detailsMap: Record<string, { note: string; requirements: string[] }> = {
    "OSDE": {
      note: "Atención sin copagos para planes superiores y gestión administrativa directa.",
      requirements: ["Presentación de credencial digital OSDE", "DNI del titular o afiliado", "Autorización directa en recepción"]
    },
    "Swiss Medical": {
      note: "Cobertura en consultas clínicas, diagnóstico digital y prácticas de especialidad.",
      requirements: ["Credencial física o digital en app", "DNI del paciente", "Derivación previa si el plan lo requiere"]
    },
    "Galeno": {
      note: "Acceso ágil en odontología general y descuentos en tratamientos estéticos.",
      requirements: ["Credencial Galeno activa", "DNI vigente", "Validación inmediata en recepción"]
    },
    "Medicus": {
      note: "Sistema de atención directa y emisión de documentación médica para reintegros.",
      requirements: ["Credencial Medicus", "Comprobante de derivación médica si aplica", "Factura emitida para reintegro ágil"]
    },
    "Sancor Salud": {
      note: "Convenio vigente para consultas de rutina, prevención y prótesis según plan.",
      requirements: ["Credencial Sancor Salud", "DNI del titular", "Verificación de coseguro en línea"]
    },
    "Accord Salud": {
      note: "Cobertura en cartillas habilitadas y planes corporativos seleccionados.",
      requirements: ["Credencial Accord Salud", "Documento de identidad", "Consulta previa de cupo mensual"]
    },
    "Pacientes particulares": {
      note: "Para quienes no poseen cobertura o eligen atención privada con facilidades de pago.",
      requirements: ["Financiación en cuotas con tarjeta de crédito", "Presupuesto cerrado sin costos imprevistos", "Beneficios en controles y grupo familiar"]
    },
  };

  const toggleTab = (index: number) => {
    setSelectedId(selectedId === index ? null : index);
  };

  return (
    <section id="cobertura" className="py-20 lg:py-28 bg-white border-b border-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#0F172A] mb-4">
            Obras sociales y <span className="italic text-[#0284C7]">coberturas</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Tocá tu entidad para conocer los planes alcanzados, modalidades y requisitos de atención.
          </p>
        </div>

        {/* Expandable Tabs List */}
        <div className="space-y-3">
          {INSURANCES.map((item, index) => {
            const isOpen = selectedId === index;
            const detailInfo = detailsMap[item.name] || {
              note: item.planNote,
              requirements: ["Consulta previa con recepción para validar tu cobertura."]
            };

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white text-[#0F172A] border-[#0284C7] shadow-sm ring-1 ring-[#0284C7]/20"
                    : "bg-white text-[#0F172A] border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                {/* Header button / Tab trigger */}
                <button
                  onClick={() => toggleTab(index)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                    <span className={`font-serif text-lg sm:text-2xl font-normal transition-colors ${
                      isOpen ? "text-[#0284C7]" : "text-[#0F172A]"
                    }`}>
                      {item.name}
                    </span>
                    <span className="text-[10.5px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full border bg-[#F0F9FF] text-[#0284C7] border-[#BAE6FD]/80">
                      {item.coverage}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs hidden sm:inline-block text-slate-500">
                      {isOpen ? "Ocultar detalle" : item.planNote}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0284C7] text-white rotate-180"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-7 pt-3 sm:pt-4 border-t border-slate-100 text-sm animate-fade-in bg-slate-50/60">
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-center">
                      <div className="sm:col-span-7 space-y-1.5 sm:space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#0284C7] font-bold block">
                          Planes y alcance
                        </span>
                        <p className="text-[#0F172A] font-medium text-[14.5px] sm:text-[15px]">
                          {item.planNote}
                        </p>
                        <p className="text-[#475569] text-[13px] sm:text-[13.5px] leading-relaxed">
                          {detailInfo.note}
                        </p>
                      </div>

                      <div className="sm:col-span-5 bg-white rounded-xl p-3.5 sm:p-4 border border-slate-200/80 shadow-xs space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.15em] text-[#0284C7] font-bold block">
                          Requisitos para el turno
                        </span>
                        <ul className="space-y-1 text-xs text-[#334155]">
                          {detailInfo.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] mt-1.5 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
          <span>Validación de credencial directa en recepción antes de cada consulta.</span>
        </div>

      </div>
    </section>
  );
}
