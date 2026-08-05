"use client"

import * as React from "react"
import { getCountryWithProcedures } from "@/app/actions"
import { addProcedure, deleteProcedure } from "@/app/actions/admin"
import { Loader2, Trash2, ArrowLeft } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import Link from "next/link"

export default function ProcedureManager({ params }: { params: { code: string } }) {
  const [country, setCountry] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [formData, setFormData] = React.useState({
    phase: "PRE_DEPARTURE", title: "", description: ""
  })

  React.useEffect(() => {
    loadData()
  }, [params.code])

  const loadData = async () => {
    setIsLoading(true)
    const data = await getCountryWithProcedures(params.code)
    setCountry(data)
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const fd = new FormData()
    fd.append('countryId', country.id)
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v))
    
    await addProcedure(fd)
    setFormData({ ...formData, title: "", description: "" })
    await loadData()
    setIsSubmitting(false)
  }

  const handleDelete = async (id: string) => {
    if (confirm("Hapus prosedur ini?")) {
      await deleteProcedure(id)
      await loadData()
    }
  }

  if (isLoading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>
  if (!country) return <div className="text-white p-10">Negara tidak ditemukan</div>

  const phases = [
    { id: "PRE_DEPARTURE", label: "Pra-Keberangkatan" },
    { id: "DEPARTURE_DAY", label: "Hari Keberangkatan" },
    { id: "IN_FLIGHT_TRANSIT", label: "Penerbangan & Transit" },
    { id: "ARRIVAL", label: "Kedatangan" }
  ]

  return (
    <div className="space-y-10 max-w-4xl">
      <div>
        <Link href="/secure-admin/dashboard" className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm">
          <ArrowLeft className="w-4 h-4 mr-1" /> Kembali ke Dashboard
        </Link>
        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
          <span className="text-4xl">{country.flagUrl}</span>
          Prosedur {country.name}
        </h1>
      </div>

      <GlassCard className="p-6 border-white/10" glowColor="cyan">
        <h2 className="text-xl font-semibold text-white mb-6">Tambah Prosedur Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Fase</label>
            <select 
              value={formData.phase} onChange={e => setFormData({...formData, phase: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
            >
              {phases.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Judul Prosedur</label>
            <input 
              type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="Cetak Paspor"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Deskripsi (Langkah-langkah)</label>
            <textarea 
              required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white min-h-[100px]"
              placeholder="Pastikan paspor Anda masih berlaku..."
            />
          </div>

          <NeonButton type="submit" variant="cyan" disabled={isSubmitting} className="w-full py-3 mt-2">
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Tambahkan Prosedur"}
          </NeonButton>
        </form>
      </GlassCard>

      <div className="space-y-8">
        {phases.map(phase => {
          const procedures = country.groupedProcedures[phase.id] || []
          return (
            <div key={phase.id} className="space-y-4">
              <h3 className="text-xl font-bold text-slate-200 border-b border-white/10 pb-2">{phase.label}</h3>
              {procedures.length === 0 ? (
                <p className="text-slate-500 text-sm">Belum ada prosedur di fase ini.</p>
              ) : (
                procedures.map((p: any) => (
                  <GlassCard key={p.id} className="p-4 border-white/5 flex justify-between items-center group">
                    <div>
                      <h4 className="font-bold text-white mb-1">{p.title}</h4>
                      <p className="text-sm text-slate-400">{p.description}</p>
                    </div>
                    <button 
                      onClick={() => handleDelete(p.id)}
                      className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </GlassCard>
                ))
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
