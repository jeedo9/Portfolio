import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode'
  ],
  image: {
    quality: 90
  },
  // @ts-expect-error (unknown ts warning)
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  future: {
    compatibilityVersion: 4
  },
  scan: true,
  css: ['@/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  ssr: false,
  // routeRules: {
  //   '/**': {prerender: true}
  // }
  googleFonts: {
    families: {
      Lato: {
        wght: [400, 500, 600, 700],
        ital: [400, 500 , 600]
      },
      Poppins: '400..600',
    },
    display: 'fallback'
  },
  colorMode: {
    preference: 'system', 
    fallback: 'light', 
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    dataValue: 'theme',
    storageKey: 'theme'
  }
}) 