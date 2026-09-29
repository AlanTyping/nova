import Image from "next/image";
import { Award, Microscope, ShieldCheck, CheckCircle2 } from "lucide-react";
import { DOCTORS } from "@/data/clinicData";

export default function PremiumAuthoritySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E0F2FE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Context & Authority */}
          <div>
            <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
              <Award className="w-3.5 h-3.5 text-[#0EA5E9]" />
              Excelencia Odontológica
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#0F172A] mb-6">
              Expertise clínico y tecnología de <span className="italic text-[#0284C7]">vanguardia.</span>
            </h2>
            
            <p className="text-[16px] text-[#475569] leading-relaxed mb-8">
              En Clínica Dental Nova creemos que los mejores resultados se logran combinando profesionales altamente capacitados con la mejor tecnología médica disponible en el mercado. No tercerizamos diagnósticos; resolvemos casos complejos íntegramente en nuestra clínica en Palermo.
            </p>

            {/* Key Authority Pillars */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-[#F0F9FF] rounded-xl flex items-center justify-center border border-[#BAE6FD]">
                    <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[16px] mb-1">Formación Continua y Posgrados UBA</h4>
                  <p className="text-[#64748B] text-[14px] leading-relaxed">
                    Nuestro equipo directivo y médico cuenta con especializaciones universitarias y años de experiencia académica y hospitalaria.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-[#F0F9FF] rounded-xl flex items-center justify-center border border-[#BAE6FD]">
                    <Microscope className="w-5 h-5 text-[#0284C7]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[#0F172A] text-[16px] mb-1">Equipamiento Premium</h4>
                  <p className="text-[#64748B] text-[14px] leading-relaxed">
                    Contamos con escáner intraoral 3D de alta velocidad, radiografía digital de mínima radiación y sillones ergonómicos ultra-soft.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0]">
              <div className="text-center">
                <span className="block font-serif text-3xl text-[#0284C7] font-bold mb-1">+15</span>
                <span className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Años de Exp.</span>
              </div>
              <div className="text-center border-l border-r border-[#E2E8F0]">
                <span className="block font-serif text-3xl text-[#0284C7] font-bold mb-1">3D</span>
                <span className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Tecnología</span>
              </div>
              <div className="text-center">
                <span className="block font-serif text-3xl text-[#0284C7] font-bold mb-1">100%</span>
                <span className="text-[12px] text-[#64748B] font-bold uppercase tracking-wider">Profesionales</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals / Premium Setup */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#BAE6FD] to-[#F0F9FF] rounded-[2.5rem] blur-xl opacity-50" />
            
            {/* Main Image Grid */}
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#E0F2FE]">
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
                    alt="Doctora de Clínica Dental Nova"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-2.5 rounded-xl border border-[#BAE6FD]">
                    <p className="text-[11px] font-bold text-[#0284C7] uppercase">Dirección Médica</p>
                    <p className="text-[12px] text-[#0F172A] font-medium leading-tight">Dra. Valentina Ruiz</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#E0F2FE]">
                  <Image
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                    alt="Escáner 3D"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border border-[#E0F2FE]">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                    alt="Sillones Premium"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 -left-6 lg:-left-12 transform -translate-y-1/2 bg-white p-4 rounded-2xl shadow-xl border border-[#BAE6FD] flex items-center gap-3">
              <div className="bg-[#E0F2FE] p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-[#0284C7]" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#0F172A]">Materiales Importados</p>
                <p className="text-[12px] text-[#64748B]">Calidad Internacional</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
