"use client";

import { motion } from "framer-motion";

export function GlobalReach() {
  const stats = [
    { label: "Successful Projects", value: "500+" },
    { label: "Expert Professionals", value: "120+" },
    { label: "Global Locations", value: "15" },
    { label: "Quality Standards", value: "ISO" },
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 1000 500" className="w-full h-full text-white" fill="currentColor">
          <circle cx="200" cy="150" r="2" />
          <circle cx="300" cy="120" r="2" />
          <circle cx="450" cy="180" r="2" />
          <circle cx="600" cy="130" r="2" />
          <circle cx="750" cy="250" r="2" />
          <circle cx="850" cy="160" r="2" />
          <circle cx="150" cy="300" r="2" />
          <circle cx="400" cy="350" r="2" />
          <circle cx="650" cy="380" r="2" />
          <circle cx="800" cy="320" r="2" />
          <circle cx="500" cy="220" r="3" fill="#f97316" />
          <circle cx="250" cy="180" r="1.5" />
          <circle cx="700" cy="120" r="1.5" />
          <circle cx="900" cy="280" r="1.5" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center md:text-left space-y-4"
            >
              <div className="text-5xl md:text-7xl font-bold text-orange-500 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
