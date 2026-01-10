import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    status: z.string().optional(),
    featured: z.boolean().optional(),
    heroFigure: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    status: z.string().optional(),
    featured: z.boolean().optional(),
    heroFigure: z.string().optional(),
    heroAlt: z.string().optional(),
  }),
});

export const collections = {
  'case-studies': caseStudies,
  research,
};
