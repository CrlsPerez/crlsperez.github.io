import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['image', 'video', 'text']).default('text'),
    title: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Para posts de imagen
    image: z.string().optional(),
    alt: z.string().optional(),
    // Para posts de video (YouTube)
    youtube: z.string().optional(),
    caption: z.string().optional(),
  }),
});

export const collections = { posts };
