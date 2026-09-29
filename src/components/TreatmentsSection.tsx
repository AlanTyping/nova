"use client";

import { useState } from "react";
import { TREATMENTS, Treatment } from "@/data/clinicData";
import TreatmentModal from "./TreatmentModal";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function TreatmentsSection() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  // Orden estratégico para que encajen perfecto en la grilla Bento
  const layoutOrder = [
    "implantes-dentales",   // 2x2
    "ortodoncia",           // 2x1
    "blanqueamiento-dental",// 1x1
    "odontopediatria",      // 1x1
    "estetica-dental",      // 2x2
    "odontologia-general",  // 1x1
    "endodoncia",           // 1x1
    "protesis"              // 2x1
  ];

  const bentoTreatments = layoutOrder
    .map((id) => TREATMENTS.find((t) => t.id === id))
    .filter(Boolean) as Treatment[];

  return (
    <section id="tratamientos" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection delay={0}>
          <div className="max-w-2xl mb-12 lg:mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] mb-4">
              Especialidades odontológicas
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed">
              Reunimos diferentes especialidades para acompañarte de manera integral, con una mirada preventiva, conservadora y personalizada.
            </p>
          </div>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[280px] sm:auto-rows-[300px] md:auto-rows-[240px]">
          {bentoTreatments.map((treatment, index) => {
            const isLarge = treatment.id === "implantes-dentales" || treatment.id === "estetica-dental";
            const isWide = treatment.id === "ortodoncia" || treatment.id === "protesis";
            
            const spanClasses = isLarge 
              ? "md:col-span-2 md:row-span-2" 
              : isWide 
                ? "md:col-span-2 md:row-span-1" 
                : "md:col-span-1 md:row-span-1";

            return (
              <AnimatedSection key={treatment.id} delay={(index % 4) * 100} className={`w-full h-full ${spanClasses}`}>
                <div
                  onClick={() => setSelectedTreatment(treatment)}
                  className={`group cursor-pointer rounded-3xl overflow-hidden relative border border-[#0A2638]/10 shadow-sm hover:shadow-xl transition-all duration-500 bg-[#0A2638] h-full w-full`}
                >
                  {/* Background Image */}
                  <img 
                    src={treatment.image} 
                    alt={treatment.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638] via-[#0A2638]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-5 sm:p-6 lg:p-8 flex flex-col justify-end z-10">
                    <div className="flex justify-between items-end gap-3 sm:gap-4">
                      <div className="flex-1">
                        <h3 className={`font-serif text-white mb-1 sm:mb-2 leading-tight ${isLarge ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl lg:text-2xl'}`}>
                          {treatment.name}
                        </h3>
                        {isLarge && (
                          <p className="text-[#E0F2FE] text-sm sm:text-[15px] line-clamp-2 max-w-sm mt-1 sm:mt-2">
                            {treatment.shortDescription}
                          </p>
                        )}
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-[#0284C7] group-hover:border-[#0284C7] transition-colors">
                        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  );
}
