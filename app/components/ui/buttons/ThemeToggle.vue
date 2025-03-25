<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';



type ThemeToggleProps = BtnProps

const props = defineProps<ThemeToggleProps>()


const {className = '', type = 'button', ...rest} = props


</script>

<template>
          <button v-bind="rest"  :type :class="twMerge(` size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40 transition-[background-color]`, className)">
            <Icon aria-hidden="false" aria-label="dark mode" name="mynaui:moon-star-solid" />
         </button>

</template>