"use client";

import { motion } from "framer-motion";
import { Quote, MessageSquare } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content: "Flowen has helped us save hours of manual reporting each week. Truly a game-changer.",
    author: "Bryan Raymond",
    role: "CFO at Nexora",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    content: "With Flowen, we automate every aspect of our financial operations. It's simply brilliant.",
    author: "David Klein",
    role: "Founder of Payzen",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    content: "Flowen helped us reduce reporting from hours to minutes. Now we can finally focus on growth.",
    author: "Adam Thompson",
    role: "COO at Finora",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-[400px,1fr] gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full border border-orange-100">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                <MessageSquare className="text-white" size={12} />
              </div>
              <span className="text-sm font-medium text-zinc-900">Testimonial</span>
            </div>

            <h2 className="text-5xl font-semibold leading-tight text-zinc-900">
              Loved By <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Teams</span> <br />
              Worldwide
            </h2>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-sm">
              Thousands of businesses trust Flowen to simplify financial management and accelerate growth.
            </p>

            <button className="bg-black text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-zinc-800 transition-all shadow-lg shadow-black/10">
              Discover <span className="text-zinc-400 font-normal ml-1">- More Stories</span>
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0 w-[350px] aspect-[4/5] rounded-[2.5rem] overflow-hidden group snap-center"
              >
                {/* Background Image */}
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Content Card */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white p-6 rounded-[2rem] shadow-xl relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-6 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/30">
                      <Quote size={20} fill="currentColor" />
                    </div>

                    <p className="text-zinc-900 font-medium leading-relaxed mb-6 pt-4">
                      {testimonial.content}
                    </p>

                    <div className="space-y-1">
                      <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                        <span className="w-4 h-[2px] bg-zinc-200" /> {testimonial.author}
                      </h4>
                      <p className="text-zinc-500 text-sm pl-6">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
