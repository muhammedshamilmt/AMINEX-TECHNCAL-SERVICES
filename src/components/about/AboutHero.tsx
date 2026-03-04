"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutHero() {
  return (
    <section className="pt-32 pb-1 md:pt-48 md:pb-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-none text-zinc-900 mb-8 md:mb-12"
          >
            ABOUT <br /> US
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-md pb-4 md:pb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-zinc-900 mb-6">
                Premium Technical Solutions
              </div>
              <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-medium">
                We are a team of dedicated professionals committed to delivering 
                <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}> excellence</span> through 
                innovation and technical expertise across ELV, ICT, and Automation sectors.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden "
            >
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Office"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
