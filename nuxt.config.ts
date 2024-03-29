// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["@/assets/scss/app.scss"],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
        },
      },
    ],
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
  ],

  typescript: {
    typeCheck: true,
  },

  devtools: { enabled: true },
});
