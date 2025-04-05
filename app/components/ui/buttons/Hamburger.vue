<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes } from 'vue';
import type { Animation } from '~/types';

type HamburgerProps = {
    classNameBars?: Partial<[bar1: string, bar2?: string, bar3?: string]>,
    animationBars: Animation,
    delayBars:  Partial<[bar1: string, bar2: string, bar3: string]>,
    open: boolean
} &  /* @vue-ignore */ Partial<ButtonHTMLAttributes>

const props = defineProps<HamburgerProps>()


const  {open, type = 'button', delayBars : [delayBar1='',delayBar2 = '',delayBar3 = ''] = [],animationBars,classNameBars : [classBar1, classBar2, classBar3] = [], "aria-controls" : ariaControls = 'menu', "aria-label" : ariaLabel = 'Menu button',...rest} = props

</script>

<template>
    <button :type :aria-controls="ariaControls" v-bind="rest" :aria-expanded="props.open" :aria-label="ariaLabel" :class="twMerge('flex justify-center items-end group flex-col md:hidden w-5 h-[27%] relative', $attrs.class as string)" > 
  <span aria-hidden :class="twMerge(`w-6 h-[2px] rounded bg-accent inline-flex absolute top-0  ${props.open  ? 'rotate-45 top-1/2' : 'group-hover:top-[10%]'} transition-all duration-200 opacity-0 ${animationBars}`, classBar1)" :style="{animationDelay: delayBar1}" />
  <span aria-hidden :class="twMerge(`w-5 h-[2px] rounded bg-accent inline-flex absolute top-1/2  ${props.open ? '-translate-x-[110%] scale-0 -rotate-45 ' : ''}   duration-(--duration-large) transition-all opacity-0 ${animationBars}`, classBar2 )" :style="{animationDelay: delayBar2}" />
  <span aria-hidden :class="twMerge(`w-4 h-[2px] rounded bg-accent inline-flex absolute top-full ${props.open ? 'w-6 -rotate-45 top-1/2 ' : 'group-hover:top-[90%]'}  transition-all duration-200 opacity-0 ${animationBars}`, classBar3)" :style="{animationDelay: delayBar3}" />
</button>

</template>