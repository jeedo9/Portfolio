<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { NavLinksProps } from '~/components/list/NavLinks.vue';
import type { ResumeAndThemeButtonsProps } from '../ResumeAndThemeButtons.vue';

type MenuProps = NavLinksProps & ResumeAndThemeButtonsProps & {
  isOpen: boolean,
}
 
const {isOpen, delay, animation, listClass,...rest} =  defineProps<MenuProps>()


</script>

<template>
          <div id="menu" role="menu" :class="twMerge(` ${isOpen ? '' : 'hidden'} bg-background absolute top-[115%] z-50 h-[300px] w-10/12 rounded-2xl sm:rounded-md dark:shadow-border dark:shadow-md sm:dark:shadow-lg shadow-xl sm:border dark:border border-border px-10 animate-pop md:hidden`, $attrs.class as string)">
    
    <ListNavLinks v-bind="rest"  :list-class=" listClass || 'items-start gap-y-5 hover:gap-y-4 transition-[gap] sm:py-0 pt-6 flex-col h-full'" class="h-[78%] sm:h-10/12" />
    <HeaderResumeAndThemeButtons :delay class="justify-between" :animation />
  </div>

</template>