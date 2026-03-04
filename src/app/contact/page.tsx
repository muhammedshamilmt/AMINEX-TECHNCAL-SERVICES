"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  MessageSquare,
  Clock,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { useState, useRef, useEffect } from "react";

export default function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select a subject...");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjects = [
    "General Inquiry",
    "Service Quote", 
    "Technical Support",
    "Business Partnership"
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main className="min-h-screen bg-white pt-24">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-zinc-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.05),transparent_40%)]" />
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] uppercase tracking-wider font-bold text-orange-600 mb-6"
            >
              Contact Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.05] mb-8"
            >
              Let's Start a <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Conversation</span> <br /> About Your Success
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-2xl"
            >
              Our team of experts is ready to help you navigate your technical challenges. Reach out today for a personalized consultation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[3rem] border border-zinc-100 p-8 md:p-12 shadow-2xl shadow-zinc-200/50"
            >
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Send us a message</h2>
                  <p className="text-zinc-500">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-zinc-900 ml-1">Full Name</label>
                      <input 
                        id="name"
                        type="text" 
                        placeholder="John Doe"
                        className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-zinc-900 ml-1">Email Address</label>
                      <input 
                        id="email"
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-bold text-zinc-900 ml-1">Subject</label>
                    <div className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-left flex items-center justify-between"
                      >
                        <span className={selected === "Select a subject..." ? "text-zinc-400 font-medium" : "text-zinc-900 font-medium"}>
                          {selected}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isOpen && (
                        <div className="absolute z-10 w-full mt-2 bg-white border border-zinc-200 rounded-2xl shadow-lg overflow-hidden">
                          {subjects.map((subject) => (
                            <button
                              key={subject}
                              type="button"
                              onClick={() => {
                                setSelected(subject);
                                setIsOpen(false);
                              }}
                              className="w-full px-6 py-3 text-left text-zinc-700 hover:bg-orange-50 hover:text-orange-600 transition-colors font-medium"
                            >
                              {subject}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-zinc-900 ml-1">Your Message</label>
                    <textarea 
                      id="message"
                      rows={6}
                      placeholder="Tell us about your project or requirements..."
                      className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <button className="w-full py-5 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-xl shadow-zinc-200">
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Info Column */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Direct Contact</h2>
                  <p className="text-zinc-500 leading-relaxed">Prefer a direct line of communication? Reach out through any of our official channels below.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-[2rem] bg-orange-50/50 border border-orange-100 space-y-4 hover:bg-orange-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Email Us</h4>
                      <p className="text-zinc-500 text-sm">info@aminex.com</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 space-y-4 hover:bg-blue-50 transition-colors cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">Call Us</h4>
                      <p className="text-zinc-500 text-sm">+971 4 000 0000</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 flex items-start gap-6 group hover:border-zinc-200 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-900 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-zinc-900">Our Location</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">Aminex Business Center, Level 15, Tech Tower,<br />Dubai, United Arab Emirates</p>
                    <button className="text-orange-600 font-bold text-xs inline-flex items-center gap-2 mt-2 hover:gap-3 transition-all">
                      Open in Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50/50">
                    <Clock className="w-5 h-5 text-zinc-400" />
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Business Hours</p>
                      <p className="text-sm font-medium text-zinc-900">Mon - Fri: 9AM - 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50/50">
                    <MessageSquare className="w-5 h-5 text-zinc-400" />
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Response Time</p>
                      <p className="text-sm font-medium text-zinc-900">Under 24 Hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
