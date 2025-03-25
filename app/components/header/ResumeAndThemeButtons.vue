<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { ClassName } from '~/types';

export interface ResumeAndThemeButtonsProps extends ClassName {

  animation: string,
  delay: [btn1 : string, btn2 :  string]


}
  const props =  defineProps<ResumeAndThemeButtonsProps>()

  const {className = ''} = props




</script>

<template>
      <div :class="twMerge('justify-center items-center gap-x-5 flex', className)">
          <UiButtonsButton  :style="{animationDelay: delay[0]}" :class-name="animation">Resume</UiButtonsButton>
          <UiButtonsThemeToggle :style="{animationDelay: delay[1]}" :class-name="animation"   />

        </div>
</template>