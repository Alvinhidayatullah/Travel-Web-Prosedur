interface TopicData { id: string; title: string; description: string; icon: string; slug: string; _count?: { requirements: number } }
"use client"

import * as React from "react"
import { getTopics } from "@/app/actions"
import { addTopic, deleteTopic, updateTopic } from "@/app/actions/admin"
import { Edit2, Trash2, Loader2, BookOpen } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import Link from "next/link"

export default function AdminDashboard() {
  const [topics, setTopics] = React.useState<TopicData[]>([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [editingId, setEditingId] = React.useState<string | null>(null)
  
  const [formData, setFormData] = React.useState({
    title: "", description: "", icon: "", slug: ""
  })

  React.useEffect(() => {
    loadTopics()
  }, [])

  const loadTopics = async () => {
    setIsLoading(true)
    const data = await getTopics()
    setTopics(data)
    setIsLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const fd = new FormData()
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v))
    
    if (editingId) {
      await updateTopic(editingId, fd)
      setEditingId(null)
    } else {
      await addTopic(fd)
    }
    
    setFormData({ title: "", description: "", icon: "", slug: "" })
    await loadTopics()
    setIsSubmitting(false)
  }

  const handleEdit = (topic: TopicData) => {
    setEditingId(topic.id)
    setFormData({
      title: topic.title,
      description: topic.description,
      icon: topic.icon,
      slug: topic.slug
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus topik ini? Semua data persyaratan di dalamnya akan ikut terhapus.")) {
      await deleteTopic(id)
      await loadTopics()
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Manajemen Topik Panduan</h1>
      </div>

      <GlassCard className="p-6">
        <h2 className="text-xl font-bold text-white mb-6">
          {editingId ? "Edit Topik" : "Tambah Topik Baru"}
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Judul Topik</label>
            <input 
              type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="Contoh: Syarat Anak di Bawah Umur"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">URL Slug (Otomatis jika kosong)</label>
            <input 
              type="text" value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="anak-dibawah-umur"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Ikon Lucide (nama ikon) / Emoji</label>
            <input 
              type="text" required value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white"
              placeholder="baby"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-300">Deskripsi Singkat</label>
            <textarea 
              required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2.5 text-white h-24"
              placeholder="Panduan khusus untuk..."
            />
          </div>

          <div className="md:col-span-2 flex justify-end gap-3 mt-2">
            {editingId && (
              <button 
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setFormData({ title: "", description: "", icon: "", slug: "" })
                }}
                className="px-6 py-2.5 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all"
              >
                Batal
              </button>
            )}
            <NeonButton disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : (editingId ? "Simpan Perubahan" : "Tambahkan Topik")}
            </NeonButton>
          </div>
        </form>
      </GlassCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isLoading ? (
          <div className="col-span-full flex justify-center py-12">
            <Loader2 className="w-8 h-8 text-neon-cyan animate-spin" />
          </div>
        ) : topics.map((topic) => (
          <GlassCard key={topic.id} className="p-6 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center border border-neon-cyan/30 text-2xl">
                  {topic.icon.length > 2 && /^[a-zA-Z-]+$/.test(topic.icon) ? <BookOpen className="w-6 h-6 text-neon-cyan" /> : topic.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{topic.title}</h3>
                  <p className="text-sm text-slate-400">/{topic.slug}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(topic)} className="p-2 hover:bg-white/10 rounded-lg text-slate-300 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button onClick={() => handleDelete(topic.id)} className="p-2 hover:bg-red-500/20 rounded-lg text-red-400 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <p className="text-slate-300 text-sm mb-6 flex-1 line-clamp-2">{topic.description}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
              <div className="text-sm text-slate-400">
                <span className="text-neon-cyan font-bold">{topic._count?.requirements || 0}</span> Syarat/Langkah
              </div>
              <Link href={`/secure-admin/dashboard/topic/${topic.slug}`}>
                <button className="text-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-lg transition-all">
                  Kelola Persyaratan →
                </button>
              </Link>
            </div>
          </GlassCard>
        ))}
        {topics.length === 0 && !isLoading && (
          <div className="col-span-full text-center py-12 text-slate-400">
            Belum ada topik panduan. Silakan tambahkan di atas.
          </div>
        )}
      </div>
    </div>
  )
}
