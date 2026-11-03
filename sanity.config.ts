import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {defineDocuments, defineLocations, presentationTool} from 'sanity/presentation'
import {schemaTypes} from './sanity/schemaTypes'

const singletons = new Set(['siteSettings', 'homePage'])
const PREVIEW_ORIGIN = 'https://visual-preview--bluewater-post-acute.netlify.app'

export default defineConfig({
  name: 'bluewater',
  title: 'Bluewater Post-Acute',
  projectId: 'rqqwt1dy',
  dataset: 'production',
  plugins: [
    presentationTool({
      title: 'Visual editor',
      previewUrl: {initial: PREVIEW_ORIGIN},
      allowOrigins: [PREVIEW_ORIGIN, 'http://localhost:*'],
      resolve: {
        mainDocuments: defineDocuments([
          {route: '/', filter: `_id == "homePage"`},
          {route: '/:slug/', filter: `(_type == "service" || _type == "page") && slug.current == $slug`},
          {route: '/blog/:slug/', filter: `_type == "post" && slug.current == $slug`},
        ]),
        locations: {
          homePage: defineLocations({message: 'Home page', locations: [{title: 'Home', href: '/'}]}),
          siteSettings: defineLocations({message: 'Used on every page', locations: [{title: 'Home', href: '/'}]}),
          service: defineLocations({
            select: {title: 'title', slug: 'slug.current', hasPage: 'hasPage'},
            resolve: (doc) => ({
              locations: [
                ...(doc?.hasPage ? [{title: doc.title || 'Service', href: `/${doc.slug}/`}] : []),
                {title: 'Home', href: '/'},
                {title: 'Services', href: '/services/'},
              ],
            }),
          }),
          leader: defineLocations({locations: [{title: 'Home', href: '/'}, {title: 'About', href: '/about-us/'}]}),
          testimonial: defineLocations({locations: [{title: 'Home', href: '/'}]}),
          page: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({locations: [{title: doc?.title || 'Page', href: `/${doc?.slug}/`}]}),
          }),
          post: defineLocations({
            select: {title: 'title', slug: 'slug.current'},
            resolve: (doc) => ({locations: [{title: doc?.title || 'Post', href: `/blog/${doc?.slug}/`}, {title: 'Blog', href: '/blog/'}]}),
          }),
        },
      },
    }),
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
  schema: {
    types: schemaTypes,
    templates: (t) => t.filter(({schemaType}) => !singletons.has(schemaType)),
  },
  document: {
    actions: (input, ctx) => (singletons.has(ctx.schemaType) ? input.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action)) : input),
  },
})
