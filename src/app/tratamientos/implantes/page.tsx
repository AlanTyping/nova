import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Image from "next/image";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { CheckCircle2, ChevronRight, Activity, CalendarHeart, ShieldCheck, Microscope, Star, ScanLine, Syringe } from "lucide-react";

export const metadata = {
  title: "Implantes Dentales en Palermo | Alta Complejidad",
  description: "Recuperá tu sonrisa con implantes dentales de titanio y tecnología de escaneo 3D. Cirugía mínimamente invasiva guiada por computadora en Palermo, CABA.",
};

export default function ImplantesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFB] text-[#0F172A]">
      <Header />
      
      {/* Hero Implantes */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0A2638]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1920&q=80"
            alt="Implantes Dentales Alta Complejidad"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2638] via-[#0A2638]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#BAE6FD] mb-4 bg-[#0284C7]/20 px-3.5 py-1 rounded-full border border-[#0284C7]/40 backdrop-blur-sm">
              <Microscope className="w-3.5 h-3.5" />
              Alta Complejidad Odontológica
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-medium leading-[1.1] mb-6">
              Recuperá la funcionalidad y <br className="hidden sm:block" />
              <span className="italic text-[#38BDF8]">estética de tu sonrisa.</span>
            </h1>
            <p className="text-lg text-[#E0F2FE] mb-10 leading-relaxed max-w-2xl">
              Implantes de titanio biocompatible con planificación 3D. Un procedimiento mínimamente invasivo, preciso y con resultados definitivos para que vuelvas a comer y sonreír con total seguridad.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={CLINIC_INFO.getWhatsAppUrl("Hola, estuve viendo la web y me gustaría solicitar una evaluación para implantes dentales.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-[14px] font-bold px-8 py-4 rounded-full transition-all shadow-[0_4px_14px_rgba(2,132,199,0.4)]"
              >
                Solicitar evaluación sin cargo
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expectativas y Tecnología */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] mb-6">
                Tecnología de precisión para <span className="italic text-[#0284C7]">resultados predecibles.</span>
              </h2>
              <p className="text-[#475569] mb-8 leading-relaxed">
                Olvidate de las cirugías traumáticas del pasado. Hoy en Clínica Dental Nova planificamos todo el proceso de forma digital antes de tocar el paciente. Esto reduce el tiempo de la intervención, minimiza la inflamación y asegura una adaptación perfecta de la corona.
              </p>

              <div className="space-y-6">
                {[
                  { icon: ScanLine, title: "Escaneo Intraoral 3D", desc: "No usamos pastas molestas. Tomamos medidas con un escáner óptico de alta precisión." },
                  { icon: Activity, title: "Cirugía Guiada por Computadora", desc: "La posición del implante se diseña en 3D asegurando el ángulo y profundidad exactos." },
                  { icon: Syringe, title: "Anestesia Localizada y Confort", desc: "El procedimiento es completamente indoloro. Te vas a sorprender de lo rápido que es." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 bg-[#F0F9FF] rounded-2xl flex items-center justify-center border border-[#BAE6FD]">
                        <item.icon className="w-6 h-6 text-[#0284C7]" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0F172A] text-lg mb-1">{item.title}</h4>
                      <p className="text-[#475569] text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                alt="Tecnología de Escaneo 3D"
                fill
                className="object-cover"
              />
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#BAE6FD] shadow-lg">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-8 h-8 text-[#0284C7]" />
                  <div>
                    <p className="text-[13px] text-[#64748B] font-bold uppercase tracking-wider">Materiales Premium</p>
                    <p className="text-[#0F172A] font-medium text-[15px]">Titanio Grado Médico + Zirconio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* El Proceso Paso a Paso */}
      <section className="py-20 bg-[#F0F9FF] border-y border-[#BAE6FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-2 block">
              Transparencia y claridad
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A]">
              ¿Cómo es el proceso?
            </h2>
            <p className="text-[#475569] mt-4">
              Te acompañamos en cada etapa, resolviendo tus dudas y asegurando tu comodidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Diagnóstico Digital",
                desc: "Evaluación clínica, escaneo 3D y tomografía para analizar la calidad ósea y diseñar el plan."
              },
              {
                step: "02",
                title: "Fase Quirúrgica",
                desc: "Colocación del implante de titanio. Una intervención rápida, ambulatoria y sin dolor."
              },
              {
                step: "03",
                title: "Osteointegración",
                desc: "Período de cicatrización donde el implante se fusiona naturalmente con el hueso (2 a 4 meses)."
              },
              {
                step: "04",
                title: "Corona Definitiva",
                desc: "Toma de impresión digital y colocación de la corona de zirconio, idéntica a un diente natural."
              }
            ].map((s, i) => (
              <div key={i} className="relative bg-white p-8 rounded-3xl border border-[#BAE6FD] shadow-xs hover:shadow-md transition-shadow">
                <div className="text-5xl font-serif text-[#E0F2FE] font-bold mb-4">{s.step}</div>
                <h4 className="text-xl font-bold text-[#0F172A] mb-3">{s.title}</h4>
                <p className="text-[#475569] text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial o Garantía */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-12 h-12 text-[#38BDF8] mx-auto mb-6" />
          <h2 className="font-serif text-3xl text-[#0F172A] mb-8 leading-relaxed">
            "Tenía mucho miedo al procedimiento, pero el Dr. Ferrer me explicó todo detalladamente. Fue súper rápido, no sentí dolor y ahora puedo volver a comer con normalidad. Me cambió la vida."
          </h2>
          <p className="font-bold text-[#0284C7] uppercase tracking-widest text-[13px]">
            — Carlos M. (Paciente de Rehabilitación sobre Implantes)
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#0A2638] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-6">
            Da el primer paso hacia tu <span className="text-[#38BDF8] italic">nueva sonrisa</span>
          </h2>
          <p className="text-[#E0F2FE] mb-10 text-lg">
            Agendá una consulta de evaluación. Analizaremos tu caso particular y te brindaremos un presupuesto transparente y opciones de financiación.
          </p>
          <a
            href={CLINIC_INFO.getWhatsAppUrl("Hola, quiero agendar una evaluación para implantes dentales.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#38BDF8] hover:bg-[#0284C7] text-[#0A2638] hover:text-white text-[15px] font-bold px-8 py-4 rounded-full transition-all shadow-[0_4px_14px_rgba(56,189,248,0.3)]"
          >
            <CalendarHeart className="w-5 h-5" />
            Coordinar evaluación ahora
          </a>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <MobileQuickBar />
    </main>
  );
}
