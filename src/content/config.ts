import { z, defineCollection } from 'astro:content';

const team = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        title: z.string(),
        blurb: z.string().optional(),
        email: z.string().email().optional(),
    }),
});

const expeditions = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.string(),
            endDate: z.date(),
            image: image().optional(),
        }),
});

const news = defineCollection({
    type: 'content',
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            pinned: z.boolean().default(false),
            image: image(),
            link: z.string().url(),
        }),
});

export const collections = {
    team,
    expeditions,
};
