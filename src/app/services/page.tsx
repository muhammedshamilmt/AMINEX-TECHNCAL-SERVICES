"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Network, 
  Tv, 
  Code, 
  Cpu, 
  Wrench,
  Activity,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";

const services = [
    {
      title: "ELV System Solutions",
      slug: "elv-system-solutions",
      tagline: "Total Security & Protection",
      description: "Our Extra Low Voltage (ELV) solutions provide a comprehensive framework for security and communication. From advanced CCTV surveillance to intelligent fire alarm systems and access control, we ensure your infrastructure is protected by the latest in security technology.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
      features: ["CCTV Surveillance", "Access Control Systems", "Fire Alarm & Safety", "Public Address Systems"],
      color: "bg-orange-50",
      hoverBg: "bg-orange-100/50",
      textColor: "text-orange-600"
    },
    {
      title: "ICT Solutions",
      slug: "ict-solutions",
      tagline: "Infrastructure for the Future",
      description: "We design and implement robust ICT infrastructures that serve as the backbone for modern business operations. Our solutions include high-performance networking, secure server management, and enterprise-grade IT support to keep you connected and productive.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=800",
      features: ["Network Design & Implementation", "Server Management", "Structured Cabling", "Enterprise IT Support"],
      color: "bg-blue-50",
      hoverBg: "bg-blue-100/50",
      textColor: "text-blue-600"
    },
    {
      title: "AV Solutions",
      slug: "av-solutions",
      tagline: "Immersive Visual Experiences",
      description: "Elevate your communication with professional audio-visual systems. We specialize in creating high-impact boardrooms, interactive learning environments, and large-scale digital signage solutions that deliver crystal-clear sound and stunning visuals.",
      icon: Tv,
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
      features: ["Video Conferencing", "Digital Signage", "Professional Sound Systems", "Interactive Displays"],
      color: "bg-purple-50",
      hoverBg: "bg-purple-100/50",
      textColor: "text-purple-600"
    },
    {
      title: "Software Solutions",
      slug: "software-solutions",
      tagline: "Custom Enterprise Development",
      description: "Streamline your business processes with custom software tailored to your specific needs. Our expert developers build scalable web applications, mobile apps, and integrated ERP systems that drive efficiency and digital transformation.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      features: ["Custom Web Development", "Mobile App Solutions", "ERP Systems", "API Integrations"],
      color: "bg-emerald-50",
      hoverBg: "bg-emerald-100/50",
      textColor: "text-emerald-600"
    },
    {
      title: "Automation Solutions",
      slug: "automation-solutions",
      tagline: "Intelligent Smart Systems",
      description: "Transform your building into a smart environment with our automation solutions. We integrate lighting, HVAC, and security into a centralized control system that optimizes energy consumption and enhances user comfort and operational efficiency.",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1558002038-103792e17730?auto=format&fit=crop&q=80&w=800",
      features: ["Building Management Systems", "Smart Lighting Control", "HVAC Automation", "IoT Integration"],
      color: "bg-indigo-50",
      hoverBg: "bg-indigo-100/50",
      textColor: "text-indigo-600"
    },
    {
      title: "AMC Services",
      slug: "amc-services",
      tagline: "Proactive Maintenance & Support",
      description: "Ensure your critical systems are always operating at peak performance with our Annual Maintenance Contracts. Our proactive approach to maintenance minimizes downtime and extends the lifespan of your technical infrastructure.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      features: ["24/7 Priority Support", "Scheduled Maintenance", "Rapid Emergency Response", "System Health Audits"],
      color: "bg-rose-50",
      hoverBg: "bg-rose-100/50",
      textColor: "text-rose-600"
    },
    {
      title: "Monitoring Solutions",
      slug: "monitoring-solutions",
      tagline: "Real-time System Visibility",
      description: "Gain complete oversight of your operations with our advanced monitoring solutions. We provide real-time data visualization and automated alerts for all your critical infrastructure, ensuring you stay informed and reactive to any situation.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=800",
      features: ["Real-time Data Dashboards", "Automated Alert Systems", "Performance Analytics", "Remote Infrastructure Monitoring"],
      color: "bg-amber-50",
      hoverBg: "bg-amber-100/50",
      textColor: "text-amber-600"
    }
];

