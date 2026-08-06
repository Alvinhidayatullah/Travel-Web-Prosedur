"use server"

import { topicsData } from "@/lib/data"

export async function getTopics() {
  return topicsData;
}

export async function getTopicBySlug(slug: string) {
  const topLevel = topicsData.find(t => t.slug === slug);
  if (topLevel) return topLevel;

  for (const topic of topicsData) {
    if (topic.subTopics) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sub = topic.subTopics.find((st: any) => st.slug === slug);
      if (sub) return sub;
    }
  }

  return null;
}
