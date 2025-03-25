<script setup lang="ts">
import type { ClassName } from '~/types';
import type { SectionContact } from './dataContact';
import { twMerge } from 'tailwind-merge';

 


type ContactProps = ClassName & SectionContact
const {className = ''} = defineProps<ContactProps>()

</script>

<template>
          <section id="contact" :class="twMerge('flex justify-center items-center flex-col gap-y-10', className)" style="min-height: var(--container-height);" >
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h3 class="sub-title">{{ subtitle }}</h3>
          <h2 id="get-touch" >{{ title }}</h2>
        </div>

       
        <p aria-labelledby="get-touch" class="text-center text-balance leading-relaxed sm:text-base text-sm">{{ content }}</p>


      
        <UiButtonsButtonAnimationTwo class-name="shadow-sm shadow-accent/50" >Let's connect</UiButtonsButtonAnimationTwo>
       
      </section>
</template>