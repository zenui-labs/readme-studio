<script setup lang="ts">
import Discord from "@/svg-icons/discord.vue";
import Moon from "@/svg-icons/moon.vue";
import Facebook from "@/svg-icons/facebook.vue";
import {ChevronDown, Linkedin, Pencil} from 'lucide-vue-next';
import {onBeforeUnmount, onMounted, ref} from "vue";
import Sun from "@/svg-icons/sun.vue";
import {useStore} from "@stores/useStore";
import AiIcon from "@/svg-icons/ai-icon.vue";
import {useRouter} from "vue-router";

const isActiveDropdown = ref(false);
const isDarkMode = ref(false);
const isCreateDropdownOpen = ref(false)
const isScrolled = ref(false);

const store = useStore()
const pathname = window.location.pathname
const router = useRouter()

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const toggleDropdown = () => {
  isActiveDropdown.value = !isActiveDropdown.value;
};
const toggleCreateDropdown = () => {
  isCreateDropdownOpen.value = !isCreateDropdownOpen.value;
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
  window.addEventListener('scroll', onScroll);
  onScroll();

  handleClickOutside = (event: MouseEvent) => {
    if (
        // @ts-ignore
        !event.target.closest('.dropdown_btn') &&
        // @ts-ignore
        !event.target.closest('.dropdown')
    ) {
      isActiveDropdown.value = false;
    }
    if (
        // @ts-ignore
        !event.target.closest('.create_dropdown_btn') &&
        // @ts-ignore
        !event.target.closest('.create_dropdown')
    ) {
      isCreateDropdownOpen.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', onScroll);
});
</script>


<template>
  <nav
      :class="[(store.generatedReadme && pathname !== '/editor') || store.fullScreenModal ? 'z-10' : 'z-20', isScrolled ? 'max-w-[1150px]' : 'max-w-[1200px]']"
      class='fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-3xl items-center justify-between w-full mx-auto py-2.5 hidden md:flex rounded-full px-6 transition-all duration-300'>
    <div class='flex items-start gap-2'>
      <router-link to="/">
        <img src="/logo.svg" alt="logo" class="w-[40px]"/>
      </router-link>
      <span
          class='bg-gray-50 rounded-full dark:border-darkBorder dark:text-darkSubtext dark:bg-darkCardBgColor border border-gray-100 px-2 py-0 text-[0.8rem] font-medium text-gray-700'>Beta</span>
    </div>

    <div class='flex items-center gap-10 text-gray-700'>
      <router-link to="/features"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>
        Features
      </router-link>

      <div class='relative'>
        <p @click="toggleCreateDropdown"
           class='text-[1rem] create_dropdown_btn font-medium dark:text-darkText hover:text-brandColor flex items-center gap-2 cursor-pointer transition-all duration-200'>
          Generate Readme
          <ChevronDown :class="`${isCreateDropdownOpen ? 'rotate-180' : ''} transition-all duration-200`"/>
        </p>

        <transition
            name="dropdown"
            enter-active-class="transition ease-out duration-150"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="isCreateDropdownOpen"
               class='absolute top-[110%] create_dropdown left-1/2 -translate-x-1/2 bg-white dark:text-darkText dark:bg-darkCardBgColor z-50 w-max p-1.5 rounded-lg shadow-lg'>
            <p @click="router.push('/generate')"
               class="py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <AiIcon/>
              <span class="z-10">Generate Readme</span>
            </p>
            <p @click="router.push('/editor')"
               class='py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800'>
              <Pencil :size="17"/>
              <span class='z-10'>Create Readme</span>
            </p>
          </div>
        </transition>
      </div>

      <router-link to="/faqs"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>
        FAQ
      </router-link>
      <router-link to="changelog"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>
        Changelog
      </router-link>

      <div class='relative'>
        <p @click="toggleDropdown"
           class='text-[1rem] dropdown_btn font-medium dark:text-darkText hover:text-brandColor flex items-center gap-2 cursor-pointer transition-all duration-200'>
          Communities
          <ChevronDown :class="`${isActiveDropdown ? 'rotate-180' : ''} transition-all duration-200`"/>
        </p>

        <transition
            name="dropdown"
            enter-active-class="transition ease-out duration-150"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
          <div v-if="isActiveDropdown"
               class='absolute top-[110%] dropdown left-1/2 -translate-x-1/2 bg-white dark:text-darkText dark:bg-darkCardBgColor z-50 w-max p-1.5 rounded-lg shadow-lg'>
            <a href="https://web.facebook.com/share/g/1ARs1rHQat/" target="_blank"
               class="py-1 pr-3.5 relative overflow-hidden group cursor-pointer font-medium text-[0.9rem] flex items-center gap-1 rounded-lg"
            >
            <span
                class="absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
            ></span>
              <Facebook class="!text-[2.4rem] z-10"/>
              <span class="z-10">Facebook Group</span>
            </a>
            <a href="https://discord.gg/9xURSvbEpH" target="_blank"
               class='py-1 pl-1 pr-3.5 relative overflow-hidden group cursor-pointer font-medium text-[0.9rem] flex items-center gap-1 rounded-lg'>
                <span
                    class="absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-cyan-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                ></span>
              <Discord class='!text-[2.3rem] z-10'/>
              <span class='z-10'>Discord Channel</span>
            </a>
            <a href="https://www.linkedin.com/company/readme-studio" target="_blank"
               class='py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg'>
              <Linkedin :strokeWidth="1.5" :size="20" class='mb-1 z-10'/>
              <span
                  class="absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
              ></span>
              <span class='z-10'>Linkedin Page</span>
            </a>
          </div>
        </transition>
      </div>

    </div>

    <div class='flex items-center cursor-pointer' @click="toggleDarkMode" title="Toggle Dark Mode">
      <component :is="isDarkMode ? Sun : Moon"
                 class="text-gray-700 dark:text-gray-300 transition-colors duration-300"/>
    </div>

  </nav>
</template>