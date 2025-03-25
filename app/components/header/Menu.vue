<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { _navLinksMenu } from './navlinks/dataNavLinks';
import type { NavLinksProps } from './navlinks/NavLinks.vue';
import type { ResumeAndThemeButtonsProps } from './ResumeAndThemeButtons.vue';

type MenuProps = NavLinksProps & ResumeAndThemeButtonsProps 

const {className = '', listClass} = defineProps<MenuProps>()


</script>

<template>
          <div id="menu" role="menu" :class="twMerge('hidden bg-background absolute top-[115%] z-50 h-[300px] w-10/12 rounded-md shadow-xl border border-border px-10 animate-pop md:hidden', className)">
    
    <HeaderNavlinksNavLinks :list-class="listClass || 'items-start gap-y-5 hover:gap-y-4 transition-[gap]  flex-col h-full'" class="h-10/12" :nav-links />
    <HeaderResumeAndThemeButtons :delay class-name="justify-between" :animation />
  </div>

</template>