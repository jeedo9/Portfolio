
<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ButtonHTMLAttributes } from 'vue';
import type { ClassName } from '~/types';



 
    export type BtnProps = ClassName & {
        showRipple?: 'true' | 'false', // because type boolean does not work here :/ (it remains boolean and not boolean or undifined when destructuring props)
        onClick: (e?: MouseEvent) => void
    } & /* @vue-ignore */ Partial<ButtonHTMLAttributes>

   const props = defineProps<BtnProps>()

   const { showRipple = 'true'  ,className = '', type = 'button', onClick, ...rest} = props

   
   const ref = useTemplateRef('btn')

   defineExpose({
    ref
   })

   const ripple = useTemplateRef('ripple')

   const handle = (e: MouseEvent) => {

    onClick?.(e)
    if (!ripple.value || !showRipple) return;

const rect = ripple.value.parentElement?.getBoundingClientRect();
if (!rect) return;

const top = e.clientY - rect.top;
const left = e.clientX - rect.left;

ripple.value.style.cssText = `top: ${top}px; left: ${left}px;`

ripple.value.className += ' animate-ripple'

}

const animationEnd = () => ripple.value?.classList.remove('animate-ripple')

</script>

<template>

    <button @click="handle" ref="btn"  :class="twMerge(`${showRipple === 'true'? 'overflow-hidden' : ''} relative border-accent border-2 tracking-tight border-double px-3.5 py-1 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color]`, className)" :type v-bind="rest">

        <span v-if="showRipple === 'true'" v-on:animationend="animationEnd" ref="ripple" class="absolute rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 size-10 bg-white/45 dark:bg-white/23"></span>
        <slot />
        </button>
</template>