import { defineCollection, z } from "astro:content";

export const collections = {
  wiki: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string().optional(),
      category: z.string(),
      isWikiIndex: z.boolean().optional(),
    }),
  }),
};
