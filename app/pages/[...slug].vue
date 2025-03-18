<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import NotFound from '../assets/lotties/NotFound.json'
window.document.documentElement.classList.add('dark')

</script>

<template>
       <header class="flex justify-center items-center h-(--header-height) z-50 sticky top-0 backdrop-blur-md shadow-md">
      <div class="max-w-6xl w-full flex justify-between items-center px-7 h-4/5">
        <h1 class="text-accent font-agustina text-3xl relative before:content-[''] before:absolute before:h-px before:w-0 before:bg-accent before:right-0 before:bottom-1 hover:before:w-[105%] hover:before:right-auto hover:before:left-0 before:transition-all  before:duration-300 opacity-0 animate-slide-left" style="animation-delay: var(--animation-delay)">Pierre</h1>
      <div class="justify-center items-center gap-x-16 md:flex hidden">
        <nav>
          <ul class="justify-center items-center gap-x-10 flex">
            <li class="hover:text-accent animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 200ms);"><a href="#about">About</a></li>
            <li class="hover:text-accent animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 400ms);"><a href="#skills">Skills</a></li>
            <li class="hover:text-accent animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 600ms);"><a href="#projects">Projects</a></li>
            <li class="hover:text-accent animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 800ms);"><a href="#contact">Contact</a></li>
          </ul>

        </nav>
        <div class="justify-center items-center gap-x-5 flex">
          <button class="cursor-pointer border-accent border-2 tracking-tight border-double px-3.5 py-1 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color] duration-300 animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 1s);">Resume</button>
          <button class="cursor-pointer size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40 transition-[background-color] duration-300 animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 1.2s);"><Icon name="mynaui:moon-star-solid" /> </button>
        </div>
      </div>
      <button class="flex justify-center items-end gap-y-1.5 cursor-pointer flex-col md:hidden w-5 h-1/4 relative group"> 
        <span class="w-6 h-[2px] rounded bg-accent inline-block absolute top-0 group-hover:rotate-45 group-hover:top-1/2 transition-all duration-200"></span>
        <span class="w-5 h-[2px] rounded bg-accent inline-block absolute top-1/2 group-hover:-translate-x-[110%] group-hover:opacity-0 group-hover:-rotate-45   duration-500 transition-all"></span>
        <span class="w-4 h-[2px] rounded bg-accent inline-block absolute top-full group-hover:-rotate-45 group-hover:top-1/2  group-hover: transition-all duration-200 group-hover:w-6"></span>
      </button>

      </div>

      <div class="bg-background absolute top-[115%] z-50 h-[300px] w-10/12 rounded-md shadow-xl border border-border px-10 animate-pop md:hidden">
        <nav class="h-10/12">
          <ul class="justify-center items-start gap-y-5 hover:gap-y-4 transition-[gap] duration-300 flex flex-col h-full">
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: var(--animation-delay);" ><a href="#about">About</a></li>
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: calc(var(--animation-delay) + 200ms);"><a href="#skills">Skills</a></li>
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: calc(var(--animation-delay) + 400ms);"><a href="#projects">Projects</a></li>
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: calc(var(--animation-delay) + 600ms);"><a href="#contact">Contact</a></li>
          </ul>


        </nav>
        <div class="flex justify-between items-center gap-x-5">
          <button class="cursor-pointer border-accent border-2 tracking-tight border-double px-3.5 py-1 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color] duration-300 animate-slide-down opacity-0" style="animation-delay: calc(var(--animation-delay) + 800ms)">Resume</button>
          <button class="cursor-pointer size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40  transition-[background-color] duration-300 animate-slide-down opacity-0" style="animation-delay: calc(var(--animation-delay) + 1s)"><Icon name="mynaui:moon-star-solid" /> </button>
        </div>
      </div>


   
    </header>
    <main class="flex flex-col justify-center items-center gap-y-3 animate-pop" style="transform: scale(0);height: var(--container-height); animation-delay: calc(var(--animation-delay) + 2s);">
        <Vue3Lottie aria-label="404 animation" height="70%" :animation-data="NotFound" />
        <button class="cursor-pointer before:content-[''] before:absolute relative before:inset-0 before:border-accent before:border-double before:rounded-[inherit] hover:before:border-2 hover:before:scale-x-140 before:duration-500 hover:before:scale-y-135 before:transition-all hover:before:opacity-0 border-accent border-2 border-double px-5.5 py-3 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color] duration-300 capitalize tracking-wide">Go back home</button>
        
    </main>
    
    <footer>
      <div class="flex justify-around items-center text-lg" style="min-height: var(--footer-height);">
        <p class="font-agustina text-accent">
        Pierre
      </p>
      <div class="flex justify-center items-center gap-x-3">
       <Icon class="cursor-pointer hover:text-accent transition-[color] duration-300" name="mynaui:brand-github" /> 
      <Icon class="cursor-pointer hover:text-accent transition-[color] duration-300" name="mynaui:brand-linkedin" /> 
       <Icon class="cursor-pointer hover:text-accent transition-[color] duration-300" name="mynaui:envelope" /> 
      </div>

      </div>
    
    </footer>
</template>