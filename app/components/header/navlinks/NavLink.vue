<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { Animation, TLink } from '~/types';

export type TNavLink = TLink & {
    animation: Animation,
    delay: string
  }
  
   const  {animation, className = '', target = '_self'} =  defineProps<TNavLink>()





</script>
<template>

            <NuxtLink  :class="twMerge('hover:text-accent', animation,className)" :style="{animationDelay: delay}" :to="to" :target="target">{{ text ?? '' }} <Icon v-if="icon" aria-hidden="false" :name="icon.name" :aria-label="icon.slug" /></NuxtLink>

</template>