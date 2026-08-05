"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Web3HeroProps {
  title: React.ReactNode;
  subtitle: string;
}

export default function Web3Hero({ title, subtitle }: Web3HeroProps) {
  return (
    <section className="relative pt-20 pb-12 px-6 overflow-hidden min-h-[60vh] flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#090A0F]/50 via-[#090A0F]/80 to-[#090A0F]" />
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
