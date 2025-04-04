<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

</script>



<template>
        <span :class="twMerge(`whitespace-nowrap border-border/80 border-[.7px] text-muted dark:text-background shadow-md absolute -top-8 text-[13px] bg-foreground dark:bg-border px-2 rounded right-1/2 translate-x-1/2 md:translate-x-0 md:-right-0.5 scale-0 origin-bottom md:origin-bottom-right group-focus-visible:scale-100 group-focus-visible:delay-550 group-hover:scale-100 group-hover:delay-550 transition-transform`, $attrs.class as string)" role="tooltip">
            <slot />
        </span>
</template>