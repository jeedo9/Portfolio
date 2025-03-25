<script setup lang="ts">
import type { ClassName } from '~/types';
import type { SectionAbout } from './dataAbout';
import { twMerge } from 'tailwind-merge';

 


type AboutProps = SectionAbout & ClassName
const {className = ''} =defineProps<AboutProps>()

</script>

<template>
       <section id="about" :class="twMerge('flex  justify-start flex-col items-center gap-y-10', className)">
        <div class="flex justify-center items-center gap-4 flex-col">
          <h2 id="about-me" aria-describedby="me">{{ title }}</h2>
          <h3 id="who-i-am" aria-describedby="me" class="sub-title">{{ subtitle }}</h3>
        </div>

          <q id="me"  ref="about-me" aria-labelledby="who-i-am about-me" style="quotes: none;" class="text-balance font-lato  text-center text-lg shadow-md sm:text-xl leading-relaxed border-2 border-double px-5 py-14.5 sm:py-18 md:py-20 rounded-lg hover:shadow-lg transition-shadow " v-html="about"/>
       
      </section>
</template>