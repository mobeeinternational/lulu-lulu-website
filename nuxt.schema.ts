import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      fields: {
        colors: group({
          type: 'object'
        })
      }
    })
  }
})
