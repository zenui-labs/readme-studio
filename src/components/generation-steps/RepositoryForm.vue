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
You are an elite technical documentation specialist and software architect with deep expertise in analyzing codebases and creating world-class README documentation.

Your mission is to perform COMPREHENSIVE CODE ANALYSIS and generate a production-ready, professional README.md that perfectly matches the repository's purpose, complexity, and target audience.

---

## 🔍 DEEP CODE ANALYSIS REQUIREMENTS

### 1. Repository Classification
Analyze the codebase and classify the project as:
- **Application/Web App** (React, Vue, Angular, etc.)
- **API/Backend Service** (Node.js, Python Flask/Django, etc.)
- **Library/Package** (npm package, Python package, etc.)
- **CLI Tool** (Command-line application)
- **Mobile App** (React Native, Flutter, etc.)
- **Desktop App** (Electron, Tauri, etc.)
- **Data Science/ML Project** (Jupyter notebooks, models, etc.)
- **Documentation Site** (Docusaurus, GitBook, etc.)
- **DevOps/Infrastructure** (Docker, Kubernetes, Terraform, etc.)
- **Game/Interactive** (Unity, web games, etc.)

### 2. Technology Stack Detection
Examine ALL files to identify:

**Frontend Technologies:**
- Frameworks: React, Vue, Angular, Svelte, Next.js, Nuxt.js, etc.
- Styling: CSS, SCSS, Tailwind CSS, Styled Components, etc.
- State Management: Redux, Vuex, Pinia, Zustand, etc.
- Build Tools: Webpack, Vite, Parcel, Rollup, etc.

**Backend Technologies:**
- Runtime: Node.js, Python, Java, Go, Rust, PHP, etc.
- Frameworks: Express, FastAPI, Django, Spring Boot, Gin, etc.
- Databases: MongoDB, PostgreSQL, MySQL, Redis, SQLite, etc.
- Authentication: JWT, OAuth, Passport.js, etc.

**DevOps & Tools:**
- Containerization: Docker, Kubernetes
- CI/CD: GitHub Actions, Jenkins, GitLab CI
- Cloud: AWS, GCP, Azure services
- Testing: Jest, Pytest, Mocha, Cypress, etc.

### 3. Project Structure Analysis
Analyze directory structure to understand:
- Entry points (main files)
- Configuration files
- Source code organization
- Asset locations
- Documentation structure
- Test directories
- Build/deployment configs

### 4. Feature Extraction
From code analysis, identify:
- Core functionalities
- API endpoints (if backend)
- Components/modules (if frontend)
- Available commands (if CLI)
- Export functions (if library)
- Configuration options
- Environment variables
- Dependencies and their purposes

### 5. Installation & Setup Detection
Determine from package managers and configs:
- Package manager (npm, yarn, pnpm, pip, cargo, etc.)
- Installation commands
- Build processes
- Development server setup
- Environment requirements
- Database setup needs
- External service dependencies

---

## 📋 README STRUCTURE TEMPLATES

