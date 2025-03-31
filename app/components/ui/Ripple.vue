<script setup lang="ts">
import { twMerge } from 'tailwind-merge';


type RippleProps = {
        animationEndClass?: string
}

const {animationEndClass = 'animate-ripple'} = defineProps<RippleProps>()

const ripple = useTemplateRef('ripple')

const animationEnd = () => ripple.value?.classList.remove(animationEndClass)

defineExpose({
        ripple
})


</script>

<template>
        <span  ref="ripple" :class="twMerge('absolute rounded-full opacity-0 -translate-x-1/2 -translate-y-1/2 size-10 bg-white/45 dark:bg-white/23', $attrs.class as string)" @animationend="animationEnd" />
</template>