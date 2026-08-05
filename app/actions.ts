"use server"

import prisma from "@/lib/prisma"

export async function getTopics() {
  return await prisma.topic.findMany({
    orderBy: { createdAt: 'asc' },
    include: {
      _count: {
        select: { requirements: true }
      }
    }
  })
}

export async function getTopicBySlug(slug: string) {
  return await prisma.topic.findUnique({
    where: { slug },
    include: {
      requirements: {
        orderBy: { stepNumber: 'asc' }
      }
    }
  })
}
