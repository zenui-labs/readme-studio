# Contributing to Readme Studio

First off, thank you for considering contributing to Readme Studio! It's people like you that make Readme Studio such a
great tool.

## 📝 Code of Conduct

This project and everyone participating in it are governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By
participating, you are expected to uphold this code.

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one.
When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When you are creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead

### Pull Requests

1. Fork the repo and create your branch from `production`
2. If you've added code that should be tested, add tests
3. Ensure the test suite passes
4. Make sure your code lints

## 💻 Development Setup

1. Fork the repository
2. Clone your fork:

```bash 
git clone [https://github.com/zenui-labs/readme-studio.git](https://github.com/zenui-labs/readme-studio.git)
```

3. Install dependencies:

```bash 
cd readme-studio npm install
```

4. Create a branch for your changes:

```bash 
git checkout -b feature/your-feature-name
```

### Project Structure

```
├── package-lock.json
├── package.json
├── public
│   ├── _redirects
│   ├── ai.svg
│   ├── favicon.svg
│   └── logo.svg
├── src
│   ├── App.vue
│   ├── components
│   │   ├── Changelog.vue
│   │   ├── Faq.vue
│   │   ├── Features.vue
│   │   ├── Footer.vue
│   │   ├── Hero.vue
│   │   ├── MobileNabar.vue
│   │   ├── Navbar.vue
│   │   ├── TemplatesShortcut.vue
│   │   ├── editor-box
│   │   │   ├── ComponentLibrary.vue
│   │   │   ├── ComponentManager.vue
│   │   │   ├── Editor.vue
│   │   │   ├── Header.vue
│   │   │   └── Preview.vue
│   │   ├── generation-steps
│   │   │   ├── GeneratingScreen.vue
│   │   │   ├── ProfileForm.vue
│   │   │   ├── ReadmePreview.vue
│   │   │   ├── RepositoryForm.vue
│   │   │   └── SelectType.vue
│   │   ├── modals
│   │   │   ├── FullScreenPreviewModal.vue
│   │   │   ├── LimitErrorModal.vue
│   │   │   └── OverloadErrorModal.vue
│   │   ├── templates
│   │   │   ├── index.vue
│   │   │   └── template-card.vue
│   │   └── ui
│   │       └── CustomSelectBox.vue
│   ├── constants
│   │   ├── generation-process.ts
│   │   ├── index.ts
│   │   ├── paths.ts
│   │   └── prompts.ts
│   ├── data
│   │   ├── changelog-data.ts
│   │   ├── faq-data.ts
│   │   ├── readme-sections.ts
│   │   └── template-data.ts
│   ├── layouts
│   │   └── RootLayout.vue
│   ├── main.ts
│   ├── pages
│   │   ├── changelog-page.vue
│   │   ├── editor-page.vue
│   │   ├── generator-page.vue
│   │   ├── landing-page.vue
│   │   └── templates-page.vue
│   ├── router.ts
│   ├── stores
│   │   └── useStore.ts
│   ├── style.css
│   ├── svg-icons
│   │   ├── ai-icon.vue
│   │   ├── discord.vue
│   │   ├── facebook.vue
│   │   ├── moon.vue
│   │   └── sun.vue
│   ├── types
│   │   └── index.ts
│   ├── utils
│   │   ├── githubApi.ts
│   │   └── groqApi.ts
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.tsbuildinfo
└── vite.config.ts
```

### Development Workflow

1. Start the development server:

```bash 
npm run dev
```

2. Make your changes
3. Test your changes:

```bash 
npm run test
```

4. Lint your code:

```bash
npm run lint
```

### Commit Guidelines

```
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Your commit messages should be structured as follows:
```

# Best of luck.........