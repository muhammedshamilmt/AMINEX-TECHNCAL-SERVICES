"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Heart, Target } from "lucide-react";

export function CoreValues() {
  const values = [
    {
      title: "Innovation",
      description: "Continuously improving technical solutions for maximum performance.",
      icon: <Zap className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all we do.",
      icon: <Shield className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Customer-Centric",
      description: "Tailoring solutions to meet the unique needs and energy goals of each client.",
      icon: <Target className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Quality",
      description: "Engineered to perform consistently and reliably in real-world conditions.",
      icon: <Heart className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <section className="py-24 bg-zinc-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{value.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
