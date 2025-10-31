// https://v3.nuxtjs.org/api/configuration/nuxt.config

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  compatibilityDate: "2025-10-30",
  css: ["@/assets/css/styles.css"],
  router: {},
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxtjs/sanity",
    "@nuxtjs/google-fonts",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
  ],
  googleFonts: {
    families: {
      Outfit: true,
      "Work+Sans": true,
    },
  },
  sanity: {
    projectId: "orygd7ym",
    dataset: "production",
    apiVersion: "2023-01-01",
    visualEditing: {
      token: process.env.NUXT_SANITY_API_READ_TOKEN, // required
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL, // required
      stega: true, // enable stega for presentation tool
    },
  },
  runtimeConfig: {
    public: {
      recaptcha: {
        siteKey: "6LdyK5QkAAAAACG78UQoZGLg3cw25WVXYFSVjELN",
        secretKey: "6LdyK5QkAAAAADEuLWOelKLChcpQxSmPnxhmJuAf",
      }, // can be overridden by NUXT_API_SECRET environment variable,
      trailingSlash: false,
      siteUrl: "https://wesleyukadike.dev",
      siteName: "Wesley Ukadike",
      siteDescription: "Frontend Specialist",
      language: "en",
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
    },
    routeRules: {},
  },
});
