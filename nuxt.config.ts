// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxt/scripts'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  content: {
    preview: {
      // force module initialization on dev env
      dev: true,
      api: 'https://api.nuxt.studio'
    }
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-07-15',
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'UPageHero', 'UPageSection', 'UPageGrid', 'UPageCard'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    },
    'content:file:beforeParse'(file) {
      console.log('Before Parse')
      console.log(JSON.stringify(file, null, 2))
      if (file.file?.id.endsWith('.md') && typeof file?.file?.body === 'string') {
        file.file.body = file.file.body.replace(
          /::([a-zA-Z0-9_-]+)\{\.([a-zA-Z0-9-_\s:/!]+)\}/g,
          (_, component, classes) => {
            return `::${component}{class="${classes.trim()}"}`
          }
        )
      }
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
