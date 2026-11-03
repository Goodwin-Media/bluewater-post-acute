import {defineArrayMember, defineField, defineType} from 'sanity'

const img = (name: string, title: string) =>
  defineField({name, title, type: 'image', options: {hotspot: true}, fields: [{name: 'alt', title: 'Alt text', type: 'string'}]})

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'formerName', title: 'Former name', type: 'string'}),
    defineField({name: 'phone', type: 'string'}),
    defineField({name: 'fax', title: 'Referral fax', type: 'string'}),
    defineField({name: 'email', type: 'string'}),
    defineField({name: 'street', type: 'string'}),
    defineField({name: 'city', type: 'string'}),
    defineField({name: 'state', type: 'string'}),
    defineField({name: 'zip', type: 'string'}),
    defineField({name: 'ga4Id', title: 'Google Analytics 4 ID', type: 'string'}),
    defineField({name: 'careersUrl', title: 'Careers link', type: 'url'}),
  ],
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  groups: [{name: 'hero', title: 'Hero', default: true}, {name: 'sections', title: 'Sections'}, {name: 'faq', title: 'FAQ'}],
  fields: [
    defineField({name: 'heroTitle', type: 'string', group: 'hero'}),
    defineField({name: 'heroText', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'heroProof', title: 'Hero checkmarks', type: 'array', of: [{type: 'string'}], group: 'hero'}),
    defineField({name: 'heroVideos', title: 'Hero video clips', description: 'Short muted clips that crossfade behind the headline.', type: 'array', of: [{type: 'file', options: {accept: 'video/mp4'}}], group: 'hero'}),
    {...img('heroPoster', 'Hero still image'), group: 'hero'},
    defineField({name: 'payers', title: 'Accepted (shown as cards)', type: 'array', of: [{type: 'string'}], group: 'sections'}),
    defineField({name: 'plans', title: 'Insurance plan logos', type: 'array', group: 'sections', of: [defineArrayMember({type: 'object', fields: [{name: 'name', type: 'string'}, {name: 'logo', type: 'image'}]})]}),
    defineField({name: 'introTitle', type: 'string', group: 'sections'}),
    defineField({name: 'introText', type: 'text', rows: 3, group: 'sections'}),
    defineField({name: 'introPoints', type: 'array', of: [{type: 'string'}], group: 'sections'}),
    {...img('introImage', 'Intro image'), group: 'sections'},
    defineField({name: 'chapterTitle', title: 'New ownership title', type: 'string', group: 'sections'}),
    defineField({name: 'chapterText', title: 'New ownership paragraphs', type: 'array', of: [{type: 'text'}], group: 'sections'}),
    defineField({name: 'steps', type: 'array', group: 'sections', of: [defineArrayMember({type: 'object', fields: [{name: 'title', type: 'string'}, {name: 'body', type: 'text', rows: 2}]})]}),
    defineField({name: 'gallery', type: 'array', group: 'sections', of: [defineArrayMember({type: 'object', fields: [{name: 'image', type: 'image', options: {hotspot: true}}, {name: 'caption', type: 'string'}], preview: {select: {title: 'caption', media: 'image'}}})]}),
    {...img('lifeImage', 'Life at Bluewater image'), group: 'sections'},
    defineField({name: 'activities', type: 'array', of: [{type: 'string'}], group: 'sections'}),
    defineField({name: 'stats', type: 'array', group: 'sections', of: [defineArrayMember({type: 'object', fields: [{name: 'value', type: 'string'}, {name: 'label', type: 'string'}]})]}),
    defineField({name: 'faqs', title: 'FAQs', type: 'array', group: 'faq', of: [defineArrayMember({type: 'object', fields: [{name: 'q', title: 'Question', type: 'string'}, {name: 'a', title: 'Answer', type: 'text'}], preview: {select: {title: 'q'}}})]}),
  ],
  preview: {prepare: () => ({title: 'Home page'})},
})

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
    defineField({name: 'summary', type: 'text', rows: 2}),
    img('image', 'Image'),
    defineField({name: 'intro', type: 'text', rows: 4}),
    defineField({name: 'sections', type: 'array', of: [defineArrayMember({type: 'object', fields: [{name: 'heading', type: 'string'}, {name: 'text', type: 'text'}, {name: 'bullets', type: 'array', of: [{type: 'string'}]}], preview: {select: {title: 'heading'}}})]}),
    defineField({name: 'showOnHome', title: 'Show on home page', type: 'boolean', initialValue: true}),
    defineField({name: 'hasPage', title: 'Has its own page', type: 'boolean', initialValue: true}),
    defineField({name: 'order', type: 'number'}),
  ],
  orderings: [{title: 'Order', name: 'order', by: [{field: 'order', direction: 'asc'}]}],
})

export const leader = defineType({
  name: 'leader',
  title: 'Leadership',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'role', type: 'string'}),
    defineField({name: 'bio', type: 'text', rows: 3}),
    img('photo', 'Photo'),
    defineField({name: 'order', type: 'number'}),
  ],
  preview: {select: {title: 'name', subtitle: 'role', media: 'photo'}},
})

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Review',
  type: 'document',
  description: 'Only reviews written about Bluewater under the current ownership.',
  fields: [
    defineField({name: 'quote', type: 'text', rows: 4}),
    defineField({name: 'name', type: 'string'}),
    defineField({name: 'source', type: 'string', initialValue: 'Google'}),
    defineField({name: 'rating', type: 'number', initialValue: 5, validation: (r) => r.min(1).max(5)}),
    defineField({name: 'date', type: 'date'}),
  ],
  preview: {select: {title: 'name', subtitle: 'quote'}},
})

const blockContent = defineField({name: 'body', type: 'array', of: [{type: 'block'}, {type: 'image', options: {hotspot: true}, fields: [{name: 'alt', type: 'string'}]}]})

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    blockContent,
  ],
})

export const post = defineType({
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
    defineField({name: 'excerpt', type: 'text', rows: 3}),
    img('mainImage', 'Main image'),
    defineField({name: 'publishedAt', type: 'datetime'}),
    defineField({name: 'author', type: 'string'}),
    blockContent,
    defineField({name: 'faqs', title: 'FAQs', type: 'array', of: [defineArrayMember({type: 'object', fields: [{name: 'q', title: 'Question', type: 'string'}, {name: 'a', title: 'Answer', type: 'text'}]})]}),
    defineField({name: 'seoTitle', title: 'SEO title', type: 'string'}),
    defineField({name: 'seoDescription', title: 'SEO description', type: 'text', rows: 2}),
  ],
  orderings: [{title: 'Newest', name: 'newest', by: [{field: 'publishedAt', direction: 'desc'}]}],
})

export const schemaTypes = [siteSettings, homePage, service, leader, testimonial, page, post]
