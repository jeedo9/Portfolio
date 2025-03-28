<script setup lang="ts">
import FullStack from '../../../assets/lotties/FullStack.json'
import type { SectionSkills } from './dataSkills';
import { twMerge } from 'tailwind-merge';
import { Vue3Lottie } from 'vue3-lottie';


type SkillsProps = SectionSkills
defineProps<SkillsProps>()


</script>

<template>
         <section id="skills" :class="twMerge('flex justify-start items-center flex-col gap-y-34 md:gap-y-37 lg:gap-y-14', $attrs.class as string)">
        <div class="flex justify-center items-center gap-4 flex-col">
          <h2 aria-describedby="dev animation-prog tech" >{{ title }}</h2>
          <h3 id="dev" class="sub-title">{{ subtitle }}</h3>
          <p id="sentence" class="mt-5 font-semibold overline decoration-2 decoration-double decoration-muted md:text-lg text-base">{{ sentence }}</p>
        </div>
        <div class="flex justify-center items-start lg:items-center" style="--h-full: 510px; height: var(--h-full);">
          <Vue3Lottie id="animation-prog" aria-label="Programming animation" class="lg:inline-block hidden" :animation-data="FullStack" />
          
          <ul id="tech" aria-labelledby="dev" aria-describedby="sentence" class="flex justify-center items-center gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-5 max-w-11/12 sm:max-w-10/12 xl:max-w-[45%] flex-wrap">


          
<UiBadgesBadgeGradient v-for="stack in skills" :key="stack.name" :data-stack="stack.name">
          <Icon :class="{'rounded-md': stack.name.toLowerCase().includes('typescript')}" aria-hidden="false" :aria-label="stack.name" size="50" :name="stack.iconName" />
            </UiBadgesBadgeGradient>
          </ul>
        </div>
        
    
      </section>
</template>