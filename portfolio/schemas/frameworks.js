import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'frameworks',
    title: 'Frameworks',
    type: 'document',
    fields: [
        defineField({
            name: 'frameworks',
            title: 'Frameworks',
            type: 'array',
            of:[
                {type:'object',fields:[
                    {name:'icon',type:'image',title:'Icon'},
                    {name:'title',type:'string',title:'Title'},
                ]}
            ]
        }),
    ]
})