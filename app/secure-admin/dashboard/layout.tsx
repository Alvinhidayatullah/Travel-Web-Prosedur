"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LogOut, Map, LayoutDashboard } from "lucide-react"
import { logoutAction } from "@/app/actions/auth"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAction()
    router.push('/secure-admin/login')
  }

  return (
    <div className="min-h-screen bg-[#090A0F] flex flex-col md:flex-row font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-black/40 border-r border-white/10 flex flex-col flex-shrink-0 relative z-20">
        <div className="p-6 border-b border-white/10">
          <Link href="/secure-admin/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 flex items-center justify-center border border-white/10">
              <span className="text-neon-cyan font-bold">T3</span>
            </div>
            <span className="text-white font-bold tracking-tight">Administration</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Link href="/secure-admin/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${pathname === '/secure-admin/dashboard'
              ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20'
              : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
            }`}>
            <Map className="w-5 h-5" />
            <span className="font-medium text-sm">Topik Panduan</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:text-red-400 hover:bg-red-400/10 transition-all w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto relative z-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-cyan/5 blur-[120px]" />
        </div>
        <div className="p-6 md:p-10 relative z-20">
          {children}
        </div>
      </main>
    </div>
  )
}
