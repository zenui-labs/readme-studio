<script setup lang="ts">
import Discord from "@/svg-icons/discord.vue";
import Moon from "@/svg-icons/moon.vue";
import Facebook from "@/svg-icons/facebook.vue";
import {FilePenLine, Github, Linkedin} from 'lucide-vue-next';
import {onBeforeUnmount, onMounted, ref} from "vue";
import Sun from "@/svg-icons/sun.vue";
import {useStore} from "@stores/useStore";
import AiIcon from "@/svg-icons/ai-icon.vue";
import {useRouter} from "vue-router";
import {PATHS} from "@/constants/paths";
import NavDropdown from "@components/ui/NavDropdown.vue";

const isScrolled = ref(false);

const store = useStore()
const router = useRouter()

const onScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
});

function handleCreateReadme() {
  store.setGeneratedReadme('')
  router.push(PATHS.EDITOR)
}

</script>


<template>
  <nav
      :class="isScrolled ? 'max-w-[1150px]' : 'max-w-[1200px]'"
      class='fixed top-5 left-1/2 -translate-x-1/2 backdrop-blur-3xl items-center justify-between w-full mx-auto py-2.5 hidden md:flex rounded-full px-6 z-30 transition-all duration-300'>
    <div class='flex items-start gap-2'>
      <router-link :to="PATHS.HOME">
        <img src="/logo.svg" alt="logo" class="w-[40px]"/>
      </router-link>
      <span
          class='bg-gray-50 rounded-full dark:border-darkBorder dark:text-darkSubtext dark:bg-darkCardBgColor border border-gray-100 px-2 py-0 text-[0.8rem] font-medium text-gray-700'>v1.1</span>
    </div>

    <div class='flex items-center gap-10 text-gray-700'>
      <router-link :to="PATHS.TEMPLATES"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>
        Templates
      </router-link>
      <router-link :to="PATHS.CHANGELOG"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>
        Changelog
      </router-link>

      <NavDropdown label="Generate Readme">
        <p @click="router.push(PATHS.GENERATOR)"
           class="py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          <AiIcon size="16"/>
          <span class="z-10">Generate Readme</span>
        </p>
        <p @click="handleCreateReadme"
           class='py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800'>
          <FilePenLine :size="18"/>
          <span class='z-10'>Create Readme</span>
        </p>
      </NavDropdown>

      <NavDropdown label="Communities">
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
        <a href="https://www.linkedin.com/company/zenui-labs/" target="_blank"
           class='py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg'>
          <Linkedin :strokeWidth="1.5" :size="20" class='mb-1 z-10'/>
          <span
              class="absolute inset-0 bg-gradient-to-r from-blue-100 dark:from-blue-800/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
          ></span>
          <span class='z-10'>Linkedin Page</span>
        </a>
      </NavDropdown>

    </div>

    <div class="flex items-center gap-2">
      <a href="https://github.com/zenui-labs/readme-studio" target="_blank" rel="noreferrer">
        <Github class="text-gray-700 hover:text-brandColor dark:text-gray-300 transition-colors duration-300"/>
      </a>

      <div class='flex items-center cursor-pointer' @click="store.toggleDarkMode" title="Toggle Dark Mode">
        <component :is="store.isDarkMode ? Sun : Moon"
                   class="text-gray-700 dark:text-gray-300 transition-colors duration-300"/>
      </div>
    </div>

  </nav>
</template>