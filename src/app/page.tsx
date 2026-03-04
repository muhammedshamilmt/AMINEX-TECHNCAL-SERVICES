import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeatureShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
