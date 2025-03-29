<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';



type ThemeToggleProps = BtnProps

const props = defineProps<ThemeToggleProps>()


const {type = 'button', onClick,...rest} = props

const modeValue = computed(() => useColorMode().value)

const handleClick = (e: MouseEvent) => {
  onClick?.(e)
  modeValue.value === 'light' ? useColorMode().preference = 'dark' : useColorMode().preference = 'light'
}

</script>

<template>
          <button @click="handleClick" v-bind="rest"   :type :class="twMerge(` size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40 transition-[background-color]`, $attrs.class as string)">
            <Icon  v-bind="modeValue === 'dark' ? {hidden: true} : {} "  aria-hidden="false" :aria-label="modeValue + ' mode'" name="mynaui:moon-star-solid" />
            <Icon  v-bind="modeValue === 'dark' ? {} :  {hidden: true} "  aria-hidden="false" :aria-label="modeValue + ' mode'" name="mynaui:sun" />
         </button>

</template>