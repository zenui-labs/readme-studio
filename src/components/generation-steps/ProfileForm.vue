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
  store.currentStep = 3
  const userData = await fetchUserProfile(input.value)
  const prompt = `
You are a leading GitHub profile consultant, open-source advocate, and technical writer specialized in developer portfolios.

Your task is to generate a **world-class, visually appealing, and highly professional GitHub Profile README** in GitHub-flavored Markdown, using the user data below.

---

## Objectives

- Target audience: potential employers, collaborators, open-source community, and recruiters.
- Create a compelling narrative highlighting the user's technical skills, contributions, and personality.
- Emphasize measurable social proof: GitHub stats, top projects, contribution streaks, and popular repositories.
- Use rich formatting: badges (shields.io), emojis, icons, images, and clear sections.
- Keep it developer-friendly with concise yet meaningful content.
- Include a call-to-action to engage visitors (follow, star, connect).
- Provide placeholders or TODOs where data is missing, with friendly explanations.
- Use professional but approachable language that reflects a passionate developer’s profile.
- Structure the README with appropriate sections and an optional table of contents if needed.

---

## Recommended Sections (include all relevant):

# {{Name}} 👋

![Profile Image](https://example.com/profile.jpg)

> A brief, catchy personal tagline or summary about the user.

---

## 🚀 About Me

Write a short bio: background, key expertise, programming languages, interests, and current goals.

---

## 🛠️ Skills & Technologies

Use badges or icons to display main programming languages, frameworks, tools, and technologies. get the technologies from his most used languages or frameworks which have in his profile data. also add some demo tech stack (which user will replaced with his own)

---

## 📊 GitHub Stats & Social Proof

Include the following with the user's actual GitHub username:

- ![GitHub stats](https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true&theme=radical)
- ![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=USERNAME&layout=compact&theme=radical)
- ![GitHub Trophy](https://github-profile-trophy.vercel.app/?username=USERNAME&theme=radical)
- ![Contribution Graph](https://github-readme-activity-graph.vercel.app/graph?username=USERNAME&theme=radical)

---

## 📂 Featured Projects

List 3-6 of the user's most popular or relevant repositories with:

- Project name linked to the repo.
- Short description summarizing the project’s purpose or technology stack.
- Badges for stars, forks, last commit date, and license.

---

## 🌐 Connect with Me

Provide links (badges) for social profiles like GitHub, LinkedIn, Twitter, personal website/blog, and others if available.

---

## 📝 Latest Blog Posts

Link to the most recent blog posts or articles written by the user (if applicable).

---

## 📫 Contact

Provide professional contact info such as email or preferred communication channels.

---

## 🤝 Let’s Collaborate!

Encourage visitors to follow, star repositories, open issues, or contact the user.

---

## Notes

- Use GitHub-flavored Markdown syntax.
- Insert clear TODO placeholders for any missing information.
- Keep the tone professional, enthusiastic, and approachable.
- Include emojis to enhance readability but do not overuse.
- Use placeholder URLs/badges if actual data is missing.
- Only output the final markdown without any explanations or extra commentary.

---

## User Data

${JSON.stringify(userData, null, 2)}

---

Now, generate the **best possible, developer-focused, production-ready GitHub Profile README** for this user.
`

  if (store.hasError) return
  const result = await generateReadmeWithClaude(prompt)
  store.setGeneratedReadme(result)
}

</script>

<template>
  <div class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left font-medium dark:text-darkText text-gray-700 mb-2">
        GitHub Username
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Github class="h-5 w-5 text-gray-400"/>
        </div>
        <input
            type="text"
            v-model="input"
            :maxlength="150"
            placeholder="your-username"
            :class="['block w-full pl-10 pr-3 py-4 border-2 rounded-xl dark:text-darkText dark:bg-darkCardBgColor placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
                error ? 'border-red-300 bg-red-50' : 'border-gray-200 bg-white dark:border-darkBorder']"
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
        class="w-full bg-brandColor cursor-pointer text-white gap-3 py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 dark:disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <AiIcon/>
      Generate Profile Readme
    </button>
  </div>
</template>