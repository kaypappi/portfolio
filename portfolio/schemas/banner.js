import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'banner_title',
            title: 'Banner Title',
            type: 'string',
        }),
        defineField({
            name: 'banner_image',
            title: 'Banner Image',
            type: 'image',
        }),
    ]
})