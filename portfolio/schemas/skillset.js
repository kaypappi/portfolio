import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'skillset',
    title: 'SkillSet',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Skillset Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Skillset Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of:[
                {type:'object',fields:[
                    {name:'icon',type:'image',title:'Icon'},
                    {name:'title',type:'string',title:'Title'},
                    {name:'desc',type:'string',title:'Description'},
                ]}
            ]
        }),
    ]
})