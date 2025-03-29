<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';

type HamburgerProps = BtnProps & {
    classNameBars?: [bar1: string, bar2?: string, bar3?: string],
    open: boolean
}

const props = defineProps<HamburgerProps>()


const  {type = 'button',classNameBars : [bar1 = '', bar2 = '', bar3 = ''] = [], "aria-controls" : ariaControls = 'menu', "aria-label" : ariaLabel = 'Menu button', ...rest} = props

</script>

<template>
    <button :type="type" :aria-controls="ariaControls" v-bind="rest" :aria-expanded="open ?? 'false'" :aria-label="ariaLabel" :class="twMerge('flex justify-center items-end group flex-col md:hidden w-5 h-1/4 relative', $attrs.class as string)"> 
  <span aria-hidden :class="twMerge(`w-6 h-[2px] rounded bg-accent inline-block absolute top-0  ${open  ? 'rotate-45 top-1/2' : 'group-hover:top-[10%]'} transition-all duration-200`, bar1)"/>
  <span aria-hidden :class="twMerge(`w-5 h-[2px] rounded bg-accent inline-block absolute top-1/2  ${open ? '-translate-x-[110%] opacity-0 -rotate-45 ' : ''}   duration-(--duration-large) transition-all`, bar2 )"/>
  <span aria-hidden :class="twMerge(`w-4 h-[2px] rounded bg-accent inline-block absolute top-full ${open ? 'w-6 -rotate-45 top-1/2 ' : 'group-hover:top-[90%]'}  transition-all duration-200`, bar3)"/>
</button>

</template>