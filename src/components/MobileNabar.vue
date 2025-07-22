<script setup lang="ts">
import Moon from "@/svg-icons/moon.vue";
import {onBeforeUnmount, onMounted, ref, watch} from "vue";
import Sun from "@/svg-icons/sun.vue";
import {Menu} from "lucide-vue-next"

const isActiveDropdown = ref(false);
const isDarkMode = ref(false);
const isSidebarOpen = ref(false);

const toggleDropdown = () => {
  isActiveDropdown.value = !isActiveDropdown.value;
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
        !event.target.closest('.dropdown_btn') &&
        !event.target.closest('.dropdown')
    ) {
      isActiveDropdown.value = false;
    }
  };
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});

watch(isSidebarOpen, (val) => {
  document.body.style.overflow = val ? 'hidden' : '';
});


</script>

<template>
  <nav
      class='absolute top-5 left-1/2 -translate-x-1/2 z-20 backdrop-blur-5xl flex md:hidden items-center justify-between w-full max-w-[1200px] mx-auto py-2.5 rounded-full px-6'>
    <router-link to="/">
      <img src="/logo.svg" alt="logo" class="w-[33px]"/>
    </router-link>

    <div class='flex items-center gap-3'>
      <div class='flex items-center cursor-pointer' @click="toggleDarkMode" title="Toggle Dark Mode">
        <component :is="isDarkMode ? Sun : Moon"
                   class="text-gray-700 dark:text-gray-300 transition-colors duration-300"/>
      </div>
      <Menu :size="28" @click="toggleSidebar" class="cursor-pointer"/>
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
           class="fixed top-0 right-0 h-full w-[85%] max-w-xs z-50 bg-white dark:bg-darkCardBgColor shadow-xl p-6 flex flex-col gap-4">

      <div class="flex justify-between items-center mb-6">
        <router-link to="/" class="text-lg font-bold">Readme Studio</router-link>
        <X @click="toggleSidebar" class="cursor-pointer"/>
      </div>

      <router-link to="/features"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition'>
        Features
      </router-link>
      <router-link to="/faqs"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition'>
        FAQ
      </router-link>
      <router-link to="/changelog"
                   class='text-[1rem] dark:text-darkText font-medium hover:text-brandColor transition'>
        Changelog
      </router-link>

      <div class='pt-4 border-t border-gray-300 dark:border-gray-700'>
        <p class='font-semibold mb-2'>Communities</p>
        <a href="https://www.linkedin.com/company/readme-studio" target="_blank"
           class='text-sm flex items-center gap-2 hover:text-brandColor transition'>
          <Facebook class="w-5 h-5"/>
          Facebook Group
        </a>
        <a href="https://discord.gg/E99jWHVMca" target="_blank"
           class='text-sm flex items-center gap-2 hover:text-brandColor transition'>
          <Discord class="w-5 h-5"/>
          Discord Channel
        </a>
        <a href="https://web.facebook.com/share/g/1ARs1rHQat/" target="_blank"
           class='text-sm flex items-center gap-2 hover:text-brandColor transition'>
          <Linkedin class="w-5 h-5"/>
          LinkedIn Page
        </a>
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