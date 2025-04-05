<script setup lang="ts">
import type { SectionHero } from './dataHero';
import { twMerge } from 'tailwind-merge';
import type { InjectIsMobile } from '~/app.vue';
import { IS_MOBILE_KEY } from '#imports';

 


type HeroProps = SectionHero & {
  delaySubtitle: string,
  delayTitle: string,
  delayBtnMobile: string
}
const {title} = defineProps<HeroProps>()

let firstTitle: string = '';
let secondTitle: string = '';

if (title.includes(', ')) {
  const [title1, title2] = title.split(', ', 2);
  firstTitle =  title1 || ''; 
  secondTitle = title2 || '';
}

const isMobile = inject<InjectIsMobile>(IS_MOBILE_KEY)
</script>


<template>
          <section :class="twMerge('flex opacity-100 justify-center items-center', $attrs.class as string)">
        <div class="flex justify-center items-center flex-col gap-y-5">
          <p class="md:text-2xl text-xl bg-gradient-2 animate-slide-up opacity-0" :style="{animationDelay: delaySubtitle}">{{ subtitle }}</p>
          <p class="md:text-5xl sm:text-4xl text-3xl  text-center leading-snug bg-gradient-1 animate-slide-up opacity-0" :style="{animationDelay: delayTitle}">{{ firstTitle || title }} <br> {{ secondTitle }} </p>
          <UiButtonsButton v-if="isMobile" tag="link" to="#projects" class="sm:px-4 px-3.5 py-2.5 sm:py-3.5 mt-9 hover:text-current  opacity-0 animate-slide-up " :style="{animationDelay: delayBtnMobile}" show-ripple>Check out my work</UiButtonsButton>
        </div>
      </section>
</template>