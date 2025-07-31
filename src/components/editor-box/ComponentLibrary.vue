<script setup lang="ts">
import { ref } from 'vue'
import {
  Hash,
  Shield,
  FileText,
  Download,
  Code,
  Star,
  Image,
  Table,
  Link,
  Settings
} from 'lucide-vue-next'

const emit = defineEmits<{
  addComponent: [component: any]
}>()

// Component library with predefined README components
const componentLibrary = ref([
  {
    id: 'title',
    name: 'Project Title',
    icon: Hash,
    template: '# Project Title\n\nBrief description of your project.\n\n'
  },
  {
    id: 'badges',
    name: 'Badges',
    icon: Shield,
    template: '[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)\n[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)]()\n[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()\n\n'
  },
  {
    id: 'description',
    name: 'Description',
    icon: FileText,
    template: '## Description\n\nA detailed description of what this project does and who it\'s for.\n\n'
  },
  {
    id: 'installation',
    name: 'Installation',
    icon: Download,
    template: '## Installation\n\n```bash\nnpm install your-package\n```\n\n'
  },
  {
    id: 'usage',
    name: 'Usage',
    icon: Code,
    template: '## Usage\n\n```javascript\nconst example = require(\'your-package\');\nexample.doSomething();\n```\n\n'
  },
  {
    id: 'features',
    name: 'Features',
    icon: Star,
    template: '## Features\n\n- ✨ Feature 1\n- 🚀 Feature 2\n- 🎯 Feature 3\n- 💎 Feature 4\n\n'
  },
  {
    id: 'image',
    name: 'Screenshot',
    icon: Image,
    template: '## Screenshot\n\n![Screenshot](https://via.placeholder.com/800x400?text=Your+Screenshot)\n\n'
  },
  {
    id: 'table',
    name: 'Table',
    icon: Table,
    template: '## Configuration\n\n| Option | Type | Default | Description |\n|--------|------|---------|-------------|\n| option1 | string | "default" | Description of option1 |\n| option2 | boolean | true | Description of option2 |\n\n'
  },
  {
    id: 'links',
    name: 'Links',
    icon: Link,
    template: '## Links\n\n- [Documentation](https://example.com/docs)\n- [Live Demo](https://example.com/demo)\n- [GitHub Repository](https://github.com/username/repo)\n\n'
  },
  {
    id: 'contributing',
    name: 'Contributing',
    icon: Settings,
    template: '## Contributing\n\nContributions are welcome! Please feel free to submit a Pull Request.\n\n1. Fork the project\n2. Create your feature branch (`git checkout -b feature/AmazingFeature`)\n3. Commit your changes (`git commit -m \'Add some AmazingFeature\'`)\n4. Push to the branch (`git push origin feature/AmazingFeature`)\n5. Open a Pull Request\n\n'
  },
  {
    id: 'license',
    name: 'License',
    icon: FileText,
    template: '## License\n\nThis project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.\n\n'
  }
])

const addComponent = (component) => {
  emit('addComponent', component)
}
</script>

<template>
  <div class="p-4 min-h-[400px] lg:min-h-[600px] max-h-[400px] lg:max-h-[800px] overflow-y-auto grid grid-cols-2 gap-3">
    <button
        v-for="component in componentLibrary"
        :key="component.id"
        @click="addComponent(component)"
        class="w-full p-3 text-left bg-white dark:bg-gray-900 border-gray-100 dark:border-darkBorder hover:bg-brandColor/10 border hover:border-brandColor relative group rounded-lg cursor-pointer transition-colors duration-200 flex flex-col items-center gap-3"
    >
      <component :is="component.icon" :size="18" class="text-brandColor"/>
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ component.name }}</span>
    </button>
  </div>
</template>