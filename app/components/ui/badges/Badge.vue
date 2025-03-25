<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ClassName } from '~/types';


type BadgeProps = ClassName
const {className = ''} =  defineProps<BadgeProps>()

</script>

<template>
        <span :class="twMerge('border-border/80 border-[.7px] px-4 py-0.5 rounded-md hover:bg-gradient-1 shadow shadow-border hover:scale-97 ease-out cursor-default whitespace-nowrap transition duration-(--duration-large)', className) ">
            <slot/>
        </span> 
</template>