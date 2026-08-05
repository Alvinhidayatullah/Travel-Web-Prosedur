"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"
import { z } from "zod"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'travel3-super-secret-key-12345')

// Zod Schemas for Validation (Anti XSS & Injection)
const countrySchema = z.object({
  code: z.string().length(2).toUpperCase(),
  name: z.string().min(2).max(100),
  flagUrl: z.string().min(1).max(20),
  coverImage: z.string().url(),
  visaType: z.string().min(2).max(50),
  currency: z.string().min(1).max(10)
})

const procedureSchema = z.object({
  countryId: z.string().uuid(),
  phase: z.string(),
  title: z.string().min(3).max(200),
  description: z.string().max(1000)
})

// Helper function to check admin auth
async function checkAdmin() {
  const token = cookies().get('admin_token')?.value
  if (!token) throw new Error("Unauthorized")
  
  try {
    await jwtVerify(token, JWT_SECRET)
  } catch {
    throw new Error("Unauthorized")
  }
}

export async function addCountry(formData: FormData) {
  try {
    await checkAdmin()
    
    // Validate Input
    const parsed = countrySchema.parse({
      code: formData.get('code'),
      name: formData.get('name'),
      flagUrl: formData.get('flagUrl'),
      coverImage: formData.get('coverImage'),
      visaType: formData.get('visaType'),
      currency: formData.get('currency')
    })

    const country = await prisma.country.create({
      data: parsed
    })
    
    revalidatePath('/')
    revalidatePath('/destinasi')
    return { success: true, country }
  } catch (error) {
    // Anti Sensitive Data Exposure (No error details leaked)
    return { error: "Terjadi kesalahan sistem atau format data tidak valid." }
  }
}

export async function updateCountry(id: string, formData: FormData) {
  try {
    await checkAdmin()
    
    // Validate ID format
    if (!z.string().uuid().safeParse(id).success) {
      throw new Error("Invalid ID")
    }

    const parsed = countrySchema.parse({
      code: formData.get('code'),
      name: formData.get('name'),
      flagUrl: formData.get('flagUrl'),
      coverImage: formData.get('coverImage'),
      visaType: formData.get('visaType'),
      currency: formData.get('currency')
    })

    const country = await prisma.country.update({
      where: { id },
      data: parsed
    })
    
    revalidatePath('/')
    revalidatePath('/destinasi')
    revalidatePath(`/go/${parsed.code.toLowerCase()}`)
    return { success: true, country }
  } catch (error) {
    return { error: "Terjadi kesalahan saat memproses data." }
  }
}

export async function deleteCountry(id: string) {
  try {
    await checkAdmin()
    
    if (!z.string().uuid().safeParse(id).success) {
      throw new Error("Invalid ID")
    }
    
    await prisma.country.delete({
      where: { id }
    })
    
    revalidatePath('/')
    revalidatePath('/destinasi')
    return { success: true }
  } catch (error) {
    return { error: "Terjadi kesalahan sistem." }
  }
}

export async function addProcedure(formData: FormData) {
  try {
    await checkAdmin()
    
    const parsed = procedureSchema.parse({
      countryId: formData.get('countryId'),
      phase: formData.get('phase'),
      title: formData.get('title'),
      description: formData.get('description')
    })
    
    const p = await prisma.procedure.create({
      data: {
        ...parsed,
        stepNumber: 0 // Simplification for MVP
      }
    })
    
    revalidatePath('/')
    revalidatePath('/destinasi')
    return { success: true, procedure: p }
  } catch (error) {
    return { error: "Data prosedur tidak valid atau terjadi kesalahan sistem." }
  }
}

export async function deleteProcedure(id: string) {
  try {
    await checkAdmin()
    
    if (!z.string().uuid().safeParse(id).success) {
      throw new Error("Invalid ID")
    }
    
    await prisma.procedure.delete({
      where: { id }
    })
    
    revalidatePath('/')
    revalidatePath('/destinasi')
    return { success: true }
  } catch (error) {
    return { error: "Gagal menghapus data." }
  }
}
