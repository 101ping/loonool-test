// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  app: {
    head: {
      title: 'Nuxt 4 Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Base Nuxt 4 project scaffolded without nuxi'
        }
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' }]
    }
  },
  css: ['~/assets/css/main.css'],
  modules: []
})


