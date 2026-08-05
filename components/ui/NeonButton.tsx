import * as React from "react"
import { cn } from "@/lib/utils"

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "cyan" | "green"
}

export const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const variants = {
      primary: "border-neon-violet text-neon-violet hover:bg-neon-violet hover:text-white hover:shadow-glow-violet",
      cyan: "border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-white hover:shadow-glow-cyan",
      green: "border-neon-green text-neon-green hover:bg-neon-green hover:text-black hover:shadow-glow-green",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg border px-6 py-2.5 text-sm font-medium transition-all duration-300",
          "backdrop-blur-sm",
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)
NeonButton.displayName = "NeonButton"
