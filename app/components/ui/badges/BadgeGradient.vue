<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';
</script>


<template>

<span  :class="twMerge(`bg-gradient-to-b relative from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs dark:inset-shadow-sm rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow]`, $attrs.class as string)">
    <slot/>
</span>

</template>