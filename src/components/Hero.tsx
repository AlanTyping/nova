import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Sparkles, Star, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-6 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-[#F8FAFC] to-[#FFFFFF]"
    >
      {/* Luminous Ambient Celeste Orbs */}
      <div
        className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#BAE6FD]/40 to-[#E0F2FE]/20 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#E0F2FE]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Medical Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Live Clinic & Location Badge */}
            <div className="inline-flex items-center gap-2.5 self-start bg-white/90 backdrop-blur-md text-[#0A2638] text-[12.5px] font-medium px-4 py-2 rounded-full mb-6 border border-[#BAE6FD] shadow-[0_2px_10px_rgba(2,132,199,0.08)]">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0EA5E9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0284C7]"></span>
              </span>
              <span className="font-semibold text-[#0284C7]">Palermo, CABA</span>
              <span className="text-[#94A3B8]">|</span>
              <span className="text-[#334155]">Av. Santa Fe 3250</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[#0369A1] font-medium ml-1">
                <Star className="w-3.5 h-3.5 fill-[#0284C7] text-[#0284C7]" />
                4.9/5
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] tracking-[-0.02em] text-[#0F172A] mb-6">
              Una atención dental{" "}
              <span className="italic text-[#0284C7] font-normal">pensada para vos.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-[19px] text-[#475569] font-normal leading-relaxed max-w-2xl mb-8">
              Odontología integral, estética y especialidades en un espacio profesional y cercano en Palermo.
            </p>

            {/* CTAs with Celeste Glow */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <a
                href={CLINIC_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(2,132,199,0.45)] active:scale-[0.98] group"
              >
                <MessageCircle className="w-5 h-5 text-[#BAE6FD] group-hover:scale-110 transition-transform" />
                <span>Solicitar turno</span>
              </a>

              <Link
                href="#tratamientos"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F0F9FF] text-[#0A2638] text-[15px] font-semibold px-7 py-3.5 rounded-full border border-[#BAE6FD] hover:border-[#38BDF8] transition-all duration-200 active:scale-[0.98] shadow-xs"
              >
                <span>Conocer tratamientos</span>
                <ArrowRight className="w-4 h-4 text-[#0284C7]" />
              </Link>
            </div>

            {/* Trust Line */}
            <div className="pt-2">
              <p className="text-[13.5px] text-[#64748B] flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                Odontología integral · Profesionales especializados · Palermo, CABA
              </p>
            </div>

            {/* Key Advantages Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-10 pt-8 border-t border-[#E0F2FE] max-w-xl">
              <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#E0F2FE]">
                <div className="font-serif text-2xl sm:text-3xl text-[#0284C7] font-semibold">+12 años</div>
                <div className="text-[11.5px] text-[#64748B] font-medium mt-0.5">Trayectoria en Palermo</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#E0F2FE]">
                <div className="font-serif text-2xl sm:text-3xl text-[#0284C7] font-semibold">4 Doctores</div>
                <div className="text-[11.5px] text-[#64748B] font-medium mt-0.5">Especialistas UBA</div>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-xs rounded-xl border border-[#E0F2FE]">
                <div className="font-serif text-2xl sm:text-3xl text-[#0284C7] font-semibold">100% 3D</div>
                <div className="text-[11.5px] text-[#64748B] font-medium mt-0.5">Tecnología digital</div>
              </div>
            </div>
          </div>

          {/* Right Column: Luminous Medical Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Celeste Glow Frame */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-[#38BDF8] via-[#0EA5E9] to-[#BAE6FD] rounded-3xl blur-sm opacity-60"></div>

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#E0F2FE] shadow-[0_20px_50px_rgba(2,132,199,0.18)] border border-white">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                  alt="Consultorio odontológico moderno y luminoso en Palermo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2638]/70 via-[#0A2638]/20 to-transparent" />

                {/* Floating Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-[#BAE6FD] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#0284C7] font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
                        <span>Tecnología Odontológica</span>
                      </div>
                      <p className="text-[14px] font-semibold text-[#0A2638] mt-0.5">
                        Consultorios luminosos & Scanner 3D
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center shrink-0 border border-[#BAE6FD]">
                      <CheckCircle2 className="w-5 h-5 text-[#0284C7]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Top-Left Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3.5 rounded-xl shadow-[0_8px_25px_rgba(2,132,199,0.15)] border border-[#BAE6FD] hidden sm:flex items-center gap-3 animate-fade-in">
                <div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0284C7]">
                  <ShieldCheck className="w-5 h-5 text-[#0284C7]" />
                </div>
                <div className="text-left">
                  <p className="text-[12.5px] font-bold text-[#0A2638]">Protocolo Sin Dolor</p>
                  <p className="text-[11px] text-[#64748B]">Anestesia computarizada</p>
                </div>
              </div>

              {/* Floating Bottom-Right Pill */}
              <div className="absolute -bottom-3 -right-3 sm:-right-5 bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white px-4 py-2 rounded-full shadow-lg text-[12px] font-semibold hidden sm:flex items-center gap-1.5 border border-white">
                <Sparkles className="w-3.5 h-3.5 text-[#BAE6FD]" />
                <span>Atención en el día</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
