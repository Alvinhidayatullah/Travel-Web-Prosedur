import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090A0F", // Dark Canvas
        foreground: "#f8fafc",
        glass: "rgba(17, 24, 39, 0.7)", // Surface Glass
        neon: {
          cyan: "#22D3EE",
          violet: "#A855F7",
          green: "#34D399",
        },
      },
      boxShadow: {
        'glow-violet': '0 0 15px rgba(168,85,247,0.15)',
        'glow-cyan': '0 0 15px rgba(34,211,238,0.15)',
        'glow-green': '0 0 15px rgba(52,211,153,0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(168,85,247,0.15) 0%, rgba(9,10,15,0) 50%)',
      }
    },
  },
  plugins: [],
};
export default config;
