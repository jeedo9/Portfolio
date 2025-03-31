<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { Animation, HeadingTags } from '~/types';
import { AUTHOR_NAME, DEFAULT_DELAY } from '~/utils/constants';

     interface LogoMainProps {
        name?: string,
        delay?: string,
        animation?: Animation,
        as?: HeadingTags

    }


   const {name = AUTHOR_NAME, delay = DEFAULT_DELAY + DEFAULT_DELAY_UNITY, animation = 'animate-slide-left', as = 'h1'} =  defineProps<LogoMainProps>()

   
</script>
<template>
        <NuxtLink :to="{name: 'Home'}" @click="scrollTop" class="group">
        <as role="button" :class="twMerge(`cursor-grab active:cursor-grabbing relative before:content-[''] before:absolute before:h-px before:w-0 before:bg-accent before:right-0 before:bottom-1 group-focus-visible:before:w-[105%] hover:before:w-[105%] group-focus-visible:before:right-auto group-focus-visible:before:left-0 hover:before:right-auto hover:before:left-0 before:transition-all opacity-0 ${animation}`, $attrs.class as string)" :style="{animationDelay: delay}" >
                {{ name }}
        </as>
        </NuxtLink>
             
</template>