"use client";

import { useState } from "react";
import { FAQS, CLINIC_INFO } from "@/data/clinicData";
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas las preguntas" },
    { id: "turnos", label: "Turnos & Urgencias" },
    { id: "cobertura", label: "Obras Sociales" },
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
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-[#E0F2FE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Dudas Comunes
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.1] text-[#0F172A] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] font-light leading-relaxed max-w-xl mx-auto">
            Resolvemos tus principales dudas sobre turnos, especialidades, coberturas y ubicación.
          </p>
        </div>

        {/* Quick Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCat(c.id)}
              className={`text-[12.5px] font-semibold px-4 py-2 rounded-full transition-all cursor-pointer ${
                activeCat === c.id
                  ? "bg-[#0284C7] text-white shadow-xs"
                  : "bg-[#F0F9FF] text-[#334155] hover:bg-[#E0F2FE] border border-[#BAE6FD]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Clean Accessible Accordion */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#F0F9FF] border-[#38BDF8] shadow-xs"
                    : "bg-white border-[#E2E8F0] hover:border-[#BAE6FD]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-[19px] text-[#0F172A] font-medium">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0284C7] text-white rotate-180"
                        : "bg-[#E0F2FE] text-[#0284C7]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-[#475569] text-[14.5px] leading-relaxed border-t border-[#BAE6FD]/60 pt-4 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom WhatsApp Help Notice */}
        <div className="mt-12 text-center bg-gradient-to-br from-[#F0F9FF] to-[#E0F2FE]/60 p-6 sm:p-8 rounded-3xl border border-[#BAE6FD] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs border border-[#BAE6FD]">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#0F172A]">
                ¿Tenés otra consulta específica?
              </h3>
              <p className="text-[13px] text-[#64748B]">
                Escribinos y nuestro equipo de recepción te responderá al instante.
              </p>
            </div>
          </div>
          <a
            href={CLINIC_INFO.getWhatsAppUrl("Hola Clínica Dental Nova, tengo una consulta que no encontré en las preguntas frecuentes.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-all active:scale-95 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#BAE6FD]" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
