"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Web3HeroProps {
  title: React.ReactNode;
  subtitle: string;
}

export default function Web3Hero({ title, subtitle }: Web3HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#090A0F]/60 via-[#090A0F]/80 to-[#090A0F]" />
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50 z-0" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <img 
            src="/logo-imigrasi.webp" 
            alt="Logo Direktorat Jenderal Imigrasi" 
            className="w-24 md:w-32 h-auto mb-8 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.2] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 px-2">
            {title}
          </h1>
          
          <p className="text-base md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