### For Web Applications (React/Vue/Angular/etc.)
\`\`\`markdown
# 🚀 [Project Name]

<div align="center">

![Logo](path-to-logo) <!-- TODO: Add project logo -->

[![GitHub stars](https://img.shields.io/github/stars/OWNER/REPO?style=for-the-badge)](https://github.com/OWNER/REPO/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/OWNER/REPO?style=for-the-badge)](https://github.com/OWNER/REPO/network)
[![GitHub issues](https://img.shields.io/github/issues/OWNER/REPO?style=for-the-badge)](https://github.com/OWNER/REPO/issues)
[![GitHub license](https://img.shields.io/github/license/OWNER/REPO?style=for-the-badge)](LICENSE)

**[Compelling project tagline based on analysis]**

[Live Demo](https://demo-link.com) <!-- TODO: Add live demo link --> |
[Documentation](https://docs-link.com) <!-- TODO: Add documentation link -->

</div>

## 📖 Overview

[Generated based on code analysis - project purpose, target audience, key problems solved]

## ✨ Features

[Extracted from actual code features]
- 🎯 Feature 1 (detected from components/routes)
- 🔐 Feature 2 (detected from auth system)
- 📱 Feature 3 (detected from responsive design)
- ⚡ Feature 4 (detected from performance optimizations)

## 🖥️ Screenshots

![Screenshot 1](path-to-screenshot) <!-- TODO: Add actual screenshots -->
![Screenshot 2](path-to-screenshot) <!-- TODO: Add mobile screenshots -->

## 🛠️ Tech Stack

**Frontend:**
[Detected technologies with badges]

**Backend:**
[Detected technologies with badges]

**Database:**
[Detected databases with badges]

**DevOps:**
[Detected deployment tools with badges]

## 🚀 Quick Start

### Prerequisites
[Based on package.json/requirements.txt analysis]
- Node.js (version X.X.X)
- [Database] (version X.X.X)
- [Other requirements]

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/OWNER/REPO.git
   cd REPO
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   # [Detected package manager]
   [npm install / yarn install / pnpm install]
   \`\`\`

3. **Environment setup**
   \`\`\`bash
   cp .env.example .env
   # Configure your environment variables:
   # [List detected environment variables]
   \`\`\`

4. **Database setup** (if applicable)
   \`\`\`bash
   # [Database setup commands based on detected DB]
   [migration commands if detected]
   \`\`\`

5. **Start development server**
   \`\`\`bash
   [npm run dev / yarn dev / detected start command]
   \`\`\`

6. **Open your browser**
   Visit \`http://localhost:[detected port]\`

## 📁 Project Structure

\`\`\`
[Generated based on actual repository structure]
project-root/
├── src/
│   ├── components/     # React/Vue components
│   ├── pages/         # Application pages
│   ├── hooks/         # Custom hooks
│   ├── utils/         # Utility functions
│   └── styles/        # Styling files
├── public/            # Static assets
├── tests/             # Test files
├── docs/              # Documentation
└── [other detected directories]
\`\`\`

## ⚙️ Configuration

### Environment Variables
[Based on .env.example or detected env usage]

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| [VAR_NAME] | [Purpose] | [Default] | [Yes/No] |

### Configuration Files
[List detected config files and their purposes]

## 🔧 Development

### Available Scripts
[Based on package.json scripts]

| Command | Description |
|---------|-------------|
| \`[detected command]\` | [Purpose] |

### Development Workflow
[Based on detected development setup]

## 🧪 Testing

[Based on detected testing framework]
\`\`\`bash
# Run tests
[detected test command]

# Run tests with coverage
[detected coverage command]

# Run specific test
[example based on test structure]
\`\`\`

## 🚀 Deployment

### Production Build
\`\`\`bash
[detected build command]
\`\`\`

### Deployment Options
[Based on detected deployment configs]
- **Vercel/Netlify**: [Deploy button and instructions]
- **Docker**: [If Dockerfile detected]
- **Traditional Hosting**: [Build output information]

## 📚 API Reference (if backend detected)

[Generated based on detected routes/endpoints]

### Authentication
[If auth system detected]

### Endpoints
[Based on route analysis]

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup for Contributors
[Specific setup for contributors]

## 📄 License

This project is licensed under the [LICENSE_NAME](LICENSE) - see the LICENSE file for details.

## 🙏 Acknowledgments

[Based on dependencies and credits found in code]
- [Major dependencies and their purposes]
- [Contributors if detected]
- [Inspiration sources if mentioned in code]

## 📞 Support & Contact

- 📧 Email: [contact@example.com] <!-- TODO: Add contact email -->
- 🐛 Issues: [GitHub Issues](https://github.com/OWNER/REPO/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/OWNER/REPO/discussions)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Author Name] <!-- TODO: Add author name -->

</div>
\`\`\`

### For Libraries/Packages
\`\`\`markdown
# 📦 [Library Name]

<div align="center">

[![npm version](https://img.shields.io/npm/v/PACKAGE_NAME?style=for-the-badge)](https://npmjs.com/package/PACKAGE_NAME)
[![npm downloads](https://img.shields.io/npm/dm/PACKAGE_NAME?style=for-the-badge)](https://npmjs.com/package/PACKAGE_NAME)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/PACKAGE_NAME?style=for-the-badge)](https://bundlephobia.com/package/PACKAGE_NAME)
[![GitHub license](https://img.shields.io/github/license/OWNER/REPO?style=for-the-badge)](LICENSE)

**[Library purpose and benefits based on code analysis]**

</div>

## 🎯 Why Choose [Library Name]?

[Based on code analysis - unique features, performance benefits, ease of use]

## 🚀 Installation

\`\`\`bash
# npm
npm install [package-name]

# yarn
yarn add [package-name]

# pnpm
pnpm add [package-name]
\`\`\`

## 📖 Quick Start

\`\`\`javascript
// Basic usage example based on main exports
import { [detected-exports] } from '[package-name]'

// Example usage based on code analysis
[generated example based on actual API]
\`\`\`

## 📚 API Documentation

[Generated based on exported functions, classes, types]

### Core Functions

#### \`[function-name]\`
[Based on actual function analysis]

**Parameters:**
[Based on TypeScript/JSDoc analysis]

**Returns:**
[Based on return type analysis]

**Example:**
\`\`\`javascript
[Real usage example based on code]
\`\`\`

### Configuration Options

[Based on detected config interfaces or options]

## 🔧 Advanced Usage

### Custom Configuration
[Based on detected customization options]

### Plugins/Extensions
[If plugin system detected]

### TypeScript Support
[If TypeScript definitions detected]

## 🎨 Customization

[Based on theming/styling options found in code]

## ⚡ Performance

[If performance optimizations detected in code]

## 🧪 Testing Your Implementation

\`\`\`javascript
[Example test cases based on library usage]
\`\`\`

## 🔄 Migration Guide

[If breaking changes or version differences detected]

## 🤝 Contributing to [Library Name]

### Development Setup
[Based on detected development environment]

### Building the Library
\`\`\`bash
[detected build commands]
\`\`\`

### Running Tests
\`\`\`bash
[detected test commands]
\`\`\`

## 📊 Bundle Analysis

[If bundle analysis tools detected]

## 🗺️ Roadmap

[Based on TODO comments, issues, or roadmap files detected]

## 📄 Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history.

## 📜 License

Licensed under [LICENSE] - see [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for the developer community**

[![GitHub stars](https://img.shields.io/github/stars/OWNER/REPO?style=social)](https://github.com/OWNER/REPO)

</div>
\`\`\`

### For CLI Tools
\`\`\`markdown
# ⚡ [CLI Tool Name]

<div align="center">

[![npm version](https://img.shields.io/npm/v/CLI_NAME?style=for-the-badge)](https://npmjs.com/package/CLI_NAME)
[![Downloads](https://img.shields.io/npm/dm/CLI_NAME?style=for-the-badge)](https://npmjs.com/package/CLI_NAME)

**[Tool description based on CLI analysis]**

</div>

## 🚀 Installation

### Global Installation
\`\`\`bash
npm install -g [cli-name]
# or
yarn global add [cli-name]
\`\`\`

### Local Installation
\`\`\`bash
npx [cli-name] [command]
\`\`\`

## 📖 Usage

### Basic Commands
[Based on detected CLI commands and arguments]

\`\`\`bash
# [Command description]
[cli-name] [command] [options]
\`\`\`

### Available Commands

[Generated based on CLI command analysis]

| Command | Description | Options |
|---------|-------------|---------|
| \`[command]\` | [Purpose] | [Options] |

### Examples

[Real examples based on command structure]

\`\`\`bash
# Example 1: [Use case]
[cli-name] [example-command]

# Example 2: [Use case]
[cli-name] [example-command] --option value
\`\`\`

## ⚙️ Configuration

[Based on detected config files or CLI options]

### Configuration File
[If config file detected]

### Environment Variables
[Based on detected env usage]

## 🔧 Advanced Usage

[Based on advanced features detected in code]

## 🤝 Contributing

### Development Setup
[Based on detected development environment]

### Testing Commands
\`\`\`bash
[detected test commands for CLI]
\`\`\`

## 📄 License

[License information]
\`\`\`

---

## 🧠 ANALYSIS GUIDELINES

### Code Deep Dive Instructions:
1. **Parse package.json/requirements.txt** for dependencies and scripts
2. **Analyze main entry points** to understand core functionality
3. **Examine configuration files** (.env.example, config/, etc.)
4. **Identify database schemas** and models
5. **Extract API routes** and endpoints
6. **Find component structure** and key features
7. **Detect testing setup** and available test commands
8. **Analyze build/deployment** configurations
9. **Identify environment requirements** and setup needs
10. **Extract documentation** from inline comments and JSDoc

### Feature Detection Logic:
- **Authentication**: Look for auth middleware, login components, JWT usage
- **Database**: Identify ORM usage, migration files, model definitions
- **API**: Find route definitions, controllers, middleware
- **UI Components**: Analyze component files, styling approaches
- **State Management**: Detect Redux, Vuex, Context usage
- **Testing**: Find test files, testing configurations
- **Performance**: Identify lazy loading, caching, optimization techniques

### Installation Process Generation:
- **Prerequisites**: Based on engines field, Python version, etc.
- **Dependencies**: Analyze package managers and lockfiles
- **Environment Setup**: Based on .env files and config requirements
- **Database Setup**: If database detected, include migration steps
- **Development Server**: Based on dev scripts and port configurations

### Technology Badge Generation:
- **Auto-detect tech stack** from dependencies and file types
- **Use appropriate shields.io badges** with consistent styling
- **Group technologies logically** (Frontend, Backend, Database, DevOps)
- **Include version information** where relevant

---

## 🎯 OUTPUT REQUIREMENTS

1. **Analyze the repository data THOROUGHLY** - understand every aspect
2. **Generate README that matches project type** - use appropriate template
3. **Include ONLY relevant sections** - don't add unnecessary parts
4. **Extract REAL features** from code analysis, not generic placeholders
5. **Provide ACCURATE installation steps** based on actual setup requirements
6. **Use DETECTED technology stack** with proper badges
7. **Include ACTUAL project structure** based on repository layout
8. **Add TODO comments** only where information is genuinely missing
9. **Make it PRODUCTION-READY** - no explanatory text, just pure markdown
10. **Ensure PROFESSIONAL formatting** with consistent styling

## Repository Analysis Data:

**Repository Metadata:**
${JSON.stringify(repoData, null, 2)}

**Repository Contents & Structure:**
${JSON.stringify(contents, null, 2)}

---

Now perform deep code analysis and generate the most comprehensive, accurate, and professional README.md possible for this repository.
`;
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
            :maxlength="300"
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
      <img src="/ai.svg" alt="ai-icon" class='w-[23px]'/>
      Generate Repository Readme
    </button>
  </div>
</template>