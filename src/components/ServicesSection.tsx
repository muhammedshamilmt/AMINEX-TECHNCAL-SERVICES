"use client";

import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Shield, 
  Network, 
  Tv, 
  Code, 
  Cpu, 
  Wrench,
  Activity,
  CreditCard,
  Apple,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: any;
  bottomLeft: React.ReactNode;
  index: number;
  slug: string;
}

const ServiceCard = ({ title, description, icon: Icon, bottomLeft, index, slug }: ServiceCardProps) => {
  return (
    <Link href={`/services/${slug}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white hover:bg-[#FDF8F3] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between min-h-[420px] shadow-sm border border-zinc-100/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-500 group h-full"
      >
          <div className="space-y-8">
            <div className="w-12 h-12 rounded-full bg-zinc-900/5 group-hover:bg-[#00D084]/10 flex items-center justify-center transition-colors duration-500">
              <Icon className="w-6 h-6 text-zinc-900 group-hover:text-[#00D084] transition-colors duration-500" />
            </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-zinc-900 tracking-tight leading-tight">
              {title}
            </h3>
            <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="flex items-end justify-between mt-12">
          <div className="flex-1">
            {bottomLeft}
          </div>
          
          <div className="w-14 h-14 rounded-full bg-white border border-zinc-100 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#00D084] group-hover:border-transparent transition-all duration-300 cursor-pointer">
            <ArrowUpRight className="w-6 h-6 text-zinc-900 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export function ServicesSection() {
  const services = [
    {
      title: "ELV System Solutions",
      slug: "elv-system-solutions",
      description: "Comprehensive security systems including CCTV, access control, and fire safety protocols for total protection.",
      icon: Shield,
      bottomLeft: (
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-1">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
              <Apple className="w-4 h-4 text-zinc-900" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 text-[10px] font-bold text-blue-600 italic">
              G
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 text-[10px] font-bold text-blue-800">
              P
            </div>
          </div>
          <span className="text-xs font-medium text-zinc-500">Payment Options</span>
        </div>
      )
    },
    {
      title: "ICT Solutions",
      slug: "ict-solutions",
      description: "Robust information technology infrastructure, advanced networking, and secure server management systems.",
      icon: Network,
      bottomLeft: (
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-600">#Networking</span>
          <span className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-600">#Infrastructure</span>
        </div>
      )
    },
    {
      title: "AV Solutions",
      slug: "av-solutions",
      description: "Professional audio-visual systems for boardrooms, auditoriums, and interactive digital display environments.",
      icon: Tv,
      bottomLeft: (
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-zinc-100 relative">
                <Image 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} 
                  alt="Avatar" 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-xs font-medium text-zinc-500">Our Experts</span>
        </div>
      )
    },
    {
      title: "Software Solutions",
      slug: "software-solutions",
      description: "Custom enterprise software development and integrated ERP solutions to optimize your business workflow.",
      icon: Code,
      bottomLeft: (
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-1">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100">
              <CreditCard className="w-4 h-4 text-zinc-900" />
            </div>
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-zinc-100 text-[10px] font-bold text-green-600">
              $
            </div>
          </div>
          <span className="text-xs font-medium text-zinc-500">Custom Billing</span>
        </div>
      )
    },
    {
      title: "Automation Solutions",
      slug: "automation-solutions",
      description: "Intelligent building automation and smart control systems to enhance operational efficiency and energy savings.",
      icon: Cpu,
      bottomLeft: (
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-600">#SmartBuild</span>
          <span className="px-3 py-1 rounded-full bg-zinc-50 border border-zinc-100 text-[10px] font-medium text-zinc-600">#IoT</span>
        </div>
      )
    },
    {
      title: "AMC Services",
      slug: "amc-services",
      description: "Reliable annual maintenance contracts and proactive support to ensure your systems operate at peak performance.",
      icon: Wrench,
      bottomLeft: (
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {[4, 5, 6].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-zinc-100 relative">
                <Image 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 20}`} 
                  alt="Avatar" 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <span className="text-xs font-medium text-zinc-500">Support Team</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-zinc-50/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[10px] uppercase tracking-wider font-bold text-orange-600"
            >
              Our Expertise
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]"
            >
              Specialized <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Solutions</span> <br className="hidden md:block" /> For Modern Businesses
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <p className="text-zinc-500 text-sm max-w-[240px]">
              Explore our range of comprehensive technical services designed for efficiency.
            </p>
            <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-900 hover:text-white transition-colors duration-300 cursor-pointer group">
              <ArrowUpRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              {...service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
