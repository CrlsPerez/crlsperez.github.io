import { defineCollection, z } from 'astro:content';

const nullable = z.string().nullish().transform(val => val?.trim() || undefined);

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['image', 'video', 'text']).default('text'),
    title: nullable,
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Para posts de imagen
    image: nullable,
    alt: nullable,
    // Para posts de video (YouTube)
    youtube: nullable,
    caption: nullable,
  }),
});

export const collections = { posts };
