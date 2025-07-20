<script setup lang="ts">
import Discord from "@/svg-icons/discord.vue";
import Moon from "@/svg-icons/moon.vue";
import Facebook from "@/svg-icons/facebook.vue";
import {ChevronDown, Linkedin} from 'lucide-vue-next';
import {onBeforeUnmount, onMounted, ref} from "vue";

const isActiveDropdown = ref(false)

const toggleDropdown = () => {
  isActiveDropdown.value = !isActiveDropdown.value;
};

let handleClickOutside: (event: MouseEvent) => void;

onMounted(() => {
  handleClickOutside = (event: any) => {
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

</script>

<template>
  <nav
      class='absolute top-5 left-1/2 -translate-x-1/2 z-10 backdrop-blur-5xl flex items-center justify-between w-full max-w-[1200px] mx-auto py-2.5 rounded-full px-6'>
    <router-link to="/">
      <img src="/logo.svg" alt="logo" class="w-[40px]"/>
    </router-link>

    <div class='flex items-center gap-10 text-gray-700'>
      <p class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>Features</p>
      <p class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>FAQ</p>
      <p class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>Changelog
      </p>
      <p class='text-[1rem] font-medium hover:text-brandColor cursor-pointer transition-all duration-200'>Contact Us
      </p>
      <div class='relative'>
        <p @click="toggleDropdown"
           class='text-[1rem] dropdown_btn font-medium hover:text-brandColor flex items-center gap-2 cursor-pointer transition-all duration-200'>
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
               class='absolute top-[110%] dropdown left-1/2 -translate-x-1/2 bg-white z-50 w-max p-1.5 rounded-lg shadow-lg'>
            <a href="https://www.linkedin.com/company/readme-studio" target="_blank"
               class="py-1 pr-3.5 relative overflow-hidden group cursor-pointer font-medium text-[0.9rem] flex items-center gap-1 rounded-lg"
            >
            <span
                class="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
            ></span>
              <Facebook class="!text-[2.4rem] z-10"/>
              <span class="z-10">Facebook Group</span>
            </a>
            <a href="https://discord.gg/E99jWHVMca" target="_blank"
               class='py-1 pl-1 pr-3.5 relative overflow-hidden group cursor-pointer font-medium text-[0.9rem] flex items-center gap-1 rounded-lg'>
                <span
                    class="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
                ></span>
              <Discord class='!text-[2.3rem] z-10'/>
              <span class='z-10'>Discord Channel</span>
            </a>
            <a href="https://web.facebook.com/share/g/1ARs1rHQat/" target="_blank"
               class='py-2.5 px-3.5 relative group overflow-hidden cursor-pointer font-medium text-[0.9rem] flex items-center gap-2.5 rounded-lg'>
              <Linkedin :strokeWidth="1.5" :size="20" class='mb-1 z-10'/>
              <span
                  class="absolute inset-0 bg-gradient-to-r from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"
              ></span>
              <span class='z-10'>Linkedin Page</span>
            </a>
          </div>
        </transition>
      </div>
    </div>

    <div class='flex items-center'>
      <Moon/>
    </div>
  </nav>
</template>