<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import NotFound from '../assets/lotties/NotFound.json'

</script>

<template>
    <main class="flex flex-col justify-center items-center gap-y-3 animate-pop" style="transform: scale(0);height: var(--container-height); animation-delay: calc(var(--animation-delay) + 2s);">
        <Vue3Lottie aria-label="404 not found animation" height="70%" :animation-data="NotFound" />

        <UiButtonsButtonAnimationOne class-name="capitalize px-5.5 py-3">go back home </UiButtonsButtonAnimationOne>
    </main>
    
</template>