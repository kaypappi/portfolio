// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    colorMode: {
        classSuffix: "",
    },
    css: ["@/assets/css/styles.css"],
    router: {
        
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@nuxtjs/color-mode','nuxt-icon','@nuxtjs/sanity'],
    sanity: {
        projectId: 'orygd7ym',
        dataset: 'production',
        apiVersion: '2021-10-21'
    },
})
