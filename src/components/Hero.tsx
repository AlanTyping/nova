import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import PreventDefaultLink from "./PreventDefaultLink";

import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-end pt-20 pb-28 sm:pb-16 lg:pb-20 overflow-hidden">

      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 clip-path-hero">
        <div className="fixed inset-0 w-full h-screen">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1920&q=85"
            alt="Consultorio odontológico en Palermo"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Subtle dark overlay for the right side of the image */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>

      {/* Dissipating White Wave Background for Text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full w-[200%] sm:w-[150%] lg:w-[110%]"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="fadeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.95" />
              <stop offset="85%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,15 C20,15 45,25 55,50 C62,70 65,90 75,100 L0,100 Z"
            fill="url(#fadeGradient)"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-start text-left mb-4">

        {/* Main Headline */}
        <AnimatedSection delay={0}>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[76px] font-normal leading-[1.1] text-[#0F172A] mb-6 max-w-2xl">
            Odontología <span className="italic text-[#0284C7]">integral</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection delay={150}>
          <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-xl mb-10">
            Cuidamos tu sonrisa con tecnología de vanguardia. Un espacio profesional diseñado para tu bienestar.
          </p>
        </AnimatedSection>

        {/* CTAs */}
        <AnimatedSection delay={300}>
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <PreventDefaultLink
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-[16px] font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar Turno</span>
            </PreventDefaultLink>

            <Link
              href="#tratamientos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-[#475569] hover:text-[#0F172A] text-[15px] font-medium transition-all duration-300 group"
            >
              <span className="border-b border-[#94A3B8] group-hover:border-[#0F172A] transition-colors pb-0.5">Ver Tratamientos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Minimalist Static Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-70">
        <ChevronDown className="w-8 h-8 text-[#0F172A] sm:text-white" />
      </div>
    </section>
  );
}
