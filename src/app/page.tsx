import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TreatmentsSection from "@/components/TreatmentsSection";
import TeamSection from "@/components/TeamSection";
import InsurancesSection from "@/components/InsurancesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      {/* Navigation Header */}
      <Header />

      {/* Main Hero Showcase */}
      <Hero />

      {/* Comprehensive Treatments Specialty Section */}
      <TreatmentsSection />

      {/* Medical Specialists Team */}
      <TeamSection />

      {/* Health Insurances & Prepagas */}
      <InsurancesSection />

      {/* Authentic Patient Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Local Palermo Location, Maps & Hours */}
      <LocationSection />

      {/* Institutional Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Support */}
      <FloatingWhatsApp />
    </main>
  );
}
