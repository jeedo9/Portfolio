<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

export interface ResumeAndThemeButtonsProps  {

  animation: string,
  delay: [btn1 : string, btn2 :  string]


}
defineProps<ResumeAndThemeButtonsProps>()

</script>

<template>
      <div :class="twMerge('justify-center items-center gap-x-5 flex', $attrs.class as string)">

          <UiButtonsButton show-ripple  :style="{animationDelay: delay[0]}" :class="animation">Resume</UiButtonsButton>
          <UiButtonsThemeToggle :style="{animationDelay: delay[1]}" :class="animation"   />

        </div>
</template>