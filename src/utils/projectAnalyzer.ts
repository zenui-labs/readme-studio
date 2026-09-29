// Turns raw GitHub data into a compact, factual project summary the AI can
// write an accurate README from, instead of guessing from a root file listing.

export interface TreeEntry {
    path: string
    type: 'file' | 'dir'
    size?: number
}

type SignalGroup = 'framework' | 'ui' | 'data' | 'ai' | 'tooling' | 'testing' | 'devops'

interface Signal {
    name: string
    group: SignalGroup
    // Exact npm package names; a trailing "*" matches a scope or prefix.
    js?: string[]
    // Matched against non-npm manifests (requirements, pyproject, Cargo, go.mod, Gemfile, ...).
    text?: RegExp
    // Matched against file paths.
    files?: RegExp
}

const SIGNALS: Signal[] = [
    // Frameworks
    {name: 'Next.js', group: 'framework', js: ['next'], files: /(^|\/)next\.config\.\w+$/},
    {name: 'Nuxt', group: 'framework', js: ['nuxt'], files: /(^|\/)nuxt\.config\.\w+$/},
    {name: 'Remix', group: 'framework', js: ['@remix-run/*']},
    {name: 'SvelteKit', group: 'framework', js: ['@sveltejs/kit']},
    {name: 'Astro', group: 'framework', js: ['astro']},
    {name: 'React', group: 'framework', js: ['react']},
    {name: 'Vue', group: 'framework', js: ['vue']},
    {name: 'Svelte', group: 'framework', js: ['svelte']},
    {name: 'Angular', group: 'framework', js: ['@angular/core']},
    {name: 'SolidJS', group: 'framework', js: ['solid-js']},
    {name: 'Express', group: 'framework', js: ['express']},
    {name: 'Fastify', group: 'framework', js: ['fastify']},
    {name: 'NestJS', group: 'framework', js: ['@nestjs/core']},
    {name: 'Koa', group: 'framework', js: ['koa']},
    {name: 'Hono', group: 'framework', js: ['hono']},
    {name: 'Electron', group: 'framework', js: ['electron']},
    {name: 'Tauri', group: 'framework', js: ['@tauri-apps/api'], files: /(^|\/)src-tauri\//},
    {name: 'React Native', group: 'framework', js: ['react-native']},
    {name: 'Expo', group: 'framework', js: ['expo']},
    {name: 'Flutter', group: 'framework', text: /^\s*flutter:\s*$/m},
    {name: 'Django', group: 'framework', text: /\bdjango\b/i, files: /(^|\/)manage\.py$/},
    {name: 'Flask', group: 'framework', text: /\bflask\b/i},
    {name: 'FastAPI', group: 'framework', text: /\bfastapi\b/i},
    {name: 'Streamlit', group: 'framework', text: /\bstreamlit\b/i},
    {name: 'Gradio', group: 'framework', text: /\bgradio\b/i},
    {name: 'Spring Boot', group: 'framework', text: /spring-boot/i},
    {name: 'Laravel', group: 'framework', text: /laravel\/framework/i},
    {name: 'Symfony', group: 'framework', text: /symfony\/framework-bundle/i},
    {name: 'Ruby on Rails', group: 'framework', text: /gem ['"]rails['"]/},
    {name: 'Actix Web', group: 'framework', text: /\bactix-web\b/},
    {name: 'Axum', group: 'framework', text: /^\s*axum\s*=/m},
    {name: 'Rocket', group: 'framework', text: /^\s*rocket\s*=/m},
    {name: 'Bevy', group: 'framework', text: /^\s*bevy\s*=/m},
    {name: 'Gin', group: 'framework', text: /gin-gonic\/gin/},
    {name: 'Echo', group: 'framework', text: /labstack\/echo/},
    {name: 'Fiber', group: 'framework', text: /gofiber\/fiber/},
    {name: 'Docusaurus', group: 'framework', js: ['@docusaurus/core']},
    {name: 'VitePress', group: 'framework', js: ['vitepress']},
    {name: 'MkDocs', group: 'framework', files: /(^|\/)mkdocs\.ya?ml$/},
    {name: 'Phaser', group: 'framework', js: ['phaser']},
    {name: 'Unity', group: 'framework', files: /(^|\/)ProjectSettings\/ProjectVersion\.txt$/},
    {name: 'Godot', group: 'framework', files: /(^|\/)project\.godot$/},

    // UI and state
    {name: 'Tailwind CSS', group: 'ui', js: ['tailwindcss', '@tailwindcss/*'], files: /(^|\/)tailwind\.config\.\w+$/},
    {name: 'Sass', group: 'ui', js: ['sass']},
    {name: 'styled-components', group: 'ui', js: ['styled-components']},
    {name: 'MUI', group: 'ui', js: ['@mui/material']},
    {name: 'Chakra UI', group: 'ui', js: ['@chakra-ui/react']},
    {name: 'Radix UI', group: 'ui', js: ['@radix-ui/*']},
    {name: 'Bootstrap', group: 'ui', js: ['bootstrap']},
    {name: 'Framer Motion', group: 'ui', js: ['framer-motion', 'motion']},
    {name: 'Three.js', group: 'ui', js: ['three']},
    {name: 'D3', group: 'ui', js: ['d3']},
    {name: 'Redux', group: 'ui', js: ['redux', '@reduxjs/toolkit']},
    {name: 'Zustand', group: 'ui', js: ['zustand']},
    {name: 'Pinia', group: 'ui', js: ['pinia']},
    {name: 'TanStack Query', group: 'ui', js: ['@tanstack/react-query', '@tanstack/vue-query']},

    // Data
    {name: 'Prisma', group: 'data', js: ['prisma', '@prisma/client'], files: /(^|\/)schema\.prisma$/},
    {name: 'Drizzle ORM', group: 'data', js: ['drizzle-orm']},
    {name: 'TypeORM', group: 'data', js: ['typeorm']},
    {name: 'Sequelize', group: 'data', js: ['sequelize']},
    {name: 'Mongoose', group: 'data', js: ['mongoose']},
    {name: 'MongoDB', group: 'data', js: ['mongodb'], text: /\bpymongo\b|mongo-driver/i},
    {name: 'PostgreSQL', group: 'data', js: ['pg', 'postgres'], text: /\bpsycopg|\bpgx\b/i},
    {name: 'Redis', group: 'data', js: ['redis', 'ioredis'], text: /^\s*redis\b/im},
    {name: 'SQLAlchemy', group: 'data', text: /\bsqlalchemy\b/i},
    {name: 'Supabase', group: 'data', js: ['@supabase/supabase-js']},
    {name: 'Firebase', group: 'data', js: ['firebase', 'firebase-admin']},
    {name: 'GraphQL', group: 'data', js: ['graphql']},
    {name: 'tRPC', group: 'data', js: ['@trpc/server']},
    {name: 'Socket.IO', group: 'data', js: ['socket.io', 'socket.io-client']},

    // AI, ML and bots
    {name: 'OpenAI', group: 'ai', js: ['openai'], text: /^\s*openai\b/im},
    {name: 'Anthropic Claude', group: 'ai', js: ['@anthropic-ai/sdk'], text: /^\s*anthropic\b/im},
    {name: 'Google Gemini', group: 'ai', js: ['@google/generative-ai', '@google/genai'], text: /google-generativeai|google-genai/i},
    {name: 'LangChain', group: 'ai', js: ['langchain', '@langchain/*'], text: /\blangchain\b/i},
    {name: 'Vercel AI SDK', group: 'ai', js: ['ai', '@ai-sdk/*']},
    {name: 'Hugging Face Transformers', group: 'ai', js: ['@huggingface/transformers'], text: /^\s*transformers\b/im},
    {name: 'PyTorch', group: 'ai', text: /^\s*torch\b/im},
    {name: 'TensorFlow', group: 'ai', js: ['@tensorflow/tfjs'], text: /\btensorflow\b/i},
    {name: 'scikit-learn', group: 'ai', text: /scikit-learn|\bsklearn\b/i},
    {name: 'pandas', group: 'ai', text: /^\s*pandas\b/im},
    {name: 'NumPy', group: 'ai', text: /^\s*numpy\b/im},
    {name: 'Jupyter', group: 'ai', files: /\.ipynb$/},
    {name: 'discord.js', group: 'ai', js: ['discord.js']},
    {name: 'discord.py', group: 'ai', text: /discord\.py|^\s*py-cord\b|^\s*nextcord\b/im},
    {name: 'Telegram Bot', group: 'ai', js: ['telegraf', 'grammy', 'node-telegram-bot-api'], text: /python-telegram-bot|aiogram/i},
    {name: 'Slack Bolt', group: 'ai', js: ['@slack/bolt']},

    // Tooling
    {name: 'TypeScript', group: 'tooling', js: ['typescript'], files: /(^|\/)tsconfig\.json$/},
    {name: 'Vite', group: 'tooling', js: ['vite']},
    {name: 'Webpack', group: 'tooling', js: ['webpack']},
    {name: 'Rollup', group: 'tooling', js: ['rollup']},
    {name: 'esbuild', group: 'tooling', js: ['esbuild']},
    {name: 'tsup', group: 'tooling', js: ['tsup']},
    {name: 'ESLint', group: 'tooling', js: ['eslint'], files: /(^|\/)(\.eslintrc(\.\w+)?|eslint\.config\.\w+)$/},
    {name: 'Prettier', group: 'tooling', js: ['prettier'], files: /(^|\/)\.prettierrc(\.\w+)?$/},
    {name: 'Biome', group: 'tooling', js: ['@biomejs/biome']},
    {name: 'Turborepo', group: 'tooling', js: ['turbo'], files: /^turbo\.json$/},
    {name: 'Nx', group: 'tooling', js: ['nx'], files: /^nx\.json$/},
    {name: 'Lerna', group: 'tooling', js: ['lerna'], files: /^lerna\.json$/},
    {name: 'Changesets', group: 'tooling', js: ['@changesets/cli']},
    {name: 'Husky', group: 'tooling', js: ['husky']},
    {name: 'Storybook', group: 'tooling', js: ['storybook', '@storybook/*']},

    // Testing
    {name: 'Jest', group: 'testing', js: ['jest']},
    {name: 'Vitest', group: 'testing', js: ['vitest']},
    {name: 'Mocha', group: 'testing', js: ['mocha']},
    {name: 'Cypress', group: 'testing', js: ['cypress']},
    {name: 'Playwright', group: 'testing', js: ['@playwright/test', 'playwright']},
    {name: 'Testing Library', group: 'testing', js: ['@testing-library/*']},
    {name: 'pytest', group: 'testing', text: /\bpytest\b/i},

    // DevOps and deployment
    {name: 'Docker', group: 'devops', files: /(^|\/)Dockerfile(\.\w+)?$/},
    {name: 'Docker Compose', group: 'devops', files: /(^|\/)(docker-)?compose\.ya?ml$/},
    {name: 'GitHub Actions', group: 'devops', files: /^\.github\/workflows\/.+\.ya?ml$/},
    {name: 'GitLab CI', group: 'devops', files: /^\.gitlab-ci\.yml$/},
    {name: 'Kubernetes', group: 'devops', files: /(^|\/)(k8s|kubernetes|manifests)\/.+\.ya?ml$/},
    {name: 'Helm', group: 'devops', files: /(^|\/)Chart\.yaml$/},
    {name: 'Terraform', group: 'devops', files: /\.tf$/},
    {name: 'Vercel', group: 'devops', files: /(^|\/)vercel\.json$/},
    {name: 'Netlify', group: 'devops', files: /(^|\/)netlify\.toml$/},
    {name: 'Fly.io', group: 'devops', files: /(^|\/)fly\.toml$/},
    {name: 'Heroku', group: 'devops', files: /(^|\/)Procfile$/},
    {name: 'Serverless Framework', group: 'devops', files: /(^|\/)serverless\.ya?ml$/},
]

const FRONTEND = ['Next.js', 'Nuxt', 'Remix', 'SvelteKit', 'Astro', 'React', 'Vue', 'Svelte', 'Angular', 'SolidJS']
const FULLSTACK = ['Next.js', 'Nuxt', 'Remix', 'SvelteKit']
const BACKEND = ['Express', 'Fastify', 'NestJS', 'Koa', 'Hono', 'Django', 'Flask', 'FastAPI', 'Spring Boot', 'Laravel', 'Symfony', 'Ruby on Rails', 'Actix Web', 'Axum', 'Rocket', 'Gin', 'Echo', 'Fiber']
const ML = ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face Transformers']
const LLM = ['OpenAI', 'Anthropic Claude', 'Google Gemini', 'LangChain', 'Vercel AI SDK']
const BOTS = ['discord.js', 'discord.py', 'Telegram Bot', 'Slack Bolt']

const IGNORED_DIRS = /(^|\/)(node_modules|\.git|dist|build|out|coverage|vendor|target|__pycache__|\.next|\.nuxt|\.venv|venv|\.idea|\.vscode|\.cache|\.turbo)(\/|$)/

// Manifests and config worth reading, in priority order.
const KEY_FILES: RegExp[] = [
    /^package\.json$/,
    /^pyproject\.toml$/,
    /^requirements(-[\w.-]+)?\.txt$/,
    /^setup\.py$/,
    /^Pipfile$/,
    /^Cargo\.toml$/,
    /^go\.mod$/,
    /^composer\.json$/,
    /^Gemfile$/,
    /^pom\.xml$/,
    /^build\.gradle(\.kts)?$/,
    /^pubspec\.yaml$/,
    /^deno\.jsonc?$/,
    /^manifest\.json$/,
    /^action\.ya?ml$/,
    /^app\.json$/,
    /^\.env\.(example|sample|template|dist)$/,
    /^(docker-)?compose\.ya?ml$/,
    /^Dockerfile$/,
    /^Makefile$/,
    /^\.(nvmrc|node-version|python-version)$/,
    /^README\.md$/i,
]
const WORKSPACE_MANIFEST = /^(packages|apps|crates|libs|services|plugins)\/[^/]+\/(package\.json|Cargo\.toml|pyproject\.toml|go\.mod)$/
const MAX_WORKSPACE_MANIFESTS = 6

function relative(path: string, basePath?: string) {
    if (!basePath) return path
    const prefix = `${basePath.replace(/\/$/, '')}/`
    return path.startsWith(prefix) ? path.slice(prefix.length) : null
}

function scopeEntries(entries: TreeEntry[], basePath?: string) {
    return entries
        .map(entry => ({...entry, path: relative(entry.path, basePath)}))
        .filter((entry): entry is TreeEntry => Boolean(entry.path) && !IGNORED_DIRS.test(entry.path!))
}

/** Returns full repository paths of the files worth downloading, most useful first. */
export function pickKeyFiles(entries: TreeEntry[], basePath?: string): string[] {
    const files = scopeEntries(entries, basePath).filter(e => e.type === 'file').map(e => e.path)
    const picked: string[] = []
    for (const pattern of KEY_FILES) {
        const match = files.find(path => pattern.test(path))
        if (match) picked.push(match)
    }
    picked.push(...files.filter(path => WORKSPACE_MANIFEST.test(path)).slice(0, MAX_WORKSPACE_MANIFESTS))
    return picked.map(path => (basePath ? `${basePath.replace(/\/$/, '')}/${path}` : path))
}

function parseJson(text?: string): any {
    if (!text) return null
    try {
        return JSON.parse(text)
    } catch {
        return null
    }
}

function renderTree(paths: TreeEntry[], maxDepth = 3, maxChildren = 12) {
    interface Node {
        children: Map<string, Node>
        isDir: boolean
    }
    const root: Node = {children: new Map(), isDir: true}
    for (const entry of paths) {
        if (IGNORED_DIRS.test(entry.path)) continue
        const parts = entry.path.split('/')
        let node = root
        parts.forEach((part, i) => {
            if (!node.children.has(part)) {
                node.children.set(part, {children: new Map(), isDir: i < parts.length - 1 || entry.type === 'dir'})
            }
            node = node.children.get(part)!
        })
    }

    const lines: string[] = []
    const walk = (node: Node, prefix: string, depth: number) => {
        const children = [...node.children.entries()].sort(([a, x], [b, y]) =>
            Number(y.isDir) - Number(x.isDir) || a.localeCompare(b))
        const shown = children.slice(0, maxChildren)
        shown.forEach(([name, child], i) => {
            const last = i === shown.length - 1 && children.length <= maxChildren
            const count = child.isDir && depth >= maxDepth && child.children.size ? ` (${child.children.size} items)` : ''
            lines.push(`${prefix}${last ? '└── ' : '├── '}${name}${child.isDir ? '/' : ''}${count}`)
            if (child.isDir && depth < maxDepth) walk(child, `${prefix}${last ? '    ' : '│   '}`, depth + 1)
        })
        if (children.length > maxChildren) lines.push(`${prefix}└── ... ${children.length - maxChildren} more`)
    }
    walk(root, '', 1)
    return lines.join('\n')
}

function matchesJs(deps: Set<string>, names: string[]) {
    return names.some(name => name.endsWith('*')
        ? [...deps].some(dep => dep.startsWith(name.slice(0, -1)))
        : deps.has(name))
}

function envVarNames(text?: string) {
    if (!text) return []
    return [...text.matchAll(/^\s*(?:export\s+)?([A-Z][A-Z0-9_]*)\s*=/gm)].map(m => m[1])
}

function makeTargets(text?: string) {
    if (!text) return []
    return [...text.matchAll(/^([a-zA-Z][\w-]*):(?!=)/gm)].map(m => m[1]).filter(t => t !== 'PHONY').slice(0, 10)
}

function detectPackageManager(files: string[]) {
    const has = (name: string) => files.includes(name)
    if (has('pnpm-lock.yaml') || has('pnpm-workspace.yaml')) return 'pnpm'
    if (has('bun.lockb') || has('bun.lock')) return 'bun'
    if (has('yarn.lock')) return 'yarn'
    if (has('package-lock.json') || has('package.json')) return 'npm'
    if (has('uv.lock')) return 'uv'
    if (has('poetry.lock')) return 'poetry'
    if (has('Pipfile')) return 'pipenv'
    if (has('requirements.txt') || has('pyproject.toml') || has('setup.py')) return 'pip'
    if (has('Cargo.toml')) return 'cargo'
    if (has('go.mod')) return 'go'
    if (has('composer.json')) return 'composer'
    if (has('Gemfile')) return 'bundler'
    if (has('pom.xml')) return 'maven'
    if (files.some(f => /^build\.gradle/.test(f))) return 'gradle'
    if (has('pubspec.yaml')) return 'flutter pub'
    return null
}

function suggestCommands(pm: string | null, pkg: any, files: string[], detected: string[], makefile: string[]) {
    const commands: Record<string, string> = {}
    const scripts: Record<string, string> = pkg?.scripts ?? {}
    const jsPm = ['npm', 'pnpm', 'yarn', 'bun'].includes(pm ?? '') ? pm! : null

    if (jsPm) {
        const run = (script: string) => {
            if (jsPm === 'npm') return script === 'start' || script === 'test' ? `npm ${script}` : `npm run ${script}`
            return jsPm === 'bun' ? `bun run ${script}` : `${jsPm} ${script}`
        }
        commands.install = `${jsPm} install`
        for (const [key, candidates] of Object.entries({
            dev: ['dev', 'develop', 'serve', 'start:dev'],
            build: ['build'],
            start: ['start'],
            test: ['test', 'test:unit'],
            lint: ['lint'],
        })) {
            const script = candidates.find(name => scripts[name])
            if (script) commands[key] = run(script)
        }
    } else if (pm === 'uv') {
        commands.install = 'uv sync'
    } else if (pm === 'poetry') {
        commands.install = 'poetry install'
    } else if (pm === 'pipenv') {
        commands.install = 'pipenv install'
    } else if (pm === 'pip') {
        commands.install = files.includes('requirements.txt') ? 'pip install -r requirements.txt' : 'pip install -e .'
    } else if (pm === 'cargo') {
        commands.build = 'cargo build --release'
        commands.start = 'cargo run'
        commands.test = 'cargo test'
    } else if (pm === 'go') {
        commands.install = 'go mod download'
        const cmd = files.find(f => /^cmd\/[^/]+\/main\.go$/.test(f))
        commands.start = cmd ? `go run ./${cmd.replace(/\/main\.go$/, '')}` : 'go run .'
        commands.test = 'go test ./...'
    } else if (pm === 'composer') {
        commands.install = 'composer install'
    } else if (pm === 'bundler') {
        commands.install = 'bundle install'
    } else if (pm === 'maven') {
        commands.build = './mvnw package'
    } else if (pm === 'gradle') {
        commands.build = './gradlew build'
    } else if (pm === 'flutter pub') {
        commands.install = 'flutter pub get'
        commands.start = 'flutter run'
    }

    if (detected.includes('Django')) commands.start = 'python manage.py runserver'
    else if (detected.includes('Streamlit')) {
        const app = files.find(f => /^(streamlit_)?app\.py$|^main\.py$/.test(f))
        if (app) commands.start = `streamlit run ${app}`
    } else if (detected.includes('FastAPI')) {
        const app = files.find(f => /^(app\/)?main\.py$/.test(f))
        if (app) commands.start = `uvicorn ${app.replace(/\.py$/, '').replace('/', '.')}:app --reload`
    } else if (!commands.start && pm && ['pip', 'uv', 'poetry', 'pipenv'].includes(pm)) {
        const entry = files.find(f => /^(main|app|run)\.py$/.test(f))
        if (entry) commands.start = `python ${entry}`
    }
    if (detected.includes('pytest')) commands.test = 'pytest'
    if (detected.includes('Docker Compose')) commands.docker = 'docker compose up -d'
    else if (detected.includes('Docker')) commands.docker = 'docker build -t app . && docker run app'
    if (makefile.length) commands.make = makefile.map(target => `make ${target}`).join(', ')
    return commands
}

function detectProjectTypes(ctx: {
    detected: string[]
    files: string[]
    pkg: any
    fileText: Record<string, string>
    repoName: string
    owner: string
    manifestText: string
    isMonorepo: boolean
}) {
    const {detected, files, pkg, fileText, repoName, owner, manifestText} = ctx
    const has = (names: string[]) => names.some(name => detected.includes(name))
    const types: string[] = []
    const add = (type: string, when: boolean) => when && !types.includes(type) && types.push(type)
    const name = repoName.toLowerCase()

    add('GitHub profile README', name === owner.toLowerCase())
    add('Curated "awesome" list', name.startsWith('awesome'))
    add('Dotfiles / system configuration', name.includes('dotfiles'))
    add('GitHub Action', Boolean(fileText['action.yml'] || fileText['action.yaml']))
    add('Browser extension', /"manifest_version"/.test(fileText['manifest.json'] ?? ''))
    add('VS Code extension', Boolean(pkg?.engines?.vscode))
    add('Chat bot', has(BOTS))
    add('Mobile app', has(['React Native', 'Expo', 'Flutter']))
    add('Desktop app', has(['Electron', 'Tauri']))
    add('Game', has(['Phaser', 'Bevy', 'Unity', 'Godot']))
    add('Documentation site', has(['Docusaurus', 'VitePress', 'MkDocs']))
    add('AI / LLM application', has(LLM))
    add('Machine learning / data science', has(ML) || files.filter(f => f.endsWith('.ipynb')).length >= 2)
    add('Full-stack web application', has(FULLSTACK) || (has(FRONTEND) && has(BACKEND)))
    add('Web application (frontend)', has(FRONTEND))
    add('API / backend service', has(BACKEND))

    const isCli = Boolean(pkg?.bin)
        || /\bclap\b|spf13\/cobra|urfave\/cli|^\s*(click|typer)\b|\[project\.scripts\]|console_scripts/im.test(manifestText)
        || files.some(f => /^cmd\/[^/]+\/main\.go$/.test(f))
    add('Command-line tool', isCli)

    const jsLibrary = pkg && !pkg.private && (pkg.main || pkg.module || pkg.exports) && !has(FRONTEND.filter(f => f !== 'React' && f !== 'Vue')) && !has(BACKEND)
    const pyLibrary = /\[project\]|\[tool\.poetry\]/.test(fileText['pyproject.toml'] ?? '') || Boolean(fileText['setup.py'])
    const rustLibrary = /\[lib\]/.test(fileText['Cargo.toml'] ?? '') || files.includes('src/lib.rs')
    add('Library / package', Boolean(jsLibrary) || (pyLibrary && !types.length) || rustLibrary || (Boolean(fileText['go.mod']) && !files.some(f => /(^|\/)main\.go$/.test(f))))
    add('Infrastructure / DevOps', has(['Terraform', 'Helm', 'Kubernetes']) && !types.length)
    add('Monorepo', ctx.isMonorepo)
    return types
}

export interface RepoAnalysis {
    name: string
    fullName: string
    url: string
    description: string | null
    homepage: string | null
    topics: string[]
    license: string | null
    defaultBranch: string
    analyzedBranch: string
    analyzedPath: string | null
    stats: {
        stars: number
        forks: number
        watchers: number
        openIssues: number
        createdAt: string
        lastPush: string
        archived: boolean
        isFork: boolean
    }
    owner: { login: string; type: string }
    projectTypes: string[]
    languages: { name: string; percent: number }[]
    stack: Partial<Record<SignalGroup, string[]>>
    packageManager: string | null
    runtime: Record<string, string>
    commands: Record<string, string>
    scripts: Record<string, string>
    entryPoints: string[]
    envVars: string[]
    workspaces: { path: string; name: string; description?: string }[]
    structure: string
    highlights: {
        totalFiles: number
        testFiles: number
        hasDocs: boolean
        hasExamples: boolean
        hasContributingGuide: boolean
        hasChangelog: boolean
        hasLicenseFile: boolean
        treeTruncated: boolean
    }
    keyFiles: Record<string, string>
}

export function analyzeRepository(input: {
    repo: any
    branch: string
    basePath?: string
    entries: TreeEntry[]
    treeTruncated: boolean
    languages: Record<string, number>
    files: Record<string, string>
}): RepoAnalysis {
    const {repo, basePath} = input
    const scoped = scopeEntries(input.entries, basePath)
    const filePaths = scoped.filter(e => e.type === 'file').map(e => e.path)

    // Key file contents keyed by path relative to the analyzed folder.
    const fileText: Record<string, string> = {}
    for (const [path, text] of Object.entries(input.files)) {
        const rel = relative(path, basePath)
        if (rel) fileText[rel] = text
    }

    const pkg = parseJson(fileText['package.json'])
    const manifests = Object.entries(fileText).filter(([path]) => /package\.json$/.test(path)).map(([, text]) => parseJson(text))
    const jsDeps = new Set<string>(manifests.flatMap(m => m ? [
        ...Object.keys(m.dependencies ?? {}),
        ...Object.keys(m.devDependencies ?? {}),
        ...Object.keys(m.peerDependencies ?? {}),
    ] : []))
    const manifestText = Object.entries(fileText)
        .filter(([path]) => !/package\.json$|README\.md$/i.test(path))
        .map(([, text]) => text)
        .join('\n')

    const detected = SIGNALS
        .filter(signal =>
            (signal.js && matchesJs(jsDeps, signal.js)) ||
            (signal.text && signal.text.test(manifestText)) ||
            (signal.files && filePaths.some(path => signal.files!.test(path))))
        .map(signal => signal.name)
    const stack: RepoAnalysis['stack'] = {}
    for (const signal of SIGNALS) {
        if (detected.includes(signal.name)) (stack[signal.group] ??= []).push(signal.name)
    }

    const isMonorepo = Boolean(pkg?.workspaces) || filePaths.includes('pnpm-workspace.yaml')
        || detected.some(name => ['Turborepo', 'Nx', 'Lerna'].includes(name))
        || /\[workspace\]/.test(fileText['Cargo.toml'] ?? '')

    const totalBytes = Object.values(input.languages).reduce((sum, bytes) => sum + bytes, 0)
    const languages = Object.entries(input.languages)
        .map(([name, bytes]) => ({name, percent: Math.round((bytes / (totalBytes || 1)) * 1000) / 10}))
        .filter(lang => lang.percent >= 0.5)

    const runtime: Record<string, string> = {}
    if (pkg?.engines?.node) runtime.node = pkg.engines.node
    if (fileText['.nvmrc'] || fileText['.node-version']) runtime.node = (fileText['.nvmrc'] ?? fileText['.node-version']).trim()
    const python = fileText['pyproject.toml']?.match(/requires-python\s*=\s*["']([^"']+)["']/)?.[1] ?? fileText['.python-version']?.trim()
    if (python) runtime.python = python
    const go = fileText['go.mod']?.match(/^go\s+(\S+)/m)?.[1]
    if (go) runtime.go = go
    const rust = fileText['Cargo.toml']?.match(/rust-version\s*=\s*["']([^"']+)["']/)?.[1]
    if (rust) runtime.rust = rust

    const packageManager = detectPackageManager(filePaths)
    const envFile = Object.keys(fileText).find(path => /^\.env\./.test(path))
    const makefile = makeTargets(fileText['Makefile'])

    const entryPoints = [
        ...(pkg?.main ? [`main: ${pkg.main}`] : []),
        ...(pkg?.module ? [`module: ${pkg.module}`] : []),
        ...(pkg?.bin ? [`bin: ${typeof pkg.bin === 'string' ? pkg.bin : Object.keys(pkg.bin).join(', ')}`] : []),
        ...filePaths.filter(path =>
            /^(src\/)?(main|index|app|server|cli)\.(ts|tsx|js|jsx|mjs|py|go|rs)$/.test(path) ||
            /^cmd\/[^/]+\/main\.go$/.test(path) ||
            /^(manage|wsgi|asgi)\.py$/.test(path) ||
            /^src\/(main|lib)\.rs$/.test(path)),
    ].slice(0, 10)

    const workspaces = Object.entries(fileText)
        .filter(([path]) => WORKSPACE_MANIFEST.test(path))
        .map(([path, text]) => {
            const json = parseJson(text)
            const name = json?.name ?? text.match(/^\s*name\s*=\s*["']([^"']+)["']/m)?.[1] ?? text.match(/^module\s+(\S+)/m)?.[1]
            return {path: path.replace(/\/[^/]+$/, ''), name: name ?? path.split('/')[1], description: json?.description}
        })

    const testPattern = /(^|\/)(tests?|__tests__|spec|e2e)\/|\.(test|spec)\.\w+$|_test\.go$|(^|\/)test_[^/]+\.py$/
    const keyFiles = Object.fromEntries(Object.entries(fileText).filter(([path]) => !/^\.(nvmrc|node-version|python-version)$/.test(path)))

    return {
        name: basePath ? basePath.split('/').pop()! : repo.name,
        fullName: repo.full_name,
        url: repo.html_url,
        description: pkg?.description || repo.description,
        homepage: repo.homepage || pkg?.homepage || null,
        topics: repo.topics ?? [],
        license: repo.license?.spdx_id && repo.license.spdx_id !== 'NOASSERTION' ? repo.license.spdx_id : pkg?.license ?? null,
        defaultBranch: repo.default_branch,
        analyzedBranch: input.branch,
        analyzedPath: basePath ?? null,
        stats: {
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            watchers: repo.subscribers_count ?? repo.watchers_count,
            openIssues: repo.open_issues_count,
            createdAt: repo.created_at,
            lastPush: repo.pushed_at,
            archived: repo.archived,
            isFork: repo.fork,
        },
        owner: {login: repo.owner?.login, type: repo.owner?.type},
        projectTypes: detectProjectTypes({
            detected,
            files: filePaths,
            pkg,
            fileText,
            repoName: repo.name,
            owner: repo.owner?.login ?? '',
            manifestText,
            isMonorepo,
        }),
        languages,
        stack,
        packageManager,
        runtime,
        commands: suggestCommands(packageManager, pkg, filePaths, detected, makefile),
        scripts: pkg?.scripts ?? {},
        entryPoints,
        envVars: envVarNames(envFile ? fileText[envFile] : undefined),
        workspaces,
        structure: renderTree(scoped),
        highlights: {
            totalFiles: filePaths.length,
            testFiles: filePaths.filter(path => testPattern.test(path)).length,
            hasDocs: filePaths.some(path => /^docs?\//i.test(path)),
            hasExamples: filePaths.some(path => /^(examples?|demo|samples?)\//i.test(path)),
            hasContributingGuide: filePaths.some(path => /(^|\/)CONTRIBUTING\.md$/i.test(path)),
            hasChangelog: filePaths.some(path => /(^|\/)CHANGELOG\.md$/i.test(path)),
            hasLicenseFile: filePaths.some(path => /^LICEN[SC]E(\.\w+)?$/i.test(path)),
            treeTruncated: input.treeTruncated,
        },
        keyFiles,
    }
}

export function summarizeProfile(user: any, repos: any[]) {
    const own = repos.filter(repo => !repo.fork)
    const count = (values: string[]) => {
        const counts = new Map<string, number>()
        values.forEach(value => counts.set(value, (counts.get(value) ?? 0) + 1))
        return [...counts.entries()].sort((a, b) => b[1] - a[1])
    }

    return {
        profile: {
            login: user.login,
            name: user.name,
            bio: user.bio,
            company: user.company,
            location: user.location,
            website: user.blog || null,
            email: user.email,
            twitter: user.twitter_username,
            hireable: user.hireable,
            followers: user.followers,
            following: user.following,
            publicRepos: user.public_repos,
            memberSince: user.created_at,
            avatarUrl: user.avatar_url,
            profileUrl: user.html_url,
            type: user.type,
        },
        stats: {
            totalStars: own.reduce((sum, repo) => sum + repo.stargazers_count, 0),
            totalForks: own.reduce((sum, repo) => sum + repo.forks_count, 0),
            originalRepos: own.length,
            forkedRepos: repos.length - own.length,
        },
        topLanguages: count(own.map(repo => repo.language).filter(Boolean)).slice(0, 8)
            .map(([language, repoCount]) => ({language, repos: repoCount})),
        topTopics: count(own.flatMap(repo => repo.topics ?? [])).slice(0, 12).map(([topic]) => topic),
        featuredRepos: [...own]
            .sort((a, b) => b.stargazers_count - a.stargazers_count || Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
            .slice(0, 6)
            .map(repo => ({
                name: repo.name,
                description: repo.description,
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.language,
                topics: repo.topics ?? [],
                url: repo.html_url,
                homepage: repo.homepage || null,
            })),
        recentlyActive: own.slice(0, 5).map(repo => repo.name),
    }
}
