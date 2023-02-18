// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    css: ["@/assets/css/styles.css"],
    router: {
        
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['nuxt-icon','@nuxtjs/sanity'],
    sanity: {
        projectId: 'orygd7ym',
        dataset: 'production',
        apiVersion: '2021-10-21'
    },
})
