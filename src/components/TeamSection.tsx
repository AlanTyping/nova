"use client";

import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function TeamSection() {
  const doctors = [
    {
      id: "valentina-ruiz",
      name: "Dra. Valentina Ruiz",
      role: "Directora & Estética Dental",
      experience: "12+ años de trayectoria",
      matricula: "MN 38.412",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      focus: "Microodontología biomimética y carillas cerámicas de alta precisión.",
      tags: ["Diploma de Honor (UBA)", "Especialista SAOE", "Microestética Dental"],
    },
    {
      id: "nicolas-ferrer",
      name: "Dr. Nicolás Ferrer",
      role: "Cirugía Oral e Implantes",
      experience: "14+ años de trayectoria",
      matricula: "MN 41.205",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
      focus: "Implantes de carga inmediata, cirugía guiada 3D y regeneración ósea.",
      tags: ["Especialista UBA", "Fellow ITI Suiza", "Cirugía Digital 3D"],
    },
    {
      id: "camila-torres",
      name: "Dra. Camila Torres",
      role: "Ortodoncia & Alineadores",
      experience: "10+ años de trayectoria",
      matricula: "MN 45.890",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=800&q=80",
      focus: "Alineadores transparentes invisibles y planificación oclusal computarizada.",
      tags: ["Especialista AOA", "Invisalign Platinum Doctor", "Planificación 3D"],
    },
  ];

  return (
    <section id="equipo" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#0F172A] mb-4">
            Cuerpo médico y <span className="italic text-[#0284C7]">especialistas</span>
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Formación de excelencia académica, trayectoria comprobada y atención médica personalizada en Palermo.
          </p>
        </div>

        {/* 3 Modern Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay Badge */}
                <div className="relative aspect-[4/4.5] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638]/70 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  {/* Floating Experience Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-[#0A2638] text-white text-[11px] font-semibold tracking-wide px-3.5 py-1 rounded-full shadow-md">
                      {doctor.experience}
                    </span>
                  </div>

                  {/* Floating Matricula Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-block bg-white/95 text-[#0F172A] font-mono text-[11px] font-bold px-3 py-1 rounded-lg shadow-sm">
                      {doctor.matricula}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <span className="text-[11px] font-bold text-[#0284C7] uppercase tracking-wider block mb-1.5">
                    {doctor.role}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#0F172A] mb-3">
                    {doctor.name}
                  </h3>

                  <p className="text-[14px] text-[#334155] leading-relaxed mb-6">
                    {doctor.focus}
                  </p>

                  {/* Accreditations Pills */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10.5px] uppercase tracking-[0.15em] text-slate-400 font-bold block mb-2">
                      Acreditaciones clave
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="inline-block bg-slate-50 border border-slate-200 text-[#1E293B] text-[11.5px] font-medium px-2.5 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className="py-2.5 px-4 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-center gap-2 text-xs text-[#1E293B] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Atención en sede Palermo</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
