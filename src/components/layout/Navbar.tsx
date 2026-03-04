"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Contact", href: "/contact" },
    ];

  return (
    <nav className="fixed top-2 left-4 right-4 z-50 h-20 flex items-center">
      <div className="w-full bg-white/80 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm px-4 md:px-6 flex items-center justify-between h-full relative">
        
        {/* Mobile Menu Button (Left on mobile) */}
        <div className="md:hidden flex-1 flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-zinc-600 hover:text-black transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Left Side: Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 flex-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="hover:text-black transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-orange-500 rounded-full blur-[2px] opacity-20 animate-pulse group-hover:bg-[#00D084] transition-colors" />
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500 group-hover:text-[#00D084] transition-colors"
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
            </Link>
          </div>

          {/* Right Side: Connect Button */}
          <div className="flex items-center justify-end flex-1">
            <Link 
              href="/contact" 
              className="bg-black text-white px-5 md:px-7 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold hover:bg-[#00D084] transition-all hover:scale-105 shadow-sm active:scale-95"
            >
              Connect
            </Link>
          </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-2xl shadow-xl p-4 md:hidden flex flex-col gap-2 overflow-hidden z-[60]"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-50 text-zinc-600 hover:text-black font-medium transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
