"use client"

import * as React from "react"
import { getCountries } from "@/app/actions"
import { addCountry, deleteCountry, updateCountry } from "@/app/actions/admin"
import type { Country } from "@prisma/client"
import { Plus, Edit2, Trash2, Loader2 } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"

// Simple mapping for auto-filling currency based on some popular flags/countries
const currencyMap: Record<string, string> = {
  "🇸🇬": "SGD", "🇯🇵": "JPY", "🇰🇷": "KRW", "🇬🇧": "GBP", "🇲🇾": "MYR",
  "🇹🇭": "THB", "🇦🇺": "AUD", "🇺🇸": "USD", "🇦🇪": "AED", "🇩🇪": "EUR",
  "🇫🇷": "EUR", "🇮🇹": "EUR", "🇪🇸": "EUR", "🇳🇱": "EUR", "🇨🇳": "CNY",
  "🇮🇳": "INR", "🇸🇦": "SAR", "🇹🇷": "TRY", "🇷🇺": "RUB", "🇧🇷": "BRL"
}

export default function AdminDashboard() {
  const [countries, setCountries] = React.useState<Country[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [editingId, setEditingId] = React.useState<string | null>(null)

  // Form State
  const [formData, setFormData] = React.useState({
    code: "", name: "", flagUrl: "", coverImage: "", visaType: "Bebas Visa", currency: ""
  })

  React.useEffect(() => {
    loadCountries()
  }, [])

  const loadCountries = async () => {
    setIsLoading(true)
    const data = await getCountries()
    setCountries(data)
    setIsLoading(false)
  }

  // Automasi Mata Uang ketika Flag/Nama diinput
  const handleFlagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const flag = e.target.value
    let newCurrency = formData.currency
    
    // Auto fill currency if flag matches map
    if (currencyMap[flag]) {
      newCurrency = currencyMap[flag]
    }
    
    setFormData({ ...formData, flagUrl: flag, currency: newCurrency })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const fd = new FormData()
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v))

    if (editingId) {
      await updateCountry(editingId, fd)
    } else {
      await addCountry(fd)
    }

    await loadCountries()
    resetForm()
    setIsSubmitting(false)
  }

  const handleEdit = (c: Country) => {
    setEditingId(c.id)
    setFormData({
      code: c.code, name: c.name, flagUrl: c.flagUrl,
      coverImage: c.coverImage, visaType: c.visaType, currency: c.currency
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus destinasi ini? Semua prosedur di dalamnya juga akan terhapus.")) {
      await deleteCountry(id)
      await loadCountries()
    }
  }

  const resetForm = () => {
    setEditingId(null)
    setFormData({ code: "", name: "", flagUrl: "", coverImage: "", visaType: "Bebas Visa", currency: "" })
  }

  if (isLoading) return <div className="flex justify-center p-20"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white tracking-tight">Manajemen Destinasi</h1>
      </div>

      {/* Add / Edit Form */}
      <GlassCard className="p-6 border-white/10" glowColor={editingId ? "violet" : "cyan"}>
        <h2 className="text-xl font-semibold text-white mb-6">
          {editingId ? "Edit Destinasi" : "Tambah Destinasi Baru"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Ikon/Bendera (Emoji)</label>
            <input 
              type="text" required value={formData.flagUrl} onChange={handleFlagChange}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xl"
              placeholder="🇯🇵"
            />
            <p className="text-xs text-slate-500">Mata uang otomatis terisi untuk bendera populer.</p>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Nama Negara</label>
            <input 
              type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="Jepang"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Kode Negara (2 Huruf)</label>
            <input 
              type="text" required maxLength={2} value={formData.code} onChange={e => setFormData({...formData, code: e.target.value.toUpperCase()})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="JP"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Mata Uang</label>
            <input 
              type="text" required value={formData.currency} onChange={e => setFormData({...formData, currency: e.target.value.toUpperCase()})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="JPY"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Tipe Visa (Ketik Bebas)</label>
            <input 
              type="text" required value={formData.visaType} onChange={e => setFormData({...formData, visaType: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="e-Visa, Bebas Visa, Visa Kedutaan..."
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-300">URL Gambar Cover</label>
            <input 
              type="url" required value={formData.coverImage} onChange={e => setFormData({...formData, coverImage: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="https://images.unsplash.com/photo-..."
            />
          </div>

          <div className="md:col-span-2 flex gap-3 mt-2">
            <NeonButton type="submit" variant="cyan" disabled={isSubmitting} className="flex-1 py-3">
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : (editingId ? "Simpan Perubahan" : "Tambahkan Destinasi")}
            </NeonButton>
            {editingId && (
              <button type="button" onClick={resetForm} className="px-6 rounded-xl border border-white/20 text-white hover:bg-white/10">Batal</button>
            )}
          </div>
        </form>
      </GlassCard>

      {/* List of Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {countries.map(country => (
          <GlassCard key={country.id} className="p-5 flex flex-col border-white/5" glowColor="violet">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{country.flagUrl}</span>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{country.name}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">{country.code}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(country)} className="p-2 bg-white/5 hover:bg-white/20 rounded-lg text-slate-300 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(country.id)} className="p-2 bg-red-500/10 hover:bg-red-500/30 rounded-lg text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-auto space-y-2 text-sm pt-4 border-t border-white/5">
              <div className="flex justify-between">
                <span className="text-slate-500">Mata Uang</span>
                <span className="text-slate-300 font-medium">{country.currency}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-slate-500">Tipe Visa</span>
                <span className="text-slate-300 font-medium">{country.visaType}</span>
              </div>
              <a href={`/secure-admin/dashboard/country/${country.code.toLowerCase()}`} className="block">
                <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-neon-cyan border border-white/10 rounded-lg text-sm font-medium transition-all">
                  Kelola Prosedur
                </button>
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
