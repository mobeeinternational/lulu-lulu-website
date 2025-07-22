import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const buttonSchema = z.object({
  label: z.string(),
  to: z.string().optional(),
  href: z.string().optional(),
  target: z.enum(['_blank', '_self', '_parent', '_top']).optional(),
  leadingIcon: z.string().optional(),
  trailingIcon: z.string().optional(),
  color: z.enum(['primary', 'secondary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  variant: z.enum(['solid', 'outline', 'ghost', 'link']).optional(),
  size: z.enum(['sm', 'md', 'lg', 'xl']).optional(),
  class: z.string().optional()
})

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string().optional(),
          headline: z.string().optional(),
          links: z.array(buttonSchema),
          orientation: z.enum(['vertical', 'horizontal']).optional(),
          reverse: z.boolean().optional()
        }),
        sections: z.array(z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          links: z.array(buttonSchema),
          children: z.array(z.any()),
          orientation: z.enum(['vertical', 'horizontal']).optional(),
          reverse: z.boolean().optional()
        }))
      })
    })
  }

})
