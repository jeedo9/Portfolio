<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { TNavLink } from './NavLink.vue';

export interface NavLinksProps {

  navLinks: TNavLink[],
  listClass?: string    

}
const {listClass = ''} = defineProps<NavLinksProps>()

   </script>

<template>
        <nav>
          <ul :class="twMerge('justify-center items-center gap-x-10 flex', listClass)">

            <li v-for="navLink in navLinks" :key="navLink.to" class="flex">


              <HeaderNavlinksNavLink v-bind="navLink"  />
            </li>
            
          </ul>

        </nav>
</template>