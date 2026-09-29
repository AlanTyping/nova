import { TESTIMONIALS } from "@/data/clinicData";
import { Star } from "lucide-react";

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E0F2FE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-normal leading-tight text-[#0F172A] mb-5">
            La experiencia de{" "}
            <span className="italic text-[#0284C7]">nuestros pacientes</span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] font-normal leading-relaxed">
            La confianza de quienes nos eligen día a día en Palermo es nuestro mayor compromiso de calidad y calidez médica.
          </p>
        </div>

        {/* Google Maps Style Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, index) => {
            const timeAgo = index === 0 ? "hace 2 semanas" : index === 1 ? "hace 1 mes" : "hace 3 meses";
            const reviewsCount = 15 + index * 12;
            const bgColors = ["bg-purple-600", "bg-teal-600", "bg-orange-500"];
            const avatarBg = bgColors[index % bgColors.length];
            const initials = item.author.split(" ").map(n => n[0]).join("").substring(0, 2).toUpperCase();

            return (
              <div
                key={item.id}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col relative"
              >
                {/* Header: Avatar, Name, Google Icon */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-lg ${avatarBg}`}>
                      {initials}
                    </div>
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#202124] leading-tight font-sans">
                        {item.author}
                      </h3>
                      <p className="text-[12px] text-[#70757a] mt-0.5 font-sans">
                        Local Guide · {reviewsCount} opiniones
                      </p>
                    </div>
                  </div>
                  {/* Google Icon */}
                  <div className="pt-0.5">
                    <GoogleIcon />
                  </div>
                </div>

                {/* Stars and Time */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <span className="text-[12px] text-[#70757a] font-sans">
                    {timeAgo}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[14px] text-[#202124] leading-relaxed mb-4 font-sans flex-1">
                  {item.quote.replace(/^[“"]|[”"]$/g, "")}
                </p>

                {/* Treatment pill */}
                <div className="mt-auto pt-4 border-t border-[#f1f3f4] flex items-center gap-2">
                  <span className="text-[11px] font-medium text-[#1a73e8] bg-[#e8f0fe] px-2.5 py-1 rounded-md font-sans">
                    {item.treatment}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
