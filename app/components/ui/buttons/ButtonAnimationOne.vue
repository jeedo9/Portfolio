<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type ButtonAnimationOneProps = BtnProps

const props = defineProps<ButtonAnimationOneProps>()

const {showRipple,...rest} = props

const btn = useTemplateRef('btn')


const transitionEnd = () => btn.value?.ref.classList.remove('before:scale-x-140', 'before:scale-y-135', 'before:opacity-0')

const mouseEnter = () => btn.value?.ref.classList.add('before:scale-x-140', 'before:scale-y-135', 'before:opacity-0')


</script>

<template>

        <UiButtonsButton show-ripple="false" @mouseenter="mouseEnter" @transitionend="transitionEnd" ref="btn" v-bind="rest" :class="twMerge(`before:content-[''] before:absolute relative before:inset-0 before:border-accent before:border-double before:rounded-[inherit] hover:before:border-2  before:duration-(--duration-large)  before:transition-all `, $attrs.class as string)">
            <slot/>
        </UiButtonsButton>

</template>