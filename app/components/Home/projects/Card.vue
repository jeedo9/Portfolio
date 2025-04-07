<script setup lang="ts">
import throttle from 'lodash.throttle';
import type { Project } from './dataProjects';


type CardProps = Project & {
    reverse?: boolean
}
const {stack} = defineProps<CardProps>()


const maxStack = ref<number>(4)



onMounted(() => {

  const handleResize = () => {
    const windowWidth = window.innerWidth
    const md = 768;
    const lg = 1024;
    if (windowWidth >= md && windowWidth <= lg) maxStack.value = 3
    else if (windowWidth > lg) maxStack.value = 4
    else if (windowWidth < md) maxStack.value = stack.length
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
              <ul role="note" aria-roledescription="technologies used for this project" class="flex justify-start md:gap-y-0 gap-3 max-w-max md:max-w-max sm:max-w-4/5 md:justify-center md:flex-nowrap flex-wrap items-center md:gap-x-2 md:text-base sm:text-sm text-xs">
                <UiBadgesBadge v-for="item in stack.slice(0, maxStack)" :key="item" >{{item}}</UiBadgesBadge>
      
              </ul>
              <span tabindex="0" aria-describedby="other-techno" :class="['relative group cursor-default', {'hidden': !stack.slice(maxStack).length}]" role="complementary">
                <UiTooltipsTooltipSecondary id="other-techno" aria-roledescription="This is the other technologies used for this project">
                  {{ stack.slice(maxStack).join(', ') }}
                </UiTooltipsTooltipSecondary>
                {{ stack.slice(maxStack).length ? ('+' + stack.slice(maxStack).length) : '' }}
              </span>
            </div>
            <div class="flex justify-center items-center gap-x-2">
              <UiButtonsButtionIcon show-ripple :to="view.githubLink" class="*:hover:scale-107" tag="link" icon-name="mynaui:brand-github" icon-slug="github" />

            <UiButtonsButtionIcon show-ripple :to="view.liveLink" :aria-disabled="!view.isLive()" :class="['*:hover:scale-107', {'disabled': !view.isLive()}]" tag="link" icon-name="mynaui:external-link" icon-slug="external link" />
             

            </div>
          
            </div>
      
          </div>
          <NuxtImg  :src="view.image.src" class="w-[45%] lg:w-2/5 grayscale-100 hover:grayscale-0 transition-all  md:inline-block hidden" :alt="view.image.name" />
    </div>
</template>