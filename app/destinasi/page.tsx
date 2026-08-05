"use client"

import * as React from "react"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import { SearchBar } from "@/components/ui/SearchBar"
import { countries } from "@/lib/data"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"

export default function DestinasiPage() {
  const [searchQuery, setSearchQuery] = React.useState("")

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen pb-20 pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Kembali ke Beranda
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Semua Destinasi
          </h1>
          <SearchBar 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari negara tujuan (contoh: Jepang, Singapura)..."
          />
        </motion.div>

        {filteredCountries.length === 0 ? (
          <div className="text-center py-20 text-lg text-slate-400">
            Negara tidak ditemukan. Silakan coba kata kunci lain.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCountries.map((country, idx) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex"
              >
                <Link href={`/go/${country.code.toLowerCase()}`} className="flex w-full">
                  <GlassCard 
                    className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300 w-full flex flex-col h-full"
                    glowColor={country.visaType === "Bebas Visa" ? "green" : "violet"}
                  >
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/10 transition-colors duration-300" />
                      <img 
                        src={country.coverImage} 
                        alt={country.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 z-20 text-4xl">
                        {country.flagUrl}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{country.name}</h3>
                      <div className="flex items-center gap-2 mt-auto">
                        <span className={`text-sm font-semibold px-3 py-1.5 rounded-md border ${
                          country.visaType === "Bebas Visa" 
                            ? "bg-neon-green/10 text-neon-green border-neon-green/30" 
                            : "bg-neon-violet/10 text-neon-violet border-neon-violet/30"
                        }`}>
                          {country.visaType}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
