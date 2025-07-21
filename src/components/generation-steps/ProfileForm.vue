<script setup lang="ts">
import {AlertCircle, Github} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {ref} from "vue";
import AiIcon from "@/svg-icons/ai-icon.vue";
import {generateReadmeWithClaude} from "@utils/groqApi";
import {fetchUserProfile} from "@utils/githubApi";

const input = ref('')
const error = ref('')

const store = useStore()

async function handleGenerating() {
  const userData = await fetchUserProfile(input.value)
  store.currentStep = 3
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
  store.setGeneratedReadme(result)
}

</script>

<template>
  <div class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left font-medium text-gray-700 mb-2">
        GitHub Username
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Github class="h-5 w-5 text-gray-400"/>
        </div>
        <input
            type="text"
            v-model="input"
            placeholder="your-username"
            :class="['block w-full pl-10 pr-3 py-4 border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
                error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white']"
        />
      </div>
      <div v-if="error" class="mt-2 flex items-center text-red-600 text-sm">
        <AlertCircle class="w-4 h-4 mr-1"/>
        {{ error }}
      </div>
    </div>

    <button
        :disabled="!input"
        @click="handleGenerating"
        class="w-full bg-brandColor cursor-pointer text-white gap-3 py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <AiIcon/>
      Generate Profile Readme
    </button>
  </div>
</template>