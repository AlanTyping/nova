import { TESTIMONIALS } from "@/data/clinicData";
import { Star, Sparkles, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] font-bold text-[#0284C7] mb-3 bg-[#F0F9FF] px-3.5 py-1 rounded-full border border-[#BAE6FD]">
            <Sparkles className="w-3.5 h-3.5 text-[#0EA5E9]" />
            Opiniones Reales
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight text-[#0F172A] mb-5">
            La experiencia de{" "}
            <span className="italic text-[#0284C7]">nuestros pacientes</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            La confianza de quienes nos eligen día a día en Palermo es nuestro mayor compromiso de calidad y calidez médica.
          </p>
        </div>

        {/* Sophisticated Editorial Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] hover:border-[#38BDF8] flex flex-col justify-between relative shadow-xs hover:shadow-[0_10px_30px_rgba(2,132,199,0.1)] transition-all duration-300"
            >
              <div>
                {/* Subtle rating stars & Treatment pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#0284C7]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#0284C7] text-[#0284C7]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0284C7] bg-[#E0F2FE] px-3 py-1 rounded-full border border-[#BAE6FD]">
                    {item.treatment}
                  </span>
                </div>

                {/* Quote text */}
                <p className="font-serif text-lg sm:text-[19px] text-[#0F172A] leading-relaxed italic mb-8 font-normal">
                  “{item.quote.replace(/^[“"]|[”"]$/g, "")}”
                </p>
              </div>

              {/* Author details */}
              <div className="pt-4 border-t border-[#F1F5F9] flex items-center justify-between">
                <div>
                  <h3 className="text-[15px] font-bold text-[#0F172A]">
                    — {item.author}
                  </h3>
                  <p className="text-[12px] text-[#64748B]">{item.detail}</p>
                </div>
                <span className="text-[11px] font-semibold text-[#0284C7] bg-[#F0F9FF] px-2.5 py-1 rounded-md border border-[#BAE6FD]">
                  Palermo
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
