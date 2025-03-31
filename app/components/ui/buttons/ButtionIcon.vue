<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { BtnProps } from './Button.vue';


type ButtonIconProps = {
    iconName: string,
    iconSlug: string
} & BtnProps
const {iconName: name,iconSlug: ariaLabel,...props} =  defineProps<ButtonIconProps>()

</script>


<template>
    <UiButtonsButton :class="twMerge('size-7 flex justify-center items-center bg-muted/22 hover:bg-muted/40 transition-colors px-0 py-0 border-0 border-none tracking-normal static', $attrs.class as string)" v-bind="props" >
        <Icon aria-hidden="false" :name :aria-label />
    </UiButtonsButton>
</template>