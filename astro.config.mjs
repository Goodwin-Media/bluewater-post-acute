import {defineConfig} from 'astro/config'
import sanity from '@sanity/astro'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://bluewaterpostacute.com',
  trailingSlash: 'always',
  integrations: [
    sanity({
      projectId: 'rqqwt1dy',
      dataset: 'production',
      apiVersion: '2025-01-01',
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
    sitemap({filter: (page) => !page.includes('/studio') && !page.includes('/thank-you')}),
  ],
})
