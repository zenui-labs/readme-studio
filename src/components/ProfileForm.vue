<template>
  <div class="p-6">
    <h2 class="text-xl mb-2">Enter GitHub Username</h2>
    <input v-model="username" class="input" placeholder="e.g. octocat"/>
    <button @click="generate" class="btn mt-2">Generate README</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useResultStore} from '../stores/resultStore.js'
import {fetchUserProfile} from '../utils/githubApi'
import {generateReadmeWithClaude} from '../utils/groqApi'
import {useInputStore} from "../stores/inputStore.js";

const router = useRouter()
const inputStore = useInputStore()
const resultStore = useResultStore()

const username = ref(inputStore.username)

async function generate() {
  const userData = await fetchUserProfile(username.value)
  const prompt = `
You are a leading GitHub profile consultant and technical writer. Generate a **world-class, visually attractive, and professional Profile README** in GitHub-flavored Markdown using the user data below.

## Instructions

- **Audience:** Potential employers, open-source collaborators, and the GitHub community.
- **Depth:** Include all sections and elements recommended for a top-tier GitHub profile README.
- **Personalization:** Infer and summarize the user's key skills, interests, and projects from the data.
- **Completeness:** If any info is missing, insert a clearly marked TODO or friendly placeholder.
- **Formatting:** Use headings, emojis, badges, shields.io, and images for maximum visual impact.
- **Minimal placeholders:** Use example URLs and badge links.
- **Social Proof:** Highlight GitHub stats, top repos, and contribution streaks.
- **Call to Action:** Invite visitors to connect, follow, or collaborate.

### Sections to Include

# Name & Tagline

![Profile Picture](https://example.com/profile.jpg)

> **Short, catchy personal tagline or bio.**

---

## 🚀 About Me

A concise, engaging bio (background, interests, what you're looking for).

## 🛠️ Skills & Tools

Badges or icons for main languages, frameworks, tools (use shields.io).

## 📈 GitHub Stats

- ![Stats](https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true)
- ![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=USERNAME)
- ![Trophy](https://github-profile-trophy.vercel.app/?username=USERNAME)
- ![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=USERNAME)

## 📂 Top Projects

- List top 3-6 repositories, each with a short summary and link, plus repo badges.

## 🌐 Social Links

- Shields.io badges for GitHub, LinkedIn, Twitter, Blog, etc.

## 📝 Blog Posts

- List or link to latest blog posts (if available).

## 📬 Contact

- Email, website, or other contact methods.

## 🤝 Let's Connect!

- Invite to follow, star, or reach out.

---

## Markdown Only

- Output only the final Markdown.
- Use best practices for formatting, accessibility, and modern profile README style.
- If info is missing, insert \`TODO\`s or example placeholders.

## User Data

${JSON.stringify(userData, null, 2)}

---
Now, generate the **best possible, production-ready Profile README** for this user.
`
  const result = await generateReadmeWithClaude(prompt)
  resultStore.setReadme(result)
  router.push('/result')
}
</script>
