<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type ButtonAnimationOneProps = BtnProps

const props = defineProps<ButtonAnimationOneProps>()

const btn = useTemplateRef('btn')


const animationEnd = () => btn.value?.refBtn?.classList.remove('animate')  || btn.value?.refLink?.$el.classList.remove('animate')

const mouseEnter = () => btn.value?.refBtn?.classList.add('animate') || btn.value?.refLink?.$el.classList.add('animate'); 
</script>

<template>

        <UiButtonsButton ref="btn" :class="twMerge(`before:absolute before:border-accent before:rounded-[inherit] before:inset-0`, $attrs.class as string)" v-bind="props" @mouseenter="mouseEnter" @animationend="animationEnd" >
            <slot />
        </UiButtonsButton>

</template>





<style scoped>



.animate::before {
    animation-name: animate;
    animation-timing-function: ease-in;
    animation-duration: 340ms;
}

@keyframes animate {
   to {
transform: scale(1.5);
opacity: 0;
border: 3px double;
   }
    
}

</style>