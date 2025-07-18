<template>
  <!--  <div class="p-6 text-center">-->
  <!--    <h1 class="text-3xl font-bold mb-4">ReadmeStudio</h1>-->
  <!--    <button @click="select('profile')" class="btn">Generate Profile README</button>-->
  <!--    <button @click="select('project')" class="btn ml-4">Generate Project README</button>-->
  <!--  </div>-->

  <div class="relative">
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Create Stunning
            <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              README Files
            </span>
          </h1>
          <p class="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Generate professional GitHub README files instantly with AI. Just provide your username or repository link,
            and let our AI create the perfect documentation for you.
          </p>
        </div>

        <!-- Tab System -->
        <div class="max-w-2xl mx-auto">
          <div class="flex space-x-1 bg-black/20 backdrop-blur-sm rounded-xl p-1 mb-8">
            <button
                @click="setActiveTab('profile')"
                :class="[
                'flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200',
                activeTab === 'profile'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              ]"
            >
              <div class="flex items-center justify-center space-x-2">
                <UserIcon class="w-5 h-5"/>
                <span>Profile README</span>
              </div>
            </button>
            <button
                @click="setActiveTab('repository')"
                :class="[
                'flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200',
                activeTab === 'repository'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              ]"
            >
              <div class="flex items-center justify-center space-x-2">
                <FolderIcon class="w-5 h-5"/>
                <span>Repository README</span>
              </div>
            </button>
          </div>

          <!-- Input Forms -->
          <div class="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <!-- Profile Tab Content -->
            <div v-if="activeTab === 'profile'" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">
                  GitHub Username
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span class="text-gray-400 text-sm">github.com/</span>
                  </div>
                  <input
                      :value="profileInput"
                      @input="handleProfileInput"
                      @keyup.enter="generateReadme"
                      type="text"
                      placeholder="your-username"
                      :class="[
                      'block w-full pl-24 pr-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200',
                      profileError
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-white/20 focus:ring-purple-500 focus:border-transparent'
                    ]"
                  />
                </div>
                <p v-if="profileError" class="mt-2 text-sm text-red-400">{{ profileError }}</p>
                <p v-else class="mt-2 text-sm text-gray-400">
                  Enter your GitHub username to generate a profile README
                </p>
              </div>
            </div>

            <!-- Repository Tab Content -->
            <div v-if="activeTab === 'repository'" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">
                  Repository URL
                </label>
                <input
                    :value="repositoryInput"
                    @input="handleRepositoryInput"
                    @keyup.enter="generateReadme"
                    type="url"
                    placeholder="https://github.com/username/repository"
                    :class="[
                    'block w-full px-4 py-4 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200',
                    repositoryError
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-white/20 focus:ring-purple-500 focus:border-transparent'
                  ]"
                />
                <p v-if="repositoryError" class="mt-2 text-sm text-red-400">{{ repositoryError }}</p>
                <p v-else class="mt-2 text-sm text-gray-400">
                  Enter the full GitHub repository URL
                </p>
              </div>
            </div>

            <!-- Generate Button -->
            <button
                @click="generateReadme"
                :disabled="!isInputValid"
                class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg"
            >
              <div class="flex items-center justify-center space-x-2">
                <ZapIcon class="w-5 h-5"/>
                <span>Generate README with AI</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
            class="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
            class="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
            style="animation-delay: 2s;"></div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {useRouter} from 'vue-router'
import {useModeStore} from '../stores/modeStore'
import {ref} from 'vue'
import {FolderIcon, UserIcon, ZapIcon} from 'lucide-vue-next'

const router = useRouter()
const modeStore = useModeStore()
const activeTab = ref('profile')
const profileInput = ref('')
const repositoryInput = ref('')

function handleProfileInput(event) {

}

function handleRepositoryInput(event) {

}

function validateGitHubUsername(username) {
  if (!username) return 'Username is required'
  if (username.length < 3) return 'Username must be at least 3 characters'
  if (username.length > 39) return 'Username must be less than 40 characters'
  if (!username.match(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i)) return 'Username must be lowercase alphanumeric'
  return ''
}

function validateGitHubRepoUrl(url) {
  if (!url) return 'Repository URL is required'
  if (!url.startsWith('https://github.com/')) return 'Repository URL must start with https://github.com/'
  return ''
}

function setActiveTab(tab) {
  activeTab.value = tab
}


// const handleProfileInput = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   store.setProfileInput(target.value)
// }
//
// const handleRepositoryInput = (event: Event) => {
//   const target = event.target as HTMLInputElement
//   store.setRepositoryInput(target.value)
// }

const generateReadme = () => {
  if (!store.isInputValid) return
  store.setCurrentPage('generating')
}

function select(mode) {
  modeStore.setMode(mode)
  router.push('/generate')
}
</script>
