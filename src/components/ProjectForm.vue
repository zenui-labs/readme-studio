<template>
  <div class="p-6">
    <h2 class="text-xl mb-2">Enter GitHub Repo URL</h2>
    <input v-model="repoUrl" class="input" placeholder="https://github.com/owner/repo"/>
    <button @click="generate" class="btn mt-2">Generate README</button>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useResultStore} from '../stores/resultStore.js'
import {fetchRepoContents, fetchRepoInfo} from '../utils/githubApi'
import {generateReadmeWithClaude} from '../utils/groqApi'
import {useInputStore} from "../stores/inputStore.js";

const router = useRouter()
const inputStore = useInputStore()
const resultStore = useResultStore()

const repoUrl = ref(inputStore.repoUrl)

async function generate() {
  const [owner, repo] = repoUrl.value.replace('https://github.com/', '').split('/')
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
  resultStore.setReadme(result)
  router.push('/result')
}
</script>
