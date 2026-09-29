"use client";

import { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (viewport height)
      setIsVisible(window.scrollY > window.innerHeight - 80);
    };
    
    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      {/* Button */}
      <a
        href={CLINIC_INFO.getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white px-5 py-3 rounded-xl shadow-[0_8px_25px_rgba(2,132,199,0.4)] hover:shadow-[0_10px_30px_rgba(2,132,199,0.5)] transition-all duration-300 active:scale-95"
        aria-label="Abrir chat de WhatsApp"
      >
        <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="text-[14px] font-bold">Solicitar turno</span>
      </a>
    </div>
  );
}
