"use client";
import Link from "next/link";
import Image from "next/image";
import { CLINIC_INFO } from "@/data/clinicData";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2638] text-[#E0F2FE] pt-16 border-t border-[#0284C7]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="#inicio"
              className="group flex items-center gap-3 mb-4 focus:outline-none"
              aria-label="Clínica Dental Nova - Inicio"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0284C7] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 text-[#BAE6FD]" />
              </div>
              <div>
                <span className="text-[19px] font-bold tracking-[0.12em] uppercase text-white block">
                  Clínica Dental Nova
                </span>
                <span className="text-[10.5px] tracking-[0.2em] uppercase text-[#38BDF8] -mt-0.5 block font-semibold">
                  Palermo · Odontología de Avanzada
                </span>
              </div>
            </Link>

            <p className="text-[14px] text-[#BAE6FD] leading-relaxed mb-6 max-w-sm">
              Odontología integral y de especialidad con un enfoque humano, tecnología digital de vanguardia y atención personalizada en Palermo, CABA.
            </p>

            {/* Social Links with clean SVGs in celeste */}
            <div className="flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F3B57] text-[#BAE6FD] hover:text-white hover:bg-[#0284C7] flex items-center justify-center transition-colors border border-[#38BDF8]/30"
                aria-label="Instagram de Clínica Dental Nova"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0F3B57] text-[#BAE6FD] hover:text-white hover:bg-[#0284C7] flex items-center justify-center transition-colors border border-[#38BDF8]/30"
                aria-label="LinkedIn institucional"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a onClick={(e) => e.preventDefault()}
                href="#"
                className="w-10 h-10 rounded-full bg-[#0284C7] text-white hover:bg-[#0369A1] flex items-center justify-center transition-colors shadow-md"
                aria-label="WhatsApp directo"
              >
                <MessageCircle className="w-4 h-4 text-[#BAE6FD]" />
              </a>
            </div>
          </div>

          {/* Col 2: Contact details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.18em] font-bold text-[#38BDF8] mb-4">
              Contacto
            </h4>
            <ul className="space-y-3 text-[13.5px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a onClick={(e) => e.preventDefault()}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_INFO.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Horarios */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.18em] font-bold text-[#38BDF8] mb-4">
              Horarios de atención
            </h4>
            <div className="space-y-2 text-[13.5px]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Lunes a viernes</p>
                  <p className="text-[#BAE6FD]">8:30 a 19:30</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Sábados</p>
                  <p className="text-[#BAE6FD]">9:00 a 13:00</p>
                </div>
              </div>
              <p className="text-[12px] text-[#7DD3FC] pt-2">
                Guardia activa para urgencias odontológicas.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Sub-footer / Copyright (Fondo Negro) */}
      <div className="bg-black text-zinc-400 py-6 border-t border-zinc-900 mt-12 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-center md:text-left">
          <p className="text-zinc-500 text-[11px] sm:text-xs">
            © {currentYear} {CLINIC_INFO.name}. Web de un consultorio ficticio.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <span className="text-[11px] text-zinc-500 hidden lg:inline-block">
              Dirección Técnica: Dra. Valentina Ruiz
            </span>
            
            <span className="hidden lg:inline-block w-1 h-1 rounded-full bg-zinc-700" />
            
            <a 
              href="https://www.huellaonline.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              <span className="text-[10.5px] sm:text-[11px] text-zinc-400">
                desarrollado por
              </span>
              <div className="inline-flex items-center gap-1 font-bold text-[10.5px] sm:text-[11px] tracking-wider">
                <Image 
                  src="/logos/huellaonline.svg" 
                  alt="Huella Online" 
                  width={18} 
                  height={18} 
                  className="h-3.5 w-auto inline-block"
                />
                <span>
                  <span className="text-white font-bold">HUELLA</span>
                  <span style={{ color: "#ffa500" }} className="font-bold">ONLINE</span>
                </span>
              </div>
            </a>

            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-zinc-700" />

            <Link
              href="#inicio"
              className="inline-flex items-center gap-1 hover:text-zinc-300 transition-colors text-zinc-500"
              aria-label="Volver arriba"
            >
              <span>Subir</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
