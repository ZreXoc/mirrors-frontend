// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    'nuxt-icon',
    'dayjs-nuxt',
    '@nuxt/ui',
    '@nuxt/eslint',
  ],
  ssr: true,
  colorMode: {
    classSuffix: '',
  },
  devtools: { enabled: true },
  css: ['@/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ui: {
    icons: 'all',
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
})
