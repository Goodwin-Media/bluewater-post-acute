# Bluewater Post-Acute website

Astro static site + Sanity CMS (Studio at `/studio`), hosted on Netlify.

- Sanity project `rqqwt1dy`, dataset `production`
- Content falls back to `src/data/defaults.ts` when Sanity has none
- Starter photos/videos: `scripts/media-manifest.json` → GitHub Action "Fetch starter media" → `public/seed/`
- First run: open `/studio`, Starter content tool → Import starter content
- Old WordPress URLs: `public/_redirects`
- GA4: `G-YG72GB3P07` (Site settings in Studio)
- Forms (tour, referral, contact, greeting): Netlify Forms

## Publishing from Sanity
Create a Netlify build hook (Site configuration → Build & deploy → Build hooks), then add it as a Sanity webhook
(sanity.io/manage → API → Webhooks, trigger on create/update/delete) so published edits rebuild the site.
