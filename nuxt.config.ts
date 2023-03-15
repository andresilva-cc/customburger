// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@300&family=Signika:wght@300;400;600&display=swap' }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
})
