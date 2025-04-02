import tailwindcss from "@tailwindcss/vite";
import { AUTHOR_LASTNAME, WEBSITE_DESCRIPTION , WEBSITE_NAME, AUTHOR_NAME} from "./app/utils/constants";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@pinia/nuxt'
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
  app: {
    head: {
      meta: [
      // Open Graph (Facebook, LinkedIn...)
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: WEBSITE_NAME },
      { property: 'og:description', content: WEBSITE_DESCRIPTION },
      { property: 'og:url', content: '' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: WEBSITE_DESCRIPTION },
      { name: 'twitter:creator', content: AUTHOR_NAME + ' ' + AUTHOR_LASTNAME },
      { name: 'twitter:site', content: WEBSITE_NAME },
      { name: 'twitter:url', content: '' },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },  
        { rel: 'canonical', href: '' },     
      ]
    },

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