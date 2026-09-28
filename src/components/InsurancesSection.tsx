import { INSURANCES, CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function InsurancesSection() {
  return (
    <section id="cobertura" className="py-20 lg:py-28 bg-white border-b border-[#E0F2FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F0F9FF] via-white to-[#E0F2FE]/50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#BAE6FD] shadow-[0_10px_35px_rgba(2,132,199,0.08)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-white px-3.5 py-1 rounded-full border border-[#BAE6FD] self-start">
                <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
                Obras Sociales y Prepagas
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#0F172A] mb-5">
                ¿Trabajamos con{" "}
                <span className="italic text-[#0284C7]">tu cobertura?</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed mb-6">
                Atendemos a afiliados de las principales empresas de medicina prepaga de la Argentina, además de brindar planes de atención privada con facilidades de pago en cuotas.
              </p>

              <div className="bg-white p-5 rounded-2xl border border-[#BAE6FD] mb-8 shadow-xs">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                  <p className="text-[13.5px] text-[#1E293B] leading-relaxed font-medium">
                    “La cobertura depende del plan y del tratamiento. Consultanos para conocer las condiciones de tu cobertura.”
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href={CLINIC_INFO.getWhatsAppUrl(
                    "Hola Clínica Dental Nova, quisiera consultar las condiciones de cobertura y aranceles para mi prepaga."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(2,132,199,0.45)] active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 text-[#BAE6FD]" />
                  <span>Consultar cobertura</span>
                </a>
              </div>
            </div>

            {/* Right: Clean List / Grid of Providers */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {INSURANCES.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-2xl border border-[#BAE6FD]/80 shadow-xs hover:border-[#0284C7] hover:shadow-[0_6px_20px_rgba(2,132,199,0.12)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-serif text-lg font-medium text-[#0F172A]">
                        {item.name}
                      </h3>
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                    </div>
                    <p className="text-[12px] text-[#64748B]">{item.planNote}</p>
                    <div className="mt-2.5 pt-2 border-t border-[#F0F9FF] flex items-center justify-between text-[11px]">
                      <span className="text-[#0284C7] font-bold">{item.coverage}</span>
                      <span className="bg-[#E0F2FE] text-[#0369A1] px-2 py-0.5 rounded-full font-medium">
                        {item.badge}
                      </span>
                    </div>
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
