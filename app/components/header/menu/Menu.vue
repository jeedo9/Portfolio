<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { NavLinksProps } from '~/components/list/NavLinks.vue';
import type { ResumeAndThemeButtonsProps } from '../ResumeAndThemeButtons.vue';
import NavLinks from '~/components/list/NavLinks.vue';

type MenuProps = NavLinksProps & ResumeAndThemeButtonsProps & {
  isOpen: boolean,
}

defineProps<MenuProps>()

</script>

<template>
          <div id="menu" role="menu" :class="twMerge(` ${isOpen ? '' : 'hidden'} bg-background absolute top-[115%] z-50 h-[300px] w-10/12 rounded-2xl sm:rounded-md dark:shadow-border dark:shadow-lg shadow-xl sm:border dark:border border-border px-10 animate-pop md:hidden`, $attrs.class as string)">
    
    <NavLinks :nav-link-click="navLinkClick" :list-class=" listClass || 'items-start gap-y-5 hover:gap-y-4 transition-[gap] sm:py-0 pt-5 flex-col h-full'" class="h-9/12 sm:h-10/12" :nav-links />
    <HeaderResumeAndThemeButtons :delay class="justify-between" :animation />
  </div>

</template>