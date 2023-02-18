import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: 'projects',
            title: 'Projects',
            type: 'array',
            of: [
                {
                    type: 'object', fields: [
                        { name: 'image', type: 'image', title: 'Image' },
                        { name: 'title', type: 'string', title: 'Title' },
                        { name: 'company', type: 'string', title: 'Company' },
                        { name: 'decs', type: 'string', title: 'Description' },
                        { name: 'url', type: 'url', title: 'Link' },
                        {name:'mobile',title:'Is this a mobile project?',type:'boolean',},
                        { name: 'tags', type: 'array', title: 'Tags', of: [{ type: 'string', name: 'tag', title: 'Tag' }] }
                    ]
                }
            ]
        }),
    ]
})