<script setup lang="ts">
import Card from './Card.vue';
import type { SectionProjects } from './dataProjects';
import { twMerge } from 'tailwind-merge';

 

type ProjectsProps = SectionProjects

 defineProps<ProjectsProps>()


</script>


<template>
          <section id="projects" :class="twMerge('flex flex-col justify-start items-center gap-y-14 overflow-x-visible', $attrs.class as string)">
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h2 >{{ title }}</h2>
          <h3 class="sub-title">{{ subtitle }}</h3>
        </div>
        <Card  v-for="(project, i) in projects" :key="project.title" :reverse="i % 2 === 0" v-bind="project" />
      </section>
</template>