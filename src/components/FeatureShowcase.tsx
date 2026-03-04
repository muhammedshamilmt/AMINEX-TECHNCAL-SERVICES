"use client";

import { motion } from "framer-motion";
import { Check, Settings, Layout, BarChart3, PieChart, ArrowUpRight, FolderOpen, Heart } from "lucide-react";
import Image from "next/image";

export function FeatureShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Feature 1: Everything You Need To Grow */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-40">
          <div className="lg:w-1/2 space-y-8">
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
              className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-900"
            >
              Everything You <br />
              <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Need</span> To Grow
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-zinc-500 leading-relaxed max-w-lg"
            >
              Flowen helps you make smarter decisions with automated budgeting, forecasting, and analysis. Streamline your financial process and make data-driven decisions that matter.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all shadow-lg"
            >
              Get Started <span className="text-zinc-400 font-normal">- It's Free</span>
            </motion.button>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3.5] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                alt="Business professional thinking"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Card: Budget Allocation */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 -left-8 md:-left-16 bg-white rounded-2xl p-5 shadow-2xl border border-zinc-100 w-64 md:w-72"
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
                      strokeDashoffset="37.7"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="24"
                      stroke="#fcd34d"
                      strokeWidth="8"
                      strokeDasharray="150.796"
                      strokeDashoffset="113.1"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white shadow-sm" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-zinc-900 leading-tight">Budget Allocation</p>
                  <p className="text-[10px] text-zinc-400 font-medium">2025=2026</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-50 pt-4">
                <div>
                  <p className="text-2xl font-bold text-zinc-900">$1,478k</p>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold mt-1">
                    <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <ArrowUpRight size={8} strokeWidth={3} />
                      35.8%
                    </span>
                    <span className="text-zinc-400">vs last year</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature 2: Let's Simplify Your Workflow */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-zinc-900"
            >
              <div className="w-5 h-5 bg-orange-500 rounded flex items-center justify-center">
                <FolderOpen size={10} className="text-white fill-white" />
              </div>
              Smart Automation
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-900"
            >
              Let's <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Simplify</span> Your <br />
              Workflow
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-zinc-500 leading-relaxed max-w-lg"
            >
              Automate reports, visualize performance, and stay ahead with Flowen's integrated tools designed to make financial management effortless and effective.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all shadow-lg"
            >
              Discover <span className="text-zinc-400 font-normal">- how it works</span>
            </motion.button>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3.5] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                alt="Developer working on laptop"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Floating Card: Automated Reports */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/2 -right-8 md:-right-16 bg-white rounded-2xl p-6 shadow-2xl border border-zinc-100 w-72 md:w-80"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Smart Automation</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-zinc-900 leading-tight">Automated Reports Generated</p>
                </div>
                <div className="flex items-end gap-5">
                  <div className="flex-1 flex items-end gap-1.5 h-16 bg-zinc-50/50 p-2 rounded-lg">
                    <div className="flex-1 bg-orange-200 rounded-sm" style={{ height: '40%' }} />
                    <div className="flex-1 bg-orange-300 rounded-sm" style={{ height: '60%' }} />
                    <div className="flex-1 bg-orange-500 rounded-sm" style={{ height: '100%' }} />
                    <div className="flex-1 bg-orange-400 rounded-sm" style={{ height: '80%' }} />
                    <div className="flex-1 bg-orange-200 rounded-sm" style={{ height: '50%' }} />
                  </div>
                  <div className="shrink-0 text-right pb-1">
                    <p className="text-2xl font-bold text-zinc-900 leading-none">$3,598k</p>
                    <div className="flex flex-col items-end gap-1 mt-2">
                      <span className="text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded text-[9px] font-bold flex items-center gap-0.5 w-fit">
                        <ArrowUpRight size={8} strokeWidth={3} />
                        45.10%
                      </span>
                      <span className="text-zinc-400 text-[8px] font-medium leading-tight">Efficiency vs <br />manual process</span>
                    </div>
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
