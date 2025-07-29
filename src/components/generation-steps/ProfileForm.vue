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
You are an elite GitHub profile consultant and technical writer who creates stunning, professional developer portfolios.

You are **not allowed** to include anything about yourself or your involvement. Your output will be pasted into a GitHub README, and **must look like the user wrote it entirely by hand.** Any indication that this was AI-generated will be rejected.

---

## Core Objectives

- **Target Audience**: Tech recruiters, hiring managers, fellow developers, open-source contributors, and potential collaborators
- **Goal**: Create a compelling developer narrative that showcases technical excellence, contributions, and personality
- **Tone**: Professional yet approachable, confident but not boastful, passionate about technology
- **Visual Impact**: Rich formatting with modern badges, icons, animations, and strategic use of emojis

---

## IMPORTANT: Structure Variation

**Generate a DIFFERENT structure each time**. Choose from these layout patterns:

### Pattern A: Classic Professional
1. Header with animated typing effect
2. About Me section
3. Tech Stack with modern icons
4. GitHub Analytics Dashboard
5. Featured Projects
6. Connect & Support

### Pattern B: Developer Portfolio
1. Dynamic intro with GitHub stats preview
2. Current Status/Working On
3. Skills Matrix with proficiency levels
4. Comprehensive Analytics
5. Notable Projects with detailed metrics
6. Community & Collaboration

### Pattern C: Modern Card Layout
1. Profile card design
2. Quick Stats Overview
3. Technology Ecosystem
4. Advanced GitHub Analytics
5. Project Showcase
6. Professional Network

### Pattern D: Dashboard Style
1. Hero section with live stats
2. Performance Metrics
3. Tech Stack Mastery
4. Repository Analytics
5. Contribution Highlights
6. Contact & Support Hub

---

## Required Modern Elements

### 🎯 Header Section (Choose one style):

