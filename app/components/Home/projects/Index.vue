<script setup lang="ts">
import type { ClassName } from '~/types';
import type { SectionProjects } from './dataProjects';
import { twMerge } from 'tailwind-merge';

 

type ProjectsProps = SectionProjects & ClassName

const {className = ''} = defineProps<ProjectsProps>()

const maxStack = ref<3 | 4>(4)



onMounted(() => {
  window.onresize = () => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 768 && windowWidth <= 1024) maxStack.value = 3
    else if (windowWidth > 1024 || windowWidth < 768) maxStack.value = 4
  }


})

</script>


<template>
          <section id="projects" :class="twMerge('flex flex-col justify-start items-center gap-y-14 overflow-x-visible', className)">
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h2 >{{ title }}</h2>
          <h3 class="sub-title">{{ subtitle }}</h3>
        </div>

        <div v-for="(project, i) in projects" :key="project.title" :class="['flex justify-center items-center gap-x-5', {'flex-row-reverse': i % 2 === 0}]">
          <div class="flex flex-col justify-center items-start gap-y-6 ">
            <h4 :id="project.title" class="h3 bg-gradient-1 text-shadow sm:w-max w-full text-center" :aria-describedby="`project-description-${project.title}`" >{{ project.title }}</h4>
            <p :id="`project-description-${project.title}`" :aria-labelledby="project.title" class="bg-muted/50 hover:bg-muted/70 dark:hover:bg-muted/60 transition-[background-color] shadow-md p-7 text-pretty border-border border-[1.5px] border-double bg-clip-padding rounded-md"><span class="underline underline-offset-[3px] hover:underline-offset-[4.5px] transition-[text-underline-offset] decoration-from-font font-medium italic">{{project.title}}</span> {{ project.description }}
            </p>

            <div :class="['flex flex-col justify-center items-start md:items-end w-full pl-2 md:pr-2', {'gap-y-4.5 md:gap-y-2': project.stack.slice(maxStack).length, 'gap-y-6': !project.stack.slice(maxStack).length}]">
              <div class="flex justify-start md:justify-end items-center w-full gap-x-3">
              <ul role="note" aria-roledescription="technologies used for this project" class="flex justify-center items-center gap-x-2 md:text-base sm:text-sm text-xs">
                <UiBadgesBadge v-for="item in project.stack.slice(0, maxStack)" :key="item" >{{item}}</UiBadgesBadge>
      
              </ul>
              <span role="complementary" aria-roledescription="This is the other technologies used for this project" :data-complementary="project.stack.slice(maxStack).join(', ')" class="before:content-[attr(data-complementary)] before:whitespace-nowrap before:border-border/80 before:border-[.7px] before:text-muted dark:before:text-background cursor-default before:shadow before:absolute relative before:-top-6 before:text-[13px] before:bg-foreground dark:before:bg-border before:px-2 before:rounded before:right-1/2 before:translate-x-1/2 md:before:translate-x-0 md:before:-right-0.5 before:scale-0 before:origin-bottom md:before:origin-bottom-right hover:before:scale-100 hover:before:delay-450 before:transition-transform">{{ project.stack.slice(maxStack).length ? '+' + project.stack.slice(maxStack).length : '' }}</span>
            </div>
           <Icon aria-hidden="false" aria-label="github" class="cursor-pointer hover:text-muted transition-[color]" name="mynaui:brand-github" />
            </div>
      
          </div>
          <NuxtImg  :src="project.view.image.src" class="w-2/5 grayscale-100 hover:grayscale-0 transition-all  md:inline-block hidden" :alt="project.view.image.name" />
        </div>
      </section>
</template>