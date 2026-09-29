import {useStore} from "@stores/useStore";
import {analyzeRepository, pickKeyFiles, RepoAnalysis, summarizeProfile, TreeEntry} from "@utils/projectAnalyzer";

const API = 'https://api.github.com'
const RAW = 'https://raw.githubusercontent.com'

export interface RepoRef {
    owner: string
    repo: string
    branch?: string
    path?: string
}

const NAME_PATTERN = /^[a-z\d](?:[a-z\d-]{0,38})$/i
const REPO_PATTERN = /^[\w.-]{1,100}$/
// First path segments on github.com that are pages, not users or orgs.
const RESERVED = new Set([
    'about', 'apps', 'collections', 'explore', 'features', 'login', 'marketplace', 'new', 'notifications',
    'orgs', 'organizations', 'pricing', 'pulls', 'issues', 'search', 'settings', 'sponsors', 'topics', 'trending',
])

// Reduces any GitHub link shape to its path segments, or null for non-GitHub hosts.
function githubSegments(input: string): string[] | null {
    let value = input.trim().replace(/^[<"']+|[>"']+$/g, '')
    value = value.replace(/^git@github\.com:/i, 'github.com/')
    value = value.replace(/^[a-z][a-z+.-]*:\/\//i, '')
    value = value.replace(/^[^/@\s]+@/, '')
    value = value.split(/[?#]/)[0]

    const host = value.match(/^(?:www\.)?github\.com(?:\/|$)/i)
    if (host) value = value.slice(host[0].length)
    // GitHub owners never contain dots, so a dotted first segment is another host.
    else if (value.split('/')[0].includes('.')) return null

    return value.split('/').filter(Boolean)
}

/**
 * Accepts https/http/ssh/git URLs, "github.com/owner/repo", "owner/repo",
 * ".git" suffixes, and deep links like /tree/<branch>/<dir> or /blob/<branch>/<file>.
 */
export function parseRepoUrl(input: string): RepoRef | null {
    const segments = githubSegments(input)
    if (!segments || segments.length < 2) return null

    const [owner, rawRepo, kind, branch, ...rest] = segments
    const repo = rawRepo.replace(/\.git$/i, '')
    if (!NAME_PATTERN.test(owner) || RESERVED.has(owner.toLowerCase()) || !REPO_PATTERN.test(repo)) return null

    const ref: RepoRef = {owner, repo}
    if ((kind === 'tree' || kind === 'blob') && branch) {
        ref.branch = decodeURIComponent(branch)
        // A file link points at its folder.
        const dirs = kind === 'blob' ? rest.slice(0, -1) : rest
        if (dirs.length) ref.path = dirs.map(decodeURIComponent).join('/')
    }
    return ref
}

/** Accepts "user", "@user", or any github.com/user link. */
export function parseUsername(input: string): string | null {
    const segments = githubSegments(input.trim().replace(/^@/, ''))
    const name = segments?.[0]
    if (!name || !NAME_PATTERN.test(name) || RESERVED.has(name.toLowerCase())) return null
    return name
}

class GithubError extends Error {
    constructor(message: string, readonly status?: number) {
        super(message)
    }
}

async function githubJson<T = any>(path: string): Promise<T> {
    let res: Response
    try {
        res = await fetch(`${API}${path}`, {headers: {Accept: 'application/vnd.github+json'}})
    } catch {
        throw new GithubError('Could not reach GitHub. Check your connection and try again.')
    }
    if (res.ok) return res.json()

    if ((res.status === 403 || res.status === 429) && res.headers.get('x-ratelimit-remaining') === '0') {
        const reset = Number(res.headers.get('x-ratelimit-reset')) * 1000
        const when = reset ? ` after ${new Date(reset).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}` : ' later'
        throw new GithubError(`GitHub API rate limit reached. Please try again${when}.`, res.status)
    }
    throw new GithubError(`GitHub request failed (${res.status})`, res.status)
}

async function fetchRawFile(ref: RepoRef, branch: string, path: string, maxLength: number) {
    const encoded = path.split('/').map(encodeURIComponent).join('/')
    try {
        const res = await fetch(`${RAW}/${ref.owner}/${ref.repo}/${encodeURIComponent(branch)}/${encoded}`)
        if (!res.ok) return null
        const text = await res.text()
        return text.length > maxLength ? `${text.slice(0, maxLength)}\n... [truncated]` : text
    } catch {
        return null
    }
}

function errorMessage(error: unknown, notFound: string) {
    if (error instanceof GithubError) return error.status === 404 ? notFound : error.message
    return 'Something went wrong while reading GitHub. Please try again.'
}

export async function fetchUserProfile(username: string) {
    const store = useStore();
    store.clearError();
    try {
        const [user, repos] = await Promise.all([
            githubJson(`/users/${username}`),
            githubJson<any[]>(`/users/${username}/repos?per_page=100&sort=pushed&type=owner`).catch(() => []),
        ])
        const details = summarizeProfile(user, repos)
        store.setGithubUserData(details);
        return details;
    } catch (error) {
        store.setError(errorMessage(error, `User "${username}" not found`));
        return null;
    }
}

/**
 * Collects everything needed to describe a repository: metadata, languages,
 * the full file tree, and the contents of manifest/config files, then runs
 * project detection over it.
 */
export async function fetchRepoDetails(ref: RepoRef): Promise<RepoAnalysis | null> {
    const store = useStore();
    store.clearError();
    const {owner, repo} = ref

    try {
        const repoData = await githubJson(`/repos/${owner}/${repo}`)
        const treeFor = (branch: string) =>
            githubJson(`/repos/${owner}/${repo}/git/trees/${encodeURIComponent(branch)}?recursive=1`).catch(() => null)

        let branch: string = ref.branch ?? repoData.default_branch
        let [tree, languages] = await Promise.all([
            treeFor(branch),
            githubJson<Record<string, number>>(`/repos/${owner}/${repo}/languages`).catch(() => ({})),
        ])
        // Branch names can contain "/", which makes /tree/<branch>/<dir> links ambiguous.
        if (!tree && ref.branch && ref.branch !== repoData.default_branch) {
            branch = repoData.default_branch
            tree = await treeFor(branch)
        }

        const entries: TreeEntry[] = (tree?.tree ?? [])
            .filter((item: any) => item.type === 'blob' || item.type === 'tree')
            .map((item: any) => ({path: item.path, type: item.type === 'tree' ? 'dir' : 'file', size: item.size}))

        const keyPaths = pickKeyFiles(entries, ref.path)
        const contents = await Promise.all(
            keyPaths.map(path => fetchRawFile(ref, branch, path, /readme/i.test(path) ? 4000 : 3000))
        )
        const files: Record<string, string> = {}
        keyPaths.forEach((path, i) => {
            if (contents[i] !== null) files[path] = contents[i]!
        })

        const analysis = analyzeRepository({
            repo: repoData,
            branch,
            basePath: ref.path,
            entries,
            treeTruncated: Boolean(tree?.truncated),
            languages,
            files,
        })
        store.setGithubRepoData(analysis);
        return analysis;
    } catch (error) {
        store.setError(errorMessage(error, `Repository "${owner}/${repo}" not found or is private`));
        return null;
    }
}
