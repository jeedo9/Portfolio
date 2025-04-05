<script setup lang="ts">

  import { sectionAbout } from '~/components/Home/about/dataAbout';
  import { sectionSkills } from '~/components/Home/skills/dataSkills';
  import { sectionProjects } from '~/components/Home/projects/dataProjects';
  import { sectionHero } from '~/components/Home/hero/dataHero';
import { sectionContact } from '~/components/Home/contact/dataContact';
import useObserver from '~/composables/useObserver';
import useNavLinksOnScroll from '~/composables/useNavLinksOnScroll';
import { navLinks } from '~/components/header/dataHeader';
import type { InjectIsMobile } from '~/app.vue';


definePageMeta({
  name: 'Home'
})
const title = useRoute().meta.name

useHead({
  title
})

useSeoMeta({
  ogTitle: title,
  ogImage: '/images/OGImg.png',
  ogImageType: 'image/png',
  ogImageAlt: 'Website Home Page',
  twitterImage: '/images/OGImg.png',
  twitterImageAlt: 'Website Home Page',
  twitterImageType: 'image/png'
})


useObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-section')
      observer.unobserve(entry.target)
    }
  })
  },  'section:not(section:nth-child(1))', true, {
threshold: .3
})

useNavLinksOnScroll(navLinks, true, true)


const isMobile = inject<InjectIsMobile>(IS_MOBILE_KEY)

const delaySubtitle = isMobile?.value ? getAnimationDelay(4) : getAnimationDelay(navLinks.length + 3)

const delayTitle = isMobile?.value ? getAnimationDelay(5) : getAnimationDelay(navLinks.length + 4)


</script>

<template>
   
    <main class="container">
      <HomeHero :delay-btn-mobile="getAnimationDelay(6)" :delay-title :delay-subtitle v-bind="sectionHero" />
      <HomeAbout observe v-bind="sectionAbout" />
      <HomeSkills observe  v-bind="sectionSkills" />
      <HomeProjects observe  v-bind="sectionProjects" />
      <HomeContact v-bind="sectionContact" />


    </main>

</template>