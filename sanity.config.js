import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {presentationTool} from '@sanity/presentation'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio2',

  projectId: 'orygd7ym',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000',
        preview: '/',
        draftMode: {
          enable: '/api/draft',
        },
      },
      locate: async ({documentId, documentType}) => {
        // For this portfolio site, most content is on the home page
        // Projects page for projects content
        if (documentType === 'projects') {
          return {
            documentId,
            documentType,
            path: '/projects',
          }
        }

        // All other content types are displayed on the home page
        return {
          documentId,
          documentType,
          path: '/',
        }
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
