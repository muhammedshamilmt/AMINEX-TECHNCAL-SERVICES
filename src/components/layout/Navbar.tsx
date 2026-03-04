"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-500 rounded-full blur-[2px] opacity-20 animate-pulse" />
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
        <span className="text-lg font-bold tracking-tight text-zinc-900">Flowen Finance</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <button className="flex items-center gap-1 hover:text-black transition-colors">
          Product <ChevronDown size={14} />
        </button>
        <button className="flex items-center gap-1 hover:text-black transition-colors">
          Solutions <ChevronDown size={14} />
        </button>
        <Link href="/" className="hover:text-black transition-colors">Resources</Link>
        <Link href="/" className="hover:text-black transition-colors">About</Link>
        <Link href="/" className="hover:text-black transition-colors">Contact</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Log in</Link>
        <Link 
          href="/get-started" 
          className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Get started <span className="text-gray-400 ml-1">- It's Free</span>
        </Link>
      </div>
    </nav>
  );
}
