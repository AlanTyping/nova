import Image from "next/image";
import { DOCTORS, CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, GraduationCap, Sparkles, CheckCircle2 } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Cuerpo Médico
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight text-[#0F172A] mb-5">
            Profesionales que te acompañan{" "}
            <span className="italic text-[#0284C7]">en cada etapa.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            Un equipo multidisciplinario altamente calificado que combina rigor científico, formación continua en la UBA y un trato cálido y humano.
          </p>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-3xl overflow-hidden border border-[#E2E8F0] hover:border-[#38BDF8] shadow-xs hover:shadow-[0_12px_35px_rgba(2,132,199,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo frame */}
                <div className="relative aspect-[4/4.5] w-full bg-[#E0F2FE] overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Matricula Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-[10.5px] font-bold text-[#0284C7] border border-[#BAE6FD] shadow-xs">
                    {doctor.matricula}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-0.5 rounded-full inline-block mb-2 border border-[#BAE6FD]/60">
                    {doctor.role}
                  </span>
                  <h3 className="font-serif text-xl text-[#0F172A] font-semibold mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-[13px] font-medium text-[#0284C7] mb-3">
                    {doctor.specialty}
                  </p>
                  <p className="text-[13px] text-[#475569] leading-relaxed mb-4">
                    {doctor.bio}
                  </p>

                  {/* Education bullets */}
                  <div className="pt-3 border-t border-[#F1F5F9] space-y-1.5">
                    <p className="text-[11px] uppercase tracking-wider font-bold text-[#64748B] flex items-center gap-1 mb-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#0284C7]" />
                      Formación
                    </p>
                    {doctor.education.map((edu, i) => (
                      <p key={i} className="text-[11.5px] text-[#64748B] leading-snug">
                        • {edu}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Doctor Consultation CTA */}
              <div className="p-4 pt-0">
                <a
                  href={CLINIC_INFO.getWhatsAppUrl(
                    `Hola Clínica Dental Nova, quisiera solicitar un turno con ${doctor.name} (${doctor.specialty}).`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F0F9FF] hover:bg-[#0284C7] text-[#0284C7] hover:text-white text-[13px] font-semibold py-2.5 rounded-full border border-[#BAE6FD] hover:border-[#0284C7] transition-all cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar con especialista</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
