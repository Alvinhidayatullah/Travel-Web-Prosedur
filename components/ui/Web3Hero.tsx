"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { SearchBar } from "./SearchBar"

interface Web3HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Web3Hero({ searchQuery, setSearchQuery }: Web3HeroProps) {
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
            Panduan Lengkap <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-violet to-neon-cyan">
              Perjalanan Luar Negeri
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Temukan semua informasi yang Anda butuhkan untuk bepergian ke luar negeri. Mulai dari persyaratan visa, protokol imigrasi, hingga persiapan sebelum keberangkatan dalam satu platform interaktif yang mudah diakses.
          </p>

          <SearchBar 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </div>
    </section>
  )
}
