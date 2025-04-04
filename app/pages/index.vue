<script setup lang="ts">

  import { sectionAbout } from '~/components/Home/about/dataAbout';
  import { sectionSkills } from '~/components/Home/skills/dataSkills';
  import { sectionProjects } from '~/components/Home/projects/dataProjects';
  import { sectionHero } from '~/components/Home/hero/dataHero';
import { sectionContact } from '~/components/Home/contact/dataContact';
import useObserver from '~/composables/useObserver';
import useNavLinksOnScroll from '~/composables/useNavLinksOnScroll';
import { navLinks } from '~/components/header/dataHeader';


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


</script>

<template>
   
    <main class="container">
      <HomeHero v-bind="sectionHero" />
      <HomeAbout observe v-bind="sectionAbout" />
      <HomeSkills observe  v-bind="sectionSkills" />
      <HomeProjects observe  v-bind="sectionProjects" />
      <HomeContact v-bind="sectionContact" />


    </main>

</template>