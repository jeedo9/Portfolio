<script setup lang="ts">
import useObserver from '~/composables/useObserver';
import type { SectionProjects } from './dataProjects';
import { twMerge } from 'tailwind-merge';
import type { SectionsProps } from '../index.types';

 

type ProjectsProps = SectionProjects & SectionsProps

 const {observe} = defineProps<ProjectsProps>()


  if (observe) useObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

          entry.target.classList.add('animate-fade-in')
        observer.unobserve(entry.target)
      }
    })},  '.card', true, {
threshold: .4
})

</script>


<template>
          <section id="projects" :class="twMerge('flex flex-col sm:my-0 my-20 justify-start items-center gap-y-14 overflow-x-visible', $attrs.class as string)">
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h2 >{{ title }}</h2>
          <h3 class="sub-title">{{ subtitle }}</h3>
        </div>
        <HomeProjectsCard  v-for="(project, i) in projects" :key="project.title" :class="['card', {'opacity-0' : observe}]" :reverse="i % 2 === 0" v-bind="project" />
      </section>
</template>