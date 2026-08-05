"use server"

import { topicsData } from "@/lib/data"

export async function getTopics() {
  return topicsData;
}

export async function getTopicBySlug(slug: string) {
  return topicsData.find(t => t.slug === slug) || null;
}
