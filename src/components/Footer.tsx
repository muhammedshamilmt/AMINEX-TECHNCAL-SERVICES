"use client";

import Link from "next/link";
import { Instagram, Youtube, Facebook, Twitter } from "lucide-react";

export function Footer() {
    const footerLinks = [
      {
        title: "Company",
        links: [
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Terms of Service", href: "/terms-of-service" },
          { name: "Refund Policy", href: "/refund-policy" },
        ],
      },
      {
        title: "Services",
        links: [
          { name: "ELV Systems", href: "/services/elv-system-solutions" },
          { name: "ICT Solutions", href: "/services/ict-solutions" },
          { name: "AV Solutions", href: "/services/av-solutions" },
        ],
      },
    ];

    return (
      <footer className="bg-white border-t border-zinc-100 flex flex-col pt-24 overflow-hidden">
        {/* Row 1: Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
            {/* Logo & Description */}
            <div className="lg:col-span-1 space-y-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-orange-500 rounded-full blur-[2px] opacity-20" />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-500"
                    >
                      <circle cx="12" cy="12" r="4" fill="currentColor" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  </div>
                  <div className="h-4 w-[1px] bg-zinc-300 mx-1" />
                  <span className="text-lg font-bold tracking-tight text-zinc-900 whitespace-nowrap">Aminex</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[240px]">
                  Professional technical services for modern infrastructures - ELV, ICT, AV, and more.
                </p>
            </div>

            {/* Link Columns */}
            {footerLinks.map((column) => (
              <div key={column.title} className="space-y-6">
                <h4 className="text-zinc-900 font-semibold text-sm uppercase tracking-wider">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-zinc-500 hover:text-orange-600 transition-colors text-sm font-medium">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact & Social */}
            <div className="space-y-6">
              <h4 className="text-zinc-900 font-semibold text-sm uppercase tracking-wider">Get in touch</h4>
              <Link href="mailto:hello@aminex.io" className="block text-zinc-500 hover:text-orange-600 transition-colors text-sm font-medium mb-8">
                hello@aminex.io
              </Link>
              <div className="flex items-center gap-4">
                <Link href="#" className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-all hover:-translate-y-1">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-all hover:-translate-y-1">
                  <Youtube size={20} />
                </Link>
                <Link href="#" className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-all hover:-translate-y-1">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-all hover:-translate-y-1">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Image Section */}
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden group">
           <img 
             src="/footer.png" 
             alt="Aminex Engineering" 
             className="w-full h-full object-cover object-bottom transition-transform duration-700 "
           />
           {/* Bottom to top white grading (gradient) */}
           <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white pointer-events-none" />
        </div>

        {/* Bottom Bar Section */}
        <div className="py-8 px-4 ">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-zinc-500">
              <Link href="/privacy-policy" className="hover:text-orange-600 transition-colors">Privacy Policy</Link>
              <div className="hidden sm:block w-1 h-1 bg-zinc-300 rounded-full" />
              <Link href="/terms-of-service" className="hover:text-orange-600 transition-colors">Terms of Services</Link>
              <div className="hidden sm:block w-1 h-1 bg-zinc-300 rounded-full" />
              <Link href="/refund-policy" className="hover:text-orange-600 transition-colors">Refund Policy</Link>
            </div>
            <p className="text-zinc-400 text-xs font-medium">© 2026 Aminex Technical Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
}
