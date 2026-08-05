"use client"

import * as React from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)

    return (
      <div 
        className={cn(
          "relative w-full max-w-2xl mx-auto transition-all duration-500", 
          isFocused ? "scale-105" : "scale-100",
          className
        )}
      >
        {/* Animated Background Glow on Focus */}
        <div className={cn(
          "absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-green opacity-0 blur-lg transition-opacity duration-500",
          isFocused && "opacity-30"
        )} />

        <div className="relative flex items-center bg-[#090A0F]/80 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-2 transition-all duration-500 hover:border-slate-500/80">
          <div className={cn(
            "flex items-center justify-center pl-4 pr-3 transition-colors duration-500",
            isFocused ? "text-neon-cyan" : "text-slate-500"
          )}>
            <Search className={cn("w-6 h-6", isFocused && "animate-pulse")} />
          </div>
          
          <input
            ref={ref}
            type="text"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-12 bg-transparent text-foreground text-lg placeholder:text-slate-500 focus:outline-none"
            placeholder="Cari negara tujuan (contoh: Jepang, Singapura)..."
            {...props}
          />
          
        </div>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"
