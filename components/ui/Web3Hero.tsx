"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Web3HeroProps {
  title: React.ReactNode;
  subtitle: string;
}

export default function Web3Hero({ title, subtitle }: Web3HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-50" />
      
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
