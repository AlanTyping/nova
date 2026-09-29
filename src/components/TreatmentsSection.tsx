"use client";

import { useState } from "react";
import { TREATMENTS, Treatment } from "@/data/clinicData";
import TreatmentModal from "./TreatmentModal";
import { ArrowUpRight } from "lucide-react";

export default function TreatmentsSection() {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  return (
    <section id="tratamientos" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] mb-4">
            Especialidades odontológicas
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed">
            Reunimos diferentes especialidades para acompañarte de manera integral, con una mirada preventiva, conservadora y personalizada.
          </p>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TREATMENTS.map((treatment, index) => (
            <div
              key={treatment.id}
              onClick={() => setSelectedTreatment(treatment)}
              className="group cursor-pointer bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {treatment.categoryLabel}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white" />
                  </span>
                </div>
                
                <h3 className="font-serif text-xl text-[#0F172A] group-hover:text-blue-600 mb-2 transition-colors">
                  {treatment.name}
                </h3>
                
                <p className="text-sm text-[#475569] line-clamp-3 leading-relaxed mb-4">
                  {treatment.shortDescription}
                </p>
              </div>
              
              <div className="pt-4 mt-auto border-t border-gray-50 flex items-center justify-between text-xs">
                <span className="text-gray-500">{treatment.sessions}</span>
                <span className="font-medium text-blue-600">Ver detalle</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  );
}
