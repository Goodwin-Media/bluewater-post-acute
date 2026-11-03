import {useState} from 'react'
import {useClient} from 'sanity'
import {Box, Button, Card, Heading, Stack, Text} from '@sanity/ui'
import {home, leaders, legalPages, services, site} from '../../src/data/defaults'

// One-time import: copies the starter content and the /seed media into Sanity.
// Safe to re-run; documents use fixed IDs and are replaced.
function toBlocks(lines: string[]) {
  return lines.map((line, i) => {
    const h2 = line.startsWith('## ')
    return {
      _type: 'block',
      _key: `b${i}`,
      style: h2 ? 'h2' : 'normal',
      markDefs: [],
      children: [{_type: 'span', _key: `s${i}`, text: h2 ? line.slice(3) : line, marks: []}],
    }
  })
}

export function SeedTool() {
  const client = useClient({apiVersion: '2025-01-01'})
  const [log, setLog] = useState<string[]>([])
  const [busy, setBusy] = useState(false)
  const say = (m: string) => setLog((l) => [...l, m])

  async function run() {
    setBusy(true)
    setLog([])
    const cache = new Map<string, string>()
    const upload = async (path: string, kind: 'image' | 'file') => {
      if (!path) return undefined
      if (cache.has(path)) return cache.get(path)
      const res = await fetch(path)
      if (!res.ok) {
        say(`Skipped ${path} (not found)`)
        return undefined
      }
      const blob = await res.blob()
      const asset = await client.assets.upload(kind, blob, {filename: path.split('/').pop()})
      cache.set(path, asset._id)
      say(`Uploaded ${path}`)
      return asset._id
    }
    const image = async (path: string) => {
      const id = await upload(path, 'image')
      return id ? {_type: 'image', asset: {_type: 'reference', _ref: id}} : undefined
    }
    const key = (i: number) => `k${i}`
    try {
      await client.createOrReplace({_id: 'siteSettings', _type: 'siteSettings', ...site})
      say('Saved site settings')

      const videos = []
      for (const [i, v] of home.heroVideos.entries()) {
        const id = await upload(v, 'file')
        if (id) videos.push({_type: 'file', _key: key(i), asset: {_type: 'reference', _ref: id}})
      }
      const gallery = []
      for (const [i, g] of home.gallery.entries()) gallery.push({_key: key(i), caption: g.caption, image: await image(g.image)})
      await client.createOrReplace({
        _id: 'homePage',
        _type: 'homePage',
        heroTitle: home.heroTitle,
        heroText: home.heroText,
        heroProof: home.heroProof,
        heroVideos: videos,
        heroPoster: await image(home.heroPoster),
        payers: home.payers,
        introTitle: home.introTitle,
        introText: home.introText,
        introPoints: home.introPoints,
        introImage: await image(home.introImage),
        chapterTitle: home.chapterTitle,
        chapterText: home.chapterText,
        steps: home.steps.map((s, i) => ({_key: key(i), ...s})),
        gallery,
        lifeImage: await image(home.lifeImage),
        activities: home.activities,
        stats: home.stats.map((s, i) => ({_key: key(i), ...s})),
        faqs: home.faqs.map((f, i) => ({_key: key(i), ...f})),
      })
      say('Saved home page')

      for (const [i, s] of services.entries()) {
        await client.createOrReplace({
          _id: `service-${s.slug}`,
          _type: 'service',
          title: s.title,
          slug: {_type: 'slug', current: s.slug},
          summary: s.summary,
          image: await image(s.image),
          intro: s.intro,
          sections: s.sections.map((x, j) => ({_key: key(j), ...x})),
          showOnHome: s.showOnHome,
          hasPage: s.hasPage,
          order: i,
        })
        say(`Saved service: ${s.title}`)
      }
      for (const [i, l] of leaders.entries()) {
        await client.createOrReplace({_id: `leader-${i}`, _type: 'leader', name: l.name, role: l.role, bio: l.bio, order: i})
      }
      say('Saved leadership placeholders')
      for (const p of legalPages) {
        await client.createOrReplace({_id: `page-${p.slug}`, _type: 'page', title: p.title, slug: {_type: 'slug', current: p.slug}, body: toBlocks(p.body)})
      }
      say('Saved legal pages')
      say('Done. Publishing triggers a site rebuild once the Netlify build hook is connected.')
    } catch (e: any) {
      say(`Error: ${e?.message || e}`)
    }
    setBusy(false)
  }

  return (
    <Box padding={5} style={{maxWidth: 760}}>
      <Stack space={4}>
        <Heading size={3}>Starter content</Heading>
        <Text muted>
          Copies the launch content and the starter photos and hero videos into Sanity. Run it once after the first deploy.
          Running it again replaces the home page, services, leadership and legal pages with the starter versions.
        </Text>
        <Box>
          <Button text={busy ? 'Importing…' : 'Import starter content'} tone="primary" disabled={busy} onClick={run} />
        </Box>
        {log.length > 0 && (
          <Card padding={3} radius={2} tone="transparent" border>
            <pre style={{margin: 0, whiteSpace: "pre-wrap", fontSize: 13}}>{log.join("\n")}</pre>
          </Card>
        )}
      </Stack>
    </Box>
  )
}
