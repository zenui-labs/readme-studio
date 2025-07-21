<script setup lang="ts">
import {AlertCircle, Github} from 'lucide-vue-next'
import {useStore} from "@stores/useStore";
import {ref} from "vue";
import AiIcon from "@/svg-icons/ai-icon.vue";
import {fetchRepoContents, fetchRepoInfo} from "@utils/githubApi";
import {generateReadmeWithClaude} from "@utils/groqApi";

const selectedType = ref('')
const input = ref('')
const error = ref('')

const store = useStore()

const validateGithubUrl = (url: string) => {
  return /^https:\/\/github\.com\/[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+\/?$/.test(url.trim())
}

const handleGenerating = async () => {
  const [owner, repo] = input.value.replace('https://github.com/', '').split('/')
  store.currentStep = 3
  const repoData = await fetchRepoInfo(owner, repo)
  const contents = await fetchRepoContents(owner, repo)
  const prompt = `
You are an expert open-source technical writer and developer advocate. Your task is to generate a comprehensive, professional, and production-ready README.md for a GitHub repository.

## Instructions

- **Audience:** The README should be understandable to both new users and experienced developers.
- **Goal:** Make the project easy to understand, use, contribute to, and maintain.
- **Be exhaustive:** Include every section and detail that a high-quality open-source project README should have.
- **Infer details:** Use the provided repository data and contents to extract key features, usage, configuration, and contribution info.
- **If any info is missing, add a clearly marked TODO or a placeholder.**
- **Use copy-paste-ready Markdown, minimal placeholders.**
- **Use badges (shields.io), images, and markdown formatting to create a visually appealing result.**
- **Structure the README as follows:**

### Structure & Sections

# Project Title ![Stars](https://img.shields.io/github/stars/OWNER/REPO) ![Forks](https://img.shields.io/github/forks/OWNER/REPO) ![License](https://img.shields.io/github/license/OWNER/REPO)

> **Short, punchy tagline.**

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Testing](#testing)
- [FAQ](#faq)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

Describe the project, its purpose, and target audience.

## Screenshots

Insert images/GIFs of the project in action.
![Screenshot](https://example.com/screenshot.png)

## Features

- List all major and minor features.
- Highlight unique selling points.

## Getting Started

- Prerequisites (software, versions, etc.)
- Quickstart guide.

## Installation

\`\`\`sh
# Example install commands
npm install ...
\`\`\`

## Usage

\`\`\`sh
# Example usage
npm run start
\`\`\`
Explain all main use cases.

## Configuration

- List all config options, environment variables, and secrets.
- Provide sample config files.

## API Reference

- List public APIs, endpoints, or exports.
- Add code examples.

## Roadmap

- Planned features and improvements.

## Contributing

- Guidelines and code of conduct.
- How to open issues and pull requests.

## Testing

\`\`\`sh
# How to run tests
npm test
\`\`\`

## FAQ

- Common questions and answers.

## License

State the license, with a badge and link.

## Contact

- Author(s), maintainer(s), email, and social links.

## Acknowledgements

- Credits, third-party libraries, and inspirations.

---

## Markdown Only

- Output **only** the final README in GitHub-flavored Markdown.
- Use best practices for formatting, accessibility, and clarity.
- If information is missing, insert clearly marked \`TODO\`s or sample placeholders.

## Repository Details

Repository Info:
${JSON.stringify(repoData, null, 2)}

Repository File Tree (top-level, with README, LICENSE, etc. noted):
${JSON.stringify(contents, null, 2)}

---
Now, generate the **best possible production-ready README** for this repository.
`
  const result = await generateReadmeWithClaude(prompt)
  store.setGeneratedReadme(result)
}

</script>

<template>
  <div class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left font-medium text-gray-700 mb-2">
        GitHub Public Repository URL
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Github class="h-5 w-5 text-gray-400"/>
        </div>
        <input
            type="text"
            v-model="input"
            :placeholder="selectedType === 'profile' ? 'your-username' : 'https://github.com/username/repository'"
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
        :disabled="!validateGithubUrl(input)"
        @click="handleGenerating"
        class="w-full bg-brandColor cursor-pointer gap-3 text-white py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <AiIcon/>
      Generate Repository Readme
    </button>
  </div>
</template>