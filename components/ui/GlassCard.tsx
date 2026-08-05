import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: "violet" | "cyan" | "green"
}

export function GlassCard({ className, children, glowColor = "violet", ...props }: GlassCardProps) {
  const glowClasses = {
    violet: "shadow-glow-violet",
    cyan: "shadow-glow-cyan",
    green: "shadow-glow-green",
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-slate-800 bg-glass backdrop-blur-md",
        glowClasses[glowColor],
        className
      )}
      {...props}
    >
      {/* Subtle top highlight for glass effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      {children}
    </div>
  )
}
