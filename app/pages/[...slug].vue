<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import NotFound from '../assets/lotties/NotFound.json'
 

useHead({
    title: '404'
})

useSeoMeta({
  ogTitle: '404',
  ogImage: '/images/OGImg404.png',
  ogImageType: 'image/png',
  ogImageAlt: 'Website 404 Page',
  twitterImage: '/images/OGImg404.png',
  twitterImageAlt: 'Website 404 Page',
  twitterImageType: 'image/png'
})

</script>

<template>
    <main class="flex flex-col justify-center items-center gap-y-3 animate-pop" style="transform: scale(0);height: var(--container-height); animation-delay: calc(var(--animation-delay) + 2s);">
        <Vue3Lottie aria-label="404 not found animation" height="70%" :animation-data="NotFound" />

        <UiButtonsButtonAnimationOne :to="{name: 'Home'}" replace class="capitalize px-5.5 py-3 hover:text-current" tag="link" >
            go back home
     </UiButtonsButtonAnimationOne>
    </main>
    
</template>