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
  modules: ["@nuxtjs/google-fonts", "@nuxt/fonts", "@nuxtjs/sitemap", '@nuxtjs/sanity','@nuxt/icon'],
  googleFonts: {
    families: {
      Outfit: {
        wght: [400, 500, 600, 700],
        ital: [400],
      },
      "Work+Sans": {
        wght: [400, 500, 600, 700],
      },
    },
    display: 'swap',
    preload: true,
    preconnect: true,
    subsets: ['latin', 'latin-ext'],
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
  site: {
    url: 'https://wesleyukadike.dev',
    name: 'Wesley Ukadike - Frontend Specialist',
    description: 'Frontend Specialist specializing in modern web development with Vue.js, Nuxt.js, and cutting-edge technologies.',
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
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Wesley Ukadike - Frontend Specialist',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Frontend Specialist specializing in modern web development with Vue.js, Nuxt.js, and cutting-edge technologies. Creating exceptional user experiences.' },
        { name: 'keywords', content: 'frontend developer, vue.js, nuxt.js, web development, javascript, typescript, portfolio' },
        { name: 'author', content: 'Wesley Ukadike' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Wesley Ukadike - Frontend Specialist' },
        { property: 'og:description', content: 'Frontend Specialist specializing in modern web development with Vue.js, Nuxt.js, and cutting-edge technologies.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://wesleyukadike.dev' },
        { property: 'og:image', content: 'https://wesleyukadike.dev/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Wesley Ukadike - Frontend Specialist' },
        { name: 'twitter:description', content: 'Frontend Specialist specializing in modern web development with Vue.js, Nuxt.js, and cutting-edge technologies.' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://cdn.sanity.io' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://wesleyukadike.dev' },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
      failOnError: false,
    },
    compressPublicAssets: true,
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
          },
        },
      },
    },
  },
  /* routeRules: {
    '/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
        'Cross-Origin-Embedder-Policy': 'credentialless',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Resource-Policy': 'cross-origin',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.recaptcha.net https://www.googletagmanager.com https://challenges.cloudflare.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://cdn.sanity.io https://orygd7ym.api.sanity.io https://orygd7ym.apicdn.sanity.io https://api.iconify.design https://vitals.vercel-analytics.com wss:; frame-src 'self' about: https://www.google.com https://www.recaptcha.net https://challenges.cloudflare.com https://*.sanity.build https://*.sanity.studio https://sanity.build https://sanity.studio; object-src 'none'; base-uri 'self'; form-action 'self';",
      },
    },
    '/': {
      headers: {
        'Cache-Control': 'public, max-age=3600',
      },
    },
  }, */
});
