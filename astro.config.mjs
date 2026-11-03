import {defineConfig} from 'astro/config'
import sanity from '@sanity/astro'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import netlify from '@astrojs/netlify'

// The production site is fully static. The "visual-preview" branch deploy sets
// PUBLIC_SANITY_VISUAL_EDITING_ENABLED=true and renders on demand so the Studio's
// Presentation tool can show unpublished drafts with click-to-edit overlays.
const preview = process.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true'

export default defineConfig({
  site: 'https://bluewaterpostacute.com',
  trailingSlash: 'always',
  output: preview ? 'server' : 'static',
  adapter: preview ? netlify() : undefined,
  integrations: [
    sanity({
      projectId: 'rqqwt1dy',
      dataset: 'production',
      apiVersion: '2025-01-01',
      useCdn: false,
      studioBasePath: '/studio',
      stega: {studioUrl: 'https://bluewater-post-acute.netlify.app/studio'},
    }),
    react(),
    sitemap({filter: (page) => !page.includes('/studio') && !page.includes('/thank-you')}),
  ],
})
