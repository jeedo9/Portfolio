import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
  ],
  image: {
    quality: 80
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  future: {
    compatibilityVersion: 4
  },

  css: ['@/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  // routeRules: {
  //   '/**': {prerender: true}
  // }
})