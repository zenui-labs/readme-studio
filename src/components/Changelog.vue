<script setup lang="ts">
import {computed, ref} from 'vue'
import {Search} from 'lucide-vue-next';

interface ChangeItem {
  id: string
  type: 'feature' | 'improvement' | 'bug' | 'update'
  text: string
}

interface NewFeature {
  description: string
}

interface Change {
  id: string
  date: string
  title: string
  description: string
  updates?: ChangeItem[]
  fixed?: ChangeItem[]
  new?: ChangeItem[]
  newFeatures?: NewFeature[]
}

// Sample data matching the design
const changes = ref<Change[]>([
  {
    id: '1',
    date: '2023-05-18',
    title: 'General Update',
    description: 'Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, nullam sit amet magna sit amet risus accumsan sagittis. Nullam sit amet magna elit nec accumsan sagittis et vitae.',
    updates: [
      {
        id: '1-1',
        type: 'feature',
        text: 'Added new real-time data synchronization'
      },
      {
        id: '1-2',
        type: 'feature',
        text: 'Track your progress on boards with real-time collaboration'
      },
      {
        id: '1-3',
        type: 'improvement',
        text: 'Stability and performance improvement'
      },
      {
        id: '1-4',
        type: 'bug',
        text: 'Fixed minor bugs'
      }
    ],
  }
])

const searchQuery = ref('')

const filteredChanges = computed(() => {
  if (!searchQuery.value) {
    return changes.value
  }

  const query = searchQuery.value.toLowerCase()
  return changes.value.filter(change =>
      change.title.toLowerCase().includes(query) ||
      change.description.toLowerCase().includes(query) ||
      (change.updates || []).some(item => item.text.toLowerCase().includes(query)) ||
      (change.new || []).some(item => item.text.toLowerCase().includes(query)) ||
      (change.fixed || []).some(item => item.text.toLowerCase().includes(query))
  )
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const getIconClass = (type: string): string => {
  switch (type) {
    case 'feature':
      return 'bg-blue-500'
    case 'improvement':
      return 'bg-orange-500'
    case 'bug':
      return 'bg-red-500'
    case 'update':
      return 'bg-green-500'
    default:
      return 'bg-gray-500'
  }
}
</script>

<template>
  <div class='my-[150px] max-w-[900px] mx-auto'>
    <div class="text-center">
      <h1 class="text-[2.5rem] dark:text-darkText text-gray-800 font-bold">
        Changes and updates
      </h1>
      <p class="text-gray-500 mt-2 dark:text-darkSubtext text-[1rem] max-w-[700px] mx-auto mb-7">
        Lorem ipsum dolor consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et, nullam sit
        amet magna sit amet risus accumsan sagittis et vitae.
      </p>

      <div class="relative max-w-md mx-auto">
        <div
            class="absolute inset-y-0 left-0 pl-3 flex items-center dark:text-darkSubtext text-gray-300 pointer-events-none">
          <Search/>
        </div>
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Bug fixed, stability, improvement..."
            class="w-full pl-12 pr-4 py-3 dark:text-darkSubtext dark:border-darkBorder border border-gray-200 rounded-lg focus:ring-2 focus:ring-brandColor focus:border-transparent outline-none"
        />
        <button
            class="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-brandColor text-white px-4 py-2 rounded-md hover:bg-brandColor/90 cursor-pointer transition-colors">
          Search
        </button>
      </div>
    </div>

    <div
        v-for="change in filteredChanges"
        :key="change.id"
        class='mt-16'
    >
      <div class="flex items-start justify-between gap-12">
        <p class="text-brandColor font-medium w-[20%] text-right text-sm">
          {{ formatDate(change.date) }}
        </p>

        <div class='text-left w-[80%] border-l-[3px] pl-6 relative border-brandColor'>
          <div class='bg-brandColor w-3 h-3 rounded-full absolute top-0 -left-[7px]'></div>

          <h3 class="text-[1.5rem] dark:text-darkText font-semibold text-gray-800">
            {{ change.title }}
          </h3>

          <p class="text-gray-500 dark:text-darkSubtext mb-4 mt-2">
            {{ change.description }}
          </p>

          <div v-if="change.new?.length">
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 bg-green-500 rounded-full"></div>
              <span class="text-green-700 font-medium text-sm">New</span>
            </div>
            <div class="bg-gray-50 dark:bg-darkCardBgColor p-4 rounded-lg">
              <ul class="space-y-2">
                <li
                    v-for="item in change.new"
                    :key="item.id"
                    class="flex items-center gap-3 py-2 px-4 bg-white dark:bg-darkBg rounded-lg"
                >
                  <div
                      :class="getIconClass(item.type)"
                      class="w-2 h-2 rounded-full flex-shrink-0"
                  ></div>
                  <span class="text-gray-700 dark:text-darkSubtext text-[0.9rem]">
                  {{ item.text }}
                </span>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="change.updates?.length" class='mt-5'>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span class="text-blue-700 font-medium text-sm">Updates</span>
            </div>
            <div class="bg-gray-50 dark:bg-darkCardBgColor p-4 rounded-lg">
              <ul class="space-y-2">
                <li
                    v-for="item in change.updates"
                    :key="item.id"
                    class="flex items-center gap-3 py-2 px-4 bg-white dark:bg-darkBg rounded-lg"
                >
                  <div
                      :class="getIconClass(item.type)"
                      class="w-2 h-2 rounded-full flex-shrink-0"
                  ></div>
                  <span class="text-gray-700 dark:text-darkSubtext text-[0.9rem]">
                  {{ item.text }}
                </span>
                </li>
              </ul>
            </div>
          </div>

          <div v-if="change.fixed?.length" class='mt-5'>
            <div class="flex items-center gap-2 mb-2">
              <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span class="text-orange-700 font-medium text-sm">Fixed</span>
            </div>
            <div class="bg-gray-50 dark:bg-darkCardBgColor p-4 rounded-lg">
              <ul class="space-y-2">
                <li
                    v-for="item in change.fixed"
                    :key="item.id"
                    class="flex items-center gap-3 py-2 px-4 bg-white dark:bg-darkBg rounded-lg"
                >
                  <div
                      :class="getIconClass(item.type)"
                      class="w-2 h-2 rounded-full flex-shrink-0"
                  ></div>
                  <span class="text-gray-700 dark:text-darkSubtext text-[0.9rem]">
                  {{ item.text }}
                </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>