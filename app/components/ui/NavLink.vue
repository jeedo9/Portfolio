<script setup lang="ts">
import type { NuxtLinkProps } from '#app';
import type { TNavLink } from '~/types';



   type NavLinkProps = TNavLink & NuxtLinkProps
  
   const  {animation, target = '_self'} =  defineProps<NavLinkProps>()

</script>
<template>

            <NuxtLink :class="animation + ' ' + (typeof className === 'function' ? className() : className)" :style="{animationDelay: delay}" :to="to" :target="target">{{ text ?? '' }} <Icon v-if="icon" aria-hidden="false" :name="icon.name" :aria-label="icon.slug" /></NuxtLink>

</template>