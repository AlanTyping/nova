"use client";

import { useState } from "react";
import { FAQS } from "@/data/clinicData";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas" },
    { id: "turnos", label: "Turnos y urgencias" },
    { id: "cobertura", label: "Obras sociales" },
    { id: "especialidades", label: "Especialidades" },
    { id: "ubicacion", label: "Ubicación" },
  ];

  const filteredFaqs = activeCat === "all"
    ? FAQS
    : FAQS.filter((f) => f.category === activeCat);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#0F172A] mb-4">
            Preguntas <span className="italic text-[#0284C7]">frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Información clara sobre turnos, especialidades, coberturas y atención en nuestro consultorio de Palermo.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveCat(c.id);
                setOpenIndex(0);
              }}
              className={`text-[12px] sm:text-[13px] font-medium px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all cursor-pointer ${
                activeCat === c.id
                  ? "bg-[#0284C7] text-white shadow-xs"
                  : "bg-white text-[#475569] hover:text-[#0F172A] border border-[#BAE6FD]/70 hover:border-[#0284C7]/50 hover:bg-[#F0F9FF]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                  isOpen
                    ? "border-[#38BDF8] shadow-sm ring-1 ring-[#0284C7]/15"
                    : "border-[#E2E8F0] hover:border-[#BAE6FD]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-base sm:text-[19px] font-normal transition-colors leading-snug ${
                    isOpen ? "text-[#0284C7]" : "text-[#0F172A]"
                  }`}>
                    {faq.question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0284C7] text-white rotate-180"
                        : "bg-[#F0F9FF] text-[#0284C7] border border-[#BAE6FD]/60"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-7 text-[#475569] text-[13.5px] sm:text-[14.5px] leading-relaxed border-t border-[#F0F9FF] pt-3.5 sm:pt-4 bg-[#F0F9FF]/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discreet Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-[#64748B]">
          <HelpCircle className="w-4 h-4 text-[#0284C7]" />
          <span>Atención personalizada en Av. Santa Fe 3250, Palermo · CABA</span>
        </div>

      </div>
    </section>
  );
}
