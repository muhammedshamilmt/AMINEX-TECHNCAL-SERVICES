"use client";

import Image from "next/image";
import { Play, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative pt-44 pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Text Content */}
        <div className="text-center mb-16 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-semibold tracking-tight leading-[1.1] text-zinc-900 px-4"
          >
            Engineering The Future <br />
            Of Modern <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl mx-auto text-base md:text-lg text-zinc-500 leading-relaxed px-6"
          >
            We build the backbone of your business connectivity and systems.<br className="hidden md:block" />

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-8"
          >
            <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
              View Solutions <span className="text-zinc-400 font-normal ml-1">- Expertly Done</span>
            </button>
            <button className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all">
              <Play size={18} className="fill-zinc-900" /> Watch Portfolio
            </button>
          </motion.div>
        </div>

        {/* Hero Image & Cards */}
        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <div className="aspect-[4/3] md:aspect-[17/9] relative">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
                alt="Modern Infrastructure Solutions"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card 1: System Uptime */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden lg:block absolute bottom-12 left-8 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl w-72 text-white"
            >
              <p className="text-zinc-400 text-sm font-medium mb-2">System Uptime</p>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-4xl font-bold tracking-tight">99.9%</h3>
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-white" size={16} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1.5 rounded-full">Active</span>
                <span className="text-zinc-400 text-sm">24/7 Monitoring</span>
              </div>
            </motion.div>

            {/* Floating Card 2: Support Response */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="hidden lg:block absolute top-12 right-12 bg-white/20 backdrop-blur-2xl border border-white/30 p-4 px-6 rounded-3xl shadow-2xl flex items-center gap-4 text-white"
            >

              <div className="flex gap-1.5 items-end h-8">
                <div className="w-2 h-4 bg-orange-500/40 rounded-full" />
                <div className="w-2 h-6 bg-orange-500/70 rounded-full" />
                <div className="w-2 h-8 bg-orange-500 rounded-full" />
              </div>
              <span className="text-3xl font-bold">15m</span>
            </motion.div>

            {/* Play Button Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform group shadow-2xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-zinc-100 transition-colors">
                  <Play size={24} className="fill-orange-500 text-orange-500 ml-1" />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
