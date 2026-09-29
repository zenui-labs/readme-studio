import MarkdownIt from 'markdown-it'
import DOMPurify from 'dompurify'

// Renders README markdown the way GitHub does, so every preview in the app
// (editor, fullscreen modal, generator result) shows the same output.
// No attribute syntax plugin: GitHub has none, and it would swallow template
// placeholders such as "# {project_name}".

const ALERT_TITLES: Record<string, string> = {
    note: 'Note',
    tip: 'Tip',
    important: 'Important',
    warning: 'Warning',
    caution: 'Caution',
}

// GitHub alerts: "> [!NOTE]" blockquotes become styled callouts.
function githubAlerts(md: MarkdownIt) {
    md.core.ruler.before('inline', 'github_alerts', (state) => {
        const tokens = state.tokens
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].type !== 'blockquote_open') continue
            const inline = tokens[i + 2]
            if (tokens[i + 1]?.type !== 'paragraph_open' || inline?.type !== 'inline') continue

            const match = inline.content.match(/^\[!(note|tip|important|warning|caution)\][ \t]*(?:\n|$)/i)
            if (!match) continue

            const kind = match[1].toLowerCase()
            let depth = 0
            for (let j = i; j < tokens.length; j++) {
                if (tokens[j].type === 'blockquote_open') depth++
                if (tokens[j].type === 'blockquote_close' && --depth === 0) {
                    tokens[j].tag = 'div'
                    break
                }
            }

            tokens[i].tag = 'div'
            tokens[i].attrJoin('class', `markdown-alert markdown-alert-${kind}`)
            inline.content = inline.content.slice(match[0].length)

            // Drop the marker paragraph when it held nothing but "[!NOTE]".
            if (!inline.content.trim()) tokens.splice(i + 1, 3)

            const title = new state.Token('html_block', '', 0)
            title.content = `<p class="markdown-alert-title">${ALERT_TITLES[kind]}</p>\n`
            tokens.splice(i + 1, 0, title)
        }
    })
}

// Task lists: "- [ ] todo" and "- [x] done" render as checkboxes.
function taskLists(md: MarkdownIt) {
    md.core.ruler.after('inline', 'task_lists', (state) => {
        const tokens = state.tokens
        for (let i = 2; i < tokens.length; i++) {
            const inline = tokens[i]
            const first = inline.children?.[0]
            if (inline.type !== 'inline' || tokens[i - 2].type !== 'list_item_open' || first?.type !== 'text') continue

            const match = first.content.match(/^\[([ xX])\]\s+/)
            if (!match) continue

            first.content = first.content.slice(match[0].length)
            const checkbox = new state.Token('html_inline', '', 0)
            const checked = match[1] !== ' ' ? ' checked' : ''
            checkbox.content = `<input type="checkbox" class="task-list-item-checkbox" disabled${checked}> `
            inline.children!.unshift(checkbox)

            tokens[i - 2].attrJoin('class', 'task-list-item')
            for (let j = i - 3; j >= 0; j--) {
                const token = tokens[j]
                if ((token.type === 'bullet_list_open' || token.type === 'ordered_list_open') && token.level === tokens[i - 2].level - 1) {
                    if (!token.attrGet('class')?.includes('contains-task-list')) token.attrJoin('class', 'contains-task-list')
                    break
                }
            }
        }
    })
}

// Heading ids so table-of-contents links like "#installation" work.
function headingAnchors(md: MarkdownIt) {
    md.core.ruler.push('heading_anchors', (state) => {
        const used = new Map<string, number>()
        state.tokens.forEach((token, i) => {
            if (token.type !== 'heading_open' || token.attrGet('id')) return
            const base = state.tokens[i + 1].content
                .toLowerCase()
                .trim()
                .replace(/<[^>]*>/g, '')
                .replace(/[^\p{L}\p{N}\s_-]/gu, '')
                .replace(/\s/g, '-')
            const count = used.get(base) ?? 0
            used.set(base, count + 1)
            token.attrSet('id', count ? `${base}-${count}` : base)
        })
    })
}

// External links open in a new tab so the editor is never navigated away.
function externalLinks(md: MarkdownIt) {
    const fallback = md.renderer.rules.link_open ?? ((tokens, idx, options, _env, self) => self.renderToken(tokens, idx, options))
    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
        if (/^https?:\/\//i.test(tokens[idx].attrGet('href') ?? '')) {
            tokens[idx].attrSet('target', '_blank')
            tokens[idx].attrSet('rel', 'noopener noreferrer')
        }
        return fallback(tokens, idx, options, env, self)
    }
}

const md = new MarkdownIt({
    html: true,
    xhtmlOut: true,
    breaks: true,
    langPrefix: 'language-',
    linkify: true,
    typographer: true,
})
    .use(githubAlerts)
    .use(taskLists)
    .use(headingAnchors)
    .use(externalLinks)

// <picture> sources keyed on prefers-color-scheme follow the browser theme.
// Rewrite them to follow the app theme so previews match what the user picked.
function applyAppTheme(html: string, isDark: boolean) {
    return html.replace(
        /media=(["'])\s*\(\s*prefers-color-scheme\s*:\s*(dark|light)\s*\)\s*\1/gi,
        (_match, quote, scheme) => {
            const active = (scheme.toLowerCase() === 'dark') === isDark
            return `media=${quote}${active ? 'all' : 'not all'}${quote}`
        },
    )
}

export function renderMarkdown(source: string, isDark: boolean) {
    if (!source) return ''
    const html = DOMPurify.sanitize(md.render(source), {ADD_ATTR: ['target', 'align']})
    return applyAppTheme(html, isDark)
}
