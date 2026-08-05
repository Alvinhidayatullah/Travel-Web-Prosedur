"use client"

import * as React from "react"
import { getTopicBySlug } from "@/app/actions"
import { addRequirement, deleteRequirement } from "@/app/actions/admin"
import { Loader2, Trash2, ArrowLeft, Plus } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import Link from "next/link"

export default function TopicManager({ params }: { params: { slug: string } }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [topic, setTopic] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [formData, setFormData] = React.useState({
    title: "", description: ""
  })

  React.useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.slug])

  const loadData = async () => {
    setIsLoading(true)
    const data = await getTopicBySlug(params.slug)
    setTopic(data)
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const fd = new FormData()
    fd.append('topicId', topic.id)
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v))
    
    await addRequirement(fd)
    setFormData({ title: "", description: "" })
    await loadData()
    setIsSubmitting(false)
  }

  const handleDelete = async (id: string) => {
    if(confirm('Hapus persyaratan ini?')) {
      await deleteRequirement(id)
      await loadData()
    }
  }

  if (isLoading) return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-neon-cyan" /></div>
  if (!topic) return <div className="text-white">Topik tidak ditemukan</div>

  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-center gap-4">
        <Link href="/secure-admin/dashboard" className="p-2 hover:bg-white/10 rounded-xl transition-all">
          <ArrowLeft className="text-white w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-3">
            <span className="text-3xl">{topic.icon}</span> 
            Kelola Persyaratan: {topic.title}
          </h1>
          <p className="text-slate-400 mt-1">{topic.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Tambah */}
        <div className="lg:col-span-1">
          <GlassCard className="p-6 sticky top-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Plus className="w-5 h-5 text-neon-cyan" />
              Tambah Syarat/Langkah
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Judul Persyaratan</label>
                <input 
                  type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
                  placeholder="Misal: Paspor Asli"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Deskripsi Lengkap</label>
                <textarea 
                  required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white h-32"
                  placeholder="Penjelasan detail tentang persyaratan ini..."
                />
              </div>
              <NeonButton disabled={isSubmitting} className="w-full">
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : "Tambahkan ke Infografis"}
              </NeonButton>
            </form>
          </GlassCard>
        </div>

        {/* Daftar Persyaratan (Infografis Preview) */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white mb-4">Urutan Persyaratan (Infografis)</h2>
          
          {topic.requirements.length === 0 ? (
            <div className="text-center py-12 text-slate-400 border border-dashed border-white/20 rounded-2xl">
              Belum ada persyaratan. Tambahkan di form sebelah kiri.
            </div>
          ) : (
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {topic.requirements.map((req: any, index: number) => (
                <div key={req.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-[#090A0F] bg-neon-cyan text-black font-bold shadow-[0_0_15px_rgba(34,211,238,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                    {index + 1}
                  </div>
                  
                  <GlassCard className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-5 relative">
                    <button 
                      onClick={() => handleDelete(req.id)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <h3 className="font-bold text-lg text-white mb-2 pr-6">{req.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{req.description}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
