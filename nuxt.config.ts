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
