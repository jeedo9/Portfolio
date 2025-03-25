
<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes } from 'vue';
import type { ClassName } from '~/types';



 
    export type BtnProps = ClassName & /* @vue-ignore */ Partial<ButtonHTMLAttributes>

   const props = defineProps<BtnProps>()

   const {className = '', type = 'button', ...rest} = props



</script>

<template>

    <button :class="twMerge(` border-accent border-2 tracking-tight border-double px-3.5 py-1 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color]`, className)" :type v-bind="rest">
        <slot />
        </button>
</template>