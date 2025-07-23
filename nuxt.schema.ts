import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    ui: field({
      type: 'object',
      fields: {
        colors: field({
          type: 'object',
          fields: {
            primary: field({
              type: 'string',
              title: 'Primary',
              description: 'Primary color of your UI.',
              icon: 'i-mdi-palette-outline',
              default: 'green'
            }),
            neutral: field({
              type: 'string',
              title: 'Neutral',
              description: 'Neutral color of your UI.',
              icon: 'i-mdi-palette-outline',
              default: 'slate'
            })
          }
        })
      }
    })
  }
})

// declare module '@nuxt/schema' {
//   interface CustomAppConfig {
//     ui: {
//       icons: object
//     }
//   }
// }
