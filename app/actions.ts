"use server"

import prisma from "@/lib/prisma"

export async function getCountries() {
  try {
    const countries = await prisma.country.findMany({
      orderBy: { name: 'asc' }
    })
    return countries
  } catch (error) {
    console.error("Failed to fetch countries:", error)
    return []
  }
}

export async function getCountryWithProcedures(code: string) {
  try {
    const country = await prisma.country.findUnique({
      where: { code: code.toUpperCase() },
      include: {
        procedures: {
          orderBy: { stepNumber: 'asc' }
        }
      }
    })
    
    if (!country) return null

    // Group procedures by phase
    const groupedProcedures = {
      PRE_DEPARTURE: country.procedures.filter((p: { phase: string }) => p.phase === 'PRE_DEPARTURE'),
      DEPARTURE_DAY: country.procedures.filter((p: { phase: string }) => p.phase === 'DEPARTURE_DAY'),
      IN_FLIGHT_TRANSIT: country.procedures.filter((p: { phase: string }) => p.phase === 'IN_FLIGHT_TRANSIT'),
      ARRIVAL: country.procedures.filter((p: { phase: string }) => p.phase === 'ARRIVAL')
    }

    return { ...country, groupedProcedures }
  } catch (error) {
    console.error("Failed to fetch country:", error)
    return null
  }
}

export async function logQRScan(countryId: string, location?: string) {
  try {
    await prisma.qRScan.create({
      data: {
        countryId,
        location
      }
    })
  } catch (error) {
    console.error("Failed to log QR scan:", error)
  }
}
