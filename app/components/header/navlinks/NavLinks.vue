<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { TNavLink } from './NavLink.vue';

export interface NavLinksProps {

  navLinks: TNavLink[],
  listClass?: string    

}
const {listClass = '', navLinks} = defineProps<NavLinksProps>()

const navLinkss = ref<TNavLink[]>(navLinks)


const handleClick = (navLinkId: string) => {


  navLinkss.value.forEach(link => {

    if (link.isPressed) link.isPressed = false
  })

  const navLinkIndex = navLinkss.value.findIndex(link => link.to === navLinkId )

  if (navLinkIndex !== -1) {
    const navLink = navLinkss.value[navLinkIndex]

   if ( navLink?.isPressed !== undefined) navLink.isPressed = true;
  }

}

   </script>

<template>
        <nav>
          <ul :class="twMerge('justify-center items-center gap-x-10 flex', listClass)">

            <li v-for="navLink in navLinkss" :key="navLink.to" class="flex">


              <HeaderNavlinksNavLink @click="handleClick(navLink.to)" v-bind="navLink"  />
            </li>
            
          </ul>

        </nav>
</template>