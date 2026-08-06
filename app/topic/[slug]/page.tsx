import { getTopicBySlug } from "@/app/actions"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, AlertCircle, ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { TopicIcon } from "@/components/ui/TopicIcon"
import { GlassCard } from "@/components/ui/GlassCard"

export const revalidate = 0

export default async function TopicDetail({ params }: { params: { slug: string } }) {
  const topic = await getTopicBySlug(params.slug)
  
  if (!topic) return notFound()

  return (
    <main className="min-h-screen bg-[#090A0F] text-white pb-24">
      {/* Header Banner */}
      <div className="relative pt-12 pb-12 px-6 overflow-hidden border-b border-white/5 bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link href={topic.parentSlug ? `/topic/${topic.parentSlug}` : "/"} className="inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors mb-8 bg-neon-cyan/10 px-4 py-2 rounded-full text-sm font-medium border border-neon-cyan/20">
            <ArrowLeft className="w-4 h-4" />
            {topic.parentTitle ? `Kembali ke ${topic.parentTitle}` : "Kembali ke Beranda"}
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center border border-white/10 text-4xl shrink-0">
              <TopicIcon name={topic.icon} className="w-8 h-8 text-neon-cyan" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                {topic.title}
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
                {topic.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {(topic as any).subTopics ? (
        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Kategori {topic.title}</h2>
            <p className="text-slate-400">Pilih salah satu kategori di bawah ini untuk melihat persyaratan detailnya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {(topic as any).subTopics.map((sub: any, i: number) => (
              <ScrollReveal key={sub.id} delay={i * 0.1}>
                <Link href={`/topic/${sub.slug}`} className="block h-full">
                  <GlassCard className="h-full p-6 hover:border-neon-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center border border-white/10 text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <TopicIcon name={sub.icon} className="w-7 h-7 text-neon-cyan" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">{sub.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{sub.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto text-sm">
                      <span className="text-slate-500">{sub._count?.requirements || 0} Persyaratan</span>
                      <div className="flex items-center gap-2 text-neon-cyan">
                        <span>Lihat Infografis</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-6 mt-16">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Langkah & Persyaratan Utama</h2>
            <p className="text-slate-400">Ikuti urutan di bawah ini untuk kelancaran proses keimigrasian Anda.</p>
          </div>

          {topic.requirements?.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-3xl bg-white/5">
            <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <p className="text-slate-400">Belum ada data persyaratan untuk topik ini.</p>
          </div>
        ) : (
          <div className="relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-neon-cyan before:via-neon-violet before:to-transparent">
            {topic.requirements.map((req, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={req.id} delay={0.1} direction={isEven ? "right" : "left"}>
                  <div className={`relative flex items-center justify-between md:justify-normal group mb-12 last:mb-0 hover:scale-[1.02] transition-transform duration-300 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Step Marker */}
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#090A0F] bg-neon-cyan text-black font-black text-xl shadow-[0_0_30px_rgba(34,211,238,0.6)] shrink-0 md:order-1 relative z-10 transition-transform duration-500 group-hover:rotate-12 ${!isEven ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}`}>
                      {index + 1}
                    </div>
                    
                    {/* Content Card */}
                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-4rem)] p-6 md:p-8 rounded-3xl bg-black/60 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                      {/* Subtle inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-transparent pointer-events-none" />
                      
                      <h3 className="font-bold text-xl text-white mb-3 relative z-10 flex items-center gap-2">
                        {req.title}
                      </h3>
                      <p className="text-slate-300 text-base leading-relaxed relative z-10 whitespace-pre-line">
                        {req.description}
                      </p>
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
      )}

    </main>
  )
}
