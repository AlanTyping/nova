import { DIFFERENTIALS, CLINIC_INFO } from "@/data/clinicData";
import { Sparkles, MessageCircle, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function DifferentialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E0F2FE]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Nuestra Filosofía Clínica
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-medium leading-[1.1] text-[#0F172A] mb-6">
            Una experiencia diferente <br className="hidden sm:block" />
            <span className="italic text-[#0284C7]">desde el primer día.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] font-light leading-relaxed max-w-2xl">
            Rediseñamos la atención tradicional para que tu visita sea clara, predecible y libre de estrés.
          </p>
        </div>

        {/* Editorial 4-Pillar Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.number}
              className="relative flex flex-col justify-between bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] hover:border-[#38BDF8] shadow-xs hover:shadow-[0_10px_30px_rgba(2,132,199,0.08)] transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#BAE6FD] group-hover:text-[#0284C7] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-[#0284C7] bg-[#F0F9FF] px-3 py-1 rounded-full border border-[#BAE6FD]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-[25px] text-[#0F172A] font-medium mb-3 group-hover:text-[#0284C7] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[15px] text-[#475569] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center gap-2 text-[12.5px] font-semibold text-[#0284C7]">
                <CheckCircle2 className="w-4 h-4 text-[#0EA5E9]" />
                <span>Estándar de calidad Clínica Dental Nova</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0A2638] via-[#0F3B57] to-[#0A2638] text-white border border-[#0284C7]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-[#7DD3FC] mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Diagnóstico inicial sin compromiso</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-1">
              ¿Tenés dudas sobre qué tratamiento necesitás?
            </h4>
            <p className="text-[14px] text-[#BAE6FD]">
              En tu primera consulta realizamos un escaneo y diagnóstico completo para explicarte cada opción con claridad.
            </p>
          </div>
          <a
            href={CLINIC_INFO.getWhatsAppUrl("Hola, quisiera agendar una primera consulta de diagnóstico en Palermo.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0EA5E9] text-white text-[14.5px] font-semibold px-7 py-3.5 rounded-full transition-all active:scale-95 shadow-[0_4px_14px_rgba(14,165,233,0.4)]"
          >
            <MessageCircle className="w-4 h-4 text-[#E0F2FE]" />
            <span>Agendar primera consulta</span>
          </a>
        </div>
      </div>
    </section>
  );
}
