"use client";

import { useState } from "react";
import Image from "next/image";
import { CLINIC_INFO, CLINIC_SPACES } from "@/data/clinicData";
import { Shield, Award, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const activeSpace = CLINIC_SPACES[activeSpaceIndex];

  const highlights = [
    {
      icon: HeartHandshake,
      title: "Trato empático y humano",
      description: "Escuchamos tus inquietudes para garantizar una visita serena y sin dolor.",
    },
    {
      icon: Shield,
      title: "Bioseguridad hospitalaria",
      description: "Protocolos estrictos de esterilización y equipamiento de grado quirúrgico.",
    },
    {
      icon: Award,
      title: "Materiales certificados",
      description: "Zirconio, cerámicas puras y titanio médico de procedencia internacional.",
    },
  ];

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FFFFFF] relative border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Authentic Big Photograph */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Outer Celeste Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#BAE6FD] to-[#E0F2FE] rounded-3xl blur-md opacity-70" />

              {/* Main Interior Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden bg-[#E0F2FE] shadow-xl border border-[#BAE6FD]">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80"
                  alt="Interior contemporáneo y suite de atención en Clínica Dental Nova Palermo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638]/50 via-transparent to-transparent" />
              </div>

              {/* Smaller overlay image for editorial depth */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#E0F2FE]">
                <Image
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=400&q=80"
                  alt="Detalle de precisión en odontología estética"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>

              {/* Subtle badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#BAE6FD] text-[12px] text-[#0284C7] font-bold shadow-xs">
                Sede Palermo · Av. Santa Fe 3250
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD] self-start">
              <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
              Sobre la Clínica
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#0F172A] mb-6">
              Más que una consulta, un lugar donde{" "}
              <span className="italic text-[#0284C7]">sentirte acompañado.</span>
            </h2>

            {/* Editorial quote highlighted block */}
            <div className="relative pl-6 border-l-3 border-[#0284C7] mb-8 bg-[#F0F9FF]/60 py-3 pr-4 rounded-r-2xl">
              <p className="font-serif text-lg sm:text-[19px] text-[#1E293B] italic font-normal leading-relaxed">
                “En Clínica Dental Nova creemos que una buena atención odontológica empieza mucho antes de sentarse en el sillón. Por eso trabajamos para ofrecer una experiencia clara, profesional y personalizada, desde la primera consulta hasta el seguimiento de cada tratamiento.”
              </p>
            </div>

            <p className="text-[15px] text-[#475569] leading-relaxed mb-8">
              Ubicados en pleno Palermo, diseñamos cada rincón de nuestra clínica para transmitir calma y armonía. Creemos en la odontología de precisión basada en la evidencia científica, con diagnósticos honestos y planes de tratamiento sin sorpresas.
            </p>

            {/* Three key pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E0F2FE]">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="space-y-1 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <Icon className="w-5 h-5 text-[#0284C7] mb-1.5" />
                    <h4 className="text-[13.5px] font-bold text-[#0F172A]">
                      {item.title}
                    </h4>
                    <p className="text-[12px] text-[#64748B] leading-snug">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Interactive Spaces Gallery Showcase */}
        <div className="bg-[#F0F9FF] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#BAE6FD]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7]">
              Instalaciones & Tecnología
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#0F172A] font-normal mt-1">
              Conocé nuestros espacios en Palermo
            </h3>
          </div>

          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CLINIC_SPACES.map((space, idx) => (
              <button
                key={space.id}
                onClick={() => setActiveSpaceIndex(idx)}
                className={`text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all cursor-pointer ${
                  activeSpaceIndex === idx
                    ? "bg-[#0284C7] text-white shadow-[0_4px_12px_rgba(2,132,199,0.3)]"
                    : "bg-white text-[#334155] hover:bg-[#E0F2FE] border border-[#BAE6FD]"
                }`}
              >
                {space.title}
              </button>
            ))}
          </div>

          {/* Active Space Display */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#BAE6FD] shadow-xs">
            <div className="lg:col-span-6 relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#E0F2FE]">
              <Image
                src={activeSpace.image}
                alt={activeSpace.title}
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-[12px] font-bold text-[#0284C7] uppercase tracking-wider mb-1">
                {activeSpace.tagline}
              </span>
              <h4 className="font-serif text-2xl text-[#0F172A] font-medium mb-3">
                {activeSpace.title}
              </h4>
              <p className="text-[14.5px] text-[#475569] leading-relaxed mb-6">
                {activeSpace.description}
              </p>

              <div className="space-y-2">
                {activeSpace.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] text-[#1E293B]">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