export default function ServicesPage() {
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
              Our Expertise
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.05] mb-8"
            >
              Specialized <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Technical</span> <br /> Solutions For Growth
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zinc-500 leading-relaxed mb-10 max-w-2xl"
            >
              We provide cutting-edge technology services designed to optimize your infrastructure, enhance security, and drive digital innovation in your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact" className="px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all hover:scale-105">
                Talk to an Expert
              </Link>
              <Link href="#all-services" className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-medium hover:bg-zinc-50 transition-all">
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section id="all-services" className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`group relative overflow-hidden rounded-[2.5rem] border border-zinc-100 p-8 md:p-12 lg:p-16 transition-all duration-500 hover:shadow-lg hover:bg-[#FDF8F3]/50 ${index % 2 === 1 ? 'bg-zinc-50/30' : 'bg-white'}`}
                >
                  <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                    <div className="flex-1 space-y-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center transition-all duration-500 group-hover:bg-[#00D084]/10`}>
                          <service.icon className={`w-8 h-8 ${service.textColor} transition-colors duration-500 group-hover:text-[#00D084]`} />
                        </div>
                        <div>
                          <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${service.textColor} opacity-80`}>
                            {service.tagline}
                          </p>
                          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mt-1">
                            {service.title}
                          </h2>
                        </div>
                      </div>
                      
                      <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl font-medium">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3 group/feat">
                            <div className={`w-6 h-6 rounded-full ${service.color} flex items-center justify-center transition-all duration-300 group-hover/feat:scale-110`}>
                              <CheckCircle2 className={`w-3.5 h-3.5 ${service.textColor}`} />
                            </div>
                            <span className="text-zinc-700 font-semibold text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                        <div className="pt-6 flex flex-wrap gap-4">
                          <Link 
                            href={`/services/${service.slug}`} 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-[#00D084] transition-all duration-300 group/btn"
                          >
                            View Service Details
                            <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          </Link>
                          <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all duration-300"
                          >
                            Inquire Now
                          </Link>
                        </div>
                    </div>

                    <div className="lg:w-2/5 flex justify-center lg:justify-end">
                      <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Decorative background shapes */}
                        <div className={`absolute -inset-4 rounded-[3rem] ${service.color} opacity-10 blur-2xl transform -rotate-6 transition-transform group-hover:rotate-6 duration-700`} />
                        <div className={`absolute inset-0 rounded-[2.5rem] ${service.color} opacity-20 transform rotate-6 transition-transform group-hover:rotate-12 duration-500`} />
                        <div className={`absolute inset-0 rounded-[2.5rem] ${service.color} opacity-40 transform -rotate-3 transition-transform group-hover:-rotate-6 duration-500`} />
                        
                        <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-sm border border-zinc-100 flex items-center justify-center overflow-hidden z-10">
                           <Image 
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                        </div>
                        
                          {/* Interactive Green button overlay */}
                          <Link 
                            href={`/services/${service.slug}`}
                            className="absolute -bottom-6 -right-6 w-20 h-20 bg-white border border-zinc-100 rounded-full shadow-lg flex items-center justify-center transition-all duration-500 group-hover:bg-[#00D084] group-hover:border-transparent group-hover:scale-110 z-20 cursor-pointer"
                          >
                            <ArrowUpRight className="w-8 h-8 text-zinc-900 transition-colors duration-500 group-hover:text-white" />
                          </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="relative rounded-[3rem] bg-zinc-900 overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.3),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_40%)]" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Ready to optimize your <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>infrastructure?</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Connect with our technical team today for a comprehensive consultation on how our services can empower your business.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link href="/contact" className="px-10 py-5 bg-white text-zinc-900 rounded-full font-bold hover:bg-zinc-100 transition-all hover:scale-105 shadow-xl shadow-white/5">
                  Get Started Now
                </Link>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 overflow-hidden bg-zinc-800">
                        <Image 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 30}`} 
                          alt="Team" 
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium opacity-80">Support available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
