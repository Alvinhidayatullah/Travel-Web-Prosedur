"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ShieldCheck, Loader2 } from "lucide-react"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import { loginAction } from "@/app/actions/auth"

export default function SecureAdminLogin() {
  const [error, setError] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const result = await loginAction(formData)

    if (result.error) {
      setError(result.error)
      setIsLoading(false)
    } else if (result.success) {
      router.push("/secure-admin/dashboard")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-[#090A0F]">
      {/* Background styling for Web3 aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-violet/10 blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <GlassCard className="p-8 border-white/10" glowColor="cyan">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center border border-white/10 mb-4 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <ShieldCheck className="w-8 h-8 text-neon-cyan" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Secure Portal</h1>
            <p className="text-sm text-slate-400 mt-1 text-center">Authorized Access Only</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium">
                {error}
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Username</label>
              <input 
                type="text" 
                name="email" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-slate-600"
                placeholder="Masukkan username admin"
              />
            </div>
            
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <input 
                type="password" 
                name="password" 
                required
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-slate-600"
                placeholder="••••••••"
              />
            </div>

            <NeonButton 
              type="submit" 
              variant="cyan" 
              className="w-full py-3.5 mt-4 flex items-center justify-center gap-2 text-base font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Login to Portal"
              )}
            </NeonButton>
          </form>
        </GlassCard>
      </motion.div>
    </main>
  )
}
