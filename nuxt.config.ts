// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  routeRules: {
    "/": {
      prerender: true,
    },
  },
  tailwindcss: {
    editorSupport: true,
  },

  modules: [
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/ui",
    "dayjs-nuxt",
    "nuxtjs-naive-ui",
  ],
})
