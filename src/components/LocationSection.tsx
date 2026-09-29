import { CLINIC_INFO } from "@/data/clinicData";
import { MapPin, Phone, Clock, MessageCircle, Navigation, Train, Bus, Car } from "lucide-react";
import PreventDefaultLink from "./PreventDefaultLink";

export default function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact & Location Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight text-[#0F172A] mb-6">
                Estamos en <span className="italic text-[#0284C7]">Palermo.</span>
              </h2>

              <p className="text-[15px] sm:text-[16px] text-[#475569] leading-relaxed mb-8">
                Nuestra clínica está ubicada estratégicamente sobre una de las avenidas más conectadas de la Ciudad de Buenos Aires, a metros de las estaciones de subte y con múltiples líneas de transporte.
              </p>

              {/* Data Blocks */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#BAE6FD]/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[11.5px] uppercase tracking-wider font-bold text-[#0284C7]">
                      Dirección
                    </h3>
                    <p className="text-[16px] font-bold text-[#0F172A] mt-0.5">
                      Av. Santa Fe 3250
                    </p>
                    <p className="text-[13px] text-[#64748B]">Palermo, CABA (entre Cnel. Díaz y Billinghurst)</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#BAE6FD]/80 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-[11.5px] uppercase tracking-wider font-bold text-[#0284C7]">
                      Horarios de atención
                    </h3>
                    <div className="mt-1 space-y-0.5 text-[14px] text-[#1E293B]">
                      <p>
                        <span className="font-semibold text-[#0F172A]">Lunes a viernes:</span> 8:30 – 19:30
                      </p>
                      <p>
                        <span className="font-semibold text-[#0F172A]">Sábados:</span> 9:00 – 13:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href={`tel:${CLINIC_INFO.phoneRaw}`}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#BAE6FD]/80 hover:border-[#0284C7] transition-all shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#F0F9FF] flex items-center justify-center text-[#0284C7] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#64748B]">
                        Teléfono
                      </p>
                      <p className="text-[13.5px] font-bold text-[#0F172A]">
                        {CLINIC_INFO.phone}
                      </p>
                    </div>
                  </a>

                  <PreventDefaultLink
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#BAE6FD]/80 hover:border-[#0284C7] transition-all shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#E0F2FE] flex items-center justify-center text-[#0284C7] shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider font-bold text-[#0284C7]">
                        WhatsApp
                      </p>
                      <p className="text-[13.5px] font-bold text-[#0F172A]">
                        {CLINIC_INFO.whatsapp}
                      </p>
                    </div>
                  </PreventDefaultLink>
                </div>
              </div>

              {/* How to get there CTA Button */}
              <div className="mt-8">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full shadow-[0_4px_14px_rgba(2,132,199,0.3)] transition-all active:scale-[0.98] w-full sm:w-auto"
                >
                  <Navigation className="w-4 h-4 text-[#BAE6FD]" />
                  <span>Cómo llegar en Google Maps</span>
                </a>
              </div>
            </div>

            {/* Public Transit Guide */}
            <div className="mt-8 pt-6 border-t border-[#E0F2FE] grid grid-cols-1 sm:grid-cols-2 gap-3 text-[12.5px] text-[#64748B]">
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#E2E8F0]">
                <Train className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Subte D (Est. Bulnes y Agüero)</span>
              </div>
              <div className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-[#E2E8F0]">
                <Bus className="w-4 h-4 text-[#0284C7] shrink-0" />
                <span>Colectivos: 12, 29, 39, 64, 68, 152</span>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 h-full">
            <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[580px] rounded-3xl overflow-hidden shadow-lg border border-[#BAE6FD] bg-[#E0F2FE]">
              <iframe
                title="Mapa de ubicación de Clínica Dental Nova en Palermo CABA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.582845943265!2d-58.41416972346761!3d-34.589419172959825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb57f2bb16f0d%3A0xc32479e0004ff971!2sAv.%20Santa%20Fe%203250%2C%20C1425BGV%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1710000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Overlay Location Chip */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#BAE6FD] max-w-[calc(100%-2rem)] sm:max-w-[280px]">
                <div className="flex items-center gap-2 text-[#0284C7] font-bold text-[13px] mb-0.5">
                  <MapPin className="w-4 h-4 text-[#0284C7]" />
                  <span>Clínica Dental Nova</span>
                </div>
                <p className="text-[11.5px] text-[#64748B]">
                  Av. Santa Fe 3250 · Palermo, CABA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
