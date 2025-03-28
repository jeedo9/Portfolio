
<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type ButtonAnimationTwoProps = BtnProps & {
    classNameAfter?: string
}
const props = defineProps<ButtonAnimationTwoProps>()

const {className = '', classNameAfter = '',showRipple,...rest} = props

</script>
<template>
    <UiButtonsButton v-bind="rest" show-ripple="false"  :class-name="twMerge(`before:content-[''] w-[130px] h-[42px] before:absolute relative before:bg-conic before:w-[1000%] before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-spin overflow-hidden bg-clip-padding group`, className)">
        <span :class="twMerge('absolute inset-[2px] bg-background rounded-[inherit]  flex justify-center items-center group-hover:text-accent group-hover:font-medium transition-all duration-(--duration-x-large)', classNameAfter)">
           <slot/>
        </span>
        </UiButtonsButton>

</template>