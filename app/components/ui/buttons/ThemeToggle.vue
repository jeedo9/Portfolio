<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';



type ThemeToggleProps = BtnProps

const props = defineProps<ThemeToggleProps>()


const {className = '', type = 'button', ...rest} = props

const modeValue = computed(() => useColorMode().value)

</script>

<template>
          <button @click="modeValue === 'light' ? useColorMode().preference = 'dark' : useColorMode().preference = 'light'" v-bind="rest"   :type :class="twMerge(` size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40 transition-[background-color]`, className)">
            <Icon  v-bind="modeValue === 'dark' ? {hidden: true} : {} "  aria-hidden="false" :aria-label="modeValue + ' mode'" name="mynaui:moon-star-solid" />
            <Icon  v-bind="modeValue === 'dark' ? {} :  {hidden: true} "  aria-hidden="false" :aria-label="modeValue + ' mode'" name="mynaui:sun" />
         </button>

</template>