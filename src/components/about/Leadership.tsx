"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Leadership() {
  const leaders = [
    {
      name: "Jay Britto",
      role: "Founder and Principal",
      bio: "With over 20 years of experience in system architecture and technical management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "David Charette",
      role: "Founder and Principal",
      bio: "Leading our innovation lab and ensuring high-quality standards across all projects.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Meet The Principals
          </h2>
          <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Our leadership team brings decades of combined experience in ELV, ICT, and high-end technical integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-10 shadow-2xl">
                <Image 
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-zinc-900 mb-2">{leader.name}</h3>
                  <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm">{leader.role}</p>
                </div>
                <p className="text-zinc-500 leading-relaxed max-w-md">
                  {leader.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
