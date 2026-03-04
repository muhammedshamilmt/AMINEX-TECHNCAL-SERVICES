import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { HowWeWork } from "@/components/HowWeWork";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutSection />
      <HowWeWork />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
