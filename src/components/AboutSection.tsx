"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, PieChart, ArrowRight, FileText } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      title: "Live Insights",
      description: "View real-time financial metrics across all business units in one place.",
      icon: <Sparkles className="w-6 h-6 text-white" />,
      color: "bg-zinc-900"
    },
    {
      title: "Secure Platform",
      description: "Advanced encryption keeps your data safe and compliant with enterprise.",
      icon: <Shield className="w-6 h-6 text-white" />,
      color: "bg-zinc-900"
    },
    {
      title: "Smart Budgeting",
      description: "AI forecasts expenses and optimizes spending to help you save more.",
      icon: <PieChart className="w-6 h-6 text-white" />,
      color: "bg-zinc-900"
    }
  ];

  return (
    <section className="pt-0 pb-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-20 pt-8 text-center"
        >
          <p className="text-sm font-medium text-zinc-400 mb-10 tracking-wide uppercase">Trusted by leading companies around the world</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-2xl font-bold tracking-tighter">slack</span>
             <span className="text-2xl font-bold tracking-tighter">Xiaomi</span>
             <span className="text-2xl font-bold tracking-tighter italic">HubSpot</span>
             <span className="text-2xl font-bold tracking-tighter">Walmart<span className="text-orange-500">*</span></span>
             <span className="text-2xl font-bold tracking-tighter">Spotify</span>
          </div>
        </motion.div>

        {/* About Header */}
        <div className="flex flex-col lg:flex-row gap-12 mb-20">
          <div className="lg:w-3/5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-zinc-900"
            >
              <div className="w-5 h-5 bg-orange-500 rounded-md flex items-center justify-center">
                <FileText size={12} className="text-white" />
              </div>
              About us
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-900"
            >
              Empowers Businesses <br />
              To <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Manage</span> And <br />
              Grow Their <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Finances.</span>
            </motion.h2>
          </div>

          <div className="lg:w-2/5 flex flex-col justify-end space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <p className="text-lg text-zinc-500 leading-relaxed">
                Flowen helps you make smarter decisions with automated budgeting, forecasting, and analysis.
              </p>
              <p className="text-lg font-semibold text-zinc-900 leading-relaxed">
                From expense tracking to AI-driven financial forecasting, Flowen centralizes your entire workflow — empowering teams to make faster, data-backed decisions and scale confidently.
              </p>
              
              <button className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all flex items-center gap-2 group w-fit">
                Learn more <span className="text-zinc-400 font-normal">- Let's go.</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative mb-24">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Grainy/Glowy Icon Container */}
              <div className="relative w-48 h-48 mx-auto mb-4 flex items-center justify-center">
                {/* Large Grainy Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-zinc-900 opacity-[0.08] blur-2xl" />
                  <div 
                    className="absolute inset-0 rounded-full opacity-20 mix-blend-multiply"
                    style={{ 
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                      maskImage: 'radial-gradient(circle, black 0%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 70%)'
                    }}
                  />
                </div>
                {/* Icon Circle */}
                <div className="relative w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center z-10 shadow-lg group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-4">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed px-4">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
