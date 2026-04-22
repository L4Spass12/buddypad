import { defineCollection, z } from 'astro:content';
import siteConfig from '../../site.config.mjs';

const categories = siteConfig.categories as [string, ...string[]];

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default(siteConfig.article.author),
    category: z.enum(categories),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageTitle: z.string().optional(),
    featured: z.boolean().default(false),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number().positive(),
    compareAtPrice: z.number().positive().optional(),
    image: z.string(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    category: z.string(),
    shortDescription: z.string(),
    weight: z.number().int().positive(),
    stock: z.number().int().nonnegative().default(999),
    sku: z.string().optional(),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { blog, products };
