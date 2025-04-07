<script setup lang="ts">
import type { BtnProps } from './Button.vue';



type ThemeToggleProps = BtnProps

const props = defineProps<ThemeToggleProps>()


const {onClick,...rest} = props

const modeValue = computed(() => useColorMode().value)

const handleClick = (e: MouseEvent) => {
  onClick?.(e)
  if ( modeValue.value === 'light')useColorMode().preference = 'dark' 
  else useColorMode().preference = 'light'
}

</script>

<template>
          <UiButtonsButtionIcon :icon-slug="(modeValue === 'light' ? 'dark' : 'light') + ' mode'" :icon-name="modeValue === 'dark' ? 'mynaui:sun' : 'mynaui:moon-star-solid'" v-bind="rest" @click="handleClick" />
</template>