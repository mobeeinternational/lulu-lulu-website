import { field, } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    ui: {
      colors: {
        primary: field({
          type: 'string',
          title: 'Primary',
          description: 'Primary color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'green',
          required: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose']
        }),
        neutral: field({
          type: 'string',
          title: 'Neutral',
          description: 'Neutral color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'slate',
          required: ['slate', 'gray', 'zinc', 'neutral', 'stone']
        })
      }
    }
  }
})

declare module '@nuxt/schema' {
  interface CustomAppConfig {
    ui: {
      icons: object
    }
  }
}
