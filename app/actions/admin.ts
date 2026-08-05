"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { jwtVerify } from "jose"
import { z } from "zod"

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'travel3-super-secret-key-12345')

// Zod Schemas
const topicSchema = z.object({
  slug: z.string().min(2).max(100),
  title: z.string().min(5).max(150),
  description: z.string().max(500),
  icon: z.string().min(1).max(50),
})

const requirementSchema = z.object({
  topicId: z.string().uuid(),
  title: z.string().min(3).max(200),
  description: z.string().max(1000),
})

async function checkAdmin() {
  const token = cookies().get('admin_token')?.value
  if (!token) throw new Error("Unauthorized")
  try { await jwtVerify(token, JWT_SECRET) } 
  catch { throw new Error("Unauthorized") }
}

export async function addTopic(formData: FormData) {
  try {
    await checkAdmin()
    
    // Slugify title if slug not provided correctly
    let rawSlug = formData.get('slug') as string
    if (!rawSlug) {
       rawSlug = (formData.get('title') as string).toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }
    
    const parsed = topicSchema.parse({
      slug: rawSlug,
      title: formData.get('title'),
      description: formData.get('description'),
      icon: formData.get('icon'),
    })

    const topic = await prisma.topic.create({
      data: parsed
    })
    
    revalidatePath('/')
    revalidatePath('/secure-admin/dashboard')
    return { success: true, topic }
  } catch (error) {
    return { error: "Terjadi kesalahan sistem atau format data tidak valid." }
  }
}

export async function updateTopic(id: string, formData: FormData) {
  try {
    await checkAdmin()
    if (!z.string().uuid().safeParse(id).success) throw new Error("Invalid ID")

    let rawSlug = formData.get('slug') as string
    if (!rawSlug) {
       rawSlug = (formData.get('title') as string).toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }

    const parsed = topicSchema.parse({
      slug: rawSlug,
      title: formData.get('title'),
      description: formData.get('description'),
      icon: formData.get('icon'),
    })

    const topic = await prisma.topic.update({
      where: { id },
      data: parsed
    })
    
    revalidatePath('/')
    revalidatePath('/secure-admin/dashboard')
    revalidatePath(`/topic/${parsed.slug}`)
    return { success: true, topic }
  } catch (error) {
    return { error: "Terjadi kesalahan saat memproses data." }
  }
}

export async function deleteTopic(id: string) {
  try {
    await checkAdmin()
    if (!z.string().uuid().safeParse(id).success) throw new Error("Invalid ID")
    
    await prisma.topic.delete({ where: { id } })
    revalidatePath('/')
    revalidatePath('/secure-admin/dashboard')
    return { success: true }
  } catch (error) {
    return { error: "Terjadi kesalahan sistem." }
  }
}

export async function addRequirement(formData: FormData) {
  try {
    await checkAdmin()
    
    const parsed = requirementSchema.parse({
      topicId: formData.get('topicId'),
      title: formData.get('title'),
      description: formData.get('description')
    })
    
    const count = await prisma.requirement.count({ where: { topicId: parsed.topicId } })

    const req = await prisma.requirement.create({
      data: {
        ...parsed,
        stepNumber: count + 1
      }
    })
    
    revalidatePath('/')
    revalidatePath(`/secure-admin/dashboard/topic/[slug]`)
    return { success: true, requirement: req }
  } catch (error) {
    return { error: "Data persyaratan tidak valid." }
  }
}

export async function deleteRequirement(id: string) {
  try {
    await checkAdmin()
    if (!z.string().uuid().safeParse(id).success) throw new Error("Invalid ID")
    
    await prisma.requirement.delete({ where: { id } })
    
    revalidatePath('/')
    return { success: true }
  } catch (error) {
    return { error: "Gagal menghapus data." }
  }
}
