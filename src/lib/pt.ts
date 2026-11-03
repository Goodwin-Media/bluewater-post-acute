import {toHTML} from '@portabletext/to-html'
import {img} from './content'

export const portable = (blocks: any[]) =>
  toHTML(blocks || [], {
    components: {
      types: {
        image: ({value}) => `<figure><img src="${img(value, 1200)}" alt="${(value.alt || '').replace(/"/g, '&quot;')}" loading="lazy"></figure>`,
      },
    },
  })

// Lines from starter content: "## " starts a heading.
export const lines = (ls: string[]) =>
  ls.map((l) => (l.startsWith('## ') ? `<h2>${esc(l.slice(3))}</h2>` : `<p>${esc(l)}</p>`)).join('')
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
