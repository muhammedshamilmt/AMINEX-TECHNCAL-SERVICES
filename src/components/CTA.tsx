"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-[#0c0c0c] min-h-[500px] flex flex-col items-center justify-center text-center p-8 sm:p-16"
        >
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_50%,rgba(194,65,12,0.15),transparent_50%)]" />
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_50%,rgba(255,255,255,0.07),transparent_50%)]" />
              <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_0%_100%,rgba(194,65,12,0.1),transparent_70%)]" />
            </div>

          <div className="relative z-10 max-w-4xl space-y-8">
            {/* Badge */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-zinc-300 text-sm font-medium">
                <div className="w-5 h-5 bg-zinc-800 rounded-full flex items-center justify-center">
                  <Sparkles size={12} className="text-zinc-400" />
                </div>
                Get started
              </div>
            </div>

                {/* Heading */}
<h2 className="text-3xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
Ready <span className="text-orange-500 italic font-medium" style={{ fontFamily: "'Instrument Serif', serif" }}>To Future-Proof</span> Your <br className="hidden md:block" />
Technical Infrastructure?
</h2>


            {/* Subtext */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Leverage our expertise in ELV, ICT, and automation to build a <br className="hidden md:block" />
              more resilient and efficient business environment with Aminex.
            </p>

            {/* Button */}
            <div className="pt-4">
              <button className="bg-white text-zinc-950 px-10 py-5 rounded-full text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                Get a Free Consultation <span className="text-zinc-500 font-normal ml-1">- Contact Us</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
