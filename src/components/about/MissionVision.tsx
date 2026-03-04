"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function MissionVision() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                alt="Team Collaboration"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative floaty elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-zinc-200 rounded-full blur-3xl opacity-30 animate-pulse" />
          </motion.div>
          
          <div className="space-y-12 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Our Philosophy
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed mb-6">
                At our core, we believe that technology should be an enabler, not a barrier. 
                Our team focuses on creating seamless integration between different technical 
                systems to provide a cohesive experience for our clients.
              </p>
              <p className="text-zinc-500 leading-relaxed">
                We believe in transparency, innovation, and long-term partnerships. Every project 
                we undertake is an opportunity to push the boundaries of what's possible in 
                technical infrastructure and smart automation.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Our Mission</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  To empower businesses through cutting-edge ELV and ICT solutions that drive growth.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-zinc-900/20">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Our Vision</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  To be the global leader in technical services and smart automation.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
