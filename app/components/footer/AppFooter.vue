<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import { footerLinks } from './dataFooter';
import type { TLink } from '~/types';


export interface AppFooterProps {
  logoName?: string,
  logoClassName?: string,
  links?: TLink[]

}
const {links = footerLinks} = defineProps<AppFooterProps>()



</script>

<template>
    <footer>
      <div class="flex flex-col-reverse justify-center sm:flex-row sm:justify-around items-center text-lg sm:pb-0 pb-4.5 h-(--footer-height)" >
        <UiLogosLogoTwo :name="logoName" :class="twMerge('text-xl sm:text-2xl sm:tracking-normal tracking-[.6rem]', logoClassName)" />
      <div >
       <ul class="flex justify-center items-center gap-x-3">
        <li v-for="link in links" :key="link.to" :class="( typeof link.className === 'function' ?  link.className(): link.className) ?? ''"><NuxtLink :to="link.to" :target="link.target">{{ link.text ?? link.text  }} <Icon v-if="link.icon" aria-hidden="false" :aria-label="link.icon.slug" :name="link.icon.name" /></NuxtLink></li>
       </ul>
      </div>

      </div>
    </footer>
</template>