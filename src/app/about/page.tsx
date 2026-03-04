"use client";

import { Navbar } from "@/components/layout/Navbar";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionVision } from "@/components/about/MissionVision";
import { CoreValues } from "@/components/about/CoreValues";
import { GlobalReach } from "@/components/about/GlobalReach";
import { Leadership } from "@/components/about/Leadership";
import { ContactPrompt } from "@/components/about/ContactPrompt";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <GlobalReach />
        <Leadership />
        <ContactPrompt />
      </motion.div>
      
      <Footer />
    </main>
  );
}
