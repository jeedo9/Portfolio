
<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type ButtonAnimationTwoProps = BtnProps & {
    classNameAfter?: string
}
const props = defineProps<ButtonAnimationTwoProps>()

const {classNameAfter,...rest} = props

</script>
<template>

    <UiButtonsButton   v-bind="rest" :class="twMerge(`before:content-[''] dark:border-none w-[130px] h-[42px] before:absolute relative before:bg-conic before:w-[1000%] before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-spin overflow-hidden`, $attrs.class as string)">
        <span :class="twMerge('absolute dark:inset-[1.2px] inset-[1px] bg-background rounded-[inherit]  flex justify-center items-center   transition-all duration-(--duration-x-large)', classNameAfter)">
           <slot/>
        </span>
        </UiButtonsButton>

</template>