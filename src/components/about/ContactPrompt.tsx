"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ContactPrompt() {
  return (
    <section className="py-24 bg-zinc-900 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-white leading-none">
            CONTACT <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>+</span> US
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Ready to start your next technical project? Let's build something extraordinary together.
          </p>
          <div className="pt-8">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:bg-orange-500 hover:text-white transition-all duration-500 group"
            >
              Get In Touch
              <div className="w-6 h-6 bg-zinc-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
