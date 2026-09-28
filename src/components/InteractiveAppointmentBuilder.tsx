"use client";

import { useState } from "react";
import { CLINIC_INFO, INSURANCES } from "@/data/clinicData";
import { MessageCircle, Sparkles, Check, Calendar, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function InteractiveAppointmentBuilder() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Odontología General / Control");
  const [selectedTime, setSelectedTime] = useState("Tarde (13:00 a 19:30)");
  const [selectedInsurance, setSelectedInsurance] = useState("OSDE");

  const specialties = [
    "Odontología General / Control",
    "Ortodoncia & Alineadores",
    "Implantes Dentales",
    "Estética / Carillas",
    "Blanqueamiento Dental",
    "Odontopediatría (Niños)",
    "Urgencia / Dolor dental",
  ];

  const timeSlots = [
    "Mañana (8:30 a 13:00)",
    "Tarde (13:00 a 19:30)",
    "Sábados (9:00 a 13:00)",
  ];

  const insuranceOptions = [
    "OSDE",
    "Swiss Medical",
    "Galeno",
    "Medicus",
    "Sancor Salud",
    "Accord Salud",
    "Particular / Otra",
  ];

  const generateWhatsAppMessage = () => {
    return `Hola Clínica Dental Nova! Me gustaría coordinar un turno en la sede de Palermo con los siguientes datos:
• Consulta: ${selectedSpecialty}
• Horario de preferencia: ${selectedTime}
• Cobertura: ${selectedInsurance}
Aguardo las opciones disponibles. Muchas gracias!`;
  };

  return (
    <section id="turno-express" className="py-20 lg:py-28 bg-[#F0F9FF] relative overflow-hidden border-b border-[#BAE6FD]">
      {/* Subtle background glow */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#BAE6FD]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#E0F2FE]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-white px-3.5 py-1.5 rounded-full border border-[#BAE6FD] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Turno Express en 3 Pasos
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F172A] font-normal mb-3">
            Coordiná tu consulta en minutos
          </h2>
          <p className="text-[15px] text-[#475569]">
            Seleccioná tu motivo de atención, horario de preferencia y cobertura para enviar tu solicitud directa a nuestro equipo de recepción.
          </p>
        </div>

        {/* 3 Step Interactive Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(2,132,199,0.1)] border border-[#BAE6FD]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b border-[#E0F2FE]">
            {/* Step 1: Especialidad */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#0284C7] text-white text-[12px] font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-serif text-lg text-[#0F172A] font-medium">
                  Motivo de Consulta
                </h3>
              </div>
              <div className="space-y-2">
                {specialties.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedSpecialty(item)}
                    className={`w-full text-left text-[13px] px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedSpecialty === item
                        ? "bg-[#E0F2FE] border-[#0284C7] text-[#0284C7] font-semibold"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#334155] hover:bg-[#F0F9FF]"
                    }`}
                  >
                    <span>{item}</span>
                    {selectedSpecialty === item && <Check className="w-4 h-4 text-[#0284C7]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Horario */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#0284C7] text-white text-[12px] font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-serif text-lg text-[#0F172A] font-medium">
                  Franja Horaria
                </h3>
              </div>
              <div className="space-y-2.5">
                {timeSlots.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedTime(item)}
                    className={`w-full text-left text-[13px] px-3.5 py-3 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedTime === item
                        ? "bg-[#E0F2FE] border-[#0284C7] text-[#0284C7] font-semibold"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#334155] hover:bg-[#F0F9FF]"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#0284C7]" />
                      <span>{item}</span>
                    </div>
                    {selectedTime === item && <Check className="w-4 h-4 text-[#0284C7]" />}
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD]">
                <p className="text-[12px] text-[#0369A1] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Sede Palermo: Av. Santa Fe 3250</span>
                </p>
                <p className="text-[11.5px] text-[#64748B] mt-1">
                  Atención puntual con turnos programados y sala de espera climatizada.
                </p>
              </div>
            </div>

            {/* Step 3: Cobertura */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-7 h-7 rounded-full bg-[#0284C7] text-white text-[12px] font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif text-lg text-[#0F172A] font-medium">
                  Cobertura o Prepaga
                </h3>
              </div>
              <div className="space-y-2">
                {insuranceOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedInsurance(item)}
                    className={`w-full text-left text-[13px] px-3.5 py-2.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedInsurance === item
                        ? "bg-[#E0F2FE] border-[#0284C7] text-[#0284C7] font-semibold"
                        : "bg-[#F8FAFC] border-[#E2E8F0] text-[#334155] hover:bg-[#F0F9FF]"
                    }`}
                  >
                    <span>{item}</span>
                    {selectedInsurance === item && <Check className="w-4 h-4 text-[#0284C7]" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Bar with formatted WhatsApp message */}
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#0284C7] block">
                Resumen de tu solicitud
              </span>
              <p className="text-[14px] text-[#1E293B] font-medium mt-0.5">
                {selectedSpecialty} · {selectedTime} · {selectedInsurance}
              </p>
            </div>

            <a
              href={CLINIC_INFO.getWhatsAppUrl(generateWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full shadow-[0_6px_20px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_25px_rgba(2,132,199,0.45)] transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5 text-[#BAE6FD]" />
              <span>Enviar solicitud de turno a WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-[#BAE6FD]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
