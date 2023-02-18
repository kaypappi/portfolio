import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'SubTitle',
            type: 'string',
        }),
        defineField({
            name: 'cv',
            title: 'CV',
            type: 'file',
        }),
        defineField({
            name: 'banner_image',
            title: 'Banner Image',
            type: 'image',
        }),
        defineField({
            name: 'socials',
            title: 'Socials',
            type: 'array',
            of: [{
                type: 'object',
                fields: [{
                    name: 'title',
                    title: 'Title',
                    type: 'string'
                },
                {
                    name: 'icon',
                    title: 'Icon',
                    type: 'string'
                }, {
                    name: 'link',
                    title: 'Link',
                    type: 'url'
                },]
            }]
        })
    ]
})