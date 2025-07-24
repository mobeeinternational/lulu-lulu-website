import { field, group } from '@nuxt/content/preview'

export default defineNuxtSchema({
  appConfig: {
    branding: group({
      title: 'Configuration de la marque',
      fields: {
        logo: field({
          type: 'media',
          title: 'Logo',
          default: '/logos/lulu-bleu.png'
        })
      }
    })
  }
})
