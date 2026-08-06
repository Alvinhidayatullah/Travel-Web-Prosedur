import { getTopics } from "./actions"
import Link from "next/link"
import { GlassCard } from "@/components/ui/GlassCard"
import Web3Hero from "@/components/ui/Web3Hero"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import { TopicIcon } from "@/components/ui/TopicIcon"
import { ShieldCheck, ArrowRight } from "lucide-react"

export const revalidate = 0 // Disable cache for MVP so data is always fresh

export default async function Home() {
  const topics = await getTopics()

  return (
    <main className="min-h-screen bg-[#090A0F] text-white selection:bg-neon-cyan/30">
      <Web3Hero
        title={<>Portal Panduan Lengkap <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-cyan animate-pulse-slow">Keimigrasian & Perjalanan Ke Luar Negeri</span></>}
        subtitle="Temukan semua informasi resmi terkait prosedur keimigrasian, paspor, visa, dan syarat keberangkatan khusus."
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20 pt-4 relative z-10">

        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck className="w-8 h-8 text-neon-cyan" />
          <h2 className="text-2xl font-bold">Topik Panduan</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-6">
          {topics.map((topic, i) => (
            <ScrollReveal key={topic.id} delay={i * 0.1}>
              <Link href={`/topic/${topic.slug}`} className="block h-full">
                <GlassCard className="h-full p-6 hover:border-neon-cyan/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center border border-white/10 text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TopicIcon name={topic.icon} className="w-7 h-7 text-neon-cyan" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">{topic.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{topic.description}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto text-sm">
                    <span className="text-slate-500">{topic._count?.requirements || 0} Persyaratan</span>
                    <div className="flex items-center gap-2 text-neon-cyan">
                      <span>Lihat Infografis</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </Link>
            </ScrollReveal>
          ))}

          {topics.length === 0 && (
            <div className="col-span-full py-20 text-center text-slate-500 border border-dashed border-white/10 rounded-2xl">
              Belum ada panduan tersedia.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
