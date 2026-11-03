import {sanityClient} from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'
import {stegaClean} from '@sanity/client/stega'
import * as d from '../data/defaults'

export const previewMode = import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true'
const token = import.meta.env.SANITY_API_READ_TOKEN

const builder = imageUrlBuilder(sanityClient)

// A field from Sanity can be an image object; defaults are plain paths.
export function img(src: any, width = 1600): string {
  if (!src) return ''
  if (typeof src === 'string') return src
  if (src.asset) return builder.image(src).width(width).auto('format').quality(78).url()
  return ''
}

async function q<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    if (previewMode) {
      if (!token) throw new Error('SANITY_API_READ_TOKEN is required for preview')
      return await sanityClient.fetch<T>(query, params, {
        perspective: 'drafts',
        stega: true,
        resultSourceMap: 'withKeyArraySelector',
        token,
        useCdn: false,
      } as any)
    }
    return await sanityClient.fetch<T>(query, params)
  } catch (e) {
    console.warn('[sanity] falling back to starter content:', (e as Error).message)
    return null
  }
}

const pick = <T,>(v: T | undefined | null, fallback: T): T =>
  v === undefined || v === null || (Array.isArray(v) && v.length === 0) || v === '' ? fallback : v

let siteCache: typeof d.site | null = null
export async function getSite() {
  if (siteCache && !previewMode) return siteCache
  const s = stegaClean(await q<any>(`*[_id=="siteSettings"][0]`))
  const out = {...d.site}
  if (s) for (const k of Object.keys(out) as (keyof typeof out)[]) (out as any)[k] = pick(s[k], out[k])
  siteCache = out
  return out
}

export async function getHome() {
  const h = await q<any>(`*[_id=="homePage"][0]{..., "videoUrls": heroVideos[].asset->url}`)
  const x = d.home
  return {
    heroTitle: pick(h?.heroTitle, x.heroTitle),
    heroText: pick(h?.heroText, x.heroText),
    heroProof: pick(h?.heroProof, x.heroProof),
    heroVideos: pick<string[]>(stegaClean(h?.videoUrls)?.filter(Boolean), x.heroVideos),
    heroPoster: img(pick(h?.heroPoster, x.heroPoster), 1920),
    payers: pick(h?.payers, x.payers),
    plans: (h?.plans || []).map((p: any) => ({name: p.name, logo: img(p.logo, 300)})),
    introTitle: pick(h?.introTitle, x.introTitle),
    introText: pick(h?.introText, x.introText),
    introPoints: pick(h?.introPoints, x.introPoints),
    introImage: img(pick(h?.introImage, x.introImage)),
    chapterTitle: pick(h?.chapterTitle, x.chapterTitle),
    chapterText: pick(h?.chapterText, x.chapterText),
    steps: pick(h?.steps, x.steps),
    gallery: pick(h?.gallery, x.gallery).map((g: any) => ({caption: g.caption, image: img(g.image, 900)})),
    lifeImage: img(pick(h?.lifeImage, x.lifeImage)),
    activities: pick(h?.activities, x.activities),
    stats: pick(h?.stats, x.stats),
    faqs: pick(h?.faqs, x.faqs),
  }
}

export type ServiceView = d.Service & {imageUrl: string}
export async function getServices(): Promise<ServiceView[]> {
  const s = await q<any[]>(`*[_type=="service"]|order(order asc){..., "slug": slug.current}`)
  const list = s && s.length ? s : d.services
  return list.map((v: any) => ({...v, slug: stegaClean(v.slug), hasPage: stegaClean(v.hasPage), showOnHome: stegaClean(v.showOnHome), sections: v.sections || [], imageUrl: img(v.image, 1200)}))
}

export async function getLeaders() {
  const l = await q<any[]>(`*[_type=="leader"]|order(order asc)`)
  const list = l && l.length ? l : d.leaders
  return list.map((v: any) => ({...v, photoUrl: img(v.photo, 300)}))
}

export async function getReviews() {
  return (await q<any[]>(`*[_type=="testimonial"]|order(date desc)[0...6]`)) || []
}

export async function getPage(slug: string) {
  const p = await q<any>(`*[_type=="page" && slug.current==$slug][0]`, {slug})
  if (p?.body?.length) return {title: p.title, blocks: p.body, lines: null as string[] | null}
  const f = d.legalPages.find((x) => x.slug === slug)!
  return {title: f.title, blocks: null, lines: f.body}
}

export async function getPosts() {
  const posts = (await q<any[]>(`*[_type=="post" && defined(slug.current)]|order(publishedAt desc){..., "slug": slug.current}`)) || []
  return posts.map((p: any) => ({...p, slug: stegaClean(p.slug)}))
}
