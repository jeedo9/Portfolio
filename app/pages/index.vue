<script setup lang="ts">

  import { sectionAbout } from '~/components/Home/about/dataAbout';
  import { sectionSkills } from '~/components/Home/skills/dataSkills';
  import { sectionProjects } from '~/components/Home/projects/dataProjects';
  import { sectionHero } from '~/components/Home/hero/dataHero';
import { sectionContact } from '~/components/Home/contact/dataContact';
import useObserver from '~/composables/useObserver';

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
</script>

<template>
   
    <main class="container">
      <HomeHero  v-bind="sectionHero" />
      <LazyHomeAbout observe v-bind="sectionAbout" />
      <LazyHomeSkills observe  v-bind="sectionSkills" />
      <LazyHomeProjects observe  v-bind="sectionProjects" />
      <LazyHomeContact v-bind="sectionContact" />
    </main>
</template>