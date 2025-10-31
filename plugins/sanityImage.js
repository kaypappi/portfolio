import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

export default defineNuxtPlugin(() => {
    const config = {
        projectId: 'orygd7ym',
        dataset: 'production',
        apiVersion: '2023-01-01',
        useCdn: true
    }

    const client = createClient(config)
    const builder = imageUrlBuilder(client)

    function urlFor(source) {
        return builder.image(source).auto('format')
    }

    return {
        provide: { urlFor }
    }
})
