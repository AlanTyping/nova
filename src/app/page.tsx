import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TreatmentsSection from "@/components/TreatmentsSection";
import InteractiveAppointmentBuilder from "@/components/InteractiveAppointmentBuilder";
import DifferentialsSection from "@/components/DifferentialsSection";
import AboutSection from "@/components/AboutSection";
import PremiumAuthoritySection from "@/components/PremiumAuthoritySection";
import TeamSection from "@/components/TeamSection";
import InsurancesSection from "@/components/InsurancesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import MobileQuickBar from "@/components/MobileQuickBar";
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

      {/* Interactive Turno Express in 3 Steps */}
      <InteractiveAppointmentBuilder />

      {/* Philosophy & Differentials */}
      <DifferentialsSection />

      {/* About the Clinic & Experience Spaces */}
      <AboutSection />

      {/* Premium Authority & Technology Showcase */}
      <PremiumAuthoritySection />

      {/* Medical Team & Specialists */}
      <TeamSection />

      {/* Health Insurances & Prepagas */}
      <InsurancesSection />

      {/* Authentic Patient Testimonials */}
      <TestimonialsSection />

      {/* Frequently Asked Questions with Category Filters */}
      <FAQSection />

      {/* Local Palermo Location, Maps & Hours */}
      <LocationSection />

      {/* Final Conversion Action */}
      <FinalCTASection />

      {/* Institutional Footer */}
      <Footer />

      {/* Desktop Floating WhatsApp Support */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar />
    </main>
  );
}
