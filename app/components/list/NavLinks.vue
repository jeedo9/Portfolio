<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { TNavLink } from '~/types';
import NavLink from '../ui/NavLink.vue';
import useNavLinksStore from '~/stores/navLinks';

export interface NavLinksProps {

  navLinks: TNavLink[],
  listClass?: string,
  navLinkClick?: () => void,
  handlePressedNavLinkAttr?: boolean,
  navLinksKey?: string
}

const {navLinkClick, handlePressedNavLinkAttr, navLinks, navLinksKey = ''} = defineProps<NavLinksProps>()



const navLinksStore = useNavLinksStore()


if (handlePressedNavLinkAttr) navLinksStore.addNavLinks(navLinks, navLinksKey)


// const navLinksArray = computed(() => handlePressedNavLinkAttr ? navLinksStore.navLinksState[navLinksKey] : navLinks) 
// watch(() => navLinksStore.navLinksState, () => console.log(navLinksArray.value))

const handleClick = (navLinkId: string) => {
  navLinkClick?.()

  if (!handlePressedNavLinkAttr) return

  navLinksStore.handleNavLinksClicked(navLinkId, navLinks)
}

onUnmounted(() => {
  if (navLinksKey) navLinksStore.deleteNavLinks(navLinksKey)
})
   </script>

<template>
        <nav>
          <ul :class="twMerge('justify-center items-center gap-x-10 flex', listClass)">


            <li v-for="navLink in (handlePressedNavLinkAttr ? navLinksStore.navLinksState[navLinksKey] : navLinks)" :key="navLink.to" class="flex">


              <NavLink :aria-current="navLink.isPressed" v-bind="navLink"  @click="handleClick(navLink.to)"  />
            </li>
            
          </ul>

        </nav>
</template>