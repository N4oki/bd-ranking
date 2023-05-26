import { defineCollection, z } from "astro:content";

const ranking = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    updated_date: z
      .number()
      .transform((num) => (num ? new Date(num) : undefined)),
    heroImage: z.string().optional(),
  }),
});

const fighters = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    filepath: z.string(),
    record: z.object({
      total_fights: z.number(),
      win: z.object({
        total: z.number(),
        ko: z.number(),
        submission: z.number(),
        decisions: z.number(),
        percentage: z.object({
          total: z.number(),
          ko: z.number(),
          submission: z.number(),
          decisions: z.number(),
        }),
      }),
      lose: z.object({
        total: z.number(),
        ko: z.number(),
        submission: z.number(),
        decisions: z.number(),
        percentage: z.object({
          total: z.number(),
          ko: z.number(),
          submission: z.number(),
          decisions: z.number(),
        }),
      }),
      log: z.array(
        z.object({
          result: z.object({
            win: z.string().nullable(),
            lose: z.string().nullable(),
          }),
          opponent: z.string(),
          rule: z.string(),
          event_num: z.string(),
        })
      ),
    }),
    sns: z.object({
      twitter: z.string().nullable(),
      instagram: z.string().nullable(),
      youtube: z.string().nullable(),
    }),
  }),
});

export const collections = { ranking, fighters };
