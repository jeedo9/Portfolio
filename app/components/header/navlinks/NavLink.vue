<script setup lang="ts">
import type { Animation, TLink } from '~/types';
import type { ProvideHeader } from '../AppHeader.vue';

export type TNavLink = TLink & {
    animation: Animation,
    delay: string,
    isPressed?: boolean,
  }
  
   const  {animation, className = '', target = '_self'} =  defineProps<TNavLink>()

   const injectValues = inject<ProvideHeader>('menu')



</script>
<template>

            <NuxtLink  @click="injectValues?.closeMenu" :class="animation + ' ' + (typeof className === 'function' ? className() : className)" :style="{animationDelay: delay}" :to="to" :target="target">{{ text ?? '' }} <Icon v-if="icon" aria-hidden="false" :name="icon.name" :aria-label="icon.slug" /></NuxtLink>

</template>