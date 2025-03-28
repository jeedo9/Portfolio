<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
</script>

<template>
        <span :class="twMerge('border-border/80 border-[.7px] px-4 py-0.5 rounded-md hover:bg-gradient-1 shadow shadow-border hover:scale-97 ease-out cursor-default whitespace-nowrap transition duration-(--duration-large)', $attrs.class as string) ">
            <slot/>
        </span> 
</template>