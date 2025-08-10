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
    Zap
} from "lucide-vue-next";
import {ReadmeSectionType} from "@/types";

export const ReadmeSections: ReadmeSectionType[] = [
    {
        id: 'title',
        name: 'Project Title',
        icon: Hash,
        template: '# Project Title\n\nBrief description of your project.\n\n'
    },
    {
        id: 'typing_text',
        name: 'Typing Text',
        icon: TypeOutline,
        template: '[![Typing SVG](https://readme-typing-svg.demolab.com?font=Roboto&weight=900&size=30&duration=3000&pause=1000&color=0981F7&background=FFFFFF00&center=true&vCenter=true&width=1245&lines=Front-End+Web+Developer;React+Developer)](https://git.io/typing-svg)'
    },
    {
        id: 'badges',
        name: 'Badges',
        icon: Shield,
        template: '[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)\n[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()\n[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()\n[![Downloads](https://img.shields.io/npm/dm/package-name.svg)]()\n\n'
    },
    {
        id: 'description',
        name: 'Description',
        icon: FileText,
        template: '## Description\n\nA detailed description of what this project does and who it\'s for. Explain the problem it solves and why it\'s useful.\n\n'
    },
    {
        id: 'demo',
        name: 'Demo',
        icon: Globe,
        template: '## Demo\n\n🚀 [Live Demo](https://your-demo-url.com)\n\n![Demo GIF](https://via.placeholder.com/600x300?text=Demo+GIF)\n\n'
    },
    {
        id: 'table-of-contents',
        name: 'Table of Contents',
        icon: BookOpen,
        template: '## Table of Contents\n\n- [Installation](#installation)\n- [Usage](#usage)\n- [Features](#features)\n- [API Reference](#api-reference)\n- [Contributing](#contributing)\n- [License](#license)\n\n'
    },
    {
        id: 'installation',
        name: 'Installation',
        icon: Download,
        template: '## Installation\n\n### Using npm\n```bash\nnpm install your-package\n```\n\n### Using yarn\n```bash\nyarn add your-package\n```\n\n### Using pnpm\n```bash\npnpm add your-package\n```\n\n'
    },
    {
        id: 'quick-start',
        name: 'Quick Start',
        icon: Rocket,
        template: '## Quick Start\n\nGet up and running in seconds:\n\n```javascript\nimport { YourPackage } from \'your-package\';\n\nconst instance = new YourPackage();\ninstance.start();\n```\n\n'
    },
    {
        id: 'usage',
        name: 'Usage',
        icon: Code,
        template: '## Usage\n\n### Basic Example\n\n```javascript\nconst example = require(\'your-package\');\n\n// Initialize\nconst instance = example.create({\n  option1: \'value1\',\n  option2: true\n});\n\n// Use it\ninstance.doSomething();\n```\n\n### Advanced Usage\n\n```javascript\n// More complex example\ninstance.configure({\n  advanced: true,\n  callback: (result) => {\n    console.log(\'Result:\', result);\n  }\n});\n```\n\n'
    },
    {
        id: 'features',
        name: 'Features',
        icon: Star,
        template: '## Features\n\n- ✨ **Feature 1** - Description of feature 1\n- 🚀 **Performance** - Lightning fast performance\n- 🎯 **Easy to Use** - Simple and intuitive API\n- 💎 **Lightweight** - Minimal dependencies\n- 🔧 **Configurable** - Highly customizable\n- 📱 **Responsive** - Works on all devices\n\n'
    },
    {
        id: 'api-reference',
        name: 'API Reference',
        icon: Database,
        template: '## API Reference\n\n### Methods\n\n#### `initialize(options)`\n\nInitializes the instance with given options.\n\n**Parameters:**\n- `options` (Object) - Configuration options\n  - `apiKey` (String) - Your API key\n  - `debug` (Boolean) - Enable debug mode (default: false)\n\n**Returns:** Promise<Instance>\n\n#### `process(data)`\n\nProcesses the provided data.\n\n**Parameters:**\n- `data` (Any) - Data to process\n\n**Returns:** Promise<Result>\n\n'
    },
    {
        id: 'examples',
        name: 'Examples',
        icon: Layers,
        template: '## Examples\n\n### Example 1: Basic Usage\n\n```javascript\n// Basic implementation\nconst result = await api.process(data);\nconsole.log(result);\n```\n\n### Example 2: With Configuration\n\n```javascript\n// With custom configuration\nconst config = {\n  timeout: 5000,\n  retries: 3\n};\n\nconst result = await api.process(data, config);\n```\n\n### Example 3: Error Handling\n\n```javascript\ntry {\n  const result = await api.process(data);\n  console.log(\'Success:\', result);\n} catch (error) {\n  console.error(\'Error:\', error.message);\n}\n```\n\n'
    },
    {
        id: 'requirements',
        name: 'Requirements',
        icon: CheckCircle,
        template: '## Requirements\n\n- Node.js >= 16.0.0\n- npm >= 8.0.0\n- Modern browser with ES6+ support\n\n### System Requirements\n\n- **OS:** Windows 10+, macOS 10.15+, Ubuntu 18.04+\n- **Memory:** 4GB RAM minimum, 8GB recommended\n- **Storage:** 100MB free space\n\n'
    },
    {
        id: 'screenshot',
        name: 'Screenshots',
        icon: Image,
        template: '## Screenshots\n\n### Main Interface\n![Main Interface](https://via.placeholder.com/800x400?text=Main+Interface)\n\n### Settings Panel\n![Settings](https://via.placeholder.com/800x400?text=Settings+Panel)\n\n### Mobile View\n![Mobile](https://via.placeholder.com/400x600?text=Mobile+View)\n\n'
    },
    {
        id: 'configuration',
        name: 'Configuration',
        icon: Table,
        template: '## Configuration\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| `apiKey` | string | `null` | Your API key for authentication |\n| `timeout` | number | `5000` | Request timeout in milliseconds |\n| `retries` | number | `3` | Number of retry attempts |\n| `debug` | boolean | `false` | Enable debug logging |\n| `baseUrl` | string | `"https://api.example.com"` | Base URL for API calls |\n\n### Environment Variables\n\n```bash\nAPI_KEY=your_api_key_here\nTIMEOUT=10000\nDEBUG=true\n```\n\n'
    },
    {
        id: 'troubleshooting',
        name: 'Troubleshooting',
        icon: AlertTriangle,
        template: '## Troubleshooting\n\n### Common Issues\n\n#### Issue 1: Installation fails\n\n**Problem:** `npm install` fails with permission errors\n\n**Solution:**\n```bash\n# Try using sudo (Linux/Mac)\nsudo npm install\n\n# Or fix npm permissions\nnpm config set prefix ~/.local\n```\n\n#### Issue 2: Module not found\n\n**Problem:** `Cannot resolve module` error\n\n**Solution:**\n1. Clear node_modules: `rm -rf node_modules package-lock.json`\n2. Reinstall: `npm install`\n3. Check import paths\n\n### Getting Help\n\nIf you\'re still having issues:\n1. Check the [FAQ](#faq)\n2. Search existing [issues](https://github.com/username/repo/issues)\n3. Create a new issue with detailed information\n\n'
    },
    {
        id: 'faq',
        name: 'FAQ',
        icon: HelpCircle,
        template: '## FAQ\n\n### General Questions\n\n**Q: Is this free to use?**\nA: Yes, this project is open source and free to use under the MIT license.\n\n**Q: What browsers are supported?**\nA: All modern browsers that support ES6+ features (Chrome 60+, Firefox 60+, Safari 12+, Edge 79+).\n\n**Q: Can I use this in a commercial project?**\nA: Yes, the MIT license allows commercial use.\n\n### Technical Questions\n\n**Q: How do I contribute?**\nA: See our [Contributing Guide](#contributing) for detailed instructions.\n\n**Q: How do I report a bug?**\nA: Please create an issue on GitHub with a detailed description and reproduction steps.\n\n'
    },
    {
        id: 'roadmap',
        name: 'Roadmap',
        icon: TrendingUp,
        template: '## Roadmap\n\n### Current Version (v1.0)\n- ✅ Core functionality\n- ✅ Basic API\n- ✅ Documentation\n\n### Upcoming (v1.1)\n- 🔄 Performance improvements\n- 🔄 New features\n- 🔄 Bug fixes\n\n### Future (v2.0)\n- 📋 Complete rewrite\n- 📋 Breaking changes\n- 📋 New architecture\n\n### Ideas\n- 💡 Feature request 1\n- 💡 Feature request 2\n- 💡 Integration with X\n\n'
    },
    {
        id: 'changelog',
        name: 'Changelog',
        icon: Calendar,
        template: '## Changelog\n\n### [1.0.0] - 2024-01-15\n\n#### Added\n- Initial release\n- Core functionality\n- Basic API\n- Documentation\n\n#### Changed\n- N/A\n\n#### Fixed\n- N/A\n\n### [0.9.0] - 2023-12-20\n\n#### Added\n- Beta release\n- Testing framework\n\n#### Fixed\n- Various bug fixes\n- Performance improvements\n\n'
    },
    {
        id: 'performance',
        name: 'Performance',
        icon: Zap,
        template: '## Performance\n\n### Benchmarks\n\n| Operation | Time | Memory |\n|-----------|------|--------|\n| Initialize | 10ms | 2MB |\n| Process 1KB | 1ms | 1MB |\n| Process 1MB | 100ms | 5MB |\n\n### Optimization Tips\n\n1. **Use caching** when possible\n2. **Batch operations** for better performance\n3. **Enable compression** for large datasets\n4. **Monitor memory usage** in production\n\n### Load Testing Results\n\n- **Concurrent users:** 1000\n- **Average response time:** 50ms\n- **95th percentile:** 100ms\n- **Error rate:** 0.01%\n\n'
    },
    {
        id: 'security',
        name: 'Security',
        icon: Lock,
        template: '## Security\n\n### Security Measures\n\n- 🔒 **Encryption:** All data is encrypted in transit and at rest\n- 🛡️ **Authentication:** Secure API key authentication\n- 🔍 **Validation:** Input validation and sanitization\n- 📊 **Monitoring:** Continuous security monitoring\n\n### Reporting Security Issues\n\nIf you discover a security vulnerability, please:\n\n1. **Do NOT** create a public issue\n2. Email us at security@example.com\n3. Include detailed information about the vulnerability\n4. Allow time for us to address the issue before disclosure\n\n### Security Best Practices\n\n- Keep your API keys secure\n- Use HTTPS in production\n- Regularly update dependencies\n- Follow the principle of least privilege\n\n'
    },
    {
        id: 'testing',
        name: 'Testing',
        icon: CheckCircle,
        template: '## Testing\n\n### Running Tests\n\n```bash\n# Run all tests\nnpm test\n\n# Run tests in watch mode\nnpm run test:watch\n\n# Run tests with coverage\nnpm run test:coverage\n\n# Run specific test file\nnpm test -- filename.test.js\n```\n\n### Test Structure\n\n```\ntests/\n├── unit/           # Unit tests\n├── integration/    # Integration tests\n├── e2e/           # End-to-end tests\n└── fixtures/      # Test data\n```\n\n### Writing Tests\n\n```javascript\ndescribe(\'Feature\', () => {\n  test(\'should work correctly\', () => {\n    const result = feature.doSomething();\n    expect(result).toBe(expectedValue);\n  });\n});\n```\n\n'
    },
    {
        id: 'deployment',
        name: 'Deployment',
        icon: Package,
        template: '## Deployment\n\n### Production Build\n\n```bash\n# Build for production\nnpm run build\n\n# Start production server\nnpm start\n```\n\n### Docker Deployment\n\n```dockerfile\n# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD [\"npm\", \"start\"]\n```\n\n```bash\n# Build and run\ndocker build -t your-app .\ndocker run -p 3000:3000 your-app\n```\n\n### Environment Setup\n\n```bash\n# Production environment variables\nNODE_ENV=production\nPORT=3000\nAPI_URL=https://api.production.com\n```\n\n'
    },
    {
        id: 'team',
        name: 'Team',
        icon: Users,
        template: '## Team\n\n### Core Team\n\n<table>\n  <tr>\n    <td align="center">\n      <img src="https://github.com/username1.png" width="100px" alt=""/><br />\n      <b>John Doe</b><br />\n      <i>Lead Developer</i><br />\n      <a href="https://github.com/username1">GitHub</a>\n    </td>\n    <td align="center">\n      <img src="https://github.com/username2.png" width="100px" alt=""/><br />\n      <b>Jane Smith</b><br />\n      <i>UI/UX Designer</i><br />\n      <a href="https://github.com/username2">GitHub</a>\n    </td>\n  </tr>\n</table>\n\n### Contributors\n\nThanks to all the amazing contributors who have helped make this project better!\n\n[![Contributors](https://contrib.rocks/image?repo=username/repo)](https://github.com/username/repo/graphs/contributors)\n\n'
    },
    {
        id: 'acknowledgments',
        name: 'Acknowledgments',
        icon: Award,
        template: '## Acknowledgments\n\n### Special Thanks\n\n- **[Library Name](https://github.com/author/library)** - For providing the core functionality\n- **[Tool Name](https://tool-website.com)** - For development tools and utilities\n- **[Community Name](https://community-website.com)** - For ongoing support and feedback\n\n### Inspiration\n\nThis project was inspired by:\n- [Project 1](https://github.com/author/project1)\n- [Project 2](https://github.com/author/project2)\n- [Article Title](https://medium.com/article-link)\n\n### Resources\n\n- [Documentation](https://docs.example.com)\n- [Tutorial Series](https://tutorials.example.com)\n- [Community Forum](https://forum.example.com)\n\n'
    },
    {
        id: 'links',
        name: 'Links',
        icon: Link,
        template: '## Links\n\n### Official\n- 📖 [Documentation](https://docs.example.com)\n- 🚀 [Live Demo](https://demo.example.com)\n- 📦 [npm Package](https://npmjs.com/package/your-package)\n- 🐙 [GitHub Repository](https://github.com/username/repo)\n\n### Community\n- 💬 [Discord Server](https://discord.gg/yourserver)\n- 🐦 [Twitter](https://twitter.com/yourhandle)\n- 📧 [Mailing List](https://newsletter.example.com)\n- 🎥 [YouTube Channel](https://youtube.com/yourchannel)\n\n### Development\n- 🐛 [Issue Tracker](https://github.com/username/repo/issues)\n- 📊 [Project Board](https://github.com/username/repo/projects)\n- 🔄 [CI/CD Status](https://github.com/username/repo/actions)\n\n'
    },
    {
        id: 'contributing',
        name: 'Contributing',
        icon: Settings,
        template: '## Contributing\n\nWe love contributions! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting PRs.\n\n### Quick Start for Contributors\n\n1. **Fork** the repository\n2. **Clone** your fork: `git clone https://github.com/yourusername/repo.git`\n3. **Create** a branch: `git checkout -b feature/amazing-feature`\n4. **Install** dependencies: `npm install`\n5. **Make** your changes\n6. **Test** your changes: `npm test`\n7. **Commit** your changes: `git commit -m \'Add amazing feature\'`\n8. **Push** to your branch: `git push origin feature/amazing-feature`\n9. **Submit** a Pull Request\n\n### Development Setup\n\n```bash\n# Clone the repo\ngit clone https://github.com/username/repo.git\ncd repo\n\n# Install dependencies\nnpm install\n\n# Start development server\nnpm run dev\n\n# Run tests\nnpm test\n```\n\n### Contribution Guidelines\n\n- Follow the existing code style\n- Write tests for new features\n- Update documentation as needed\n- Use meaningful commit messages\n- Keep PRs focused and small\n\n'
    },
    {
        id: 'license',
        name: 'License',
        icon: FileText,
        template: '## License\n\nThis project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.\n\n### MIT License Summary\n\n- ✅ Commercial use\n- ✅ Modification\n- ✅ Distribution\n- ✅ Private use\n- ❌ Liability\n- ❌ Warranty\n\n### Other Licenses\n\nSome dependencies may be under different licenses:\n- [Dependency 1](https://github.com/author/dep1) - Apache 2.0\n- [Dependency 2](https://github.com/author/dep2) - BSD 3-Clause\n\n---\n\n**Made with ❤️ by [Your Name](https://github.com/username)**\n\n'
    }
]