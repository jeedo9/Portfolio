<script setup lang="ts">
import throttle from 'lodash.throttle';
import type { Project } from './dataProjects';


type CardProps = Project & {
    reverse?: boolean
}
defineProps<CardProps>()


const maxStack = ref<3 | 4>(4)



onMounted(() => {

  const handleResize = () => {
    const windowWidth = window.innerWidth
    const md = 768;
    const lg = 1024;
    if (windowWidth >= md && windowWidth <= lg) maxStack.value = 3
    else if (windowWidth > lg || windowWidth < md) maxStack.value = 4
  }

  const handleResizeThrottled = throttle(handleResize, 500)
  window.addEventListener('resize', handleResizeThrottled)
})

</script>

<template>
    
    <div :class="['flex justify-center items-center gap-x-5 focus-visible:outline-0', {'flex-row-reverse': reverse}]" tabindex="0">
    <div class="flex flex-col justify-center items-start gap-y-6 ">
            <h4 :id="title" class="h3 bg-gradient-1 text-shadow sm:w-max w-full text-center" :aria-describedby="`project-description-${title}`"  >{{ title }}</h4>
            <p :id="`project-description-${title}`" :aria-labelledby="title" class="bg-muted/50 hover:bg-muted/70 dark:hover:bg-muted/60 transition-[background-color] shadow-md p-7 text-pretty border-border border-[1.5px] border-double bg-clip-padding rounded-md"><span class="underline underline-offset-[3px] hover:underline-offset-[4.5px] transition-[text-underline-offset] decoration-from-font font-medium italic">{{title}}</span> {{ description }}
            </p>

            <div class="flex flex-col justify-center items-start md:items-end w-full pl-2 md:pr-2 gap-y-4.5 md:gap-y-6">
              <div class="flex justify-start md:justify-end items-center w-full gap-x-3">
              <ul role="note" aria-roledescription="technologies used for this project" class="flex justify-center items-center gap-x-2 md:text-base sm:text-sm text-xs">
                <UiBadgesBadge v-for="item in stack.slice(0, maxStack)" :key="item" >{{item}}</UiBadgesBadge>
      
              </ul>
              <span role="complementary" aria-roledescription="This is the other technologies used for this project" :data-complementary="stack.slice(maxStack).join(', ')" class="before:content-[attr(data-complementary)] before:whitespace-nowrap before:border-border/80 before:border-[.7px] before:text-muted dark:before:text-background cursor-default before:shadow before:absolute relative before:-top-8 before:text-[13px] before:bg-foreground dark:before:bg-border before:px-2 before:rounded before:right-1/2 before:translate-x-1/2 md:before:translate-x-0 md:before:-right-0.5 before:scale-0 before:origin-bottom empty:hidden md:before:origin-bottom-right hover:before:scale-100 hover:before:delay-450 before:transition-transform">{{ stack.slice(maxStack).length ? '+' + stack.slice(maxStack).length : '' }}</span>
            </div>
            <div class="flex justify-center items-center gap-x-2">
              <UiButtonsButtionIcon show-ripple :to="view.githubLink" class="*:hover:scale-107" tag="link" icon-name="mynaui:brand-github" icon-slug="github" />

            <UiButtonsButtionIcon show-ripple :to="view.liveLink" :class="['*:hover:scale-107', {'disabled': !view.isLive()}]" tag="link" icon-name="mynaui:external-link" icon-slug="external link" />
             

            </div>
          
            </div>
      
          </div>
          <NuxtImg  :src="view.image.src" class="w-2/5 grayscale-100 hover:grayscale-0 transition-all  md:inline-block hidden" :alt="view.image.name" />
    </div>
</template>