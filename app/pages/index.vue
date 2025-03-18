<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import FullStack from '../assets/lotties/FullStack.json'
</script>




<template>
    <header class="flex justify-center items-center h-(--header-height) z-50 sticky top-0 backdrop-blur-md shadow-md">
      <div class="lg:max-w-6xl transition-[max-width] duration-500 max-w-4xl px-7 w-full flex justify-between items-center h-4/5">
        <h1 class="text-accent font-agustina text-3xl relative before:content-[''] before:absolute before:h-px before:w-0 before:bg-accent before:right-0 before:bottom-1 hover:before:w-[105%] hover:before:right-auto hover:before:left-0 before:transition-all  before:duration-300 opacity-0 animate-slide-left" style="animation-delay: var(--animation-delay)">Pierre</h1>
      <div class="justify-center items-center gap-x-16 md:flex hidden">
        <nav>
          <ul class="justify-center items-center gap-x-10 flex">
            <li class="hover:text-accent animate-slide-down-left opacity-0 before:absolute before:-bottom-1 relative before:h-px before:scale-0 hover:before:scale-100 before:rounded before:w-full before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:bg-accent" style="animation-delay: calc(var(--animation-delay) + 200ms);"><a href="#about">About</a></li>
            <li class="hover:text-accent animate-slide-down-left opacity-0 before:absolute before:-bottom-1 relative before:h-px before:scale-0 hover:before:scale-100 before:rounded before:w-full before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:bg-accent" style="animation-delay: calc(var(--animation-delay) + 400ms);"><a href="#skills">Skills</a></li>
            <li class="hover:text-accent animate-slide-down-left opacity-0 before:absolute before:-bottom-1 relative before:h-px before:scale-0 hover:before:scale-100 before:rounded before:w-full before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:bg-accent" style="animation-delay: calc(var(--animation-delay) + 600ms);"><a href="#projects">Projects</a></li>
            <li class="hover:text-accent animate-slide-down-left opacity-0 before:absolute before:-bottom-1 relative before:h-px before:scale-0 hover:before:scale-100 before:rounded before:w-full before:opacity-0 hover:before:opacity-100 before:transition before:duration-300 before:bg-accent" style="animation-delay: calc(var(--animation-delay) + 800ms);"><a href="#contact">Contact</a></li>
          </ul>

        </nav>
        <div class="justify-center items-center gap-x-5 flex">
          <button class="cursor-pointer border-accent border-2 tracking-tight border-double px-3.5 py-1 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color] duration-300 animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 1s);">Resume</button>
          <button class="cursor-pointer size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40 transition-[background-color] duration-300 animate-slide-down-left opacity-0" style="animation-delay: calc(var(--animation-delay) + 1.2s);"><Icon aria-label="dark mode" name="mynaui:moon-star-solid" /> </button>
        </div>
      </div>
      <button class="flex justify-center items-end gap-y-1.5 cursor-pointer flex-col md:hidden w-5 h-1/4 relative group"> 
        <span class="w-6 h-[2px] rounded bg-accent inline-block absolute top-0 group-hover:rotate-45 group-hover:top-1/2 transition-all duration-200"></span>
        <span class="w-5 h-[2px] rounded bg-accent inline-block absolute top-1/2 group-hover:-translate-x-[110%] group-hover:opacity-0 group-hover:-rotate-45   duration-500 transition-all"></span>
        <span class="w-4 h-[2px] rounded bg-accent inline-block absolute top-full group-hover:-rotate-45 group-hover:top-1/2  group-hover: transition-all duration-200 group-hover:w-6"></span>
      </button>

      </div>

      <div class="hidden bg-background absolute top-[115%] z-50 h-[300px] w-10/12 rounded-md shadow-xl border border-border px-10 animate-pop md:hidden">
        <nav class="h-10/12">
          <ul class="justify-center items-start gap-y-5 hover:gap-y-4 transition-[gap] duration-300 flex flex-col h-full">
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: var(--animation-delay);" ><a href="#about">About</a></li>
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: calc(var(--animation-delay) + 200ms);"><a href="#skills">Skills</a></li>
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: calc(var(--animation-delay) + 400ms);"><a href="#projects">Projects</a></li>
            <li class="hover:text-accent animate-slide-down-right opacity-0" style="animation-delay: calc(var(--animation-delay) + 600ms);"><a href="#contact">Contact</a></li>
          </ul>


        </nav>
        <div class="flex justify-between items-center gap-x-5">
          <button class="cursor-pointer border-accent border-2 tracking-tight border-double px-3.5 py-1.5 rounded-md hover:bg-accent/25 bg-clip-padding transition-[background-color] duration-300 animate-slide-down opacity-0" style="animation-delay: calc(var(--animation-delay) + 800ms)">Resume</button>
          <button class="cursor-pointer size-7 flex justify-center items-center rounded-md bg-muted/22 hover:bg-muted/40  transition-[background-color] duration-300 animate-slide-down opacity-0" style="animation-delay: calc(var(--animation-delay) + 1s)"><Icon name="mynaui:moon-star-solid" /> </button>
        </div>
      </div>


   
    </header>





    <main class="container">
      <section class="flex justify-center items-center">
        <div class="flex justify-center items-center flex-col gap-y-5">
          <p class="md:text-2xl text-xl bg-gradient-to-r bg-clip-text from-muted to-foreground text-transparent animate-slide-up opacity-0" style="animation-delay: calc(var(--animation-delay) + 1.4s);">Hello there !</p>
          <p class="md:text-5xl sm:text-4xl text-3xl  text-center leading-snug bg-gradient-to-r from-foreground from-15% via-muted to-foreground bg-clip-text text-transparent animate-slide-up opacity-0" style="animation-delay: calc(var(--animation-delay) + 1.6s);">My name is Pierre Matar <br />I'm a jr full stack developer </p>
        </div>
      </section>
      <section class="flex justify-start flex-col items-center gap-y-10 my-8" id="about">
        <div class="flex justify-center items-center gap-4 flex-col">
          <h1 class="text-3xl">About Me</h1>
          <p class="text-2xl bg-gradient-to-r from-muted to-foreground bg-clip-text text-transparent dark:drop-shadow-[0_1px_2px_var(--color-muted)]">Who i am ?</p>
        </div>

          <q style="quotes: none;" class="text-balance text-center text-lg sm:text-xl leading-relaxed border-2 border-double px-5 py-14.5 sm:py-18 md:py-20 rounded-lg ">Hi, my name is Pierre ! I'm a student at <a href="https://www.esiee.fr/" target="_blank" class="text-accent">ESIEE Paris</a> as well as a full stack developer in my free time. My main focus these days is expanding my knowledge of web development and continuously improving my skills to become a better developer every day. I'm always eager to explore new technologies, take on challenges, and build innovative projects that enhance my understanding of the field.
          </q>
       
  
      </section>
      <section class="flex justify-center items-center flex-col gap-y-14" id="skills">
        <div class="flex justify-center items-center gap-4 flex-col">
          <h2 class="text-3xl">What I do</h2>
          <h3 class="text-2xl bg-gradient-to-r from-muted to-foreground bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-[0_1px_2px_var(--color-muted)]">Full Stack development</h3>
          <p class="mt-5 font-medium overline decoration-2 decoration-double decoration-muted md:text-lg text-base">I know, I use and I continue to learn</p>
        </div>
        <div class="flex justify-center items-center" style="--h-full: 510px; height: var(--h-full);">
          <Vue3Lottie aria-label="programming animation" class="md:inline-block hidden" :animation-data="FullStack" />
          
          <ul class="flex justify-center items-center gap-x-4 sm:gap-x-6 gap-y-3 sm:gap-y-5 max-w-11/12 sm:max-w-10/12 md:max-w-1/2 flex-wrap">
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs dark:inset-shadow-sm rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] before:delay-[350ms] after:delay-[350ms] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
          <Icon aria-label="html" size="50" name="devicon:html5" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon  size="50" name="devicon:css3" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:sass" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:tailwindcss" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:typescript" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
          <Icon  size="50" name="devicon:react" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:vuejs" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:nodejs" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:mongodb" />

            </li>
            <li class="bg-gradient-to-b from-muted/55  inset-shadow-border shadow-md hover:shadow-lg inset-shadow-xs rounded-full shadow-border/50 size-24  flex justify-center items-center border-[.8px] border-border transition-[box-shadow] duration-300 before:content-['html'] relative before:absolute before:bg-foreground before:text-muted before:px-3 before:py-1 before:rounded before:-top-[2.6rem] after:content-[''] after:absolute after:border-t-8 after:border-t-foreground after:border-r-8 after:border-l-8 before:scale-0 after:scale-0 after:border-r-transparent after:border-l-transparent after:-top-[.8rem] hover:before:scale-100 hover:after:scale-100 before:transition-transform after:transition-transform after:duration-300 before:duration-300 before:origin-bottom after:origin-top">
              <Icon size="50" name="devicon:firebase" />

            </li>
          </ul>
        </div>
        
    
      </section>
      <section class="flex flex-col justify-center items-center gap-y-14" id="projects">
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h1 class="text-3xl">My Projects</h1>
          <p class="text-2xl bg-gradient-to-r from-muted to-foreground bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-[0_1px_2px_var(--color-muted)]">Projects that I've built</p>
        </div>

        
    
        <div class="flex flex-row-reverse justify-center items-center gap-x-5">
          <div class="flex flex-col justify-center items-start gap-y-6 ">
            <h2 class="text-lg sm:text-xl">vueMovie</h2>
            <p class="bg-muted/50 hover:bg-muted/70 transition-[background-color] duration-300 p-7 text-pretty border-border border-[1.5px] border-double bg-clip-padding rounded-md"><span class="underline underline-offset-[3px] hover:underline-offset-4 transition-[text-underline-offset] duration-300 decoration-from-font font-medium italic">vueMovie</span> is a movie application that allows users to explore movie and actors as well as to search specific movie.
              This application has user authentication, so a user can be able to favorite a movie or put it in a watch list.
            </p>

            <div class="flex flex-col justify-center items-start md:items-end w-full pl-2 md:pr-2 gap-y-4.5 md:gap-y-2">
              <div class="flex justify-start md:justify-end items-center w-full gap-x-3">
              <ul class="flex justify-center items-center gap-x-2 md:text-base sm:text-sm text-xs">
                <li class="bg-foreground  border-border/80 border-[.7px] text-muted px-4 py-0.5 rounded-full shadow shadow-foreground hover:scale-95 transition-transform duration-300">Vue</li>
                <li class="bg-foreground  border-border/80 border-[.7px] text-muted px-4 py-0.5 rounded-full shadow shadow-foreground hover:scale-95 transition-transform duration-300">TypeScript</li>
                <li class="bg-foreground  border-border/80 border-[.7px] text-muted px-4 py-0.5 rounded-full shadow shadow-foreground hover:scale-95 transition-transform duration-300">Tailwind</li>
                <li class="bg-foreground border-border/80 border-[.7px] text-muted px-4 py-0.5 rounded-full shadow shadow-foreground hover:scale-95 transition-transform duration-300">Node</li>
      
              </ul>
              <span class="before:content-['Express,Firebase'] before:border-border/80 before:border-[.7px] before:text-muted cursor-default before:shadow before:absolute relative before:-top-6 before:text-[13px] before:bg-foreground before:px-2 before:rounded before:right-1/2 before:translate-x-1/2 before:scale-0 before:origin-bottom hover:before:scale-100 before:transition-transform before:duration-300">+2</span>
            </div>
           <Icon class="cursor-pointer hover:text-muted transition-[color] duration-300" name="mynaui:brand-github" />
            </div>
      
          </div>
          <img class="w-2/5 grayscale-100 hover:grayscale-0 transition-all duration-300 md:inline-block hidden" src="/images/AlimConfiance.png" alt="alimconfiance application" />
        </div>
      </section>
      <section id="contact" class="flex justify-center items-center flex-col gap-y-10" style="min-height: var(--container-height);">
        <div class="flex flex-col justify-center items-center gap-y-4">
          <h1 class="text-3xl">Get In Touch</h1>
          <p class="text-2xl  bg-gradient-to-r from-muted to-foreground bg-clip-text text-transparent drop-shadow-sm dark:drop-shadow-[0_1px_2px_var(--color-muted)]">What's next</p>
        </div>
       
        <p class="text-center text-balance leading-relaxed sm:text-base text-sm">I'm currently looking for new opportunities. Let me know if you want to talk about a potential collaboration.</p>
        <button class="cursor-pointer border-accent border-2 tracking-tight border-double w-[130px] h-[42px] rounded-md hover:bg-accent/25 transition-[background-color] duration-300 before:content-[''] before:absolute relative before:bg-conic before:w-[1000%] before:h-2 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-spin overflow-hidden bg-clip-padding group"><span class="absolute inset-[2px] bg-background rounded-[inherit]  flex justify-center items-center group-hover:text-accent group-hover:font-medium transition-all duration-700">Let's connect</span></button>
      </section>
    </main>
    <footer>
      <div class="flex justify-around items-center text-lg h-(--footer-height)" >
        <p class="font-agustina text-accent text-2xl">
        Pierre
      </p>
      <div class="flex justify-center items-center gap-x-3">
       <Icon aria-label="github" class="cursor-pointer hover:text-accent transition-[color] duration-300" name="mynaui:brand-github" /> 
      <Icon aria-label="linkedin" class="cursor-pointer hover:text-accent transition-[color] duration-300" name="mynaui:brand-linkedin" /> 
       <Icon aria-label="mail" class="cursor-pointer hover:text-accent transition-[color] duration-300" name="mynaui:envelope" /> 
      </div>

      </div>
    
    </footer>
</template>
