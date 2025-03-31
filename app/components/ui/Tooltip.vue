<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

type TooltipProps = {side?: 'left' | 'top' | 'bottom' | 'right'}

const {side = 'top'} = defineProps<TooltipProps>()

const sides = {
    top: ['-top-[2.8rem]', 'after:top-[92%]'],
    left: ['-left-[2.8rem] -rotate-90 top-1/2 -translate-y-full', 'after:top-[92%]'],
    bottom: ['-bottom-[2.8rem]', 'after:top-[3px] after:-rotate-180'],
    right: ['-right-[2.8rem] top-1/2 -translate-y-full rotate-90', 'after:top-[92%]'],
}

</script>

<template>
    <span :class="[twMerge(`absolute z-50 after:z-50 bg-slate-600 dark:text-border text-muted px-3 py-1 rounded  after:content-[''] group-hover:delay-550 group-group-hover:after:delay-550 after:absolute after:border-t-8 after:border-t-slate-600 after:border-r-8 after:border-l-8 scale-0 after:scale-0 after:border-r-transparent hover:scale-115 after:border-l-transparent  after:left-1/2 after:-translate-x-1/2 group-hover:scale-100 group-hover:after:scale-100 transition-transform ease-out after:ease-out after:transition-transform origin-bottom after:origin-top`,$attrs.class as string), sides[side].join(' '), {'rotate-14 group-hover:rotate-0' : side === 'top' }]">
        <slot />
    </span>
</template>