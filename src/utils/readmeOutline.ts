import {FileText, Hash, PanelTop} from "lucide-vue-next";
import {FunctionalComponent} from "vue";
import {ReadmeSections} from "@/data/readme-sections";

// The editor text is the only source of truth. The "Added Sections" list is
// derived from it by splitting at headings, and edits to the list (remove,
// reorder) are written back as text, so nothing the user typed is ever lost.

export interface OutlineSection {
    id: string
    name: string
    icon: FunctionalComponent
    content: string
}

const FENCE = /^\s{0,3}(`{3,}|~{3,})/
const MD_HEADING = /^\s{0,3}(#{1,2})\s+(.*?)\s*#*\s*$/
const HTML_HEADING = /^\s*<h([12])\b[^>]*>(.*?)(<\/h\1>|$)/i
// Headings inside these HTML blocks belong to the block (e.g. two-column tables).
const BLOCK_OPEN = /<(details|table|div|picture)\b/gi
const BLOCK_CLOSE = /<\/(details|table|div|picture)>/gi

const iconByName = ReadmeSections
    .filter(section => section.category === 'Sections')
    .map(section => ({keyword: section.name.toLowerCase(), icon: section.icon}))

function cleanTitle(raw: string) {
    return raw
        .replace(/<[^>]*>/g, '')
        .replace(/!\[[^\]]*]\([^)]*\)/g, '')
        .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
        .replace(/[*_`~]/g, '')
        .replace(/^[^\p{L}\p{N}]+/u, '')
        .trim()
}

function sectionIcon(name: string, level: number) {
    const lower = name.toLowerCase()
    const match = iconByName.find(({keyword}) => lower.includes(keyword))
    if (match) return match.icon
    return level === 1 ? Hash : FileText
}

export function parseOutline(markdown: string): OutlineSection[] {
    const sections: { name: string; icon: FunctionalComponent; lines: string[] }[] = []
    let current: (typeof sections)[number] | null = null
    let fence: string | null = null
    let htmlDepth = 0

    for (const line of markdown.split('\n')) {
        let heading: { level: number; text: string } | null = null

        const fenceMatch = line.match(FENCE)
        if (fence) {
            if (fenceMatch && fenceMatch[1][0] === fence[0] && fenceMatch[1].length >= fence.length) fence = null
        } else if (fenceMatch) {
            fence = fenceMatch[1]
        } else {
            if (htmlDepth === 0) {
                const md = line.match(MD_HEADING)
                const html = !md && line.match(HTML_HEADING)
                if (md) heading = {level: md[1].length, text: md[2]}
                else if (html) heading = {level: Number(html[1]), text: html[2]}
            }
            htmlDepth = Math.max(0, htmlDepth + (line.match(BLOCK_OPEN)?.length ?? 0) - (line.match(BLOCK_CLOSE)?.length ?? 0))
        }

        if (heading) {
            const name = cleanTitle(heading.text) || (heading.level === 1 ? 'Title' : 'Section')
            current = {name, icon: sectionIcon(name, heading.level), lines: [line]}
            sections.push(current)
        } else if (current) {
            current.lines.push(line)
        } else if (line.trim()) {
            current = {name: 'Header', icon: PanelTop, lines: [line]}
            sections.push(current)
        }
    }

    return sections.map((section, index) => ({
        id: `${index}:${section.name}`,
        name: section.name,
        icon: section.icon,
        content: section.lines.join('\n').replace(/\s+$/, ''),
    }))
}

export function joinOutline(sections: OutlineSection[]) {
    return sections.length ? `${sections.map(section => section.content).join('\n\n')}\n` : ''
}
