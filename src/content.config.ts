import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const rants = defineCollection({
	loader: glob({ base: './src/content/rants', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { rants };
