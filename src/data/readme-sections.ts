import {
    AlertTriangle,
    Award,
    BookOpen,
    Calendar,
    CheckCircle,
    Code,
    Database,
    Download,
    FileText,
    Globe,
    Hash,
    HelpCircle,
    Image,
    Layers,
    Link,
    Lock,
    Package,
    Rocket,
    Settings,
    Shield,
    Star,
    Table,
    TrendingUp,
    TypeOutline,
    Users,
    Zap,
    Activity,
    AlignCenter,
    ArrowUpToLine,
    BarChart3,
    Blocks,
    Boxes,
    ChartLine,
    ChevronsDownUp,
    Columns2,
    Eye,
    Flame,
    ImagePlus,
    Info,
    Keyboard,
    Lightbulb,
    ListChecks,
    MousePointerClick,
    PanelBottom,
    PanelTop,
    Pin,
    Quote,
    SeparatorHorizontal,
    Share2,
    Sparkles,
    SquareCode,
    SunMoon,
    Table2,
    Terminal,
    TriangleAlert,
    Trophy,
    Worm
} from "lucide-vue-next";
import {ReadmeSectionType} from "@/types";

export const ReadmeSections: ReadmeSectionType[] = [
    {
        id: 'title',
        name: 'Project Title',
        category: 'Sections',
        icon: Hash,
        template: '# Project Title\n\nBrief description of your project.\n\n'
    },
    {
        id: 'typing_text',
        name: 'Typing Text',
        category: 'Creative',
        icon: TypeOutline,
        template: '[![Typing SVG](https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=30&duration=3000&pause=1000&color=0981F7&background=FFFFFF00&center=true&vCenter=true&width=1245&lines=Front-End+Web+Developer;React+Developer)](https://git.io/typing-svg)'
    },
    {
        id: 'badges',
        name: 'Badges',
        category: 'Elements',
        icon: Shield,
        template: '[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)\n[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()\n[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()\n[![Downloads](https://img.shields.io/npm/dm/package-name.svg)]()\n\n'
    },
    {
        id: 'description',
        name: 'Description',
        category: 'Sections',
        icon: FileText,
        template: '## Description\n\nA detailed description of what this project does and who it\'s for. Explain the problem it solves and why it\'s useful.\n\n'
    },
    {
        id: 'demo',
        name: 'Demo',
        category: 'Sections',
        icon: Globe,
        template: '## Demo\n\n🚀 [Live Demo](https://your-demo-url.com)\n\n![Demo GIF](https://via.placeholder.com/600x300?text=Demo+GIF)\n\n'
    },
    {
        id: 'table-of-contents',
        name: 'Table of Contents',
        category: 'Sections',
        icon: BookOpen,
        template: '## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Features](#features)\n- [API Reference](#api-reference)\n- [Contributing](#contributing)\n- [License](#license)\n\n'
    },
    {
        id: 'installation',
        name: 'Installation',
        category: 'Sections',
        icon: Download,
        template: '## Installation\n\n### Using npm\n```bash\nnpm install your-package\n```\n\n### Using yarn\n```bash\nyarn add your-package\n```\n\n### Using pnpm\n```bash\npnpm add your-package\n```\n\n'
    },
    {
        id: 'quick-start',
        name: 'Quick Start',
        category: 'Sections',
        icon: Rocket,
        template: '## Quick Start\n\nGet up and running in seconds:\n\n```javascript\nimport { YourPackage } from \'your-package\';\n\nconst instance = new YourPackage();\ninstance.start();\n```\n\n'
    },
    {
        id: 'usage',
        name: 'Usage',
        category: 'Sections',
        icon: Code,
        template: '## Usage\n\n### Basic Example\n\n```javascript\nconst example = require(\'your-package\');\n\n// Initialize\nconst instance = example.create({\n  option1: \'value1\',\n  option2: true\n});\n\n// Use it\ninstance.doSomething();\n```\n\n### Advanced Usage\n\n```javascript\n// More complex example\ninstance.configure({\n  advanced: true,\n  callback: (result) => {\n    console.log(\'Result:\', result);\n  }\n});\n```\n\n'
    },
    {
        id: 'features',
        name: 'Features',
        category: 'Sections',
        icon: Star,
        template: '## Features\n\n- ✨ **Feature 1** - Description of feature 1\n- 🚀 **Performance** - Lightning fast performance\n- 🎯 **Easy to Use** - Simple and intuitive API\n- 💎 **Lightweight** - Minimal dependencies\n- 🔧 **Configurable** - Highly customizable\n- 📱 **Responsive** - Works on all devices\n\n'
    },
    {
        id: 'api-reference',
        name: 'API Reference',
        category: 'Sections',
        icon: Database,
        template: '## API Reference\n\n### Methods\n\n#### `initialize(options)`\n\nInitializes the instance with given options.\n\n**Parameters:**\n- `options` (Object) - Configuration options\n  - `apiKey` (String) - Your API key\n  - `debug` (Boolean) - Enable debug mode (default: false)\n\n**Returns:** Promise<Instance>\n\n#### `process(data)`\n\nProcesses the provided data.\n\n**Parameters:**\n- `data` (Any) - Data to process\n\n**Returns:** Promise<Result>\n\n'
    },
    {
        id: 'examples',
        name: 'Examples',
        category: 'Sections',
        icon: Layers,
        template: '## Examples\n\n### Example 1: Basic Usage\n\n```javascript\n// Basic implementation\nconst result = await api.process(data);\nconsole.log(result);\n```\n\n### Example 2: With Configuration\n\n```javascript\n// With custom configuration\nconst config = {\n  timeout: 5000,\n  retries: 3\n};\n\nconst result = await api.process(data, config);\n```\n\n### Example 3: Error Handling\n\n```javascript\ntry {\n  const result = await api.process(data);\n  console.log(\'Success:\', result);\n} catch (error) {\n  console.error(\'Error:\', error.message);\n}\n```\n\n'
    },
    {
        id: 'requirements',
        name: 'Requirements',
        category: 'Sections',
        icon: CheckCircle,
        template: '## Requirements\n\n- Node.js >= 16.0.0\n- npm >= 8.0.0\n- Modern browser with ES6+ support\n\n### System Requirements\n\n- **OS:** Windows 10+, macOS 10.15+, Ubuntu 18.04+\n- **Memory:** 4GB RAM minimum, 8GB recommended\n- **Storage:** 100MB free space\n\n'
    },
    {
        id: 'screenshot',
        name: 'Screenshots',
        category: 'Sections',
        icon: Image,
        template: '## Screenshots\n\n### Main Interface\n![Main Interface](https://via.placeholder.com/800x400?text=Main+Interface)\n\n### Settings Panel\n![Settings](https://via.placeholder.com/800x400?text=Settings+Panel)\n\n### Mobile View\n![Mobile](https://via.placeholder.com/400x600?text=Mobile+View)\n\n'
    },
    {
        id: 'configuration',
        name: 'Configuration',
        category: 'Sections',
        icon: Table,
        template: '## Configuration\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| `apiKey` | string | `null` | Your API key for authentication |\n| `timeout` | number | `5000` | Request timeout in milliseconds |\n| `retries` | number | `3` | Number of retry attempts |\n| `debug` | boolean | `false` | Enable debug logging |\n| `baseUrl` | string | `"https://api.example.com"` | Base URL for API calls |\n\n### Environment Variables\n\n```bash\nAPI_KEY=your_api_key_here\nTIMEOUT=10000\nDEBUG=true\n```\n\n'
    },
    {
        id: 'troubleshooting',
        name: 'Troubleshooting',
        category: 'Sections',
        icon: AlertTriangle,
        template: '## Troubleshooting\n\n### Common Issues\n\n#### Issue 1: Installation fails\n\n**Problem:** `npm install` fails with permission errors\n\n**Solution:**\n```bash\n# Try using sudo (Linux/Mac)\nsudo npm install\n\n# Or fix npm permissions\nnpm config set prefix ~/.local\n```\n\n#### Issue 2: Module not found\n\n**Problem:** `Cannot resolve module` error\n\n**Solution:**\n1. Clear node_modules: `rm -rf node_modules package-lock.json`\n2. Reinstall: `npm install`\n3. Check import paths\n\n### Getting Help\n\nIf you\'re still having issues:\n1. Check the [FAQ](#faq)\n2. Search existing [issues](https://github.com/username/repo/issues)\n3. Create a new issue with detailed information\n\n'
    },
    {
        id: 'faq',
        name: 'FAQ',
        category: 'Sections',
        icon: HelpCircle,
        template: '## FAQ\n\n### General Questions\n\n**Q: Is this free to use?**\nA: Yes, this project is open source and free to use under the MIT license.\n\n**Q: What browsers are supported?**\nA: All modern browsers that support ES6+ features (Chrome 60+, Firefox 60+, Safari 12+, Edge 79+).\n\n**Q: Can I use this in a commercial project?**\nA: Yes, the MIT license allows commercial use.\n\n### Technical Questions\n\n**Q: How do I contribute?**\nA: See our [Contributing Guide](#contributing) for detailed instructions.\n\n**Q: How do I report a bug?**\nA: Please create an issue on GitHub with a detailed description and reproduction steps.\n\n'
    },
    {
        id: 'roadmap',
        name: 'Roadmap',
        category: 'Sections',
        icon: TrendingUp,
        template: '## Roadmap\n\n### Current Version (v1.0)\n- ✅ Core functionality\n- ✅ Basic API\n- ✅ Documentation\n\n### Upcoming (v1.1)\n- 🔄 Performance improvements\n- 🔄 New features\n- 🔄 Bug fixes\n\n### Future (v2.0)\n- 📋 Complete rewrite\n- 📋 Breaking changes\n- 📋 New architecture\n\n### Ideas\n- 💡 Feature request 1\n- 💡 Feature request 2\n- 💡 Integration with X\n\n'
    },
    {
        id: 'changelog',
        name: 'Changelog',
        category: 'Sections',
        icon: Calendar,
        template: '## Changelog\n\n### [1.0.0] - 2024-01-15\n\n#### Added\n- Initial release\n- Core functionality\n- Basic API\n- Documentation\n\n#### Changed\n- N/A\n\n#### Fixed\n- N/A\n\n### [0.9.0] - 2023-12-20\n\n#### Added\n- Beta release\n- Testing framework\n\n#### Fixed\n- Various bug fixes\n- Performance improvements\n\n'
    },
    {
        id: 'performance',
        name: 'Performance',
        category: 'Sections',
        icon: Zap,
        template: '## Performance\n\n### Benchmarks\n\n| Operation | Time | Memory |\n|-----------|------|--------|\n| Initialize | 10ms | 2MB |\n| Process 1KB | 1ms | 1MB |\n| Process 1MB | 100ms | 5MB |\n\n### Optimization Tips\n\n1. **Use caching** when possible\n2. **Batch operations** for better performance\n3. **Enable compression** for large datasets\n4. **Monitor memory usage** in production\n\n### Load Testing Results\n\n- **Concurrent users:** 1000\n- **Average response time:** 50ms\n- **95th percentile:** 100ms\n- **Error rate:** 0.01%\n\n'
    },
    {
        id: 'security',
        name: 'Security',
        category: 'Sections',
        icon: Lock,
        template: '## Security\n\n### Security Measures\n\n- 🔒 **Encryption:** All data is encrypted in transit and at rest\n- 🛡️ **Authentication:** Secure API key authentication\n- 🔍 **Validation:** Input validation and sanitization\n- 📊 **Monitoring:** Continuous security monitoring\n\n### Reporting Security Issues\n\nIf you discover a security vulnerability, please:\n\n1. **Do NOT** create a public issue\n2. Email us at security@example.com\n3. Include detailed information about the vulnerability\n4. Allow time for us to address the issue before disclosure\n\n### Security Best Practices\n\n- Keep your API keys secure\n- Use HTTPS in production\n- Regularly update dependencies\n- Follow the principle of least privilege\n\n'
    },
    {
        id: 'testing',
        name: 'Testing',
        category: 'Sections',
        icon: CheckCircle,
        template: '## Testing\n\n### Running Tests\n\n```bash\n# Run all tests\nnpm test\n\n# Run tests in watch mode\nnpm run test:watch\n\n# Run tests with coverage\nnpm run test:coverage\n\n# Run specific test file\nnpm test -- filename.test.js\n```\n\n### Test Structure\n\n```\ntests/\n├── unit/           # Unit tests\n├── integration/    # Integration tests\n├── e2e/           # End-to-end tests\n└── fixtures/      # Test data\n```\n\n### Writing Tests\n\n```javascript\ndescribe(\'Feature\', () => {\n  test(\'should work correctly\', () => {\n    const result = feature.doSomething();\n    expect(result).toBe(expectedValue);\n  });\n});\n```\n\n'
    },
    {
        id: 'deployment',
        name: 'Deployment',
        category: 'Sections',
        icon: Package,
        template: '## Deployment\n\n### Production Build\n\n```bash\n# Build for production\nnpm run build\n\n# Start production server\nnpm start\n```\n\n### Docker Deployment\n\n```dockerfile\n# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD [\"npm\", \"start\"]\n```\n\n```bash\n# Build and run\ndocker build -t your-app .\ndocker run -p 3000:3000 your-app\n```\n\n### Environment Setup\n\n```bash\n# Production environment variables\nNODE_ENV=production\nPORT=3000\nAPI_URL=https://api.production.com\n```\n\n'
    },
    {
        id: 'team',
        name: 'Team',
        category: 'Sections',
        icon: Users,
        template: '## Team\n\n### Core Team\n\n<table>\n  <tr>\n    <td align="center">\n      <img src="https://github.com/username1.png" width="100px" alt=""/><br />\n      <b>John Doe</b><br />\n      <i>Lead Developer</i><br />\n      <a href="https://github.com/username1">GitHub</a>\n    </td>\n    <td align="center">\n      <img src="https://github.com/username2.png" width="100px" alt=""/><br />\n      <b>Jane Smith</b><br />\n      <i>UI/UX Designer</i><br />\n      <a href="https://github.com/username2">GitHub</a>\n    </td>\n  </tr>\n</table>\n\n### Contributors\n\nThanks to all the amazing contributors who have helped make this project better!\n\n[![Contributors](https://contrib.rocks/image?repo=username/repo)](https://github.com/username/repo/graphs/contributors)\n\n'
    },
    {
        id: 'acknowledgments',
        name: 'Acknowledgments',
        category: 'Sections',
        icon: Award,
        template: '## Acknowledgments\n\n### Special Thanks\n\n- **[Library Name](https://github.com/author/library)** - For providing the core functionality\n- **[Tool Name](https://tool-website.com)** - For development tools and utilities\n- **[Community Name](https://community-website.com)** - For ongoing support and feedback\n\n### Inspiration\n\nThis project was inspired by:\n- [Project 1](https://github.com/author/project1)\n- [Project 2](https://github.com/author/project2)\n- [Article Title](https://medium.com/article-link)\n\n### Resources\n\n- [Documentation](https://docs.example.com)\n- [Tutorial Series](https://tutorials.example.com)\n- [Community Forum](https://forum.example.com)\n\n'
    },
    {
        id: 'links',
        name: 'Links',
        category: 'Sections',
        icon: Link,
        template: '## Links\n\n### Official\n- 📖 [Documentation](https://docs.example.com)\n- 🚀 [Live Demo](https://demo.example.com)\n- 📦 [npm Package](https://npmjs.com/package/your-package)\n- 🐙 [GitHub Repository](https://github.com/username/repo)\n\n### Community\n- 💬 [Discord Server](https://discord.gg/yourserver)\n- 🐦 [Twitter](https://twitter.com/yourhandle)\n- 📧 [Mailing List](https://newsletter.example.com)\n- 🎥 [YouTube Channel](https://youtube.com/yourchannel)\n\n### Development\n- 🐛 [Issue Tracker](https://github.com/username/repo/issues)\n- 📊 [Project Board](https://github.com/username/repo/projects)\n- 🔄 [CI/CD Status](https://github.com/username/repo/actions)\n\n'
    },
    {
        id: 'contributing',
        name: 'Contributing',
        category: 'Sections',
        icon: Settings,
        template: '## Contributing\n\nWe love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting PRs.\n\n### Quick Start for Contributors\n\n1. **Fork** the repository\n2. **Clone** your fork: `git clone https://github.com/yourusername/repo.git`\n3. **Create** a branch: `git checkout -b feature/amazing-feature`\n4. **Install** dependencies: `npm install`\n5. **Make** your changes\n6. **Test** your changes: `npm test`\n7. **Commit** your changes: `git commit -m \'Add amazing feature\'`\n8. **Push** to your branch: `git push origin feature/amazing-feature`\n9. **Submit** a Pull Request\n\n### Development Setup\n\n```bash\n# Clone the repo\ngit clone https://github.com/username/repo.git\ncd repo\n\n# Install dependencies\nnpm install\n\n# Start development server\nnpm run dev\n\n# Run tests\nnpm test\n```\n\n### Contribution Guidelines\n\n- Follow the existing code style\n- Write tests for new features\n- Update documentation as needed\n- Use meaningful commit messages\n- Keep PRs focused and small\n\n'
    },
    {
        id: 'license',
        name: 'License',
        category: 'Sections',
        icon: FileText,
        template: '## License\n\nThis project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.\n\n### MIT License Summary\n\n- ✅ Commercial use\n- ✅ Modification\n- ✅ Distribution\n- ✅ Private use\n- ❌ Liability\n- ❌ Warranty\n\n### Other Licenses\n\nSome dependencies may be under different licenses:\n- [Dependency 1](https://github.com/author/dep1) - Apache 2.0\n- [Dependency 2](https://github.com/author/dep2) - BSD 3-Clause\n\n---\n\n**Made with ❤️ by [Your Name](https://github.com/username)**\n\n'
    },
    // Elements: GitHub-flavored markdown building blocks.
    {
        id: 'alert-note',
        name: 'Note Alert',
        category: 'Elements',
        icon: Info,
        template: '> [!NOTE]\n> Useful information that users should know, even when skimming content.\n\n'
    },
    {
        id: 'alert-tip',
        name: 'Tip Alert',
        category: 'Elements',
        icon: Lightbulb,
        template: '> [!TIP]\n> Helpful advice for doing things better or more easily.\n\n'
    },
    {
        id: 'alert-warning',
        name: 'Warning Alert',
        category: 'Elements',
        icon: TriangleAlert,
        template: '> [!WARNING]\n> Urgent info that needs immediate user attention to avoid problems.\n\n'
    },
    {
        id: 'collapsible',
        name: 'Collapsible',
        category: 'Elements',
        icon: ChevronsDownUp,
        template: '<details>\n<summary><b>Click to expand</b></summary>\n\nHidden content goes here. Markdown **works** inside.\n\n```bash\nnpm run build\n```\n\n</details>\n\n'
    },
    {
        id: 'code-block',
        name: 'Code Block',
        category: 'Elements',
        icon: SquareCode,
        template: '```javascript\nfunction greet(name) {\n  return `Hello, ${name}!`;\n}\n```\n\n'
    },
    {
        id: 'table',
        name: 'Table',
        category: 'Elements',
        icon: Table2,
        template: '| Column 1 | Column 2 | Column 3 |\n| :------- | :------: | -------: |\n| Left     | Center   | Right    |\n| Row 2    | Value    | Value    |\n\n'
    },
    {
        id: 'task-list',
        name: 'Task List',
        category: 'Elements',
        icon: ListChecks,
        template: '- [x] Completed task\n- [x] Another finished item\n- [ ] Work in progress\n- [ ] Planned feature\n\n'
    },
    {
        id: 'quote',
        name: 'Quote',
        category: 'Elements',
        icon: Quote,
        template: '> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."\n>\n> — Martin Fowler\n\n'
    },
    {
        id: 'divider',
        name: 'Divider',
        category: 'Elements',
        icon: SeparatorHorizontal,
        template: '---\n\n'
    },
    {
        id: 'centered-block',
        name: 'Centered Block',
        category: 'Elements',
        icon: AlignCenter,
        template: '<div align="center">\n\n### Centered Heading\n\nEverything inside this block is centered on GitHub.\n\n</div>\n\n'
    },
    {
        id: 'image-aligned',
        name: 'Side Image',
        category: 'Elements',
        icon: ImagePlus,
        template: '<img align="right" width="180" src="https://placehold.co/180x180/00AD95/ffffff?text=Logo" alt="logo"/>\n\nText flows beside the image on the left. Use `align="left"` or `align="right"` to float images next to your content.\n\n<br clear="both"/>\n\n'
    },
    {
        id: 'two-columns',
        name: 'Two Columns',
        category: 'Elements',
        icon: Columns2,
        template: '<table>\n  <tr>\n    <td width="50%" valign="top">\n\n### Left Column\n\n- Point one\n- Point two\n\n    </td>\n    <td width="50%" valign="top">\n\n### Right Column\n\n- Point three\n- Point four\n\n    </td>\n  </tr>\n</table>\n\n'
    },
    {
        id: 'keyboard-shortcuts',
        name: 'Shortcuts',
        category: 'Elements',
        icon: Keyboard,
        template: '## Keyboard Shortcuts\n\n| Action | Shortcut |\n| ------ | -------- |\n| Save | <kbd>Ctrl</kbd> + <kbd>S</kbd> |\n| Search | <kbd>Ctrl</kbd> + <kbd>K</kbd> |\n| Toggle theme | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> |\n\n'
    },
    {
        id: 'cta-buttons',
        name: 'CTA Buttons',
        category: 'Elements',
        icon: MousePointerClick,
        template: '<p align="center">\n  <a href="https://your-demo-url.com"><img src="https://img.shields.io/badge/Live_Demo-00AD95?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo"/></a>\n  <a href="https://your-docs-url.com"><img src="https://img.shields.io/badge/Documentation-2F81F7?style=for-the-badge&logo=readthedocs&logoColor=white" alt="Documentation"/></a>\n  <a href="https://github.com/your-username/your-repo/issues"><img src="https://img.shields.io/badge/Report_Bug-E5534B?style=for-the-badge&logo=github&logoColor=white" alt="Report Bug"/></a>\n</p>\n\n'
    },
    {
        id: 'back-to-top',
        name: 'Back to Top',
        category: 'Elements',
        icon: ArrowUpToLine,
        template: '<p align="right"><a href="#readme-top">⬆ Back to top</a></p>\n\n'
    },

    // Creative: dynamic cards, banners and visual flair.
    {
        id: 'header-banner',
        name: 'Wave Header',
        category: 'Creative',
        icon: PanelTop,
        template: '<a id="readme-top"></a>\n\n![header](https://capsule-render.vercel.app/api?type=waving&color=0:00AD95,100:2F81F7&height=220&section=header&text=Your%20Project&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=A%20short%20catchy%20tagline&descAlignY=58)\n\n'
    },
    {
        id: 'footer-banner',
        name: 'Wave Footer',
        category: 'Creative',
        icon: PanelBottom,
        template: '![footer](https://capsule-render.vercel.app/api?type=waving&color=0:2F81F7,100:00AD95&height=120&section=footer)\n\n'
    },
    {
        id: 'theme-aware-logo',
        name: 'Light/Dark Logo',
        category: 'Creative',
        icon: SunMoon,
        template: '<p align="center">\n  <picture>\n    <source media="(prefers-color-scheme: dark)" srcset="https://placehold.co/400x120/0d1117/ffffff?text=Dark+Logo">\n    <source media="(prefers-color-scheme: light)" srcset="https://placehold.co/400x120/ffffff/0d1117?text=Light+Logo">\n    <img alt="Project logo" src="https://placehold.co/400x120/ffffff/0d1117?text=Light+Logo">\n  </picture>\n</p>\n\n'
    },
    {
        id: 'about-me-code',
        name: 'About Me Code',
        category: 'Creative',
        icon: Terminal,
        template: '```javascript\nconst me = {\n  name: "Your Name",\n  role: "Full-Stack Developer",\n  location: "Earth 🌍",\n  stack: ["TypeScript", "Vue", "Node.js", "PostgreSQL"],\n  learning: "Rust 🦀",\n  funFact: "I debug with console.log and I am not ashamed",\n};\n```\n\n'
    },
    {
        id: 'skill-icons',
        name: 'Skill Icons',
        category: 'Creative',
        icon: Blocks,
        template: '## 🛠️ Tech Stack\n\n<p align="center">\n  <a href="https://skillicons.dev">\n    <img src="https://skillicons.dev/icons?i=js,ts,react,vue,nodejs,tailwind,docker,git,github,vscode&perline=10" alt="Tech stack"/>\n  </a>\n</p>\n\n'
    },
    {
        id: 'tech-badges',
        name: 'Tech Badges',
        category: 'Creative',
        icon: Boxes,
        template: '![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)\n![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)\n![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)\n![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)\n![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)\n\n'
    },
    {
        id: 'social-badges',
        name: 'Social Links',
        category: 'Creative',
        icon: Share2,
        template: '## 🤝 Connect With Me\n\n<p align="left">\n  <a href="https://linkedin.com/in/your-username"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>\n  <a href="https://x.com/your-username"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/></a>\n  <a href="mailto:you@example.com"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>\n  <a href="https://your-portfolio.com"><img src="https://img.shields.io/badge/Portfolio-00AD95?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio"/></a>\n</p>\n\n'
    },
    {
        id: 'github-stats',
        name: 'GitHub Stats',
        category: 'Creative',
        icon: BarChart3,
        template: '## 📊 GitHub Stats\n\n<p align="center">\n  <img height="170" src="https://github-readme-stats.vercel.app/api?username=your-username&show_icons=true&hide_border=true&bg_color=00000000&title_color=00AD95&icon_color=00AD95" alt="GitHub stats"/>\n  <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=your-username&layout=compact&hide_border=true&bg_color=00000000&title_color=00AD95" alt="Top languages"/>\n</p>\n\n'
    },
    {
        id: 'streak-stats',
        name: 'Streak Stats',
        category: 'Creative',
        icon: Flame,
        template: '<p align="center">\n  <img src="https://streak-stats.demolab.com?user=your-username&hide_border=true&background=00000000&ring=00AD95&fire=00AD95&currStreakLabel=00AD95" alt="GitHub streak"/>\n</p>\n\n'
    },
    {
        id: 'trophies',
        name: 'Trophies',
        category: 'Creative',
        icon: Trophy,
        template: '## 🏆 GitHub Trophies\n\n<p align="center">\n  <img src="https://github-profile-trophy.vercel.app/?username=your-username&theme=flat&no-frame=true&no-bg=true&margin-w=4&column=7" alt="Trophies"/>\n</p>\n\n'
    },
    {
        id: 'activity-graph',
        name: 'Activity Graph',
        category: 'Creative',
        icon: Activity,
        template: '## 📈 Contribution Graph\n\n[![Activity graph](https://github-readme-activity-graph.vercel.app/graph?username=your-username&bg_color=00000000&color=00AD95&line=00AD95&point=2F81F7&area=true&hide_border=true)](https://github.com/your-username)\n\n'
    },
    {
        id: 'repo-pin',
        name: 'Repo Cards',
        category: 'Creative',
        icon: Pin,
        template: '## 📌 Featured Projects\n\n<p align="center">\n  <a href="https://github.com/your-username/repo-one"><img src="https://github-readme-stats.vercel.app/api/pin/?username=your-username&repo=repo-one&hide_border=true&bg_color=00000000&title_color=00AD95" alt="repo-one"/></a>\n  <a href="https://github.com/your-username/repo-two"><img src="https://github-readme-stats.vercel.app/api/pin/?username=your-username&repo=repo-two&hide_border=true&bg_color=00000000&title_color=00AD95" alt="repo-two"/></a>\n</p>\n\n'
    },
    {
        id: 'star-history',
        name: 'Star History',
        category: 'Creative',
        icon: ChartLine,
        template: '## ⭐ Star History\n\n[![Star History Chart](https://api.star-history.com/svg?repos=your-username/your-repo&type=Date)](https://star-history.com/#your-username/your-repo&Date)\n\n'
    },
    {
        id: 'contributors',
        name: 'Contributors',
        category: 'Creative',
        icon: Sparkles,
        template: '## 💖 Contributors\n\nThanks to everyone who has contributed!\n\n<a href="https://github.com/your-username/your-repo/graphs/contributors">\n  <img src="https://contrib.rocks/image?repo=your-username/your-repo" alt="Contributors"/>\n</a>\n\n'
    },
    {
        id: 'profile-views',
        name: 'Profile Views',
        category: 'Creative',
        icon: Eye,
        template: '![Profile views](https://komarev.com/ghpvc/?username=your-username&color=00AD95&style=for-the-badge&label=PROFILE+VIEWS)\n\n'
    },
    {
        id: 'snake-animation',
        name: 'Snake Animation',
        category: 'Creative',
        icon: Worm,
        template: '<!-- Needs the Platane/snk GitHub Action to generate the SVG into the "output" branch. -->\n<picture>\n  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/your-username/your-username/output/github-contribution-grid-snake-dark.svg"/>\n  <img alt="Contribution snake" src="https://raw.githubusercontent.com/your-username/your-username/output/github-contribution-grid-snake.svg"/>\n</picture>\n\n'
    },
    {
        id: 'rainbow-divider',
        name: 'Rainbow Divider',
        category: 'Creative',
        icon: SeparatorHorizontal,
        template: '![divider](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)\n\n'
    },
]
