import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'experience_title',
            title: 'Experience Title',
            type: 'string',
        }),
        defineField({
            name: 'experience_subtitle',
            title: 'Experience Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'experiences',
            title: 'Experiences',
            type: 'array',
            of:[
                {type:'object',fields:[
                    {name:'logo',type:'image',title:'Logo'},
                    {name:'role',type:'string',title:'Role'},
                    {name:'company',type:'string',title:'Company'},
                    {name:'start',type:'string',title:'Start Date'},
                    {name:'end',type:'string',title:'End Date'},
                ]}
            ]
        }),
    ]
})