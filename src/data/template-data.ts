export const readmeTemplates = [
    {
        id: 'npm-package',
        name: 'NPM Package',
        category: 'Package',
        description: 'Professional template for npm packages with installation, usage, and API documentation',
        tags: ['npm', 'package', 'library', 'javascript', 'node'],
        template: `# {package_name}

[![npm version](https://badge.fury.io/js/{package_name}.svg)](https://badge.fury.io/js/{package_name})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/{package_name}.svg)](https://npmjs.com/package/{package_name})
[![Build Status](https://travis-ci.org/{username}/{package_name}.svg?branch=main)](https://travis-ci.org/{username}/{package_name})

> {package_description}

## 🚀 Features

- ✨ Feature 1
- 🔥 Feature 2
- 📦 Lightweight and fast
- 🛡️ TypeScript support
- 🔧 Zero dependencies

## 📦 Installation

\`\`\`bash
npm install {package_name}
\`\`\`

\`\`\`bash
yarn add {package_name}
\`\`\`

## 🔧 Usage

### Basic Usage

\`\`\`javascript
const {package_name} = require('{package_name}');

// Example usage
const result = {package_name}.method();
console.log(result);
\`\`\`

### ES6 Modules

\`\`\`javascript
import {package_name} from '{package_name}';

// Example usage
const result = {package_name}.method();
\`\`\`

### TypeScript

\`\`\`typescript
import {package_name} from '{package_name}';

// Example with types
const result: ReturnType = {package_name}.method();
\`\`\`

## 📚 API Reference

### \`method(param: string): string\`

Description of the method.

**Parameters:**
- \`param\` (string) - Description of parameter

**Returns:**
- Returns a string

**Example:**
\`\`\`javascript
const result = {package_name}.method('example');
// Output: "processed example"
\`\`\`

## 🔗 Links

- [Documentation](https://your-docs-url.com)
- [NPM Package](https://www.npmjs.com/package/{package_name})
- [GitHub Repository](https://github.com/{username}/{package_name})

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc`
    },
    {
        id: 'open-source-project',
        name: 'Open Source Project',
        category: 'Project',
        description: 'Comprehensive template for open source projects with community guidelines',
        tags: ['open-source', 'community', 'project', 'github'],
        template: `# {project_name}

<div align="center">
  <img src="logo.png" alt="{project_name} Logo" width="200" height="200">
  
  <p>
    <strong>{project_description}</strong>
  </p>
  
  <p>
    <a href="https://github.com/{username}/{project_name}/stargazers"><img src="https://img.shields.io/github/stars/{username}/{project_name}" alt="Stars Badge"/></a>
    <a href="https://github.com/{username}/{project_name}/network/members"><img src="https://img.shields.io/github/forks/{username}/{project_name}" alt="Forks Badge"/></a>
    <a href="https://github.com/{username}/{project_name}/pulls"><img src="https://img.shields.io/github/issues-pr/{username}/{project_name}" alt="Pull Requests Badge"/></a>
    <a href="https://github.com/{username}/{project_name}/issues"><img src="https://img.shields.io/github/issues/{username}/{project_name}" alt="Issues Badge"/></a>
    <a href="https://github.com/{username}/{project_name}/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/{username}/{project_name}?color=2b9348"></a>
    <a href="https://github.com/{username}/{project_name}/blob/main/LICENSE"><img src="https://img.shields.io/github/license/{username}/{project_name}?color=2b9348" alt="License Badge"/></a>
  </p>
</div>

## 🌟 Overview

{project_name} is a {detailed_project_description}. It aims to solve {problem_statement} by providing {solution_overview}.

## ✨ Features

- 🚀 **Fast Performance** - Optimized for speed and efficiency
- 🛡️ **Secure** - Built with security best practices
- 🔧 **Customizable** - Highly configurable to meet your needs
- 📱 **Responsive** - Works seamlessly across all devices
- 🌐 **Cross-platform** - Supports multiple operating systems
- 📖 **Well Documented** - Comprehensive documentation and examples

## 🎯 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/{username}/{project_name}.git
   cd {project_name}
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your configuration
   \`\`\`

4. **Run the application**
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

## 📚 Documentation

- [Installation Guide](docs/installation.md)
- [User Guide](docs/user-guide.md)
- [API Reference](docs/api.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [FAQ](docs/faq.md)

## 🏗️ Project Structure

\`\`\`
{project_name}/
├── src/
│   ├── components/
│   ├── utils/
│   └── index.js
├── docs/
├── tests/
├── examples/
├── .github/
│   ├── workflows/
│   └── ISSUE_TEMPLATE/
├── package.json
├── README.md
└── LICENSE
\`\`\`

## 🤝 Contributing

We love your input! We want to make contributing to {project_name} as easy and transparent as possible. Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests

## 📊 Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
- [x] ~~Completed Feature~~

See the [open issues](https://github.com/{username}/{project_name}/issues) for a full list of proposed features and known issues.

## 🏆 Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration sources
- References

## 📞 Support

- 📧 Email: support@{project_name}.com
- 💬 Discord: [Join our community](https://discord.gg/your-invite)
- 🐛 Issues: [GitHub Issues](https://github.com/{username}/{project_name}/issues)

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/{username}">@{username}</a>
</div>`
    },
    {
        id: 'github-profile',
        name: 'GitHub Profile',
        category: 'Profile',
        description: 'Impressive GitHub profile README with dynamic content and professional layout',
        tags: ['github', 'profile', 'portfolio', 'personal'],
        template: `<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2196F3&center=true&vCenter=true&width=435&lines=Hi+%F0%9F%91%8B%2C+I'm+{your_name};Full-Stack+Developer;Open+Source+Enthusiast;Always+learning+new+things" alt="Typing SVG" />
</div>

<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=Hello,+There!+👋;This+is+{your_name}....;Nice+to+meet+you!&center=true&size=30">
  </a>
</h1>

<div align="center">
  <img src="https://media.giphy.com/media/dWesBcTLavkZuG35MI/giphy.gif" width="600" height="300"/>
</div>

## 🚀 About Me

I'm a passionate **{your_profession}** from **{your_location}** with a love for creating innovative solutions and contributing to open-source projects.

- 🔭 I'm currently working on **{current_project}**
- 🌱 I'm currently learning **{learning_technologies}**
- 👯 I'm looking to collaborate on **{collaboration_interests}**
- 🤔 I'm looking for help with **{help_needed}**
- 💬 Ask me about **{expertise_areas}**
- 📫 How to reach me: **{email}**
- 😄 Pronouns: **{pronouns}**
- ⚡ Fun fact: **{fun_fact}**

## 🛠️ Tech Stack

### Languages
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Java](https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=white)
![Go](https://img.shields.io/badge/-Go-00ADD8?style=flat-square&logo=go&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Vue.js](https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Angular](https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=white)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=white)
![Django](https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white)
![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)

### Database
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)
![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

### DevOps & Tools
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/-Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)

## 📊 GitHub Stats

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username={github_username}&show_icons=true&theme=radical&hide_border=true&count_private=true" alt="GitHub Stats" />
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user={github_username}&theme=radical&hide_border=true" alt="GitHub Streak" />
</div>

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username={github_username}&layout=compact&theme=radical&hide_border=true" alt="Top Languages" />
</div>

## 🏆 GitHub Trophies

<div align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={github_username}&theme=radical&no-frame=true&no-bg=false&margin-w=4" alt="GitHub Trophies" />
</div>

## 📈 Activity Graph

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username={github_username}&theme=react-dark&hide_border=true" alt="Contribution Graph" />
</div>

## 🎯 Featured Projects

<div align="center">
  <a href="https://github.com/{github_username}/{project1}">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username={github_username}&repo={project1}&theme=radical" alt="Project 1" />
  </a>
  <a href="https://github.com/{github_username}/{project2}">
    <img src="https://github-readme-stats.vercel.app/api/pin/?username={github_username}&repo={project2}&theme=radical" alt="Project 2" />
  </a>
</div>

## 🌐 Connect with Me

<div align="center">
  <a href="https://linkedin.com/in/{linkedin_username}">
    <img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://twitter.com/{twitter_username}">
    <img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter" />
  </a>
  <a href="mailto:{email}">
    <img src="https://img.shields.io/badge/-Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="{portfolio_url}">
    <img src="https://img.shields.io/badge/-Portfolio-000000?style=for-the-badge&logo=react&logoColor=white" alt="Portfolio" />
  </a>
</div>

## 💭 Quote of the Day

<div align="center">
  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=radical" alt="Random Dev Quote" />
</div>

---

<div align="center">
  <img src="https://komarev.com/ghpvc/?username={github_username}&color=blueviolet&style=flat-square&label=Profile+Views" alt="Profile Views" />
</div>

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2196F3&center=true&vCenter=true&width=435&lines=Thanks+for+visiting!;Feel+free+to+connect+with+me;Let's+build+something+amazing+together!" alt="Typing SVG" />
</div>`
    },
    {
        id: 'saas-application',
        name: 'SaaS Application',
        category: 'Application',
        description: 'Professional template for SaaS applications with features, pricing, and deployment info',
        tags: ['saas', 'web-app', 'startup', 'business'],
        template: `<div align="center">
  <img src="logo.png" alt="{app_name} Logo" width="120" height="120">
  <h1>{app_name}</h1>
  <p><strong>{app_tagline}</strong></p>
  
  <p>
    <a href="https://{app_domain}"><img src="https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge" alt="Live Demo"></a>
    <a href="#pricing"><img src="https://img.shields.io/badge/Pricing-View%20Plans-green?style=for-the-badge" alt="Pricing"></a>
    <a href="https://docs.{app_domain}"><img src="https://img.shields.io/badge/Docs-Read%20Now-orange?style=for-the-badge" alt="Documentation"></a>
  </p>
</div>

## 🚀 Overview

{app_name} is a cutting-edge SaaS platform that {detailed_description}. Built for {target_audience}, it provides {main_value_proposition}.

### 🎯 Key Benefits

- **⚡ Lightning Fast** - Optimized performance with sub-second response times
- **🛡️ Enterprise Security** - SOC2 compliant with end-to-end encryption
- **📈 Scalable** - Handles millions of requests with auto-scaling infrastructure
- **🔧 Easy Integration** - RESTful API and webhooks for seamless connectivity
- **📊 Analytics Dashboard** - Real-time insights and comprehensive reporting
- **👥 Team Collaboration** - Multi-user workspaces with role-based permissions

## ✨ Features

### Core Features
- 🎨 **Feature 1** - Description of feature 1
- 📊 **Feature 2** - Description of feature 2
- 🔍 **Feature 3** - Description of feature 3
- 🛠️ **Feature 4** - Description of feature 4

### Advanced Features
- 🤖 **AI-Powered Automation** - Smart workflows and predictive analytics
- 🔗 **Third-party Integrations** - Connect with 100+ popular tools
- 📱 **Mobile App** - Native iOS and Android applications
- 🌐 **Global CDN** - 99.9% uptime with worldwide edge locations

## 🎬 Demo

### Screenshots

<div align="center">
  <img src="screenshots/dashboard.png" alt="Dashboard" width="45%">
  <img src="screenshots/analytics.png" alt="Analytics" width="45%">
</div>

### Video Demo
[![{app_name} Demo](https://img.youtube.com/vi/{youtube_video_id}/0.jpg)](https://www.youtube.com/watch?v={youtube_video_id})

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS + Headless UI
- **State Management**: Zustand
- **Build Tool**: Vite

### Backend
- **Runtime**: Node.js with Express
- **Database**: PostgreSQL + Redis
- **Authentication**: Auth0
- **File Storage**: AWS S3
- **Email**: SendGrid

### Infrastructure
- **Hosting**: AWS (ECS + RDS)
- **CDN**: CloudFront
- **Monitoring**: DataDog
- **CI/CD**: GitHub Actions

## 💰 Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Starter** | $9/month | ✅ Basic features<br>✅ 5 projects<br>✅ Email support |
| **Professional** | $29/month | ✅ All Starter features<br>✅ Unlimited projects<br>✅ Advanced analytics<br>✅ Priority support |
| **Enterprise** | Custom | ✅ All Pro features<br>✅ Custom integrations<br>✅ Dedicated support<br>✅ SLA guarantee |

[Start Free Trial](https://{app_domain}/signup) • [View Full Pricing](https://{app_domain}/pricing)

## 🚀 Quick Start

### For Users
1. **Sign Up**: Create your free account at [{app_domain}](https://{app_domain})
2. **Onboarding**: Complete the 5-minute setup wizard
3. **Import Data**: Connect your existing tools and import data
4. **Start Using**: Begin with our guided tutorials

### For Developers
1. **API Access**: Get your API key from the dashboard
2. **Documentation**: Read our [API docs](https://docs.{app_domain})
3. **SDKs**: Use our official SDKs for popular languages
4. **Webhooks**: Set up real-time notifications

## 📚 Documentation

- 📖 [User Guide](https://docs.{app_domain}/user-guide)
- 🔧 [API Reference](https://docs.{app_domain}/api)
- 🎓 [Tutorials](https://docs.{app_domain}/tutorials)
- ❓ [FAQ](https://docs.{app_domain}/faq)
- 🆘 [Support Center](https://support.{app_domain})

## 🔧 API Example

\`\`\`javascript
// Initialize the client
const {app_name}Client = require('{app_name}-sdk');
const client = new {app_name}Client('your-api-key');

// Create a new resource
const result = await client.resources.create({
  name: 'My Resource',
  type: 'example',
  data: { key: 'value' }
});

console.log(result);
\`\`\`

## 🌟 Customer Reviews

> "{app_name} has transformed how we handle {use_case}. The time savings alone have paid for itself 10x over."
> 
> **— Jane Doe, CTO at TechCorp**

> "The best {category} tool I've used. Intuitive interface and powerful features."
> 
> **— John Smith, Founder at StartupXYZ**

## 🛣️ Roadmap

### Q1 2024
- [ ] Mobile app improvements
- [ ] Advanced reporting features
- [ ] New integrations

### Q2 2024
- [ ] AI-powered insights
- [ ] Custom dashboard builder
- [ ] Enhanced security features

## 🤝 Support & Community

- 💬 **Discord**: [Join our community](https://discord.gg/{discord_invite})
- 📧 **Email**: support@{app_domain}
- 📞 **Phone**: +1 (555) 123-4567
- 🎫 **Support Portal**: [Create a ticket](https://support.{app_domain})

## 📄 Legal

- [Terms of Service](https://{app_domain}/terms)
- [Privacy Policy](https://{app_domain}/privacy)
- [Security](https://{app_domain}/security)
- [Compliance](https://{app_domain}/compliance)

## 🏢 About Us

{app_name} is built by a team of experienced developers and designers passionate about {industry/domain}. We're backed by leading investors and trusted by thousands of customers worldwide.

---

<div align="center">
  <strong>Ready to get started?</strong>
  <br>
  <a href="https://{app_domain}/signup">Start Free Trial</a> • 
  <a href="https://{app_domain}/demo">Book a Demo</a> • 
  <a href="mailto:sales@{app_domain}">Contact Sales</a>
</div>`
    },
    {
        id: 'ai-chatbot',
        name: 'AI Chatbot',
        category: 'AI/ML',
        description: 'Template for AI chatbot projects with model information and deployment guides',
        tags: ['ai', 'chatbot', 'machine-learning', 'nlp'],
        template: `# 🤖 {bot_name}

<div align="center">
  <img src="assets/bot-logo.png" alt="{bot_name}" width="200"/>
  
  <p><strong>An intelligent conversational AI built with {framework}</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Python-3.8+-blue" alt="Python Version"/>
    <img src="https://img.shields.io/badge/Framework-{framework}-green" alt="Framework"/>
    <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License"/>
    <img src="https://img.shields.io/badge/Status-Active-success" alt="Status"/>
  </p>
</div>

## 🌟 Overview

{bot_name} is an advanced AI chatbot capable of {capabilities}. Built using state-of-the-art natural language processing techniques, it can understand context, maintain conversation flow, and provide intelligent responses.

### 🎯 Key Features

- 🧠 **Natural Language Understanding** - Processes and understands human language naturally
- 💭 **Context Awareness** - Maintains conversation context across multiple turns
- 🔌 **Multi-Platform Support** - Deploy on Discord, Slack, Telegram, WhatsApp, and more
- 🛡️ **Content Filtering** - Built-in safety measures and content moderation
- 📊 **Analytics Dashboard** - Track conversations, user engagement, and performance metrics
- 🌍 **Multi-Language Support** - Supports {supported_languages}
- 🎨 **Customizable Personality** - Configurable tone, style, and behavior

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- {additional_requirements}
- API keys for required services

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/{username}/{bot_name}.git
   cd {bot_name}
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your API keys and configuration
   \`\`\`

4. **Run the bot**
   \`\`\`bash
   python main.py
   \`\`\`

### Configuration

Edit \`config.yaml\` to customize your bot:

\`\`\`yaml
bot:
  name: "{bot_name}"
  personality: "helpful"
  max_tokens: 150
  temperature: 0.7
  
platforms:
  discord:
    enabled: true
    token: "your-discord-token"
  slack:
    enabled: false
    token: "your-slack-token"

features:
  content_filter: true
  analytics: true
  context_memory: 10
\`\`\`

## 🏗️ Architecture

\`\`\`
{bot_name}/
├── src/
│   ├── core/
│   │   ├── nlp_engine.py      # Natural language processing
│   │   ├── context_manager.py # Conversation context
│   │   └── response_generator.py # Response generation
│   ├── platforms/
│   │   ├── discord_bot.py     # Discord integration
│   │   ├── slack_bot.py       # Slack integration
│   │   └── telegram_bot.py    # Telegram integration
│   ├── utils/
│   │   ├── database.py        # Database operations
│   │   └── analytics.py       # Analytics and logging
│   └── models/
│       └── conversation.py    # Data models
├── data/
│   ├── training/              # Training data
│   └── responses/             # Response templates
├── tests/
├── docs/
└── deployment/
    ├── docker/
    └── kubernetes/
\`\`\`

## 🤖 AI Model Information

### Model Details
- **Base Model**: {base_model}
- **Fine-tuning**: {fine_tuning_details}
- **Training Data**: {training_data_info}
- **Model Size**: {model_size}
- **Response Time**: ~{response_time}ms

### Performance Metrics
- **Accuracy**: {accuracy}%
- **User Satisfaction**: {satisfaction}%
- **Context Retention**: {context_retention} turns
- **Uptime**: {uptime}%

## 💬 Usage Examples

### Basic Conversation
\`\`\`python
from src.core.nlp_engine import NLPEngine

bot = NLPEngine()
response = bot.generate_response("Hello, how are you?")
print(response)
# Output: "Hello! I'm doing great, thank you for asking. How can I help you today?"
\`\`\`

### Custom Context
\`\`\`python
# Set conversation context
bot.set_context({
    "user_name": "Alice",
    "topic": "weather",
    "location": "New York"
})

response = bot.generate_response("What's the weather like?")
# Bot will provide weather information for New York
\`\`\`

## 🔧 Platform Integration

### Discord Setup
1. Create a Discord application at https://discord.com/developers/applications
2. Add bot token to your \`.env\` file
3. Invite bot to your server with appropriate permissions

\`\`\`python
# Discord bot example
import discord
from src.platforms.discord_bot import DiscordBot

bot = DiscordBot()
bot.run()
\`\`\`

### Slack Setup
1. Create a Slack app at https://api.slack.com/apps
2. Configure bot permissions and event subscriptions
3. Install app to your workspace

### API Integration
\`\`\`python
from flask import Flask, request, jsonify
from src.core.nlp_engine import NLPEngine

app = Flask(__name__)
bot = NLPEngine()

@app.route('/chat', methods=['POST'])
def chat():
    message = request.json.get('message')
    response = bot.generate_response(message)
    return jsonify({'response': response})
\`\`\`

## 📊 Analytics & Monitoring

### Dashboard Features
- Real-time conversation metrics
- User engagement analytics
- Response quality scoring
- Error tracking and debugging

### Logging
All conversations are logged for analysis and improvement:

\`\`\`python
{
  "timestamp": "2024-01-15T10:30:00Z",
  "user_id": "user123",
  "message": "Hello there!",
  "response": "Hi! How can I help you today?",
  "confidence": 0.95,
  "response_time": 245
}
\`\`\`

## 🚀 Deployment

### Docker Deployment
\`\`\`bash
# Build the image
docker build -t {bot_name} .

# Run the container
docker run -d --name {bot_name} -p 8080:8080 {bot_name}
\`\`\`

### Cloud Deployment
- **AWS**: Deploy using ECS or Lambda
- **Google Cloud**: Use Cloud Run or Compute Engine
- **Azure**: Deploy with Container Instances
- **Heroku**: One-click deployment available

## 🔒 Security & Privacy

- **Data Encryption**: All conversations encrypted in transit and at rest
- **Privacy Compliance**: GDPR and CCPA compliant
- **Content Filtering**: Automatic detection of harmful content
- **Rate Limiting**: Protection against spam and abuse
- **Access Control**: Role-based permissions for admin features

## 🧪 Testing

Run the test suite:
\`\`\`bash
pytest tests/
\`\`\`

### Test Coverage
- Unit tests for core components
- Integration tests for platform connectors
- End-to-end conversation tests
- Performance and load testing

## 📚 Documentation

- [User Guide](docs/user-guide.md)
- [API Reference](docs/api.md)
- [Platform Integration](docs/integrations.md)
- [Deployment Guide](docs/deployment.md)
- [Training Custom Models](docs/training.md)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- {acknowledgments}
- Powered by {ai_service}
- Built with ❤️ by the {team_name} team

---

<div align="center">
  <strong>Need help?</strong> Join our <a href="{discord_link}">Discord community</a> or check our <a href="{docs_link}">documentation</a>
</div>`
    },
    {
        id: 'cli-tool',
        name: 'CLI Tool',
        category: 'Tool',
        description: 'Template for command-line interface tools with installation and usage instructions',
        tags: ['cli', 'command-line', 'tool', 'terminal'],
        template: `# 🛠️ {tool_name}

<div align="center">
  <img src="assets/cli-demo.gif" alt="{tool_name} Demo" width="600"/>
  
  <p><strong>{tool_description}</strong></p>
  
  <p>
    <img src="https://img.shields.io/npm/v/{tool_name}" alt="npm version"/>
    <img src="https://img.shields.io/npm/dm/{tool_name}" alt="npm downloads"/>
    <img src="https://img.shields.io/github/license/{username}/{tool_name}" alt="license"/>
    <img src="https://img.shields.io/badge/platform-macOS%20%7C%20Linux%20%7C%20Windows-lightgrey" alt="platform"/>
  </p>
</div>

## ⚡ Quick Start

### Installation

#### npm (Recommended)
\`\`\`bash
npm install -g {tool_name}
\`\`\`

#### Homebrew (macOS)
\`\`\`bash
brew install {tool_name}
\`\`\`

#### Binary Downloads
Download the latest binary from [releases](https://github.com/{username}/{tool_name}/releases).

### Basic Usage

\`\`\`bash
# Basic command
{tool_name} [options] <arguments>

# Get help
{tool_name} --help

# Check version
{tool_name} --version
\`\`\`

## 🔧 Commands

### Core Commands

#### \`{tool_name} init\`
Initialize a new project or configuration.

\`\`\`bash
{tool_name} init [project-name]
\`\`\`

**Options:**
- \`-t, --template <type>\` - Project template (default: basic)
- \`-f, --force\` - Overwrite existing files
- \`--no-git\` - Skip git initialization

**Examples:**
\`\`\`bash
{tool_name} init my-project
{tool_name} init --template react my-app
{tool_name} init --force existing-project
\`\`\`

#### \`{tool_name} build\`
Build the project with specified configuration.

\`\`\`bash
{tool_name} build [options]
\`\`\`

**Options:**
- \`-e, --env <environment>\` - Build environment (dev/prod)
- \`-w, --watch\` - Watch for file changes
- \`-o, --output <directory>\` - Output directory
- \`--minify\` - Minify output

**Examples:**
\`\`\`bash
{tool_name} build --env production
{tool_name} build --watch --output dist/
\`\`\`

#### \`{tool_name} deploy\`
Deploy the project to specified target.

\`\`\`bash
{tool_name} deploy [target]
\`\`\`

**Targets:**
- \`aws\` - Deploy to AWS
- \`vercel\` - Deploy to Vercel  
- \`netlify\` - Deploy to Netlify
- \`heroku\` - Deploy to Heroku

**Examples:**
\`\`\`bash
{tool_name} deploy aws
{tool_name} deploy vercel --production
\`\`\`

### Utility Commands

#### \`{tool_name} config\`
Manage configuration settings.

\`\`\`bash
# View current config
{tool_name} config list

# Set a value
{tool_name} config set <key> <value>

# Get a value
{tool_name} config get <key>

# Remove a key
{tool_name} config delete <key>
\`\`\`

#### \`{tool_name} status\`
Show project status and health check.

\`\`\`bash
{tool_name} status [--verbose]
\`\`\`

## ⚙️ Configuration

### Configuration File

Create a \`{tool_name}.config.js\` file in your project root:

\`\`\`javascript
module.exports = {
  // Basic settings
  mode: 'development',
  output: './dist',
  
  // Build settings
  build: {
    minify: false,
    sourcemap: true,
    target: 'es2018'
  },
  
  // Deploy settings
  deploy: {
    target: 'aws',
    region: 'us-east-1',
    bucket: 'my-app-bucket'
  },
  
  // Plugin configuration
  plugins: [
    '@{tool_name}/plugin-typescript',
    '@{tool_name}/plugin-sass'
  ]
};
\`\`\`

### Environment Variables

\`\`\`bash
# Set default configuration
export {TOOL_NAME_UPPER}_CONFIG=production

# Set API endpoints
export {TOOL_NAME_UPPER}_API_URL=https://api.example.com

# Enable debug mode
export {TOOL_NAME_UPPER}_DEBUG=true
\`\`\`

### Global Configuration

\`\`\`bash
# Set global defaults
{tool_name} config set --global editor "code"
{tool_name} config set --global theme "dark"
\`\`\`

## 🔌 Plugins

### Official Plugins

- **@{tool_name}/plugin-typescript** - TypeScript support
- **@{tool_name}/plugin-sass** - Sass/SCSS preprocessing  
- **@{tool_name}/plugin-react** - React framework support
- **@{tool_name}/plugin-vue** - Vue.js framework support

### Installing Plugins

\`\`\`bash
# Install a plugin
npm install @{tool_name}/plugin-typescript

# Use in config
{tool_name} config set plugins '["@{tool_name}/plugin-typescript"]'
\`\`\`

### Creating Custom Plugins

\`\`\`javascript
// my-plugin.js
module.exports = {
  name: 'my-plugin',
  version: '1.0.0',
  
  hooks: {
    beforeBuild: (config) => {
      // Custom logic before build
    },
    afterBuild: (result) => {
      // Custom logic after build
    }
  }
};
\`\`\`

## 📊 Examples

### Project Templates

\`\`\`bash
# React application
{tool_name} init my-react-app --template react

# Node.js API
{tool_name} init my-api --template node-api

# Static website
{tool_name} init my-site --template static
\`\`\`

### Advanced Workflows

\`\`\`bash
# Development workflow
{tool_name} init my-project
cd my-project
{tool_name} build --watch &
{tool_name} serve --port 3000

# Production deployment
{tool_name} build --env production --minify
{tool_name} deploy aws --region us-west-2
\`\`\`

### Scripting with {tool_name}

\`\`\`bash
#!/bin/bash
# deploy.sh

echo "Building project..."
{tool_name} build --env production

if [ $? -eq 0 ]; then
  echo "Deploying to production..."
  {tool_name} deploy aws
else
  echo "Build failed!"
  exit 1
fi
\`\`\`

## 🐛 Troubleshooting

### Common Issues

#### Command not found
\`\`\`bash
# Make sure it's installed globally
npm install -g {tool_name}

# Or use npx
npx {tool_name} --version
\`\`\`

#### Permission errors
\`\`\`bash
# Fix npm permissions (macOS/Linux)
sudo chown -R $(whoami) ~/.npm

# Or use nvm for node version management
\`\`\`

#### Build failures
\`\`\`bash
# Clean cache and rebuild
{tool_name} config delete cache
{tool_name} build --force
\`\`\`

### Debug Mode

Enable verbose logging:
\`\`\`bash
{tool_name} --debug build
# or
DEBUG=1 {tool_name} build
\`\`\`

### Getting Help

\`\`\`bash
# General help
{tool_name} --help

# Command-specific help
{tool_name} build --help

# List all commands
{tool_name} help
\`\`\`

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/{username}/{tool_name}.git
cd {tool_name}

# Install dependencies
npm install

# Link for local development
npm link

# Run tests
npm test
\`\`\`

## 📚 Resources

- [Documentation](https://docs.{tool_name}.dev)
- [API Reference](https://api.{tool_name}.dev)
- [Plugin Development](https://docs.{tool_name}.dev/plugins)
- [Examples Repository](https://github.com/{username}/{tool_name}-examples)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/{username}">@{username}</a>
</div>`
    },
    {
        id: 'mobile-app',
        name: 'Mobile App',
        category: 'Mobile',
        description: 'Template for mobile applications with screenshots, features, and store links',
        tags: ['mobile', 'ios', 'android', 'react-native', 'flutter'],
        template: `<div align="center">
  <img src="assets/app-icon.png" alt="{app_name}" width="120" height="120">
  <h1>{app_name}</h1>
  <p><strong>{app_tagline}</strong></p>
  
  <p>
    <a href="{app_store_link}">
      <img src="https://img.shields.io/badge/Download_on_the-App_Store-black?style=for-the-badge&logo=apple&logoColor=white" alt="Download on App Store">
    </a>
    <a href="{play_store_link}">
      <img src="https://img.shields.io/badge/Get_it_on-Google_Play-black?style=for-the-badge&logo=google-play&logoColor=white" alt="Get it on Google Play">
    </a>
  </p>
  
  <p>
    <img src="https://img.shields.io/badge/Platform-iOS%20%7C%20Android-lightgrey?style=flat-square" alt="Platform">
    <img src="https://img.shields.io/badge/Framework-{framework}-blue?style=flat-square" alt="Framework">
    <img src="https://img.shields.io/badge/Version-{version}-green?style=flat-square" alt="Version">
  </p>
</div>

## 📱 Screenshots

<div align="center">
  <img src="screenshots/screen1.png" width="200" alt="Home Screen">
  <img src="screenshots/screen2.png" width="200" alt="Features">
  <img src="screenshots/screen3.png" width="200" alt="Profile">
  <img src="screenshots/screen4.png" width="200" alt="Settings">
</div>

## 🌟 Features

### ✨ Core Features
- 🎯 **Feature 1** - Detailed description of main feature
- 🚀 **Feature 2** - Another key functionality
- 💡 **Feature 3** - Innovative capability
- 🔒 **Secure** - End-to-end encryption and secure authentication

### 📱 User Experience
- 🎨 **Beautiful UI** - Modern, intuitive interface design
- 🌙 **Dark Mode** - Easy on the eyes with dark theme support
- 🔄 **Offline Mode** - Works seamlessly without internet connection
- 🌐 **Multi-language** - Supports {supported_languages}
- ♿ **Accessibility** - Full accessibility compliance (WCAG 2.1)

### 🔧 Technical Features
- ⚡ **High Performance** - Optimized for smooth 60fps experience
- 🔄 **Real-time Sync** - Instant synchronization across devices
- 📊 **Analytics** - Built-in usage analytics and insights
- 🔔 **Push Notifications** - Smart, contextual notifications
- 📱 **Native Feel** - Platform-specific UI components

## 🎬 Demo Video

[![{app_name} Demo](https://img.youtube.com/vi/{demo_video_id}/0.jpg)](https://www.youtube.com/watch?v={demo_video_id})

## 🏗️ Tech Stack

### Frontend
- **Framework**: {framework} (React Native / Flutter / Native)
- **State Management**: {state_management}
- **Navigation**: {navigation_library}
- **UI Components**: {ui_library}
- **Styling**: {styling_solution}

### Backend
- **API**: {backend_technology}
- **Database**: {database}
- **Authentication**: {auth_provider}
- **Storage**: {storage_solution}
- **Push Notifications**: {notification_service}

### DevOps
- **CI/CD**: {cicd_platform}
- **Monitoring**: {monitoring_tools}
- **Crash Reporting**: {crash_reporting}
- **Analytics**: {analytics_platform}

## 🚀 Getting Started

### Prerequisites
- {development_requirements}
- {platform_specific_requirements}

### Installation for Development

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/{username}/{app_name}.git
   cd {app_name}
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment**
   \`\`\`bash
   cp .env.example .env
   # Edit .env with your configuration
   \`\`\`

4. **Start the development server**
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

### Platform-specific Setup

#### iOS Development
\`\`\`bash
# Install iOS dependencies
cd ios && pod install

# Run on iOS simulator
npm run ios
\`\`\`

#### Android Development
\`\`\`bash
# Run on Android emulator
npm run android
\`\`\`

## 📊 App Statistics

- 📥 **Downloads**: {download_count}+
- ⭐ **Rating**: {rating}/5.0 ({review_count} reviews)
- 👥 **Active Users**: {active_users}+
- 🌍 **Countries**: Available in {country_count}+ countries

## 🗺️ Roadmap

### Version {next_version} (Coming Soon)
- [ ] New feature 1
- [ ] Performance improvements
- [ ] UI/UX enhancements
- [ ] Bug fixes

### Future Plans
- [ ] Feature 2
- [ ] Integration with {service}
- [ ] Advanced analytics
- [ ] Offline capabilities enhancement

## 📱 Supported Platforms

| Platform | Minimum Version | Status |
|----------|----------------|---------|
| iOS | {min_ios_version}+ | ✅ Active |
| Android | {min_android_version}+ | ✅ Active |
| iPad | {min_ipad_version}+ | ✅ Optimized |
| Android Tablet | {min_tablet_version}+ | ✅ Optimized |

## 🔒 Privacy & Security

- 🛡️ **Data Encryption** - All data encrypted in transit and at rest
- 🔐 **Secure Authentication** - Industry-standard authentication protocols
- 📊 **Privacy First** - Minimal data collection, user consent required
- 🌍 **GDPR Compliant** - Full compliance with privacy regulations
- 🔍 **Regular Audits** - Third-party security audits performed regularly

## 📞 Support

### For Users
- 📧 **Email**: support@{app_domain}
- 💬 **In-App Support** - Available within the app
- 📱 **FAQ**: [Frequently Asked Questions]({faq_link})
- 🎥 **Video Tutorials**: [YouTube Channel]({youtube_channel})

### For Developers
- 📖 **Documentation**: [Developer Docs]({docs_link})
- 🔧 **API Reference**: [API Documentation]({api_docs_link})
- 💬 **Discord**: [Developer Community]({discord_link})
- 📧 **Developer Email**: dev@{app_domain}

## 🏆 Awards & Recognition

- 🥇 **{award_name}** - {award_year}
- 📱 **Featured App** - {platform} Store ({featured_date})
- ⭐ **Editor's Choice** - {publication} ({recognition_date})

## 📄 Legal

- [Privacy Policy]({privacy_policy_link})
- [Terms of Service]({terms_link})
- [EULA]({eula_link})
- [Open Source Licenses]({licenses_link})

## 🤝 Contributing

We welcome contributions from the community! Please see our [Contributing Guidelines](CONTRIBUTING.md).

### How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📊 Analytics Dashboard

Track app performance and user engagement:
- Real-time user analytics
- Performance monitoring
- Crash reporting and resolution
- Feature usage statistics

## 🎨 Design Resources

- [Figma Design Files]({figma_link})
- [Brand Guidelines]({brand_guidelines_link})
- [Icon Pack]({icons_link})
- [UI Kit]({ui_kit_link})

---

<div align="center">
  <p><strong>Download {app_name} today and experience {unique_value_proposition}!</strong></p>
  
  <a href="{app_store_link}">
    <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on App Store" height="60">
  </a>
  <a href="{play_store_link}">
    <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" height="60">
  </a>
</div>`
    },
    {
        id: 'game-project',
        name: 'Game Project',
        category: 'Game',
        description: 'Template for game projects with gameplay features, controls, and media',
        tags: ['game', 'gamedev', 'unity', 'unreal', 'indie'],
        template: `<div align="center">
  <img src="assets/game-logo.png" alt="{game_name}" width="400">
  
  <p><strong>{game_tagline}</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Genre-{game_genre}-blue?style=for-the-badge" alt="Genre">
    <img src="https://img.shields.io/badge/Platform-{platforms}-green?style=for-the-badge" alt="Platforms">
    <img src="https://img.shields.io/badge/Engine-{game_engine}-red?style=for-the-badge" alt="Engine">
  </p>
  
  <p>
    🎮 <a href="{play_link}"><strong>PLAY NOW</strong></a> |
    📥 <a href="{download_link}"><strong>DOWNLOAD</strong></a> |
    🎬 <a href="{trailer_link}"><strong>WATCH TRAILER</strong></a>
  </p>
</div>

## 🎮 About the Game

{game_name} is a {detailed_game_description}. Set in {game_setting}, players will {main_gameplay_loop}.

### 🎯 Key Features

- 🌟 **{feature_1}** - {feature_1_description}
- ⚔️ **{feature_2}** - {feature_2_description}  
- 🏆 **{feature_3}** - {feature_3_description}
- 🎨 **Stunning Visuals** - {visual_style_description}
- 🎵 **Epic Soundtrack** - Original music by {composer}
- 🌍 **Immersive World** - Explore {world_size} of detailed environments

## 🎬 Media

### 🎥 Gameplay Trailer
[![{game_name} Trailer](https://img.youtube.com/vi/{trailer_video_id}/0.jpg)](https://www.youtube.com/watch?v={trailer_video_id})

### 📸 Screenshots
<div align="center">
  <img src="screenshots/gameplay1.png" width="45%" alt="Gameplay 1">
  <img src="screenshots/gameplay2.png" width="45%" alt="Gameplay 2">
  <img src="screenshots/gameplay3.png" width="45%" alt="Gameplay 3">
  <img src="screenshots/gameplay4.png" width="45%" alt="Gameplay 4">
</div>

### 🎮 GIFs
<div align="center">
  <img src="assets/combat.gif" width="300" alt="Combat System">
  <img src="assets/exploration.gif" width="300" alt="World Exploration">
</div>

## 🎯 Gameplay

### 🎮 Core Mechanics
- **{mechanic_1}**: {mechanic_1_description}
- **{mechanic_2}**: {mechanic_2_description}
- **{mechanic_3}**: {mechanic_3_description}

### 🏆 Game Modes
- **Campaign**: {campaign_description}
- **Multiplayer**: {multiplayer_description}
- **Challenge Mode**: {challenge_mode_description}

### ⭐ Progression System
- Unlock {unlock_count}+ unique {unlock_type}
- {progression_levels} levels of character progression
- Collect {collectible_count}+ hidden {collectibles}

## 🕹️ Controls

### 🖱️ Keyboard & Mouse
| Action | Key/Button |
|--------|------------|
| Move Forward | W |
| Move Backward | S |
| Strafe Left | A |
| Strafe Right | D |
| Jump | Space |
| Attack | Left Click |
| Block/Defend | Right Click |
| Inventory | Tab |
| Pause Menu | Escape |

### 🎮 Gamepad Support
- Full Xbox Controller support
- PlayStation Controller support
- Customizable button mapping

## 🛠️ Technical Details

### 🎮 Game Engine & Tools
- **Engine**: {game_engine} {engine_version}
- **Graphics API**: {graphics_api}
- **Audio**: {audio_system}
- **Physics**: {physics_engine}
- **Scripting**: {scripting_language}

### 💻 System Requirements

#### Minimum Requirements
- **OS**: {min_os}
- **Processor**: {min_cpu}
- **Memory**: {min_ram} GB RAM
- **Graphics**: {min_gpu}
- **DirectX**: {min_directx}
- **Storage**: {min_storage} GB available space

#### Recommended Requirements
- **OS**: {rec_os}
- **Processor**: {rec_cpu}
- **Memory**: {rec_ram} GB RAM
- **Graphics**: {rec_gpu}
- **DirectX**: {rec_directx}
- **Storage**: {rec_storage} GB available space

## 🏪 Where to Play

### 🖥️ PC Platforms
- [Steam]({steam_link}) - \${steam_price}
- [Epic Games Store]({epic_link}) - \${epic_price}
- [GOG]({gog_link}) - \${gog_price}
- [itch.io]({itch_link}) - \${itch_price}

### 🎮 Console Platforms
- PlayStation {playstation_version} - \${ps_price}
- Xbox {xbox_version} - \${xbox_price}
- Nintendo Switch - \${switch_price}

### 📱 Mobile
- [iOS App Store]({ios_link}) - \${ios_price}
- [Google Play Store]({android_link}) - \${android_price}

## 🏗️ Development

### 👥 Team
- **Game Director**: {director_name}
- **Lead Programmer**: {lead_programmer}
- **Art Director**: {art_director}
- **Lead Designer**: {lead_designer}
- **Audio Director**: {audio_director}

### 📅 Development Timeline
- **Pre-production**: {preproduction_period}
- **Production**: {production_period}
- **Alpha Release**: {alpha_date}
- **Beta Release**: {beta_date}
- **Launch**: {launch_date}

### 🛠️ Development Tools
- **IDE**: {development_ide}
- **Version Control**: {version_control}
- **Art Pipeline**: {art_tools}
- **Audio Tools**: {audio_tools}
- **Project Management**: {project_management_tool}

## 📊 Game Statistics

- 🎮 **Playtime**: {average_playtime} hours average
- 🏆 **Achievements**: {achievement_count} to unlock
- 📦 **Content Updates**: {update_frequency}
- 👥 **Players**: {player_count}+ downloads
- ⭐ **Rating**: {game_rating}/5 ({review_count} reviews)

## 🗺️ Roadmap

### 📅 Upcoming Updates

#### Version {next_version} - "{update_name}"
- [ ] New {new_content_type}
- [ ] Gameplay improvements
- [ ] Bug fixes and optimizations
- [ ] Quality of life updates

#### Future Plans
- [ ] DLC: "{dlc_name}"
- [ ] Mod support
- [ ] {future_platform} port
- [ ] VR mode

## 🏆 Awards & Recognition

- 🥇 **{award_1}** - {award_organization} ({award_year})
- 🏆 **{award_2}** - {award_event} ({award_year})
- ⭐ **Featured Game** - {platform_feature} ({feature_date})

## 🎵 Soundtrack

The game features an original soundtrack composed by {composer_name}.

- 🎵 **{track_count} Original Tracks**
- 🎧 **{soundtrack_length} Minutes of Music**
- 💿 **Available on**: [Spotify]({spotify_link}) | [Apple Music]({apple_music_link}) | [YouTube]({youtube_music_link})

## 📝 Reviews

> "{review_1_text}"
> 
> **— {reviewer_1}, {publication_1}** ({review_1_score}/10)

> "{review_2_text}"
> 
> **— {reviewer_2}, {publication_2}** ({review_2_score}/5 stars)

## 🐛 Bug Reports & Feedback

Found a bug or have suggestions? We'd love to hear from you!

- 🐛 **Bug Reports**: [GitHub Issues]({github_issues_link})
- 💬 **Discord Community**: [Join our server]({discord_link})
- 📧 **Email**: support@{game_studio}.com
- 📝 **Feedback Form**: [{feedback_form_link}]({feedback_form_link})

## 🤝 Community

Join our growing community of players!

- 💬 **Discord**: [Official Server]({discord_link}) - {discord_members}+ members
- 🐦 **Twitter**: [@{twitter_handle}]({twitter_link})
- 📘 **Facebook**: [Game Page]({facebook_link})
- 📸 **Instagram**: [@{instagram_handle}]({instagram_link})
- 🎮 **Twitch**: [Watch streams]({twitch_link})
- 📺 **YouTube**: [Game channel]({youtube_link})

## 📚 Documentation

- [Player Guide]({player_guide_link})
- [Controls Reference]({controls_link})
- [FAQ]({faq_link})
- [Troubleshooting]({troubleshooting_link})
- [Modding Guide]({modding_link})

## 📄 Legal

- [End User License Agreement]({eula_link})
- [Privacy Policy]({privacy_link})
- [Terms of Service]({terms_link})

---

<div align="center">
  <p><strong>Experience {game_name} - {call_to_action}!</strong></p>
  
  <a href="{play_link}">
    <img src="https://img.shields.io/badge/PLAY%20NOW-Click%20Here-brightgreen?style=for-the-badge&logo=gamepad" alt="Play Now" height="50">
  </a>
</div>

<div align="center">
  <p>Made with ❤️ by <strong>{studio_name}</strong></p>
</div>`
    },
    {
        id: 'browser-extension',
        name: 'Browser Extension',
        category: 'Extension',
        description: 'Template for browser extensions with installation guides and feature descriptions',
        tags: ['browser', 'extension', 'chrome', 'firefox', 'web'],
        template: `<div align="center">
  <img src="assets/extension-icon.png" alt="{extension_name}" width="128" height="128">
  <h1>{extension_name}</h1>
  <p><strong>{extension_description}</strong></p>
  
  <p>
    <a href="{chrome_store_link}">
      <img src="https://img.shields.io/badge/Chrome-Available-green?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Chrome Web Store">
    </a>
    <a href="{firefox_addon_link}">
      <img src="https://img.shields.io/badge/Firefox-Available-orange?style=for-the-badge&logo=firefox&logoColor=white" alt="Firefox Add-ons">
    </a>
    <a href="{edge_store_link}">
      <img src="https://img.shields.io/badge/Edge-Available-blue?style=for-the-badge&logo=microsoft-edge&logoColor=white" alt="Microsoft Edge Add-ons">
    </a>
  </p>
  
  <p>
    <img src="https://img.shields.io/chrome-web-store/users/{extension_id}?label=Chrome%20Users&style=flat-square" alt="Chrome Users">
    <img src="https://img.shields.io/chrome-web-store/rating/{extension_id}?label=Rating&style=flat-square" alt="Rating">
    <img src="https://img.shields.io/chrome-web-store/v/{extension_id}?label=Version&style=flat-square" alt="Version">
  </p>
</div>

## ✨ Features

### 🚀 Core Functionality
- 🎯 **{main_feature}** - {main_feature_description}
- ⚡ **Fast & Lightweight** - Minimal impact on browser performance
- 🔒 **Privacy Focused** - No data tracking or collection
- 🎨 **Customizable** - Personalize the extension to your needs
- 📱 **Responsive Design** - Works seamlessly across all screen sizes

### 🛠️ Advanced Features
- 🔧 **{advanced_feature_1}** - {advanced_feature_1_description}
- 📊 **{advanced_feature_2}** - {advanced_feature_2_description}
- 🔄 **Auto-sync** - Sync settings across devices
- 🌙 **Dark Mode** - Easy on the eyes during night browsing
- ⌨️ **Keyboard Shortcuts** - Boost productivity with hotkeys

## 📸 Screenshots

<div align="center">
  <img src="screenshots/popup.png" width="300" alt="Extension Popup">
  <img src="screenshots/options.png" width="300" alt="Options Page">
  <img src="screenshots/in-action.png" width="600" alt="Extension in Action">
</div>

## 🚀 Installation

### 📦 From Web Stores (Recommended)

#### Chrome Web Store
1. Visit the [Chrome Web Store]({chrome_store_link})
2. Click "Add to Chrome"
3. Confirm by clicking "Add extension"

#### Firefox Add-ons
1. Visit [Firefox Add-ons]({firefox_addon_link})
2. Click "Add to Firefox"
3. Confirm the installation

#### Microsoft Edge Add-ons
1. Visit [Microsoft Edge Add-ons]({edge_store_link})
2. Click "Get"
3. Confirm by clicking "Add extension"

### 🔧 Manual Installation (Development)

1. **Download the source code**
   \`\`\`bash
   git clone https://github.com/{username}/{extension_name}.git
   cd {extension_name}
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Build the extension**
   \`\`\`bash
   npm run build
   \`\`\`

4. **Load in browser**
   - **Chrome**: Go to \`chrome://extensions/\`, enable "Developer mode", click "Load unpacked", select the \`dist\` folder
   - **Firefox**: Go to \`about:debugging\`, click "This Firefox", click "Load Temporary Add-on", select the \`manifest.json\` file
   - **Edge**: Go to \`edge://extensions/\`, enable "Developer mode", click "Load unpacked", select the \`dist\` folder

## 🎮 How to Use

### 🖱️ Basic Usage

1. **Click the extension icon** in your browser toolbar
2. **Configure settings** in the popup or options page
3. **Start using** the features on supported websites

### ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Open Extension | \`Ctrl+Shift+{shortcut_key}\` |
| Quick Action | \`Alt+{action_key}\` |
| Toggle Feature | \`Ctrl+{toggle_key}\` |

### 🔧 Configuration

Access the options page by:
- Right-clicking the extension icon → "Options"
- Going to \`chrome://extensions/\` → {extension_name} → "Options"

## 🏗️ Technical Details

### 🛠️ Built With
- **Manifest Version**: {manifest_version}
- **Framework**: {framework}
- **Build Tool**: {build_tool}
- **Languages**: {programming_languages}
- **APIs Used**: {browser_apis}

### 📋 Permissions Explained

| Permission | Why We Need It |
|------------|----------------|
| \`{permission_1}\` | {permission_1_reason} |
| \`{permission_2}\` | {permission_2_reason} |
| \`{permission_3}\` | {permission_3_reason} |

### 🔒 Privacy & Security
- ✅ **No data collection** - We don't collect any personal information
- ✅ **Local storage only** - All data stays on your device
- ✅ **Open source** - Code is publicly auditable
- ✅ **Minimal permissions** - Only requests necessary permissions

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|---------|
| **Chrome** | {min_chrome_version}+ | ✅ Fully Supported |
| **Firefox** | {min_firefox_version}+ | ✅ Fully Supported |
| **Edge** | {min_edge_version}+ | ✅ Fully Supported |
| **Safari** | {min_safari_version}+ | 🔄 In Development |
| **Opera** | {min_opera_version}+ | ✅ Compatible |

## 📊 Statistics

- 👥 **Users**: {total_users}+ across all browsers
- ⭐ **Average Rating**: {average_rating}/5.0
- 📥 **Total Downloads**: {total_downloads}+
- 🌍 **Countries**: Available in {countries_count}+ countries
- 📈 **Weekly Active Users**: {weekly_active_users}+

## 🗺️ Roadmap

### 🎯 Next Release (v{next_version})
- [ ] {upcoming_feature_1}
- [ ] {upcoming_feature_2}
- [ ] Performance improvements
- [ ] Bug fixes

### 🔮 Future Plans
- [ ] Safari support
- [ ] Mobile browser support
- [ ] {future_feature_1}
- [ ] {future_feature_2}

## 🐛 Known Issues & Troubleshooting

### 📝 Common Issues

#### Extension not working on some sites
- **Cause**: Some sites block extensions
- **Solution**: Check if the site allows extensions in its settings

#### High memory usage
- **Cause**: Large datasets being processed
- **Solution**: Try refreshing the page or restarting the browser

### 🔧 Troubleshooting Steps

1. **Refresh the page** - Simple refresh often resolves issues
2. **Restart browser** - Close and reopen your browser
3. **Update extension** - Check for updates in the web store
4. **Clear cache** - Clear browser cache and cookies
5. **Reinstall** - Remove and reinstall the extension

## 📚 FAQ

### ❓ General Questions

**Q: Is this extension free?**
A: Yes, {extension_name} is completely free to use.

**Q: Does it work offline?**
A: {offline_functionality_answer}

**Q: Can I use it on mobile?**
A: Currently, it's only available for desktop browsers. Mobile support is planned.

### 🔒 Privacy Questions

**Q: Do you collect my data?**
A: No, we don't collect any personal data. Everything stays on your device.

**Q: Why do you need certain permissions?**
A: We only request permissions necessary for core functionality. See the permissions table above.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🔧 Development Setup

\`\`\`bash
# Clone the repository
git clone https://github.com/{username}/{extension_name}.git
cd {extension_name}

# Install dependencies
npm install

# Start development mode
npm run dev

# Build for production
npm run build
\`\`\`

### 📝 How to Contribute

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (\`git commit -m 'Add amazing feature'\`)
6. Push to the branch (\`git push origin feature/amazing-feature\`)
7. Open a Pull Request

### 🐛 Bug Reports

Found a bug? Please report it on our [GitHub Issues]({github_issues_link}) page with:
- Browser and version
- Extension version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📞 Support

### 💬 Get Help
- 🐛 **Bug Reports**: [GitHub Issues]({github_issues_link})
- 💡 **Feature Requests**: [GitHub Discussions]({github_discussions_link})
- 📧 **Email**: support@{extension_domain}
- 💬 **Discord**: [Community Server]({discord_link})

### 📚 Resources
- [User Guide]({user_guide_link})
- [API Documentation]({api_docs_link})
- [Video Tutorials]({tutorials_link})
- [Changelog]({changelog_link})

## ⭐ Reviews

Love the extension? Please consider:
- ⭐ Leaving a review on the [Chrome Web Store]({chrome_store_link})
- 🌟 Starring the project on [GitHub]({github_repo_link})
- 📢 Sharing with friends and colleagues

## 📄 License

This project is licensed under the {license_type} License - see the [LICENSE](LICENSE) file for details.

--- 

<div align="center">
  <p><strong>Boost your productivity with {extension_name}!</strong></p>
  
  <a href="{chrome_store_link}">
    <img src="https://img.shields.io/badge/Add%20to-Chrome-green?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Add to Chrome">
  </a>
  <a href="{firefox_addon_link}">
    <img src="https://img.shields.io/badge/Add%20to-Firefox-orange?style=for-the-badge&logo=firefox&logoColor=white" alt="Add to Firefox">
  </a>
</div>`
    },
    {
        id: 'template-starter',
        name: 'Template/Starter',
        category: 'Template',
        description: 'Template for project templates and boilerplates with setup instructions',
        tags: ['template', 'boilerplate', 'starter', 'scaffold'],
        template: `<div align="center">
  <img src="assets/template-logo.png" alt="{template_name}" width="200" height="200">
  <h1>{template_name}</h1>
  <p><strong>{template_description}</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Template-{framework}-blue?style=for-the-badge" alt="Framework">
    <img src="https://img.shields.io/github/stars/{username}/{template_name}?style=for-the-badge" alt="Stars">
    <img src="https://img.shields.io/github/forks/{username}/{template_name}?style=for-the-badge" alt="Forks">
  </p>
  
  <p>
    🚀 <a href="{demo_link}"><strong>LIVE DEMO</strong></a> |
    📖 <a href="{docs_link}"><strong>DOCUMENTATION</strong></a> |
    💬 <a href="{discord_link}"><strong>COMMUNITY</strong></a>
  </p>
</div>

## 🌟 What's Included

This template provides a production-ready foundation with:

### 🏗️ Core Stack
- **{framework}** - {framework_description}
- **{build_tool}** - {build_tool_description}
- **{styling_solution}** - {styling_description}
- **{state_management}** - {state_management_description}
- **{routing}** - {routing_description}

### 📦 Pre-configured Features
- ✅ **TypeScript Support** - Full type safety out of the box
- ✅ **ESLint + Prettier** - Code formatting and linting
- ✅ **Husky + lint-staged** - Pre-commit hooks
- ✅ **Jest + Testing Library** - Testing setup
- ✅ **GitHub Actions** - CI/CD pipeline
- ✅ **SEO Optimized** - Meta tags, sitemap, robots.txt
- ✅ **PWA Ready** - Service worker and manifest
- ✅ **Docker Support** - Development and production containers

### 🎨 UI Components
- 🧩 **{component_count}+ Components** - Pre-built, customizable components
- 🎨 **Design System** - Consistent styling and theming
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode** - Built-in theme switching
- ♿ **Accessibility** - WCAG 2.1 AA compliance

## 🚀 Quick Start

### 📋 Prerequisites
- Node.js {min_node_version} or higher
- {package_manager} (npm/yarn/pnpm)
- Git

### 🛠️ Option 1: Use Template Button
1. Click the "Use this template" button above
2. Name your new repository
3. Clone your new repository
4. Follow the setup steps below

### 🛠️ Option 2: Clone Directly
\`\`\`bash
# Clone the template
git clone https://github.com/{username}/{template_name}.git my-project
cd my-project

# Remove git history (optional)
rm -rf .git
git init
\`\`\`

### 🛠️ Option 3: Use CLI Tool
\`\`\`bash
# Using create-{template_name}
npx create-{template_name} my-project

# Or with yarn
yarn create {template_name} my-project

# Or with pnpm
pnpm create {template_name} my-project
\`\`\`

### ⚙️ Setup Steps

1. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

2. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   \`\`\`

3. **Start development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to \`http://localhost:{dev_port}\`

## 📁 Project Structure

\`\`\`
{template_name}/
├── public/                 # Static assets
│   ├── icons/             # App icons
│   └── images/            # Images
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Base UI components
│   │   └── layout/       # Layout components
│   ├── pages/            # Page components
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── styles/           # Global styles
│   ├── types/            # TypeScript types
│   └── lib/              # Third-party lib configs
├── tests/                # Test files
├── docs/                 # Documentation
├── .github/              # GitHub workflows
├── docker/               # Docker configurations
└── scripts/              # Build scripts
\`\`\`

## 🎨 Customization

### 🖌️ Theming
Edit \`src/styles/theme.ts\` to customize:
- Color palette
- Typography
- Spacing scale
- Component variants

\`\`\`typescript
export const theme = {
  colors: {
    primary: '{primary_color}',
    secondary: '{secondary_color}',
    // ... more colors
  },
  fonts: {
    heading: '{heading_font}',
    body: '{body_font}',
  },
  // ... more theme options
}
\`\`\`

### 📱 Responsive Breakpoints
\`\`\`typescript
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
\`\`\`

### 🔧 Configuration
Key configuration files:
- \`next.config.js\` - Next.js configuration
- \`tailwind.config.js\` - Tailwind CSS configuration
- \`tsconfig.json\` - TypeScript configuration
- \`.eslintrc.json\` - ESLint rules

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| \`npm run dev\` | Start development server |
| \`npm run build\` | Build for production |
| \`npm run start\` | Start production server |
| \`npm run lint\` | Run ESLint |
| \`npm run lint:fix\` | Fix ESLint issues |
| \`npm run type-check\` | Run TypeScript type checking |
| \`npm run test\` | Run tests |
| \`npm run test:watch\` | Run tests in watch mode |
| \`npm run test:coverage\` | Run tests with coverage |

## 🧪 Testing

### 🔬 Testing Stack
- **Jest** - Test runner
- **Testing Library** - Component testing utilities
- **MSW** - API mocking
- **Playwright** - E2E testing

### 🚀 Running Tests
\`\`\`bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Coverage report
npm run test:coverage
\`\`\`

## 🚀 Deployment

### 🌐 Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/{username}/{template_name})

### 🌊 Netlify
1. Connect your repository
2. Set build command: \`npm run build\`
3. Set publish directory: \`out\` or \`dist\`

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/{username}/{template_name})

### 🐳 Docker
\`\`\`bash
# Build the image
docker build -t {template_name} .

# Run the container
docker run -p 3000:3000 {template_name}
\`\`\`

### ☁️ Other Platforms
- **AWS Amplify**
- **Firebase Hosting**
- **GitHub Pages**
- **Azure Static Web Apps**

## 📊 Performance

### ⚡ Optimization Features
- **Code Splitting** - Automatic route-based splitting
- **Image Optimization** - Next.js Image component
- **Bundle Analysis** - Webpack bundle analyzer
- **PWA** - Service worker for caching
- **SEO** - Optimized meta tags and structured data

### 📈 Lighthouse Scores
- **Performance**: {performance_score}/100
- **Accessibility**: {accessibility_score}/100
- **Best Practices**: {best_practices_score}/100
- **SEO**: {seo_score}/100

## 🔧 Advanced Features

### 🔐 Authentication
Ready-to-use authentication with:
- **NextAuth.js** - Multiple providers
- **JWT tokens** - Secure token handling
- **Protected routes** - Route-level protection
- **Role-based access** - User permissions

### 📊 Analytics
Integrated analytics with:
- **Google Analytics 4**
- **Vercel Analytics**
- **Privacy-focused tracking**
- **Custom event tracking**

### 🗃️ Database Integration
- **Prisma ORM** - Type-safe database client
- **Multiple databases** - PostgreSQL, MySQL, SQLite
- **Migrations** - Database schema management
- **Seeding** - Development data setup

## 🛠️ Development Tools

### 🔍 Code Quality
- **TypeScript** - Static type checking
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

### 📊 Monitoring
- **Error Tracking** - Sentry integration
- **Performance Monitoring** - Web Vitals
- **Logging** - Structured logging
- **Health Checks** - Application monitoring

## 🤝 Contributing

We welcome contributions to improve this template!

### 📝 How to Contribute
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### 🐛 Reporting Issues
- Use the [issue template]({issue_template_link})
- Provide reproduction steps
- Include environment details

## 📚 Documentation

- [Getting Started Guide]({getting_started_link})
- [Component Documentation]({components_docs_link})
- [Deployment Guide]({deployment_docs_link})
- [Customization Guide]({customization_docs_link})
- [FAQ]({faq_link})

## 🌟 Showcase

Projects built with this template:
- [Project 1]({showcase_project_1}) - {project_1_description}
- [Project 2]({showcase_project_2}) - {project_2_description}
- [Project 3]({showcase_project_3}) - {project_3_description}

[Submit your project]({showcase_submission_link}) to be featured!

## 📄 License

This template is licensed under the {license_type} License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framework]({framework_link}) - The underlying framework
- [UI Library]({ui_library_link}) - Component library
- [Community Contributors]({contributors_link}) - Amazing contributors

---

<div align="center">
  <p><strong>Ready to build something amazing?</strong></p>
  
  <a href="https://github.com/{username}/{template_name}/generate">
    <img src="https://img.shields.io/badge/Use%20This%20Template-Click%20Here-brightgreen?style=for-the-badge" alt="Use Template">
  </a>
</div>

<div align="center">
  <p>⭐ If this template helped you, please give it a star!</p>
</div>`
    },
    {
        id: 'python-package',
        name: 'Python Package',
        category: 'Package',
        description: 'Professional template for Python packages with pip installation and documentation',
        tags: ['python', 'package', 'pip', 'library', 'pypi'],
        template: `# {PROJECT_NAME}

{PROJECT_DESCRIPTION}

[![PyPI version](https://badge.fury.io/py/{PROJECT_NAME}.svg)](https://badge.fury.io/py/{PROJECT_NAME})
[![Python Support](https://img.shields.io/pypi/pyversions/{PROJECT_NAME}.svg)](https://pypi.org/project/{PROJECT_NAME}/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- ✨ Feature 1
- 🚀 Feature 2
- 📦 Feature 3
- 🔧 Feature 4

## Installation

\`\`\`bash
pip install {PROJECT_NAME}
\`\`\`

## Quick Start

\`\`\`python
from {PROJECT_NAME} import main_function

# Basic usage
result = main_function("example")
print(result)
\`\`\`

## Documentation

### API Reference

#### \`main_function(param)\`

Description of the main function.

**Parameters:**
- \`param\` (str): Description of parameter

**Returns:**
- \`result\` (str): Description of return value

**Example:**
\`\`\`python
result = main_function("hello")
# Output: "Hello, world!"
\`\`\`

## Development

### Setup

\`\`\`bash
git clone https://github.com/{USERNAME}/{PROJECT_NAME}.git
cd {PROJECT_NAME}
pip install -e ".[dev]"
\`\`\`

### Running Tests

\`\`\`bash
pytest
\`\`\`

### Code Formatting

\`\`\`bash
black .
flake8 .
\`\`\`

## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add some amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.`
    },
    {
        id: 'react-component-library',
        name: 'React Component Library',
        category: 'Library',
        description: 'Template for React component libraries with Storybook and TypeScript support',
        tags: ['react', 'components', 'typescript', 'storybook', 'ui'],
        template: `# {PROJECT_NAME}

{PROJECT_DESCRIPTION}

[![npm version](https://badge.fury.io/js/{PROJECT_NAME}.svg)](https://badge.fury.io/js/{PROJECT_NAME})
[![Build Status](https://github.com/{USERNAME}/{PROJECT_NAME}/workflows/CI/badge.svg)](https://github.com/{USERNAME}/{PROJECT_NAME}/actions)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## 🚀 Features

- 📱 Responsive components
- 🎨 Customizable themes
- ♿ Accessibility-first design
- 📚 Comprehensive documentation
- 🔧 TypeScript support
- 📖 Storybook integration

## 📦 Installation

\`\`\`bash
npm install {PROJECT_NAME}
# or
yarn add {PROJECT_NAME}
\`\`\`

## 🎯 Usage

\`\`\`jsx
import { Button, Card, Modal } from '{PROJECT_NAME}';

function App() {
  return (
    <Card>
      <Button variant="primary" onClick={() => console.log('Clicked!')}>
        Click me!
      </Button>
    </Card>
  );
}
\`\`\`

## 📚 Components

### Button

\`\`\`jsx
<Button 
  variant="primary" 
  size="large" 
  disabled={false}
  onClick={handleClick}
>
  Button Text
</Button>
\`\`\`

**Props:**
- \`variant\`: 'primary' | 'secondary' | 'danger'
- \`size\`: 'small' | 'medium' | 'large'
- \`disabled\`: boolean
- \`onClick\`: (event) => void

### Card

\`\`\`jsx
<Card shadow="medium" padding="large">
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
\`\`\`

## 🎨 Theming

\`\`\`jsx
import { ThemeProvider } from '{PROJECT_NAME}';

const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d'
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your components */}
    </ThemeProvider>
  );
}
\`\`\`

## 📖 Storybook

View all components in Storybook:

\`\`\`bash
npm run storybook
\`\`\`

Visit: [https://{USERNAME}.github.io/{PROJECT_NAME}](https://{USERNAME}.github.io/{PROJECT_NAME})

## 🛠️ Development

\`\`\`bash
git clone https://github.com/{USERNAME}/{PROJECT_NAME}.git
cd {PROJECT_NAME}
npm install
npm run dev
\`\`\`

### Scripts

- \`npm run build\` - Build the library
- \`npm run test\` - Run tests
- \`npm run storybook\` - Start Storybook
- \`npm run lint\` - Lint code

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © [{AUTHOR_NAME}](https://github.com/{USERNAME})`
    },
    {
        id: 'api-project',
        name: 'REST API',
        category: 'Backend',
        description: 'Template for REST API projects with endpoint documentation and setup instructions',
        tags: ['api', 'rest', 'backend', 'express', 'node'],
        template: `# {PROJECT_NAME} API

{PROJECT_DESCRIPTION}

[![Build Status](https://github.com/{USERNAME}/{PROJECT_NAME}/workflows/CI/badge.svg)](https://github.com/{USERNAME}/{PROJECT_NAME}/actions)
[![API Documentation](https://img.shields.io/badge/API-Documentation-blue)](https://{USERNAME}.github.io/{PROJECT_NAME})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- MongoDB/PostgreSQL
- Redis (optional)

### Installation

\`\`\`bash
git clone https://github.com/{USERNAME}/{PROJECT_NAME}.git
cd {PROJECT_NAME}
npm install
\`\`\`

### Environment Setup

\`\`\`bash
cp .env.example .env
# Edit .env with your configuration
\`\`\`

### Running the Server

\`\`\`bash
# Development
npm run dev

# Production
npm start
\`\`\`

Server will be running at \`http://localhost:3000\`

## 📋 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | \`/api/auth/register\` | Register a new user |
| POST | \`/api/auth/login\` | Login user |
| POST | \`/api/auth/refresh\` | Refresh access token |

### Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | \`/api/users\` | Get all users |
| GET | \`/api/users/:id\` | Get user by ID |
| PUT | \`/api/users/:id\` | Update user |
| DELETE | \`/api/users/:id\` | Delete user |

## 📖 API Documentation

### Register User

\`\`\`http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "name": "John Doe"
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "data": {
    "user": {
      "id": "123",
      "email": "user@example.com",
      "name": "John Doe"
    },
    "token": "jwt_token_here"
  }
}
\`\`\`

### Get Users

\`\`\`http
GET /api/users
Authorization: Bearer {token}
\`\`\`

**Query Parameters:**
- \`page\` (optional): Page number (default: 1)
- \`limit\` (optional): Items per page (default: 10)
- \`search\` (optional): Search term

## 🔧 Configuration

### Environment Variables

\`\`\`env
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
\`\`\`

### Database Schema

\`\`\`sql
-- Users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test file
npm test -- auth.test.js
\`\`\`

## 🐳 Docker

\`\`\`bash
# Build and run with Docker Compose
docker-compose up -d

# Build production image
docker build -t {PROJECT_NAME} .
\`\`\`

## 📊 Monitoring

- Health check: \`GET /health\`
- Metrics: \`GET /metrics\`
- API docs: \`GET /api-docs\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.`
    },
    {
        id: 'documentation-site',
        name: 'Documentation Site',
        category: 'Documentation',
        description: 'Template for documentation websites built with static site generators',
        tags: ['documentation', 'docs', 'website', 'gatsby', 'nextjs'],
        template: `# {PROJECT_NAME} Documentation

{PROJECT_DESCRIPTION}

[![Netlify Status](https://api.netlify.com/api/v1/badges/{NETLIFY_ID}/deploy-status)](https://app.netlify.com/sites/{NETLIFY_SITE}/deploys)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-blue)](https://docusaurus.io/)

## 🌐 Live Site

Visit the documentation at: [https://{PROJECT_NAME}.netlify.app](https://{PROJECT_NAME}.netlify.app)

## 📖 What's Inside

This documentation site includes:

- 📚 **Getting Started Guide** - Quick setup and basic usage
- 🔧 **API Reference** - Comprehensive API documentation  
- 💡 **Examples** - Code examples and tutorials
- 🎨 **Theming Guide** - Customization options
- ❓ **FAQ** - Frequently asked questions

## 🚀 Local Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

\`\`\`bash
git clone https://github.com/{USERNAME}/{PROJECT_NAME}.git
cd {PROJECT_NAME}
npm install
\`\`\`

### Start Development Server

\`\`\`bash
npm start
\`\`\`

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

This command generates static content into the \`build\` directory and can be served using any static contents hosting service.

## 📝 Content Structure

\`\`\`
docs/
├── getting-started/
│   ├── installation.md
│   ├── quick-start.md
│   └── configuration.md
├── api/
│   ├── authentication.md
│   ├── endpoints.md
│   └── examples.md
├── guides/
│   ├── best-practices.md
│   ├── troubleshooting.md
│   └── migration.md
└── reference/
    ├── cli.md
    ├── config.md
    └── changelog.md
\`\`\`

## ✍️ Contributing to Documentation

We welcome contributions to improve our documentation!

### Adding New Pages

1. Create a new Markdown file in the appropriate directory
2. Add frontmatter with title and position:

\`\`\`markdown
---
title: Page Title
sidebar_position: 2
---

# Page Title

Your content here...
\`\`\`

3. Update \`sidebars.js\` if needed

### Style Guide

- Use clear, concise language
- Include code examples where helpful
- Add screenshots for UI elements
- Follow the existing structure and formatting

### Local Testing

\`\`\`bash
# Start local server
npm start

# Build and test
npm run build
npm run serve
\`\`\`

## 🎨 Customization

### Theme Configuration

Edit \`docusaurus.config.js\` to customize:

- Site metadata
- Navigation menu
- Footer links
- Color scheme
- Logo and favicon

### Custom CSS

Add custom styles in \`src/css/custom.css\`:

\`\`\`css
:root {
  --ifm-color-primary: #2e8555;
  --ifm-color-primary-dark: #29784c;
}
\`\`\`

## 📦 Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: \`npm run build\`
3. Set publish directory: \`build\`
4. Deploy!

### GitHub Pages

\`\`\`bash
npm run deploy
\`\`\`

### Vercel

\`\`\`bash
vercel --prod
\`\`\`

## 🔍 Search

This site includes full-text search powered by Algolia DocSearch. Contact us if you'd like search enabled for your documentation.

## 📄 License

Documentation is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
Code examples are licensed under [MIT License](LICENSE)`
    },
    {
        id: 'machine-learning',
        name: 'Machine Learning Project',
        category: 'AI/ML',
        description: 'Template for machine learning projects with model documentation and training instructions',
        tags: ['machine-learning', 'python', 'tensorflow', 'pytorch', 'ai'],
        template: `# {PROJECT_NAME}

{PROJECT_DESCRIPTION}

[![Python](https://img.shields.io/badge/Python-3.8+-blue)](https://www.python.org/downloads/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.0+-orange)](https://tensorflow.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 Project Overview

This project implements a {MODEL_TYPE} model to {PROBLEM_DESCRIPTION}.

### Key Features

- 🧠 **Model Architecture**: {ARCHITECTURE_DESCRIPTION}
- 📊 **Dataset**: {DATASET_DESCRIPTION} 
- 🎯 **Performance**: {PERFORMANCE_METRICS}
- 🚀 **Deployment Ready**: Easy inference and API deployment

## 📋 Requirements

- Python 3.8+
- CUDA-compatible GPU (recommended)
- 8GB+ RAM
- {SPECIFIC_REQUIREMENTS}

## 🚀 Quick Start

### Installation

\`\`\`bash
git clone https://github.com/{USERNAME}/{PROJECT_NAME}.git
cd {PROJECT_NAME}

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt
\`\`\`

### Download Pre-trained Model

\`\`\`bash
# Download model weights
python scripts/download_model.py

# Or use direct link
wget https://github.com/{USERNAME}/{PROJECT_NAME}/releases/download/v1.0/model.h5
\`\`\`

### Quick Inference

\`\`\`python
from src.model import {MODEL_CLASS}
from src.preprocessing import preprocess_input

# Load model
model = {MODEL_CLASS}.load_pretrained('models/best_model.h5')

# Make prediction
input_data = preprocess_input('path/to/your/data')
prediction = model.predict(input_data)
print(f"Prediction: {prediction}")
\`\`\`

## 📊 Dataset

### Dataset Information

- **Source**: {DATASET_SOURCE}
- **Size**: {DATASET_SIZE}
- **Classes**: {NUMBER_OF_CLASSES}
- **Split**: Train (70%) / Val (15%) / Test (15%)

### Data Structure

\`\`\`
data/
├── train/
│   ├── class1/
│   ├── class2/
│   └── class3/
├── val/
└── test/
\`\`\`

### Preprocessing

\`\`\`python
# Example preprocessing pipeline
def preprocess_data(raw_data):
    # Normalization
    data = (raw_data - mean) / std
    
    # Augmentation (training only)
    if training:
        data = apply_augmentation(data)
    
    return data
\`\`\`

## 🏗️ Model Architecture

### Network Structure

\`\`\`
Input ({INPUT_SHAPE})
    ↓
Conv2D (32 filters, 3x3)
    ↓
MaxPooling2D (2x2)
    ↓
Conv2D (64 filters, 3x3)
    ↓
GlobalAveragePooling2D
    ↓
Dense (128 units, ReLU)
    ↓
Dropout (0.5)
    ↓
Dense ({NUM_CLASSES}, Softmax)
\`\`\`

### Model Summary

\`\`\`python
# Load and inspect model
model = {MODEL_CLASS}()
model.summary()

# Total params: X,XXX,XXX
# Trainable params: X,XXX,XXX
# Non-trainable params: 0
\`\`\`

## 🎓 Training

### Training Script

\`\`\`bash
python train.py \\
    --data_path data/ \\
    --batch_size 32 \\
    --epochs 100 \\
    --learning_rate 0.001 \\
    --save_dir models/
\`\`\`

### Hyperparameters

\`\`\`yaml
# config.yaml
model:
  architecture: {ARCHITECTURE}
  input_shape: [224, 224, 3]
  num_classes: 10

training:
  batch_size: 32
  epochs: 100
  learning_rate: 0.001
  optimizer: adam
  loss: categorical_crossentropy

data:
  augmentation: true
  validation_split: 0.2
\`\`\`

### Training Monitoring

\`\`\`python
# Using TensorBoard
tensorboard --logdir=logs/

# Using Weights & Biases
wandb login
python train.py --wandb
\`\`\`

## 📈 Results

### Performance Metrics

| Metric | Score |
|--------|-------|
| Accuracy | {ACCURACY}% |
| Precision | {PRECISION} |
| Recall | {RECALL} |
| F1-Score | {F1_SCORE} |

### Training History

![Training History](images/training_history.png)

### Confusion Matrix

![Confusion Matrix](images/confusion_matrix.png)

## 🔮 Inference

### Single Prediction

\`\`\`python
from src.inference import predict_single

result = predict_single(
    model_path='models/best_model.h5',
    image_path='test_image.jpg'
)
print(f"Predicted class: {result['class']}")
print(f"Confidence: {result['confidence']:.2f}")
\`\`\`

### Batch Prediction

\`\`\`python
from src.inference import predict_batch

results = predict_batch(
    model_path='models/best_model.h5',
    image_dir='test_images/'
)
\`\`\`

### REST API

\`\`\`bash
# Start API server
python api/server.py

# Make prediction
curl -X POST -F "image=@test.jpg" http://localhost:5000/predict
\`\`\`

## 🐳 Deployment

### Docker

\`\`\`dockerfile
FROM tensorflow/tensorflow:2.8.0-gpu

WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

EXPOSE 5000
CMD ["python", "api/server.py"]
\`\`\`

\`\`\`bash
docker build -t {PROJECT_NAME} .
docker run -p 5000:5000 {PROJECT_NAME}
\`\`\`

### Cloud Deployment

- **AWS SageMaker**: See [deployment/sagemaker/](deployment/sagemaker/)
- **Google Cloud AI Platform**: See [deployment/gcp/](deployment/gcp/)
- **Azure ML**: See [deployment/azure/](deployment/azure/)

## 📁 Project Structure

\`\`\`
{PROJECT_NAME}/
├── data/                 # Dataset
├── models/              # Saved models
├── src/                 # Source code
│   ├── model.py        # Model architecture
│   ├── train.py        # Training script
│   ├── inference.py    # Inference utilities
│   └── preprocessing.py # Data preprocessing
├── api/                 # REST API
├── notebooks/           # Jupyter notebooks
├── deployment/          # Deployment configs
├── tests/              # Unit tests
└── requirements.txt    # Dependencies
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

### Development Setup

\`\`\`bash
# Install development dependencies
pip install -r requirements-dev.txt

# Run tests
pytest tests/

# Code formatting
black src/
flake8 src/
\`\`\`

## 📚 References

- [{PAPER_TITLE}]({PAPER_URL})
- [{DATASET_PAPER}]({DATASET_URL})
- [TensorFlow Documentation](https://tensorflow.org/api_docs)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to [{DATASET_AUTHOR}] for the dataset
- Inspired by [{REFERENCE_WORK}]
- Built with TensorFlow and Keras`
    },
    {
        id: 'minimal-profile',
        name: 'Minimal Profile',
        category: 'Profile',
        description: 'Clean, distraction-free profile README that highlights who you are in a few lines',
        tags: ['profile', 'minimal', 'clean', 'personal'],
        template: `### Hi, I'm {your_name} 👋

{your_role} based in {your_location}. I build {what_you_build} and care about {what_you_care_about}.

- 🔭 Working on [{current_project}]({current_project_url})
- 🌱 Learning {learning_topic}
- 💬 Ask me about {expertise_areas}
- 📫 Reach me at [{email}](mailto:{email})

**Stack:** \`{language_1}\` · \`{language_2}\` · \`{framework_1}\` · \`{framework_2}\` · \`{tool_1}\`

<p>
  <a href="https://github.com/{username}?tab=repositories"><img src="https://img.shields.io/badge/Repositories-181717?style=flat-square&logo=github&logoColor=white" alt="Repositories"/></a>
  <a href="https://linkedin.com/in/{linkedin_username}"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="{website_url}"><img src="https://img.shields.io/badge/Website-00AD95?style=flat-square&logo=googlechrome&logoColor=white" alt="Website"/></a>
</p>`
    },
    {
        id: 'terminal-profile',
        name: 'Terminal Style Profile',
        category: 'Profile',
        description: 'Hacker-themed profile README that reads like a terminal session',
        tags: ['profile', 'terminal', 'creative', 'developer'],
        template: `<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=2500&pause=800&color=00AD95&center=true&vCenter=true&width=600&lines=%24+whoami;{your_name}+%E2%80%94+{your_role};%24+cat+interests.txt;open+source+%C2%B7+systems+%C2%B7+coffee)](https://git.io/typing-svg)

</div>

\`\`\`bash
visitor@github:~$ whoami
{your_name} — {your_role} @ {company}

visitor@github:~$ cat about.txt
📍 {your_location}
🧠 Currently hacking on {current_project}
🌱 Learning {learning_topic}
☕ Powered by coffee and curiosity

visitor@github:~$ ls ~/skills
languages/   {language_1}  {language_2}  {language_3}
frontend/    {frontend_1}  {frontend_2}
backend/     {backend_1}  {backend_2}
devops/      Docker  GitHub Actions  Linux

visitor@github:~$ ./contact.sh
→ email     {email}
→ linkedin  linkedin.com/in/{linkedin_username}
→ website   {website_url}
\`\`\`

<details>
<summary><b>$ git log --stats</b></summary>

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username={username}&show_icons=true&hide_border=true&bg_color=0d1117&title_color=00AD95&icon_color=00AD95&text_color=c9d1d9" alt="GitHub stats"/>
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username={username}&layout=compact&hide_border=true&bg_color=0d1117&title_color=00AD95&text_color=c9d1d9" alt="Top languages"/>
</p>

</details>

\`\`\`bash
visitor@github:~$ exit
Thanks for stopping by! ⭐ a repo if you like what you see.
\`\`\``
    },
    {
        id: 'creative-animated-profile',
        name: 'Animated Creative Profile',
        category: 'Profile',
        description: 'Eye-catching profile with wave banners, animated typing, skill icons, stats, trophies and a contribution snake',
        tags: ['profile', 'creative', 'animated', 'stats', 'portfolio'],
        template: `![header](https://capsule-render.vercel.app/api?type=waving&color=0:00AD95,100:2F81F7&height=230&section=header&text={your_name}&fontSize=64&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc={your_role}&descAlignY=56&descSize=20)

<div align="center">

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=24&pause=1000&color=00AD95&center=true&vCenter=true&width=620&lines=I+build+things+for+the+web+%F0%9F%9A%80;Open+source+contributor+%F0%9F%92%9A;Always+shipping%2C+always+learning)](https://git.io/typing-svg)

![Profile views](https://komarev.com/ghpvc/?username={username}&color=00AD95&style=flat-square&label=Profile+views)
[![Followers](https://img.shields.io/github/followers/{username}?style=flat-square&color=2F81F7&label=Followers)](https://github.com/{username}?tab=followers)

</div>

## 🧑‍💻 About Me

<img align="right" width="300" src="https://github-readme-stats.vercel.app/api?username={username}&show_icons=true&hide_border=true&bg_color=00000000&title_color=00AD95&icon_color=00AD95" alt="stats"/>

- 🚀 Building **{current_project}**
- 🌱 Exploring **{learning_topic}**
- 🤝 Open to collaborating on **{collaboration_interests}**
- 🎯 2026 goal: **{yearly_goal}**
- ⚡ Fun fact: **{fun_fact}**

<br clear="both"/>

## 🛠️ Tech Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,js,python,react,nextjs,vue,nodejs,tailwind,postgres,mongodb,docker,aws,git,figma&perline=7" alt="Skills"/>
  </a>
</p>

## 📊 GitHub Analytics

<p align="center">
  <img src="https://streak-stats.demolab.com?user={username}&hide_border=true&background=00000000&ring=00AD95&fire=2F81F7&currStreakLabel=00AD95" alt="Streak"/>
</p>

<p align="center">
  <img src="https://github-profile-trophy.vercel.app/?username={username}&theme=flat&no-frame=true&no-bg=true&margin-w=4&column=7" alt="Trophies"/>
</p>

[![Activity graph](https://github-readme-activity-graph.vercel.app/graph?username={username}&bg_color=00000000&color=00AD95&line=2F81F7&point=00AD95&area=true&hide_border=true)](https://github.com/{username})

## 🐍 Contribution Snake

<!-- Generate the SVGs with the Platane/snk GitHub Action (output branch). -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/{username}/{username}/output/github-contribution-grid-snake-dark.svg"/>
  <img alt="Contribution snake" src="https://raw.githubusercontent.com/{username}/{username}/output/github-contribution-grid-snake.svg"/>
</picture>

## 🤝 Let's Connect

<p align="center">
  <a href="https://linkedin.com/in/{linkedin_username}"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://x.com/{x_username}"><img src="https://img.shields.io/badge/X-000000?style=for-the-badge&logo=x&logoColor=white" alt="X"/></a>
  <a href="mailto:{email}"><img src="https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>
  <a href="{website_url}"><img src="https://img.shields.io/badge/Portfolio-00AD95?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio"/></a>
</p>

![footer](https://capsule-render.vercel.app/api?type=waving&color=0:2F81F7,100:00AD95&height=120&section=footer)`
    },
    {
        id: 'designer-portfolio',
        name: 'Designer Portfolio',
        category: 'Portfolio',
        description: 'Visual portfolio README for designers and creative developers with a project gallery',
        tags: ['portfolio', 'designer', 'ui', 'ux', 'gallery'],
        template: `<div align="center">

# ✦ {your_name} ✦

**{your_role}** — crafting interfaces that feel as good as they look.

[Portfolio]({website_url}) · [Dribbble](https://dribbble.com/{dribbble_username}) · [Behance](https://behance.net/{behance_username}) · [Email](mailto:{email})

</div>

---

## 🎨 Selected Work

<table>
  <tr>
    <td width="50%" valign="top">
      <a href="{project_1_url}"><img src="https://placehold.co/600x400/00AD95/ffffff?text={project_1_name}" alt="{project_1_name}"/></a>
      <h3>{project_1_name}</h3>
      <p>{project_1_description}</p>
      <sub><b>Role:</b> Product design, prototyping · <b>Tools:</b> Figma, Framer</sub>
    </td>
    <td width="50%" valign="top">
      <a href="{project_2_url}"><img src="https://placehold.co/600x400/2F81F7/ffffff?text={project_2_name}" alt="{project_2_name}"/></a>
      <h3>{project_2_name}</h3>
      <p>{project_2_description}</p>
      <sub><b>Role:</b> Design system, front-end · <b>Tools:</b> Figma, React</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <a href="{project_3_url}"><img src="https://placehold.co/600x400/8250DF/ffffff?text={project_3_name}" alt="{project_3_name}"/></a>
      <h3>{project_3_name}</h3>
      <p>{project_3_description}</p>
    </td>
    <td width="50%" valign="top">
      <a href="{project_4_url}"><img src="https://placehold.co/600x400/E5534B/ffffff?text={project_4_name}" alt="{project_4_name}"/></a>
      <h3>{project_4_name}</h3>
      <p>{project_4_description}</p>
    </td>
  </tr>
</table>

## 🧰 Toolbox

| Design | Prototyping | Code | Motion |
| :----: | :---------: | :--: | :----: |
| Figma | Framer | HTML / CSS | After Effects |
| Illustrator | ProtoPie | React | Lottie |
| Photoshop | Principle | Tailwind CSS | Rive |

## 💭 Design Principles

> [!TIP]
> Clarity over cleverness. Every pixel should earn its place.

1. **Start with the problem**, not the pixels.
2. **Design in systems**, ship in components.
3. **Test early** with real people.

<p align="center"><i>Currently open to freelance and full-time opportunities ✉️</i></p>`
    },
    {
        id: 'hackathon-project',
        name: 'Hackathon Project',
        category: 'Project',
        description: 'Fast, judge-friendly README for hackathon submissions with pitch, demo and team',
        tags: ['hackathon', 'project', 'demo', 'team', 'pitch'],
        template: `<div align="center">

# 🏆 {project_name}

**{one_line_pitch}**

Built in {hours} hours at **{hackathon_name}** · 🥇 {prize_or_track}

[🎥 Demo Video]({demo_video_url}) · [🚀 Live App]({live_url}) · [📊 Pitch Deck]({deck_url})

</div>

## 💡 Inspiration

{why_you_built_it}

## 🛠️ What It Does

- ✅ {feature_1}
- ✅ {feature_2}
- ✅ {feature_3}

## 🏗️ How We Built It

| Layer | Tech |
| ----- | ---- |
| Frontend | {frontend_stack} |
| Backend | {backend_stack} |
| AI / Data | {ai_stack} |
| Hosting | {hosting} |

## 🧗 Challenges We Ran Into

{challenges}

## 🎉 Accomplishments We're Proud Of

{accomplishments}

## 📚 What We Learned

{learnings}

## 🔮 What's Next

- [ ] {next_step_1}
- [ ] {next_step_2}
- [ ] {next_step_3}

## ⚡ Run It Locally

\`\`\`bash
git clone https://github.com/{username}/{repo_name}.git
cd {repo_name}
npm install
npm run dev
\`\`\`

> [!NOTE]
> Copy \`.env.example\` to \`.env\` and add your API keys before running.

## 👥 Team

<table>
  <tr>
    <td align="center"><img src="https://github.com/{member_1}.png" width="80" alt=""/><br/><b>{member_1_name}</b><br/><sub>Full-stack</sub></td>
    <td align="center"><img src="https://github.com/{member_2}.png" width="80" alt=""/><br/><b>{member_2_name}</b><br/><sub>Design</sub></td>
    <td align="center"><img src="https://github.com/{member_3}.png" width="80" alt=""/><br/><b>{member_3_name}</b><br/><sub>ML</sub></td>
  </tr>
</table>`
    },
    {
        id: 'awesome-list',
        name: 'Awesome List',
        category: 'List',
        description: 'Curated awesome-style resource list with contents, categories and contribution rules',
        tags: ['awesome', 'list', 'curated', 'resources', 'community'],
        template: `<div align="center">

# Awesome {topic} [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome {topic} libraries, tools and resources.

</div>

## Contents

- [Libraries](#libraries)
- [Tools](#tools)
- [Learning Resources](#learning-resources)
- [Community](#community)
- [Contributing](#contributing)

## Libraries

- [{library_1}]({library_1_url}) - {library_1_description}
- [{library_2}]({library_2_url}) - {library_2_description}
- [{library_3}]({library_3_url}) - {library_3_description}

## Tools

| Tool | Description | Stars |
| ---- | ----------- | :---: |
| [{tool_1}]({tool_1_url}) | {tool_1_description} | ![stars](https://img.shields.io/github/stars/{tool_1_repo}?style=flat-square&label=) |
| [{tool_2}]({tool_2_url}) | {tool_2_description} | ![stars](https://img.shields.io/github/stars/{tool_2_repo}?style=flat-square&label=) |

## Learning Resources

### Articles

- [{article_title}]({article_url}) - {article_summary}

### Videos

- [{video_title}]({video_url}) - {video_summary}

## Community

- [{community_name}]({community_url}) - {community_description}

## Contributing

Contributions welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

> [!IMPORTANT]
> Add one item per pull request, keep descriptions short and place it in the right category.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)`
    },
    {
        id: 'monorepo',
        name: 'Monorepo',
        category: 'Project',
        description: 'README for multi-package monorepos with package matrix, workspace commands and architecture',
        tags: ['monorepo', 'workspace', 'turborepo', 'pnpm', 'packages'],
        template: `<div align="center">

# 📦 {project_name}

{project_description}

[![CI](https://img.shields.io/github/actions/workflow/status/{username}/{repo_name}/ci.yml?style=flat-square&label=CI)](https://github.com/{username}/{repo_name}/actions)
[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io)
[![Turborepo](https://img.shields.io/badge/built%20with-Turborepo-EF4444?style=flat-square&logo=turborepo&logoColor=white)](https://turbo.build)

</div>

## 🗂️ Packages

| Package | Description | Version |
| ------- | ----------- | ------- |
| [\`@{scope}/core\`](packages/core) | Core logic and shared types | ![npm](https://img.shields.io/npm/v/@{scope}/core?style=flat-square&label=) |
| [\`@{scope}/ui\`](packages/ui) | Shared React component library | ![npm](https://img.shields.io/npm/v/@{scope}/ui?style=flat-square&label=) |
| [\`@{scope}/config\`](packages/config) | ESLint, TypeScript and Tailwind presets | private |
| [\`web\`](apps/web) | Main web application | app |
| [\`docs\`](apps/docs) | Documentation site | app |

## 🏗️ Structure

\`\`\`text
.
├── apps/
│   ├── web/          # Next.js app
│   └── docs/         # Documentation site
├── packages/
│   ├── core/         # Framework-agnostic logic
│   ├── ui/           # Component library
│   └── config/       # Shared configs
├── turbo.json
└── pnpm-workspace.yaml
\`\`\`

## 🚀 Getting Started

\`\`\`bash
pnpm install        # install all workspaces
pnpm dev            # run every app in dev mode
pnpm build          # build all packages with caching
pnpm test           # run tests across the repo
\`\`\`

<details>
<summary><b>Working with a single package</b></summary>

\`\`\`bash
pnpm --filter @{scope}/ui dev
pnpm --filter web add zod
\`\`\`

</details>

## 🔁 Releasing

This repo uses [Changesets](https://github.com/changesets/changesets):

\`\`\`bash
pnpm changeset          # describe your change
pnpm changeset version  # bump versions
pnpm release            # publish to npm
\`\`\`

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Run \`pnpm lint && pnpm test\` before opening a PR.

## 📄 License

MIT © {your_name}`
    },
    {
        id: 'discord-bot',
        name: 'Discord Bot',
        category: 'Bot',
        description: 'README for Discord bots with invite button, command reference and self-hosting guide',
        tags: ['discord', 'bot', 'discord.js', 'commands', 'community'],
        template: `<div align="center">

<img src="https://placehold.co/128x128/5865F2/ffffff?text=BOT" width="110" alt="{bot_name} avatar"/>

# {bot_name}

{bot_description}

[![Invite](https://img.shields.io/badge/Invite%20{bot_name}-5865F2?style=for-the-badge&logo=discord&logoColor=white)]({invite_url})
[![Support Server](https://img.shields.io/badge/Support%20Server-2C2F33?style=for-the-badge&logo=discord&logoColor=white)]({support_server_url})

![Servers](https://img.shields.io/badge/servers-{server_count}-5865F2?style=flat-square)
![discord.js](https://img.shields.io/badge/discord.js-v14-5865F2?style=flat-square&logo=discord&logoColor=white)

</div>

## ✨ Features

- 🎵 **Music** — play from YouTube, Spotify and SoundCloud
- 🛡️ **Moderation** — auto-mod, warnings, timeouts and logs
- 🎉 **Fun** — games, memes and giveaways
- ⚙️ **Configurable** — per-server settings with slash commands

## 📜 Commands

| Command | Description | Permission |
| ------- | ----------- | ---------- |
| \`/help\` | Show all commands | Everyone |
| \`/play <song>\` | Play a song in your voice channel | Everyone |
| \`/warn <user> <reason>\` | Warn a member | Moderate Members |
| \`/config\` | Open the server settings panel | Manage Server |

## 🏠 Self-Hosting

> [!WARNING]
> Never commit your bot token. Keep it in \`.env\` only.

\`\`\`bash
git clone https://github.com/{username}/{repo_name}.git
cd {repo_name}
npm install
cp .env.example .env   # add DISCORD_TOKEN and CLIENT_ID
npm run deploy-commands
npm start
\`\`\`

<details>
<summary><b>Environment variables</b></summary>

| Variable | Description |
| -------- | ----------- |
| \`DISCORD_TOKEN\` | Bot token from the Discord Developer Portal |
| \`CLIENT_ID\` | Application ID |
| \`GUILD_ID\` | Optional test server for instant command updates |

</details>

## 📄 License

MIT © {your_name}`
    },
    {
        id: 'vscode-extension',
        name: 'VS Code Extension',
        category: 'Extension',
        description: 'README for Visual Studio Code extensions with marketplace badges, GIF demo and settings table',
        tags: ['vscode', 'extension', 'editor', 'marketplace', 'developer-tools'],
        template: `<div align="center">

<img src="https://placehold.co/128x128/007ACC/ffffff?text=EXT" width="100" alt="{extension_name} icon"/>

# {extension_name}

{extension_description}

[![Version](https://img.shields.io/visual-studio-marketplace/v/{publisher}.{extension_id}?style=flat-square&label=Marketplace&color=007ACC)](https://marketplace.visualstudio.com/items?itemName={publisher}.{extension_id})
[![Installs](https://img.shields.io/visual-studio-marketplace/i/{publisher}.{extension_id}?style=flat-square&color=00AD95)](https://marketplace.visualstudio.com/items?itemName={publisher}.{extension_id})
[![Rating](https://img.shields.io/visual-studio-marketplace/r/{publisher}.{extension_id}?style=flat-square)](https://marketplace.visualstudio.com/items?itemName={publisher}.{extension_id}&ssr=false#review-details)

</div>

![Demo](https://placehold.co/900x450/1e1e1e/ffffff?text=Demo+GIF)

## ✨ Features

- ⚡ {feature_1}
- 🎨 {feature_2}
- 🔍 {feature_3}

## ⌨️ Commands & Shortcuts

| Command | Shortcut |
| ------- | -------- |
| \`{extension_name}: Run\` | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd> |
| \`{extension_name}: Toggle\` | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> |

## ⚙️ Settings

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| \`{extension_id}.enable\` | boolean | \`true\` | Enable the extension |
| \`{extension_id}.theme\` | string | \`"auto"\` | Color theme for decorations |

## 📦 Installation

1. Open **Extensions** (<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>X</kbd>)
2. Search for **{extension_name}**
3. Click **Install**

Or run:

\`\`\`bash
code --install-extension {publisher}.{extension_id}
\`\`\`

## 🧪 Development

\`\`\`bash
npm install
npm run watch   # then press F5 to launch the Extension Development Host
\`\`\`

## 📝 Release Notes

See [CHANGELOG.md](CHANGELOG.md).`
    },
    {
        id: 'rust-crate',
        name: 'Rust Crate',
        category: 'Package',
        description: 'README for Rust crates with crates.io and docs.rs badges, feature flags and MSRV',
        tags: ['rust', 'crate', 'cargo', 'library', 'docs.rs'],
        template: `# {crate_name}

[![Crates.io](https://img.shields.io/crates/v/{crate_name}?style=flat-square&logo=rust)](https://crates.io/crates/{crate_name})
[![docs.rs](https://img.shields.io/docsrs/{crate_name}?style=flat-square&logo=docsdotrs)](https://docs.rs/{crate_name})
[![CI](https://img.shields.io/github/actions/workflow/status/{username}/{crate_name}/ci.yml?style=flat-square)](https://github.com/{username}/{crate_name}/actions)
[![MSRV](https://img.shields.io/badge/MSRV-1.75-orange?style=flat-square)](#minimum-supported-rust-version)
[![License](https://img.shields.io/crates/l/{crate_name}?style=flat-square)](#license)

{crate_description}

## Installation

\`\`\`toml
[dependencies]
{crate_name} = "0.1"
\`\`\`

Or with cargo:

\`\`\`bash
cargo add {crate_name}
\`\`\`

## Usage

\`\`\`rust
use {crate_name}::Client;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();
    let result = client.run("hello")?;
    println!("{result}");
    Ok(())
}
\`\`\`

## Feature Flags

| Feature | Default | Description |
| ------- | :-----: | ----------- |
| \`std\` | ✅ | Standard library support |
| \`serde\` | ❌ | Serialize and deserialize with Serde |
| \`async\` | ❌ | Async API powered by Tokio |

## Benchmarks

\`\`\`text
parse/small     time:   [412.31 ns 414.02 ns 415.88 ns]
parse/large     time:   [38.104 µs 38.221 µs 38.349 µs]
\`\`\`

## Minimum Supported Rust Version

This crate requires **Rust 1.75** or newer.

## License

Licensed under either of [Apache License 2.0](LICENSE-APACHE) or [MIT license](LICENSE-MIT) at your option.`
    },
    {
        id: 'go-module',
        name: 'Go Module',
        category: 'Package',
        description: 'README for Go modules and CLIs with pkg.go.dev badge, go install and examples',
        tags: ['go', 'golang', 'module', 'cli', 'library'],
        template: `# {module_name}

[![Go Reference](https://pkg.go.dev/badge/github.com/{username}/{module_name}.svg)](https://pkg.go.dev/github.com/{username}/{module_name})
[![Go Report Card](https://goreportcard.com/badge/github.com/{username}/{module_name})](https://goreportcard.com/report/github.com/{username}/{module_name})
[![Release](https://img.shields.io/github/v/release/{username}/{module_name}?style=flat-square)](https://github.com/{username}/{module_name}/releases)
![Go Version](https://img.shields.io/github/go-mod/go-version/{username}/{module_name}?style=flat-square)

{module_description}

## Install

As a library:

\`\`\`bash
go get github.com/{username}/{module_name}
\`\`\`

As a CLI:

\`\`\`bash
go install github.com/{username}/{module_name}/cmd/{binary_name}@latest
\`\`\`

## Quick Start

\`\`\`go
package main

import (
	"fmt"
	"log"

	"github.com/{username}/{module_name}"
)

func main() {
	client, err := {module_name}.New({module_name}.WithTimeout(5))
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(client.Hello("gopher"))
}
\`\`\`

## CLI Usage

\`\`\`text
$ {binary_name} --help
Usage:
  {binary_name} [command]

Available Commands:
  run       Run the task
  version   Print the version

Flags:
  -c, --config string   config file (default "$HOME/.{binary_name}.yaml")
  -v, --verbose         verbose output
\`\`\`

## Development

\`\`\`bash
go test ./...
go vet ./...
golangci-lint run
\`\`\`

## License

MIT © {your_name}`
    },
    {
        id: 'self-hosted-app',
        name: 'Self-Hosted App',
        category: 'Application',
        description: 'README for self-hostable apps with Docker Compose setup, screenshots and configuration',
        tags: ['self-hosted', 'docker', 'homelab', 'application', 'open-source'],
        template: `<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://placehold.co/420x110/0d1117/ffffff?text={app_name}">
  <img alt="{app_name}" src="https://placehold.co/420x110/ffffff/0d1117?text={app_name}">
</picture>

**{app_tagline}**

[![Docker Pulls](https://img.shields.io/docker/pulls/{docker_user}/{app_slug}?style=flat-square&logo=docker)](https://hub.docker.com/r/{docker_user}/{app_slug})
[![Release](https://img.shields.io/github/v/release/{username}/{repo_name}?style=flat-square)](https://github.com/{username}/{repo_name}/releases)
[![License](https://img.shields.io/github/license/{username}/{repo_name}?style=flat-square)](LICENSE)

[Demo]({demo_url}) · [Docs]({docs_url}) · [Discord]({discord_url})

</div>

![Screenshot](https://placehold.co/1000x560/0d1117/00AD95?text=App+Screenshot)

## ✨ Features

- 🔒 **Private by default** — your data stays on your server
- 🐳 **One-command deploy** with Docker Compose
- 👥 **Multi-user** with roles and SSO
- 📱 **Responsive** web UI and PWA support

## 🐳 Quick Start (Docker Compose)

\`\`\`yaml
services:
  {app_slug}:
    image: {docker_user}/{app_slug}:latest
    container_name: {app_slug}
    restart: unless-stopped
    ports:
      - "8080:8080"
    environment:
      - APP_URL=http://localhost:8080
      - DATABASE_URL=postgres://app:app@db:5432/app
    depends_on:
      - db
  db:
    image: postgres:16
    restart: unless-stopped
    environment:
      - POSTGRES_USER=app
      - POSTGRES_PASSWORD=app
    volumes:
      - db-data:/var/lib/postgresql/data
volumes:
  db-data:
\`\`\`

\`\`\`bash
docker compose up -d
\`\`\`

Open **http://localhost:8080** and create the first admin account.

> [!CAUTION]
> Change the default database password before exposing the app to the internet.

## ⚙️ Configuration

| Variable | Default | Description |
| -------- | ------- | ----------- |
| \`APP_URL\` | — | Public URL of your instance |
| \`DATABASE_URL\` | — | PostgreSQL connection string |
| \`SMTP_HOST\` | — | Mail server for notifications |
| \`LOG_LEVEL\` | \`info\` | \`debug\`, \`info\`, \`warn\` or \`error\` |

## 🔄 Updating

\`\`\`bash
docker compose pull && docker compose up -d
\`\`\`

## 🗺️ Roadmap

- [x] Multi-user support
- [x] Dark mode
- [ ] Mobile apps
- [ ] Plugin system

## 📄 License

AGPL-3.0 © {your_name}`
    },
    {
        id: 'dotfiles',
        name: 'Dotfiles',
        category: 'Tool',
        description: 'Showcase README for dotfiles with setup preview, install script and tool list',
        tags: ['dotfiles', 'linux', 'macos', 'terminal', 'setup'],
        template: `<div align="center">

# ⚙️ dotfiles

My personal setup for {os_name} — fast, minimal and keyboard-driven.

![Setup screenshot](https://placehold.co/1000x560/1e1e2e/cdd6f4?text=Desktop+Screenshot)

</div>

## 🧩 What's Inside

| Category | Tool |
| -------- | ---- |
| Shell | zsh + [starship](https://starship.rs) |
| Terminal | [WezTerm](https://wezfurlong.org/wezterm/) |
| Editor | [Neovim](https://neovim.io) with lazy.nvim |
| Multiplexer | tmux |
| Font | JetBrains Mono Nerd Font |
| Theme | Catppuccin Mocha |

## 🚀 Install

> [!WARNING]
> The install script symlinks files into your home directory. Back up your existing configs first.

\`\`\`bash
git clone https://github.com/{username}/dotfiles.git ~/.dotfiles
cd ~/.dotfiles
./install.sh
\`\`\`

<details>
<summary><b>Manual setup with GNU Stow</b></summary>

\`\`\`bash
cd ~/.dotfiles
stow zsh nvim tmux git
\`\`\`

</details>

## ⌨️ Handy Keybindings

| Keys | Action |
| ---- | ------ |
| <kbd>Ctrl</kbd> + <kbd>a</kbd> <kbd>\\|</kbd> | Split tmux pane vertically |
| <kbd>Space</kbd> <kbd>f</kbd> <kbd>f</kbd> | Find files in Neovim |
| <kbd>Ctrl</kbd> + <kbd>r</kbd> | Fuzzy search shell history |

## 📂 Structure

\`\`\`text
.
├── zsh/      # .zshrc, aliases, functions
├── nvim/     # Neovim config
├── tmux/     # .tmux.conf
├── git/      # .gitconfig, global ignore
└── install.sh
\`\`\`

## 🙏 Inspiration

Thanks to the [dotfiles community](https://dotfiles.github.io) for endless ideas.`
    },
    {
        id: 'research-paper',
        name: 'Research Paper Code',
        category: 'Research',
        description: 'Academic README for paper code releases with abstract, results table and BibTeX citation',
        tags: ['research', 'paper', 'academic', 'machine-learning', 'citation'],
        template: `<div align="center">

# {paper_title}

**{author_1}**<sup>1</sup> · **{author_2}**<sup>1,2</sup> · **{author_3}**<sup>2</sup>

<sup>1</sup>{institution_1} · <sup>2</sup>{institution_2}

**{venue} {year}**

[![Paper](https://img.shields.io/badge/Paper-arXiv-B31B1B?style=flat-square&logo=arxiv)]({arxiv_url})
[![Project Page](https://img.shields.io/badge/Project-Page-00AD95?style=flat-square)]({project_page_url})
[![Hugging Face](https://img.shields.io/badge/%F0%9F%A4%97-Models-FFD21E?style=flat-square)]({hf_url})

![Teaser](https://placehold.co/1000x380/ffffff/1f2328?text=Teaser+Figure)

</div>

## 📄 Abstract

{abstract}

## 📰 News

- **{date_1}** — Paper accepted at {venue} {year} 🎉
- **{date_2}** — Code and pretrained models released

## 🔧 Setup

\`\`\`bash
conda create -n {env_name} python=3.11 -y
conda activate {env_name}
pip install -r requirements.txt
\`\`\`

## 🚀 Training & Evaluation

\`\`\`bash
python train.py --config configs/base.yaml
python eval.py --checkpoint checkpoints/best.pt
\`\`\`

## 📊 Results

| Method | Dataset A ↑ | Dataset B ↑ | Params |
| ------ | :---------: | :---------: | :----: |
| Baseline | 71.2 | 64.8 | 86M |
| Prior SOTA | 76.9 | 69.3 | 120M |
| **Ours** | **79.4** | **72.1** | 92M |

## 📚 Citation

If you find this work useful, please cite:

\`\`\`bibtex
@inproceedings{{citation_key},
  title     = {{paper_title}},
  author    = {{author_1} and {author_2} and {author_3}},
  booktitle = {{venue}},
  year      = {{year}}
}
\`\`\`

## 🙏 Acknowledgements

This project builds on [{base_repo}]({base_repo_url}). We thank {acknowledged_people} for helpful discussions.`
    },
    {
        id: 'github-action',
        name: 'GitHub Action',
        category: 'Tool',
        description: 'README for reusable GitHub Actions with usage workflow, inputs and outputs tables',
        tags: ['github-actions', 'ci', 'automation', 'workflow', 'devops'],
        template: `# {action_name}

[![Test](https://img.shields.io/github/actions/workflow/status/{username}/{repo_name}/test.yml?style=flat-square&label=tests)](https://github.com/{username}/{repo_name}/actions)
[![Release](https://img.shields.io/github/v/release/{username}/{repo_name}?style=flat-square)](https://github.com/{username}/{repo_name}/releases)
[![Marketplace](https://img.shields.io/badge/Marketplace-{action_slug}-2088FF?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/marketplace/actions/{action_slug})

{action_description}

## 🚀 Usage

\`\`\`yaml
name: CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: {username}/{repo_name}@v1
        with:
          token: \${{ secrets.GITHUB_TOKEN }}
          mode: strict
\`\`\`

## 📥 Inputs

| Name | Required | Default | Description |
| ---- | :------: | ------- | ----------- |
| \`token\` | ✅ | — | GitHub token used for API calls |
| \`mode\` | ❌ | \`normal\` | \`normal\` or \`strict\` |
| \`path\` | ❌ | \`.\` | Directory to scan |

## 📤 Outputs

| Name | Description |
| ---- | ----------- |
| \`result\` | Summary of the run |
| \`report-url\` | Link to the generated report |

## 🔐 Permissions

\`\`\`yaml
permissions:
  contents: read
  pull-requests: write
\`\`\`

> [!TIP]
> Pin the action to a full commit SHA for maximum supply-chain safety.

## 🛠️ Development

\`\`\`bash
npm install
npm run build   # bundles to dist/ with ncc
npm test
\`\`\`

## 📄 License

MIT © {your_name}`
    },
]
