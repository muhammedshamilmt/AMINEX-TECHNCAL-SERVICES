"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function HowWeWork() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Feature 1: Everything You Need To Grow */}
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
<div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
<motion.div 
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-zinc-900"
>
<div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
<Heart size={10} className="text-white fill-white" />
</div>
How we work
</motion.div>

  <motion.h2 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-900"
  >
  Precision <br />
  <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Engineering</span> In Every Detail
  </motion.h2>

<motion.p 
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.1 }}
className="text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg"
>
We follow a rigorous methodology to ensure every system is designed, implemented, and maintained to the highest industry standards. Precision is not just our goal; it's our baseline.
</motion.p>

<motion.button 
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6, delay: 0.2 }}
className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all shadow-lg"
>
Get a Consultation <span className="text-zinc-400 font-normal">- Expert Advice</span>
</motion.button>
</div>

<div className="w-full lg:w-1/2 relative order-1 lg:order-2">
<motion.div
initial={{ opacity: 0, scale: 0.95 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
className="relative aspect-square md:aspect-[4/3.5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
>
<Image 
src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1976&auto=format&fit=crop"
alt="Technical Engineer Working"
fill
className="object-cover"
/>
</motion.div>

{/* Floating Card: System Efficiency */}
<motion.div
initial={{ opacity: 0, x: 20, y: 20 }}
whileInView={{ opacity: 1, x: 0, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8, delay: 0.4 }}
className="absolute md:absolute top-[80%] md:top-1/2 -left-4 md:-left-16 bg-white rounded-2xl p-4 md:p-5 shadow-2xl border border-zinc-100 w-56 md:w-72 z-10"
>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#f3f4f6"
                      strokeWidth="8"
                      fill="transparent"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#f97316"
                      strokeWidth="8"
                      strokeDasharray="150.796"
                      strokeDashoffset="15"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-zinc-900 leading-tight">System Efficiency</p>
                  <p className="text-[10px] text-zinc-400 font-medium">Performance Index</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-50 pt-4">
                <div>
                  <p className="text-2xl font-bold text-zinc-900">High Demand</p>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold mt-1">
                    <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <ArrowUpRight size={8} strokeWidth={3} />
                      Optimized
                    </span>
                    <span className="text-zinc-400">All Nodes Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
