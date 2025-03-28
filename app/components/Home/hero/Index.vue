<script setup lang="ts">
import type { SectionHero } from './dataHero';
import { twMerge } from 'tailwind-merge';
import { _navLinks } from '~/components/header/navlinks/dataNavLinks';

 


type HeroProps = SectionHero & {
  delaySubtitle?: string,
  delayTitle?: string
}
const {title, delaySubtitle = getAnimationDelay(_navLinks.length + 3) ,delayTitle = getAnimationDelay(_navLinks.length + 4)} = defineProps<HeroProps>()

let firstTitle: string;
let secondTitle: string;

if (title.includes(', ')) {
  const [title1, title2] = title.split(', ', 2);
  
  
  firstTitle =  title1 || ''; 
  secondTitle = title2 || ''



}


</script>


<template>
          <section :class="twMerge('flex justify-center items-center', $attrs.class as string)">
        <div class="flex justify-center items-center flex-col gap-y-5">
          <p class="md:text-2xl text-xl bg-gradient-2 animate-slide-up opacity-0" :style="{animationDelay: delaySubtitle}">{{ subtitle }}</p>
          <p class="md:text-5xl sm:text-4xl text-3xl  text-center leading-snug bg-gradient-1 animate-slide-up opacity-0" :style="{animationDelay: delayTitle}">{{ firstTitle }} <br> {{ secondTitle }} </p>
        </div>
      </section>
</template>