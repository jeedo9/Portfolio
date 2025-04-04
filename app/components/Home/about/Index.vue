<script setup lang="ts">
import useObserver from '~/composables/useObserver';
import type { SectionAbout } from './dataAbout';
import { twMerge } from 'tailwind-merge';
import type { SectionsProps } from '../index.types';

 


type AboutProps = SectionAbout & SectionsProps
const {observe} = defineProps<AboutProps>()

observe && useObserver((entries, observer) => {
entries.forEach(entry => {


  if (entry.isIntersecting) {

    entry.target.classList.add('animate-fade-in')
    observer.unobserve(entry.target)
  }

})},  'me', undefined, {
threshold: .2
})
</script>

<template>
       <section id="about" :class="twMerge('flex justify-center flex-col items-center gap-y-10', $attrs.class as string)">
        <div class="flex justify-center items-center gap-4 flex-col">
          <h2 id="about-me" aria-describedby="me">{{ title }}</h2>
          <h3 id="who-i-am" aria-describedby="me" class="sub-title">{{ subtitle }}</h3>
        </div>

          <q id="me" aria-labelledby="who-i-am about-me" style="quotes: none;" :class="['text-balance font-lato  text-center text-lg shadow-md sm:text-xl leading-relaxed border-2 border-double px-5 py-14.5 sm:py-18 md:py-20 rounded-lg hover:shadow-lg transition-shadow', {'opacity-0' : observe}]" v-html="about"/>
       
      </section>
</template>