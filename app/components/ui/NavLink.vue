<script setup lang="ts">
import type { Animation, TLink } from '~/types';

export type TNavLink = TLink & {
    animation: Animation,
    delay: string,
    isPressed?: boolean
  }
  
   const  {animation, className = '', target = '_self'} =  defineProps<TNavLink>()




</script>
<template>

            <NuxtLink  :class="animation + ' ' + (typeof className === 'function' ? className() : className)" :style="{animationDelay: delay}" :to="to" :target="target">{{ text ?? '' }} <Icon v-if="icon" aria-hidden="false" :name="icon.name" :aria-label="icon.slug" /></NuxtLink>

</template>