<script setup lang="ts">
import type { SectionContact } from './dataContact';
import { twMerge } from 'tailwind-merge';

 


type ContactProps = SectionContact
 defineProps<ContactProps>()

</script>

<template>
          <section id="contact" :class="twMerge('flex justify-center items-center flex-col gap-y-10', $attrs.class as string)" style="min-height: var(--container-height);" >
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h3 class="sub-title">{{ subtitle }}</h3>
          <h2 id="get-touch" >{{ title }}</h2>
        </div>

       
        <p aria-labelledby="get-touch" class="text-center text-balance leading-relaxed sm:text-base text-sm">{{ content }}</p>


      
        <UiButtonsButtonAnimationTwo class="shadow-sm shadow-accent/50 hover:font-semibold" >Let's connect</UiButtonsButtonAnimationTwo>
       
      </section>
</template>