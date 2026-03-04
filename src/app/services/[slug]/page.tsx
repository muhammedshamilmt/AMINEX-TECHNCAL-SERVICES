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
  CheckCircle2,
  ArrowLeft,
  Settings,
  Zap,
  Lock,
  Workflow,
  BarChart3,
  Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { useParams } from "next/navigation";

const servicesData = {
  "elv-system-solutions": {
    title: "ELV System Solutions",
    tagline: "Total Security & Protection",
    description: "Our Extra Low Voltage (ELV) solutions provide a comprehensive framework for security and communication. From advanced CCTV surveillance to intelligent fire alarm systems and access control, we ensure your infrastructure is protected by the latest in security technology.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200",
    features: ["CCTV Surveillance", "Access Control Systems", "Fire Alarm & Safety", "Public Address Systems"],
    extendedDetails: [
      {
        title: "Intelligent CCTV Systems",
        description: "High-definition surveillance with AI-powered analytics for proactive threat detection and comprehensive monitoring.",
        icon: Lock
      },
      {
        title: "Integrated Access Control",
        description: "Seamlessly manage entry and exit points with biometric, card-based, and mobile-first authentication solutions.",
        icon: Shield
      },
      {
        title: "Fire Safety Systems",
        description: "Advanced fire detection and suppression systems that meet international safety standards for maximum protection.",
        icon: Zap
      }
    ],
    color: "bg-orange-50",
    textColor: "text-orange-600",
    accentColor: "bg-orange-500"
  },
  "ict-solutions": {
    title: "ICT Solutions",
    tagline: "Infrastructure for the Future",
    description: "We design and implement robust ICT infrastructures that serve as the backbone for modern business operations. Our solutions include high-performance networking, secure server management, and enterprise-grade IT support to keep you connected and productive.",
    icon: Network,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?auto=format&fit=crop&q=80&w=1200",
    features: ["Network Design & Implementation", "Server Management", "Structured Cabling", "Enterprise IT Support"],
    extendedDetails: [
      {
        title: "High-Performance Networking",
        description: "Custom-designed network architectures that ensure low latency, high bandwidth, and 100% uptime for critical business operations.",
        icon: Globe
      },
      {
        title: "Secure Server Infrastructure",
        description: "Robust server management and virtualization solutions that provide scalable computing power and data security.",
        icon: Settings
      },
      {
        title: "Structured Cabling",
        description: "Certified cabling solutions that organize your data and power lines for long-term reliability and easy maintenance.",
        icon: Workflow
      }
    ],
    color: "bg-blue-50",
    textColor: "text-blue-600",
    accentColor: "bg-blue-500"
  },
  "av-solutions": {
    title: "AV Solutions",
    tagline: "Immersive Visual Experiences",
    description: "Elevate your communication with professional audio-visual systems. We specialize in creating high-impact boardrooms, interactive learning environments, and large-scale digital signage solutions that deliver crystal-clear sound and stunning visuals.",
    icon: Tv,
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
    features: ["Video Conferencing", "Digital Signage", "Professional Sound Systems", "Interactive Displays"],
    extendedDetails: [
      {
        title: "Smart Conference Rooms",
        description: "Interactive display systems and integrated audio for seamless collaboration and high-impact presentations.",
        icon: Tv
      },
      {
        title: "Digital Signage Networks",
        description: "Dynamic visual communication solutions that engage audiences and deliver clear messages in public or corporate spaces.",
        icon: BarChart3
      },
      {
        title: "Auditorium Sound Systems",
        description: "Professional audio engineering for large venues, ensuring every word is heard with perfect clarity and balance.",
        icon: Zap
      }
    ],
    color: "bg-purple-50",
    textColor: "text-purple-600",
    accentColor: "bg-purple-500"
  },
  "software-solutions": {
    title: "Software Solutions",
    tagline: "Custom Enterprise Development",
    description: "Streamline your business processes with custom software tailored to your specific needs. Our expert developers build scalable web applications, mobile apps, and integrated ERP systems that drive efficiency and digital transformation.",
    icon: Code,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    features: ["Custom Web Development", "Mobile App Solutions", "ERP Systems", "API Integrations"],
    extendedDetails: [
      {
        title: "Bespoke Web Platforms",
        description: "Scalable, high-performance web applications built with the latest frameworks to drive your business goals.",
        icon: Globe
      },
      {
        title: "Enterprise ERP Systems",
        description: "Integrated business management software that streamlines operations, from finance to supply chain management.",
        icon: Settings
      },
      {
        title: "Modern Mobile Solutions",
        description: "User-centric mobile applications for iOS and Android that provide seamless access to your services on the go.",
        icon: Tv
      }
    ],
    color: "bg-emerald-50",
    textColor: "text-emerald-600",
    accentColor: "bg-emerald-500"
  },
  "automation-solutions": {
    title: "Automation Solutions",
    tagline: "Intelligent Smart Systems",
    description: "Transform your building into a smart environment with our automation solutions. We integrate lighting, HVAC, and security into a centralized control system that optimizes energy consumption and enhances user comfort and operational efficiency.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1558002038-103792e17730?auto=format&fit=crop&q=80&w=1200",
    features: ["Building Management Systems", "Smart Lighting Control", "HVAC Automation", "IoT Integration"],
    extendedDetails: [
      {
        title: "Centralized Building Control",
        description: "Complete oversight of your building's systems from a single, intuitive interface for maximum efficiency.",
        icon: Cpu
      },
      {
        title: "Intelligent Lighting & HVAC",
        description: "Automated environmental controls that adapt to occupancy and daylight, significantly reducing energy costs.",
        icon: Zap
      },
      {
        title: "IoT Ecosystem Integration",
        description: "Connecting your devices into a unified network that provides real-time data and automated responses.",
        icon: Workflow
      }
    ],
    color: "bg-indigo-50",
    textColor: "text-indigo-600",
    accentColor: "bg-indigo-500"
  },
  "amc-services": {
    title: "AMC Services",
    tagline: "Proactive Maintenance & Support",
    description: "Ensure your critical systems are always operating at peak performance with our Annual Maintenance Contracts. Our proactive approach to maintenance minimizes downtime and extends the lifespan of your technical infrastructure.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    features: ["24/7 Priority Support", "Scheduled Maintenance", "Rapid Emergency Response", "System Health Audits"],
    extendedDetails: [
      {
        title: "24/7 Technical Support",
        description: "Our team is always on call to resolve any technical issues, ensuring your operations never skip a beat.",
        icon: Zap
      },
      {
        title: "Preventative Maintenance",
        description: "Scheduled check-ups that identify and resolve potential issues before they become critical failures.",
        icon: Settings
      },
      {
        title: "Infrastructure Health Audits",
        description: "Comprehensive assessments of your systems to optimize performance and plan for future upgrades.",
        icon: BarChart3
      }
    ],
    color: "bg-rose-50",
    textColor: "text-rose-600",
    accentColor: "bg-rose-500"
  },
  "monitoring-solutions": {
    title: "Monitoring Solutions",
    tagline: "Real-time System Visibility",
    description: "Gain complete oversight of your operations with our advanced monitoring solutions. We provide real-time data visualization and automated alerts for all your critical infrastructure, ensuring you stay informed and reactive to any situation.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?auto=format&fit=crop&q=80&w=1200",
    features: ["Real-time Data Dashboards", "Automated Alert Systems", "Performance Analytics", "Remote Infrastructure Monitoring"],
    extendedDetails: [
      {
        title: "Real-time Visualization",
        description: "Dynamic dashboards that transform complex data into clear, actionable insights for your operations team.",
        icon: BarChart3
      },
      {
        title: "Intelligent Alert Systems",
        description: "Automated notification protocols that ensure the right people are alerted at the right time for any system anomaly.",
        icon: Zap
      },
      {
        title: "Remote System Management",
        description: "Full oversight and control of your distributed infrastructure from a centralized monitoring center.",
        icon: Globe
      }
    ],
    color: "bg-amber-50",
    textColor: "text-amber-600",
    accentColor: "bg-amber-500"
  }
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <main className="min-h-screen bg-white pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services" className="text-orange-500 hover:underline">Return to Services</Link>
        </div>
      </main>
    );
  }

  const Icon = service.icon;

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#FDFDFD]" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/services" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 font-medium mb-12 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full ${service.color} border border-zinc-100 shadow-sm`}
              >
                <Icon className={`w-4 h-4 ${service.textColor}`} />
                <span className={`text-[11px] font-bold uppercase tracking-widest ${service.textColor}`}>
                  {service.tagline}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-8xl font-bold text-zinc-900 tracking-tight leading-[1.05]"
              >
                {service.title.split(' ')[0]} <br />
                <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {service.title.split(' ').slice(1).join(' ')}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-zinc-500 leading-relaxed max-w-2xl font-medium"
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Floating Accent Elements */}
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[5%] top-[20%] w-64 h-64 rounded-full bg-orange-500/5 blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className={`absolute right-[15%] bottom-[15%] w-96 h-96 rounded-full ${service.accentColor}/10 blur-3xl`}
        />
      </section>

      {/* Modern Detail Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Interactive Features List */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900">Key Features</h3>
                <div className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      key={feature}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-zinc-100 bg-white hover:border-[#00D084]/30 transition-all duration-300"
                    >
                      <div className={`w-10 h-10 rounded-xl ${service.color} flex items-center justify-center group-hover:bg-[#00D084]/10 transition-colors`}>
                        <CheckCircle2 className={`w-5 h-5 ${service.textColor} group-hover:text-[#00D084]`} />
                      </div>
                      <span className="font-semibold text-zinc-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-zinc-900 text-white space-y-6 shadow-xl">
                <h4 className="text-xl font-bold">Need a Custom Solution?</h4>
                <p className="text-zinc-400 leading-relaxed">
                  Our technical experts are ready to design a solution specifically for your business requirements.
                </p>
                <Link href="/contact" className="flex items-center justify-between group/btn p-4 rounded-xl bg-white/10 hover:bg-[#00D084] transition-all">
                  <span className="font-bold">Consult an Expert</span>
                  <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Technical Deep Dive */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-8">
                {service.extendedDetails.map((detail, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    key={detail.title}
                    className="group relative bg-white rounded-[2.5rem] border border-zinc-100 p-8 md:p-12 transition-all hover:shadow-lg hover:border-zinc-200"
                  >
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center shrink-0`}>
                        <detail.icon className={`w-8 h-8 ${service.textColor}`} />
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-bold text-zinc-900 group-hover:text-orange-500 transition-colors">
                          {detail.title}
                        </h4>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Execution Journey Section */}
      <section className="py-24 bg-white border-y border-zinc-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">The Journey</span>
              <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 tracking-tight">Our Execution Process</h2>
              <p className="text-xl text-zinc-500">How we bring your {service.title} vision to life through structured engineering phases.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-zinc-100 -z-10" />
            
            {[
              { step: "01", title: "Consultation", desc: "Understanding your specific needs and infrastructure constraints." },
              { step: "02", title: "Design & Planning", desc: "Developing technical blueprints and material specifications." },
              { step: "03", title: "Implementation", desc: "On-site installation by our certified technical engineers." },
              { step: "04", title: "Handover", desc: "Testing, documentation, and staff training for your new system." }
            ].map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                key={idx}
                className="space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-zinc-100 flex items-center justify-center text-2xl font-bold text-zinc-900 shadow-sm hover:border-orange-500 transition-colors">
                  {item.step}
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-zinc-900">{item.title}</h4>
                  <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case-Study Style Image Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-xl group">
             <Image 
               src={service.image}
               alt="Technical Infrastructure"
               fill
               className="object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/20" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-6 max-w-2xl px-6">
                   <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                     Pioneering Excellence In <br /> {service.title}
                   </h2>
                   <div className="w-24 h-1 bg-[#00D084] mx-auto rounded-full" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ / Technical Highlights Style Section */}
      <section className="py-24 bg-zinc-50/50">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
               <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Our Commitment</span>
               <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight">Technical Implementation Standards</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Quality Assurance", desc: "Every installation undergoes rigorous testing to meet international safety and performance standards." },
                 { title: "Future Ready", desc: "We design with scalability in mind, ensuring your systems can grow alongside your business." },
                 { title: "Full Compliance", desc: "All our solutions comply with local regulations and global technical best practices." }
               ].map((item, idx) => (
                 <div key={idx} className="p-8 rounded-[2rem] bg-white border border-zinc-100 space-y-4 shadow-sm hover:shadow-md transition-all">
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold">0{idx+1}</div>
                    <h5 className="text-xl font-bold text-zinc-900">{item.title}</h5>
                    <p className="text-zinc-500 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="relative rounded-[3rem] bg-zinc-900 overflow-hidden p-12 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.3),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.2),transparent_40%)]" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                Interested in <span className="text-orange-500 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>{service.title}?</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                Connect with our technical team today for a comprehensive consultation on how we can implement this solution for you.
              </p>
              <div className="flex flex-wrap justify-center gap-6 pt-4">
                <Link href="/contact" className="px-10 py-5 bg-white text-zinc-900 rounded-full font-bold hover:bg-[#00D084] transition-all hover:scale-105 shadow-lg shadow-white/5">
                  Get a Quote
                </Link>
                <Link href="/services" className="px-10 py-5 bg-zinc-800 text-white border border-zinc-700 rounded-full font-bold hover:bg-zinc-700 transition-all">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
