import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IMIGRASI & INFOGRAFIS",
  description: "Portal Infografis Prosedur Keimigrasian Republik Indonesia",
  icons: {
    icon: "/logo-imigrasi.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#090A0F]`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/logo-imigrasi.webp" 
                alt="Logo Imigrasi" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col justify-center -space-y-0.5">
                <h1 className="text-white font-bold text-sm md:text-base tracking-tight">Direktorat Jenderal Imigrasi</h1>
                <p className="text-slate-400 text-[10px] md:text-xs">Republik Indonesia</p>
              </div>
            </div>
          </div>
        </header>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
