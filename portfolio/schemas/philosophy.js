import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'philosophy',
    title: 'philosophy',
    type: 'document',
    fields: [
        defineField({
            name: 'philosophy_title',
            title: 'Philosophy Title',
            type: 'string',
        }),
        defineField({
            name: 'philosophy_subtitle',
            title: 'Philosophy Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
    ]
})