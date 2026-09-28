"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, Menu, X, Phone, Clock, MapPin, Sparkles } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Tratamientos", href: "#tratamientos" },
    { name: "Turno Express", href: "#turno-express" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Equipo", href: "#equipo" },
    { name: "Cobertura", href: "#cobertura" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Top Clinical Bar with Sky Blue Accents */}
      <div className="bg-[#0A2638] text-[#E0F2FE] text-[12px] py-1.5 px-4 hidden md:block border-b border-[#0EA5E9]/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#BAE6FD]">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              {CLINIC_INFO.location}
            </span>
            <span className="flex items-center gap-1.5 text-[#BAE6FD]">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              Lun a Vie: 8:30 - 19:30 | Sáb: 9:00 - 13:00
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#0284C7]/30 text-[#7DD3FC] text-[11px] font-medium border border-[#38BDF8]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
              Guardia & Urgencias
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors text-[#E0F2FE]"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="font-medium">{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(2,132,199,0.06)] py-3 border-b border-[#BAE6FD]/80"
            : "bg-white py-4.5 border-b border-[#E0F2FE]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Dental Celeste Mark */}
          <Link
            href="#inicio"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Clínica Dental Nova - Inicio"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E0F2FE] via-[#BAE6FD] to-[#38BDF8] flex items-center justify-center text-[#0284C7] shadow-xs group-hover:scale-105 transition-transform border border-[#7DD3FC]/50">
              <Sparkles className="w-5 h-5 text-[#0369A1]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[18.5px] font-semibold tracking-[0.12em] uppercase text-[#0A2638] group-hover:text-[#0284C7] transition-colors">
                Clínica Dental Nova
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase text-[#0284C7] font-medium -mt-0.5">
                Palermo · Odontología de Avanzada
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[14px] font-medium text-[#334155] hover:text-[#0284C7] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#0EA5E9] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CLINIC_INFO.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-[13.5px] font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_4px_14px_rgba(2,132,199,0.3)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.4)] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#BAE6FD]" />
              <span>Solicitar turno</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={CLINIC_INFO.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center p-2.5 bg-[#0284C7] text-white rounded-full shadow-md active:scale-95"
              aria-label="WhatsApp turno"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0A2638] hover:bg-[#F0F9FF] rounded-lg transition-colors focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0284C7]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#0A2638]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-[84%] max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-in border-l border-[#BAE6FD]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E0F2FE]">
                <div>
                  <div className="text-[16px] font-bold tracking-[0.14em] uppercase text-[#0A2638]">
                    Clínica Dental Nova
                  </div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-[#0284C7] font-semibold">
                    Palermo · CABA
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#475569] hover:bg-[#F0F9FF] rounded-full transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-5 h-5 text-[#0284C7]" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="flex flex-col gap-3 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[15.5px] font-medium text-[#334155] hover:text-[#0284C7] hover:translate-x-1.5 transition-all py-2 border-b border-[#F0F9FF] flex items-center justify-between"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#38BDF8]">›</span>
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom contact info in drawer */}
            <div className="pt-6 border-t border-[#E0F2FE] space-y-4">
              <a
                href={CLINIC_INFO.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white text-[14px] font-semibold py-3.5 rounded-full shadow-[0_4px_14px_rgba(2,132,199,0.3)]"
              >
                <MessageCircle className="w-4 h-4 text-[#BAE6FD]" />
                <span>Solicitar turno por WhatsApp</span>
              </a>

              <div className="text-[12.5px] text-[#64748B] space-y-2 pt-2">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  {CLINIC_INFO.location}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  {CLINIC_INFO.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                  Lun a Vie 8:30 - 19:30 | Sáb 9:00 - 13:00
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
