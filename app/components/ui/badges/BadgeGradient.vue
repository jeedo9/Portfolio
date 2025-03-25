<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';
import type { ClassName } from '~/types';


type BadgeGradientProps = ClassName
const {className = ''} = defineProps<BadgeGradientProps>()


</script>


<template>

<span  :class="twMerge(`bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs dark:inset-shadow-sm rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow]  before:content-[attr(data-stack)] relative before:absolute before:bg-slate-600 dark:before:text-border before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] hover:before:delay-350 hover:after:delay-350 after:absolute after:border-t-8 after:border-t-slate-600 after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after: before: before:origin-bottom after:origin-top`, className)">
              <slot/>
</span>

</template>