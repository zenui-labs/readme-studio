<script setup lang="ts">
import Moon from "@/svg-icons/moon.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import Sun from "@/svg-icons/sun.vue";
import {ChevronDown, FilePenLine, Github, Linkedin, Menu, X} from "lucide-vue-next"
import Facebook from "@/svg-icons/facebook.vue";
import Discord from "@/svg-icons/discord.vue";
import {useStore} from "@stores/useStore";
import AiIcon from "@/svg-icons/ai-icon.vue";
import {useRouter} from "vue-router";
import {PATHS} from "@/constants/paths";

const isActiveDropdown = ref(false);
const isDarkMode = ref(false);
const isSidebarOpen = ref(false);
const isCreateDropdownOpen = ref(false);
const isScrolled = ref(false);

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const store = useStore()
const router = useRouter()

const toggleDropdown = () => {
  isActiveDropdown.value = !isActiveDropdown.value;
};

const toggleCreateDropdown = () => {
  isCreateDropdownOpen.value = !isCreateDropdownOpen.value;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};


const applyDarkMode = (value: boolean) => {
  if (value) {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  applyDarkMode(isDarkMode.value);
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll();

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
    document.body.classList.add('dark');
  } else {
    isDarkMode.value = false;
    document.body.classList.remove('dark');
  }
});

let handleClickOutside: (event: MouseEvent) => void;

onMounted(() => {
  handleClickOutside = (event: MouseEvent) => {
    if (
        // @ts-ignore
        !event.target.closest('.dropdown_btn') &&
        // @ts-ignore
        !event.target.closest('.dropdown')
    ) {
      isActiveDropdown.value = false;
      isCreateDropdownOpen.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('scroll', onScroll);
});

function handleCreateReadme() {
  store.setGeneratedReadme('')
  router.push(PATHS.EDITOR)
}

</script>

<template>
  <nav
      :class="isScrolled ? 'w-[90%]' : 'w-full'"
      class='fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-3xl flex md:hidden items-center justify-between max-w-[1200px] mx-auto py-2.5 rounded-full z-30 transition-all duration-300 px-6'>
    <div class='flex items-start gap-2'>
      <router-link :to="PATHS.HOME">
        <img src="/logo.svg" alt="logo" class="w-[33px]"/>
      </router-link>
      <span
          class='bg-gray-50 rounded-full dark:border-darkBorder dark:text-darkSubtext dark:bg-darkCardBgColor border border-gray-100 px-2 py-0 text-[0.8rem] font-medium text-gray-700'>v1.0</span>
    </div>

    <div class='flex items-center gap-3'>

      <a href="https://github.com/zenui-labs/readme-studio" target="_blank" rel="noreferrer">
        <Github class="text-gray-700 hover:text-brandColor dark:text-gray-300 transition-colors duration-300"/>
      </a>

      <div class='flex items-center cursor-pointer' @click="toggleDarkMode" title="Toggle Dark Mode">
        <component :is="isDarkMode ? Sun : Moon"
                   class="text-gray-700 dark:text-gray-300 transition-colors duration-300"/>
      </div>
      <Menu :size="28" @click="toggleSidebar" class="cursor-pointer dark:text-darkText"/>
    </div>
  </nav>

  <!-- Sidebar -->
  <transition
      name="slide"
      enter-active-class="transform transition-transform duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transform transition-transform duration-300"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
  >
    <aside v-if="isSidebarOpen"
           class="fixed top-0 md:hidden right-0 h-full w-[85%] max-w-xs z-50 bg-white dark:bg-darkCardBgColor shadow-xl px-8 py-6 flex flex-col gap-8">

      <div class="flex justify-end items-center mb-3">
        <X @click="toggleSidebar" strokeWidth="1.5" :size="22" class="cursor-pointer dark:text-darkSubtext"/>
      </div>

      <router-link :to="PATHS.TEMPLATES"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition'>
        Templates
      </router-link>

      <router-link :to="PATHS.CHANGELOG"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition'>
        Changelog
      </router-link>

      <div>
        <p @click="toggleCreateDropdown" class='font-semibold dropdown_btn flex dark:text-darkText items-center gap-2'>
          Generate Readme
          <ChevronDown :size="22" :class="`${isCreateDropdownOpen ? 'rotate-180' : ''} transition-all duration-200`"/>
        </p>
        <div v-if="isCreateDropdownOpen" class='dropdown'>
          <p @click="router.push(PATHS.GENERATOR)"
             class='text-sm flex items-center gap-2 mt-4 ml-3 dark:text-darkText hover:text-brandColor transition'>
            <AiIcon/>
            Generate Readme
          </p>
          <p @click="handleCreateReadme"
             class='text-sm flex items-center gap-2 mt-4 ml-3 dark:text-darkText hover:text-brandColor transition'>
            <FilePenLine :size="17"/>
            Create Readme
          </p>
        </div>
      </div>

      <div>
        <p @click="toggleDropdown" class='font-semibold dropdown_btn mb-2 flex dark:text-darkText items-center gap-2'>
          Communities
          <ChevronDown :size="22" :class="`${isActiveDropdown ? 'rotate-180' : ''} transition-all duration-200`"/>
        </p>
        <div v-if="isActiveDropdown" class='dropdown'>
          <a href="https://web.facebook.com/share/g/1ARs1rHQat/" target="_blank"
             class='text-sm flex items-center mt-2 dark:text-darkText hover:text-brandColor transition'>
            <Facebook class="!text-[2rem]"/>
            Facebook Group
          </a>
          <a href="https://discord.gg/9xURSvbEpH" target="_blank"
             class='text-sm flex items-center mt-1 dark:text-darkText hover:text-brandColor transition'>
            <Discord class="!text-[2rem]"/>
            Discord Channel
          </a>
          <a href="https://www.linkedin.com/company/zenui-labs/" target="_blank"
             class='text-sm flex items-center gap-2 dark:text-darkText mt-2 ml-2 hover:text-brandColor transition'>
            <Linkedin strokeWidth="1" :size="17"/>
            LinkedIn Page
          </a>
        </div>
      </div>
    </aside>
  </transition>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>