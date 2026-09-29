"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle, Menu, X, MapPin, Phone, Clock } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Transition when scrolled past the hero section (viewport height)
      setIsScrolled(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Tratamientos", href: "#tratamientos" },
    { name: "Equipo", href: "#equipo" },
    { name: "Coberturas", href: "#cobertura" },
    { name: "Reseñas", href: "#testimonios" },
    { name: "FAQ", href: "#faq" },
    { name: "Ubicación", href: "#ubicacion" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="#inicio"
            className="group flex flex-col focus:outline-none"
            aria-label="Clínica Dental Nova - Inicio"
          >
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? "text-[#0F172A] group-hover:text-[#0284C7]" : "text-white group-hover:text-gray-200"
            }`}>
              NOVA
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-medium transition-colors ${
              isScrolled ? "text-[#64748B]" : "text-gray-300"
            }`}>
              Clínica Dental
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-gray-200 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a onClick={(e) => e.preventDefault()}
              href="#"
              className={`inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors ${
                isScrolled ? "bg-[#0F172A] hover:bg-[#1E293B] text-white" : "bg-white text-[#0F172A] hover:bg-gray-100"
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a onClick={(e) => e.preventDefault()}
              href="#"
              className={`sm:hidden inline-flex items-center justify-center p-2.5 rounded-xl ${
                isScrolled ? "bg-[#0F172A] text-white" : "bg-white text-[#0F172A]"
              }`}
              aria-label="WhatsApp turno"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-[#0F172A]" : "text-white"
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#0F172A]/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <div>
                  <div className="text-lg font-bold tracking-tight text-[#0F172A]">
                    NOVA
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#475569]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="flex flex-col gap-2 py-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#475569] hover:text-[#0F172A] py-3 border-b border-gray-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom contact info */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#0F172A] text-white text-sm font-semibold py-3.5 rounded-xl"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Agendar Turno</span>
              </a>

              <div className="text-xs text-[#64748B] space-y-3 pt-4">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {CLINIC_INFO.location}
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {CLINIC_INFO.phone}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Lun a Vie 8:30 - 19:30
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