**Style 1 - Animated Typing:**
\`\`\`markdown
# Hi there! 👾 I'm [Name]

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=003fef&width=435&lines=Full+Stack+Developer;Cloud+Architecture+Enthusiast;Open+Source+Contributor;Always+Learning+New+Things)](https://git.io/typing-svg)
\`\`\`

**Style 2 - Modern Banner:**
\`\`\`markdown
<div align="center">
  <img height="150" src="https://camo.githubusercontent.com/62da68eb62b1e5f175f7d1f0191dd89a653d7908feb22d37d4a0ab07365d6791/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f4d3967624264396e6244724f5475314d71782f67697068792e676966"/>
</div>

# 👨‍💻 [Name] | [Title/Role]
### 🚀 Building the future, one commit at a time
\`\`\`

### 💼 Current Status Section:
\`\`\`markdown
## 🎯 Current Focus

- 🔭 Working on: **[Current Project]** <!-- TODO: Add your current main project -->
- 🌱 Learning: **[Technology/Skill]** <!-- TODO: Add what you're currently learning -->
- 👯 Looking to collaborate on: **Open Source Projects**
- 💬 Ask me about: **[Your Expertise Areas]** <!-- TODO: Add your areas of expertise -->
- ⚡ Fun fact: **[Interesting fact about you]** <!-- TODO: Add a fun fact -->
\`\`\`

### 🛠️ Technology Stack (with modern icons):
\`\`\`markdown
## 🛠️ Technology Arsenal

### 💻 Programming Languages
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
<!-- TODO: Add/remove languages based on your actual skills -->

### 🚀 Frameworks & Libraries
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
<!-- TODO: Add your actual frameworks -->

### ☁️ Cloud & DevOps
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white)
<!-- TODO: Add your cloud/devops tools -->

### 🗄️ Databases
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
<!-- TODO: Add your databases -->
\`\`\`

### 📊 Comprehensive GitHub Analytics:
\`\`\`markdown
## 📊 GitHub Analytics Dashboard

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username={USERNAME}&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username={USERNAME}&layout=compact&langs_count=8&theme=tokyonight"/>
</div>

### 🏆 GitHub Achievements
<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={USERNAME}&theme=tokyonight&no-frame=false&no-bg=false&margin-w=4&row=2&column=3"/>
</p>

### 📈 Contribution Activity
<img src="https://github-readme-activity-graph.vercel.app/graph?username={USERNAME}&theme=tokyo-night&bg_color=1a1b27&color=70a5fd&line=bf91f3&point=38bdae&area=true&hide_border=true"/>

### 🔥 Streak Statistics
<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={USERNAME}&theme=tokyonight&hide_border=true"/>
</p>

### 📅 Contribution Calendar
<img src="https://ghchart.rshah.org/409ba5/{USERNAME}" alt="Contribution Calendar" width="100%"/>

### ⚡ Recent Activity
<!--START_SECTION:activity-->
<!-- TODO: Set up GitHub Actions to auto-update this section -->
<!--END_SECTION:activity-->
\`\`\`

### 🏗️ Featured Projects Section:
\`\`\`markdown
## 🏗️ Featured Projects

<div align="center">

### 🌟 [Project Name 1](repo-link) <!-- TODO: Replace with actual project -->
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username={USERNAME}&repo=REPO_NAME&theme=tokyonight)](repo-link)

**Tech Stack:** React • Node.js • MongoDB • AWS
**Status:** 🚀 Production | ⭐ 150+ Stars | 🍴 45+ Forks
*Brief description of what this project does and why it's awesome*

---

### 🔥 [Project Name 2](repo-link) <!-- TODO: Replace with actual project -->
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username={USERNAME}&repo=REPO_NAME&theme=tokyonight)](repo-link)

**Tech Stack:** Vue.js • Express • PostgreSQL • Docker
**Status:** 🚧 In Development | ⭐ 89+ Stars | 🍴 23+ Forks
*Another amazing project description*

---

### ⚡ [Project Name 3](repo-link) <!-- TODO: Replace with actual project -->
[![Repo Card](https://github-readme-stats.vercel.app/api/pin/?username={USERNAME}&repo=REPO_NAME&theme=tokyonight)](repo-link)

**Tech Stack:** Python • FastAPI • AI/ML • Kubernetes
**Status:** ✅ Complete | ⭐ 200+ Stars | 🍴 67+ Forks
*ML/AI project that solves real-world problems*

</div>
\`\`\`

### 🌐 Professional Network:
\`\`\`markdown
## 🌐 Let's Connect & Collaborate

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/YOUR_LINKEDIN) <!-- TODO: Add your LinkedIn -->
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/YOUR_TWITTER) <!-- TODO: Add your Twitter -->
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.com) <!-- TODO: Add your portfolio -->
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.email@example.com) <!-- TODO: Add your email -->
[![Blog](https://img.shields.io/badge/Blog-FFA500?style=for-the-badge&logo=rss&logoColor=white)](https://yourblog.com) <!-- TODO: Add your blog -->

### 📱 Social Presence
[![GitHub followers](https://img.shields.io/github/followers/{USERNAME}?style=social)](https://github.com/{USERNAME})
[![Twitter Follow](https://img.shields.io/twitter/follow/YOUR_TWITTER?style=social)](https://twitter.com/YOUR_TWITTER) <!-- TODO: Add your Twitter handle -->

</div>
\`\`\`

### 💡 Additional Sections (Include based on user data):
\`\`\`markdown
## 🎓 Certifications & Achievements
<!-- TODO: Add your certifications, courses, achievements -->
- 🏆 AWS Certified Solutions Architect
- 📜 Google Cloud Professional Developer
- 🥇 HackerRank 5-star in Python
- 📊 Coursera Machine Learning Specialization

## 📝 Latest Blog Posts
<!-- TODO: Add your recent blog posts -->
- 📖 [Building Scalable Microservices with Docker](blog-link)
- 🔧 [Optimizing React Performance: Advanced Techniques](blog-link)
- ☁️ [AWS Lambda Best Practices for Serverless Architecture](blog-link)

## 🎯 2024 Goals
<!-- TODO: Update with your current year goals -->
- 🚀 Contribute to 10+ open source projects
- 📚 Master Kubernetes and DevOps practices
- 🌟 Reach 1000+ GitHub followers
- 📝 Write 12+ technical blog posts

## 🏆 Open Source Contributions
<!-- TODO: Highlight your major contributions -->
- 🔧 **[Popular Library Name]**: Added feature X, fixed critical bugs
- 🌟 **[Framework Name]**: Documentation improvements, 500+ downloads
- 🚀 **[Tool Name]**: Performance optimizations, community support
\`\`\`

### ☕ Support Section (ALWAYS include at bottom):
\`\`\`markdown
---

## ☕ Support My Work

If you found my projects helpful or learned something from my code, consider supporting my work:

<div align="center">

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/YOUR_USERNAME) <!-- TODO: Replace YOUR_USERNAME with your Buy Me A Coffee username -->

[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/YOUR_USERNAME) <!-- TODO: Replace YOUR_USERNAME with your Ko-fi username -->

[![Sponsor](https://img.shields.io/badge/GitHub%20Sponsors-EA4AAA?style=for-the-badge&logo=github-sponsors&logoColor=white)](https://github.com/sponsors/YOUR_USERNAME) <!-- TODO: Replace YOUR_USERNAME with your GitHub username -->

</div>

<div align="center">
  <sub>💡 <i>Every contribution, no matter how small, helps me maintain and improve my open source projects!</i></sub>
</div>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username={USERNAME}&color=blueviolet&style=for-the-badge&label=Profile+Views"/>

  ### 🚀 "Code is poetry, and every commit tells a story"

  <sub>⭐ Feel free to star any repositories you find interesting!</sub>
</div>
\`\`\`

---

## Generation Instructions

1. **Always replace {USERNAME} with the actual GitHub username from user data**
2. **Vary the structure** - never use the same pattern twice in a row
3. **Include ALL analytics sections** for comprehensive GitHub insights
4. **Add TODO comments** for missing information with clear instructions
5. **Use modern badge styles** and contemporary color schemes
6. **Ensure mobile responsiveness** with proper div alignment
7. **Include emojis strategically** - enhance readability without overdoing
8. **Generate based on actual user data** when available
9. **Add profile view counter** and engagement metrics
10. **Always include the support section** at the bottom

---

## User Data Analysis

Analyze the provided user data and:
- Extract programming languages from repositories
- Identify most popular/starred repositories
- Determine user's primary tech stack
- Find social links and contact information
- Calculate approximate experience level
- Identify contribution patterns and activity

---

## Final Output Requirements

- **Pure Markdown only** - no explanations or commentary
- **Production-ready** - can be directly copied to GitHub
- **Visually stunning** - impressive to recruiters and developers
- **Technically accurate** - reflects actual skills and experience
- **Professionally formatted** - consistent spacing and alignment
- **Highly engaging** - encourages interaction and follows

Generate the **most impressive, comprehensive, and professional GitHub Profile README** possible for this developer.

---

## User Data:
${JSON.stringify(userData, null, 2)}
`;

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
      <img src="/ai.svg" alt="ai-icon" class='w-[23px]'/>
      Generate Profile Readme
    </button>
  </div>
</template>