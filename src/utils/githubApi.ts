import {useStore} from "@stores/useStore";

export async function fetchUserProfile(username: string) {
    try {
        const store = useStore();
        store.clearError();
        const res = await fetch(`https://api.github.com/users/${username}`)

        if (!res.ok) {
            if (res.status === 404) {
                store.setError(`User "${username}" not found`);
                return null;
            } else {
                store.setError(`Failed to fetch user data: ${res.status}`);
                return null;
            }
        }

        const data = await res.json();
        store.setGithubUserData(data);
        return data;
    } catch (error) {
        return null;
    }
}

export async function fetchRepoInfo(owner: string, repo: string) {
    try {
        const store = useStore();
        store.clearError();
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`)

        if (!res.ok) {
            if (res.status === 404) {
                store.setError(`Repository "${owner}/${repo}" not found`);
                return null;
            } else {
                store.setError(`Failed to fetch repository data: ${res.status}`);
                return null;
            }
        }

        const data = await res.json();
        store.setGithubRepoData(data);
        return data;
    } catch (error) {
        return null;
    }
}

export async function fetchRepoContents(owner: string, repo: string) {
    try {
        const store = useStore();
        store.clearError();
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`)

        if (!res.ok) {
            if (res.status === 404) {
                store.setError(`Repository contents for "${owner}/${repo}" not found`);
                return null;
            } else {
                store.setError(`Failed to fetch repository contents: ${res.status}`);
                return null;
            }
        }

        const data = await res.json();
        store.setRepoContent(data);
        return data;
    } catch (error) {
        return null;
    }
}