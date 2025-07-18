export async function fetchUserProfile(username: string) {
    const res = await fetch(`https://api.github.com/users/${username}`)
    return await res.json()
}

export async function fetchRepoInfo(owner: string, repo: string) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)
    return await res.json()
}

export async function fetchRepoContents(owner: string, repo: string) {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`)
    return await res.json()
}
