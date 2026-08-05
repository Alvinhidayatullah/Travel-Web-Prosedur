"use client"

import * as React from "react"
import { notFound } from "next/navigation"
import { Check, Circle, ChevronLeft, Download, Loader2 } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { getCountryWithProcedures, logQRScan } from "@/app/actions"
import { GlassCard } from "@/components/ui/GlassCard"
import { NeonButton } from "@/components/ui/NeonButton"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

export default function ProcedurePage({ params }: { params: { code: string } }) {
  const [countryData, setCountryData] = React.useState<any>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    async function loadData() {
      const data = await getCountryWithProcedures(params.code)
      if (!data) {
        setCountryData('not-found')
        return
      }
      setCountryData(data)
      setIsLoading(false)
      // Log QR Scan asynchronously
      logQRScan(data.id, 'Web Access').catch(console.error)
    }
    loadData()
  }, [params.code])

  if (countryData === 'not-found') {
    notFound()
  }

  const country = countryData


  const [completedSteps, setCompletedSteps] = React.useState<number[]>([])
  const [isGeneratingPdf, setIsGeneratingPdf] = React.useState(false)
  const pdfRef = React.useRef<HTMLDivElement>(null)

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) ? prev.filter(id => id !== stepId) : [...prev, stepId]
    )
  }

  const totalSteps = country?.procedures?.length || 0
  const progressPercentage = totalSteps === 0 ? 0 : Math.round((completedSteps.length / totalSteps) * 100)

  if (isLoading || !country) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-neon-cyan" />
      </main>
    )
  }

  const handleDownloadPdf = async () => {
    if (!pdfRef.current) return
    setIsGeneratingPdf(true)
    
    try {
      const canvas = await html2canvas(pdfRef.current, { scale: 2, useCORS: true })
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })
      
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight)
      pdf.save(`Panduan-Perjalanan-${country.name}.pdf`)
    } catch (error) {
      console.error("Failed to generate PDF", error)
    } finally {
      setIsGeneratingPdf(false)
    }
  }

  const renderPhase = (title: string, phaseKey: string) => {
    const procedures = country.groupedProcedures[phaseKey] || []
    if (procedures.length === 0) return null

    return (
    <div className="mb-10 relative">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-violet/30 to-neon-cyan/30 flex items-center justify-center border border-white/10 backdrop-blur-sm">
          <span className="text-white font-semibold">{title.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-medium text-white tracking-wide">{title}</h3>
      </div>
      
      <div className="space-y-4 pl-5 border-l border-white/10 ml-5">
        {procedures.map((step: any, idx: number) => {
          const isCompleted = completedSteps.includes(step.id)
          return (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="relative pl-6"
            >
              {/* Timeline Connector */}
              <div className="absolute -left-[29px] top-1/2 -translate-y-1/2 bg-[#090A0F] py-2">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isCompleted ? 'bg-neon-cyan shadow-[0_0_10px_rgba(6,182,212,0.8)]' : 'bg-slate-700'
                }`} />
              </div>

              <div 
                onClick={() => toggleStep(step.id)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden relative
                  ${isCompleted ? 'bg-neon-cyan/5 border-neon-cyan/30' : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'}
                `}
              >
                {/* Modern glow effect on hover/active */}
                <div className={`absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/[0.03] to-transparent opacity-0 transition-opacity duration-500 ${isCompleted ? 'opacity-100' : 'group-hover:opacity-100'}`} />
                
                <div className="p-4 flex items-start gap-4 relative z-10">
                  <div className={`mt-0.5 w-6 h-6 rounded-md border flex items-center justify-center transition-all duration-300 ${
                    isCompleted ? 'bg-neon-cyan border-neon-cyan text-black' : 'border-slate-600 group-hover:border-slate-400'
                  }`}>
                    <Check className={`w-4 h-4 transition-opacity duration-300 ${isCompleted ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                  
                  <div>
                    <h4 className={`text-base font-medium mb-1 transition-colors ${
                      isCompleted ? 'text-neon-cyan' : 'text-slate-200'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm transition-colors leading-relaxed ${
                      isCompleted ? 'text-slate-400' : 'text-slate-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
    )
  }

  return (
    <main className="min-h-screen pb-20 font-sans">
      {/* Header / Hero - More elegant, less huge */}
      <div className="relative h-64 md:h-[320px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/40 z-10" />
        <img 
          src={country.coverImage} 
          alt={country.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-[#090A0F]/60 to-transparent z-10" />
        
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 pb-10">
          <div className="max-w-5xl mx-auto">
            <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors text-sm font-medium">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Kembali ke destinasi
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3 tracking-tight mb-4">
                  {country.name}
                  <span className="text-3xl">{country.flagUrl}</span>
                </h1>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-md">
                    Mata Uang: {country.currency}
                  </span>
                  <span className={`px-3 py-1.5 rounded-lg border text-xs font-medium backdrop-blur-md ${
                    country.visaType === "Bebas Visa" 
                      ? "bg-neon-green/10 text-neon-green border-neon-green/30" 
                      : "bg-neon-violet/10 text-neon-violet border-neon-violet/30"
                  }`}>
                    {country.visaType}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 mt-12 flex flex-col-reverse lg:grid lg:grid-cols-[1fr_320px] gap-12">
        {/* Timeline Content */}
        <div className="pb-10">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Checklist Prosedur</h2>
            <p className="text-slate-400 text-sm">Persiapkan keberangkatan Anda dengan panduan bertahap.</p>
          </div>
          {renderPhase("Pra-Keberangkatan", "PRE_DEPARTURE")}
          {renderPhase("Hari Keberangkatan", "DEPARTURE_DAY")}
          {renderPhase("Penerbangan & Transit", "IN_FLIGHT_TRANSIT")}
          {renderPhase("Kedatangan", "ARRIVAL")}
        </div>

        {/* Sidebar - Positioned at top for mobile via flex-col-reverse */}
        <div className="space-y-6 lg:mt-0">
          <div className="sticky top-8 bg-[#090A0F]/80 backdrop-blur-2xl rounded-3xl p-6 border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            <h3 className="text-lg font-semibold text-white mb-1">Status Persiapan</h3>
            <p className="text-slate-400 text-xs mb-6">
              Lacak kesiapan dokumen dan prosedur Anda.
            </p>
            
            <div className="mb-8">
              <div className="flex justify-between items-end text-sm mb-3">
                <span className="text-slate-300 font-medium text-xs">Penyelesaian</span>
                <span className={`text-xl font-bold ${progressPercentage === 100 ? 'text-neon-green' : 'text-neon-cyan'}`}>
                  {progressPercentage}%
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className={`h-full relative z-10 transition-colors duration-500 rounded-full ${
                    progressPercentage === 100 ? 'bg-neon-green' : 'bg-gradient-to-r from-neon-violet to-neon-cyan'
                  }`} 
                />
              </div>
            </div>
            
            <button 
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl py-3 text-sm font-medium transition-all"
            >
              {isGeneratingPdf ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Download className="w-4 h-4" />
              )}
              {isGeneratingPdf ? 'Menyiapkan Dokumen...' : 'Unduh PDF Offline'}
            </button>
          </div>
        </div>
      </div>

      {/* Hidden PDF Container */}
      <div className="absolute -left-[9999px] top-0">
        <div ref={pdfRef} className="w-[800px] bg-white p-14 text-black font-sans">
          <div className="border-b-2 border-slate-200 pb-6 mb-10 flex justify-between items-end">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">Panduan Perjalanan</h1>
              <h2 className="text-2xl font-medium text-slate-600 flex items-center gap-2">
                {country.name} <span className="text-3xl">{country.flagUrl}</span>
              </h2>
            </div>
            <div className="text-right text-sm text-slate-500 space-y-1">
              <p className="font-medium">Mata Uang: <span className="text-slate-900">{country.currency}</span></p>
              <p className="font-medium">Visa: <span className="text-slate-900">{country.visaType}</span></p>
            </div>
          </div>
          
          <div className="space-y-10">
            {['PRE_DEPARTURE', 'DEPARTURE_DAY', 'IN_FLIGHT_TRANSIT', 'ARRIVAL'].map((key) => {
              const procedures = country.groupedProcedures[key] || []
              if (procedures.length === 0) return null
              
              const phaseNames: Record<string, string> = {
                'PRE_DEPARTURE': 'Fase Pra-Keberangkatan',
                'DEPARTURE_DAY': 'Hari Keberangkatan',
                'IN_FLIGHT_TRANSIT': 'Di Dalam Penerbangan & Transit',
                'ARRIVAL': 'Kedatangan'
              };
              const phaseTitle = phaseNames[key] || key.replace(/_/g, ' ');

              return (
                <div key={key} className="mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-5 pb-2 border-b border-slate-100 uppercase tracking-wide">
                    {phaseTitle}
                  </h3>
                  <div className="space-y-5">
                    {procedures.map((step: any) => (
                      <div key={step.id} className="flex gap-4 items-start">
                        <div className={`mt-0.5 w-5 h-5 flex-shrink-0 border-2 rounded flex items-center justify-center ${completedSteps.includes(step.id) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'}`}>
                          {completedSteps.includes(step.id) && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                        </div>
                        <div className="flex-1 -mt-[2px]">
                          <h4 className="text-base font-bold text-slate-900 mb-1 leading-tight">{step.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
