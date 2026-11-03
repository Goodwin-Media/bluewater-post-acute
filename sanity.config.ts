import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'
import {SeedTool} from './sanity/tools/SeedTool'

const singletons = new Set(['siteSettings', 'homePage'])

export default defineConfig({
  name: 'bluewater',
  title: 'Bluewater Post-Acute',
  projectId: 'rqqwt1dy',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('Home page').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),
            S.listItem().title('Site settings').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('leader').title('Leadership'),
            S.documentTypeListItem('testimonial').title('Reviews'),
            S.documentTypeListItem('post').title('Blog posts'),
            S.documentTypeListItem('page').title('Pages'),
          ]),
    }),
  ],
  tools: (prev) => [...prev, {name: 'starter', title: 'Starter content', component: SeedTool}],
  schema: {
    types: schemaTypes,
    templates: (t) => t.filter(({schemaType}) => !singletons.has(schemaType)),
  },
  document: {
    actions: (input, ctx) => (singletons.has(ctx.schemaType) ? input.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action)) : input),
  },
})
