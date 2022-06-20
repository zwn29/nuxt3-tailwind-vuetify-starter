import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// export default defineNuxtConfig({
//   buildModules: ['@nuxtjs/vuetify'],
//   css: ['~/assets/css/tailwind.css', 'vuetify/lib/styles/main.sass'],
//   build: {
//     postcss: {
//       postcssOptions: require('./postcss.config.js')
//     }
//   },
//   image: {
//     domains: ['https://images.unsplash.com']
//   },
//   vite: {
//     define: {
//       'process.env.DEBUG': false,
//     },
//   },
//   ssr: false
// })

export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', '~/assets/css/tailwind.css'],
  build: {
    transpile: ['vuetify'],
    postcss: {
      postcssOptions: require('./postcss.config.js')
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  vuetify: {
    treeShake: true
  },
  ssr: false
})
