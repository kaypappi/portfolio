// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    extends: [
        'nuxt-seo-kit'
    ],
    css: ["@/assets/css/styles.css"],
    router: {

    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['nuxt-icon', '@nuxtjs/sanity'],
    sanity: {
        projectId: 'orygd7ym',
        dataset: 'production',
        apiVersion: '2021-10-21'
    },
    runtimeConfig: {

        public: {
            recaptcha: {
                siteKey: '6LdyK5QkAAAAACG78UQoZGLg3cw25WVXYFSVjELN',
                secretKey: '6LdyK5QkAAAAADEuLWOelKLChcpQxSmPnxhmJuAf'
            }, // can be overridden by NUXT_API_SECRET environment variable,
            trailingSlash: false,
            siteUrl: 'https://wesleyukadike.dev',
            siteName: 'Wesley Ukadike',
            siteDescription: 'Frontend Specialist',
            language: 'en',
        }
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
            ]
        }
    }
})
