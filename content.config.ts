import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    products: defineCollection({
      type: 'data',
      source: 'products/*.yml',
      schema: z.object({
        name: z.string(),
        apport_calorique: z.number().default(0),
        image: z.string(),
        short_description: z.string(),
        long_description: z.string().optional(),
        category: z.enum(['BASES', 'INGREDIENTS', 'SAUCES', 'COMPOSITIONS SIGNATURE', 'PÂTES CHAUDES', 'BOISSONS', 'DESSERTS'])
      })
    })
  }
})
