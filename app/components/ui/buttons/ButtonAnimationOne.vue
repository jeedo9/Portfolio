<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type ButtonAnimationOneProps = BtnProps

const {className = '', ...rest} = defineProps<ButtonAnimationOneProps>()


</script>

<template>
        <UiButtonsButton v-bind="rest" :class-name="twMerge(`before:content-[''] before:absolute relative before:inset-0 before:border-accent before:border-double before:rounded-[inherit] hover:before:border-2 hover:before:scale-x-140 before:duration-(--duration-large) hover:before:scale-y-135 before:transition-all hover:before:opacity-0`, className)">
            <slot/>
        </UiButtonsButton>

</template>