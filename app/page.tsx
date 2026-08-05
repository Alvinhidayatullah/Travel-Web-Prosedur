"use client"

import * as React from "react"
import { Web3Hero } from "@/components/ui/Web3Hero"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import { getCountries } from "@/app/actions"
import type { Country } from "@prisma/client"
import Link from "next/link"
import { ArrowRight, PlaneTakeoff, ShieldCheck, Zap } from "lucide-react"

export default function Home() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [countries, setCountries] = React.useState<Country[]>([])

  React.useEffect(() => {
    async function fetchData() {
      const data = await getCountries()
      setCountries(data)
    }
    fetchData()
  }, [])

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const displayCountries = searchQuery ? filteredCountries : filteredCountries.slice(0, 8)

  return (
    <main className="min-h-screen pb-20">
      <Web3Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <section className="max-w-6xl mx-auto px-6 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white w-full sm:w-auto">
            {searchQuery ? "Hasil Pencarian" : "Destinasi Populer"}
          </h2>
          {!searchQuery && (
            <Link href="/destinasi" className="w-full sm:w-auto">
              <NeonButton variant="cyan" className="text-sm md:text-base px-6 py-2.5 w-full">Lihat Semua</NeonButton>
            </Link>
          )}
        </div>

        {displayCountries.length === 0 ? (
          <div className="text-center py-16 text-lg text-slate-400">
            Negara tidak ditemukan. Silakan coba kata kunci lain.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayCountries.map((country) => (
              <Link key={country.id} href={`/go/${country.code.toLowerCase()}`} className="flex">
                <GlassCard 
                  className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300 w-full flex flex-col"
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
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
