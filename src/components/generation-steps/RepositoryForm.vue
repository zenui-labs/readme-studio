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
You are an expert open-source technical writer and developer advocate tasked with generating a professional, comprehensive, and production-ready README.md for a GitHub repository.

---

## Your mission

- Analyze the repository metadata, structure, and code contents thoroughly.
- Extract meaningful insights such as project purpose, features, usage, configuration, APIs, tests, and contribution guidelines.
- Dynamically decide **which sections to include** based on the repo's contents and complexity.
- If the project is sufficiently complex or lengthy, include a **Table of Contents**; otherwise, omit it.
- Use a clear, well-structured layout optimized for readability and easy navigation.
- Add badges (stars, forks, license, etc.) using shields.io dynamically based on repo info.
- Add screenshots or images if present in the repo or use placeholders with notes to update.
- Insert TODO placeholders clearly where data or documentation is missing.
- Provide code examples, install commands, usage instructions, and configuration details where detectable.
- Use professional, concise language accessible to both new users and experienced developers.
- Make the README copy-paste-ready with GitHub Flavored Markdown.
- Include sections like Overview, Features, Installation, Usage, Configuration, API Reference, Roadmap, Contributing, Testing, FAQ, License, Contact, and Acknowledgements — but only if relevant.
- At the end, add contact info, license details, and acknowledgements.

---

## Repository Info

Use the following data to guide your content decisions:

Repository Metadata:
${JSON.stringify(repoData, null, 2)}

Top-Level Repository File Tree and Contents:
${JSON.stringify(contents, null, 2)}

---

## README structure example (adapt dynamically):

# Project Title ![Stars](https://img.shields.io/github/stars/OWNER/REPO) ![Forks](https://img.shields.io/github/forks/OWNER/REPO) ![License](https://img.shields.io/github/license/OWNER/REPO)

> Short, punchy tagline or project description.

${'{{TABLE_OF_CONTENTS}}'}  <!-- Include this only if README is long enough -->

## Overview

Describe the project purpose, goals, and target audience.

## Screenshots

Include screenshots or GIFs showcasing the project, or placeholders if none found.

## Features

List key features and unique selling points detected from the repo code.

## Getting Started

Prerequisites and quickstart instructions.

## Installation

Provide install commands and steps.

## Usage

Example usage commands and code snippets.

## Configuration

Document environment variables, config files, or options if present.

## API Reference

Detail public APIs, endpoints, or exports with examples.

## Roadmap

Planned future improvements if detectable.

## Contributing

Contribution guidelines and code of conduct.

## Testing

How to run tests and verify correctness.

## FAQ

Common questions and answers, if relevant.

## License

License name and badge, linked to LICENSE file.

## Contact

Author and maintainer contacts, social links.

## Acknowledgements

Credits, libraries, and inspirations.

---

Remember:

- Use markdown formatting, including headings, lists, code blocks, and badges.
- Insert TODO placeholders where information is missing.
- Adjust the structure dynamically to fit the repository's scale and content.
- Output **only** the README markdown.

Now, generate the best possible README.md for the repository based on the above instructions.
`
  if (store.hasError) return
  const result = await generateReadmeWithClaude(prompt)
  store.setGeneratedReadme(result)
}

</script>

<template>
  <div class="space-y-6">
    <div>
      <label class="block text-[1rem] text-left dark:text-darkText font-medium text-gray-700 mb-2">
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
            :class="['block w-full pl-10 pr-3 py-4 dark:text-darkText border-2 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandColor focus:border-transparent transition-all duration-200',
                error ? 'border-red-300 bg-red-50' : 'border-gray-200 dark:bg-darkCardBgColor dark:border-darkBorder bg-white']"
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
        class="w-full bg-brandColor cursor-pointer gap-3 text-white py-4 px-6 rounded-xl font-medium text-lg shadow-lg hover:shadow-xl disabled:opacity-40 dark:disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-2"
    >
      <AiIcon/>
      Generate Repository Readme
    </button>
  </div>
</template>