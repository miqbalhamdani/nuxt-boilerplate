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

  ssr: false,

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  css: ["@/assets/styles/styles.scss"],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
        },
      },
    ],
  ],

  devtools: { enabled: true },
});
