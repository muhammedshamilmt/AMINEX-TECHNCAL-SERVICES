import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { HowWeWork } from "@/components/HowWeWork";
import { SmartAutomation } from "@/components/SmartAutomation";
import { ServicesSection } from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <HowWeWork />
      <SmartAutomation />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
