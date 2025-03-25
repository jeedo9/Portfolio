<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type HamburgerProps = BtnProps & {
    classNameBars?: [bar1: string, bar2?: string, bar3?: string]
}

const props = defineProps<HamburgerProps>()

const  {type = 'button', className = '', classNameBars : [bar1 = '', bar2 = '', bar3 = ''] = [], "aria-controls" : ariaControls = 'menu', "aria-label" : ariaLabel = 'Menu button', ...rest} = props

</script>

<template>
    <button :type="type" :aria-controls="ariaControls" v-bind="rest" aria-expanded="false" :aria-label="ariaLabel" :class="twMerge('flex justify-center items-end gap-y-1.5 flex-col md:hidden w-5 h-1/4 relative group', className)"> 
  <span aria-hidden :class="twMerge('w-6 h-[2px] rounded bg-accent inline-block absolute top-0 group-hover:rotate-45 group-hover:top-1/2 transition-all duration-200', bar1)"/>
  <span aria-hidden :class="twMerge('w-5 h-[2px] rounded bg-accent inline-block absolute top-1/2 group-hover:-translate-x-[110%] group-hover:opacity-0 group-hover:-rotate-45   duration-(--duration-large) transition-all', bar2 )"/>
  <span aria-hidden :class="twMerge('w-4 h-[2px] rounded bg-accent inline-block absolute top-full group-hover:-rotate-45 group-hover:top-1/2  group-hover: transition-all duration-200 group-hover:w-6', bar3)"/>
</button>

</template>