import { defineCollection, z } from 'astro:content';

// Projekty spolku (S úctou k legendám, Klub legend, ...).
const projekty = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().default(99),
    perex: z.string(),
    cover: z.string().optional(),
    icon: z.string().default('star'),
    showOnHome: z.boolean().default(true),
  }),
});

// Články / aktuality. Pole `category` odkazuje na slug projektu (nebo "aktuality").
const clanky = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    perex: z.string(),
    category: z.string().default('aktuality'),
    cover: z.string().optional(),
    source: z.string().optional(),
  }),
});

// Členové rady spolku.
const rada = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(99),
    photo: z.string().optional(),
  }),
});

// Partneři a podporovatelé.
const partneri = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    order: z.number().default(99),
    url: z.string().optional(),
    logo: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projekty, clanky, rada, partneri };
