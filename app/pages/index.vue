<script setup lang="ts">

  import { sectionAbout } from '~/components/Home/about/dataAbout';
  import { sectionSkills } from '~/components/Home/skills/dataSkills';
  import { sectionProjects } from '~/components/Home/projects/dataProjects';
  import { sectionHero } from '~/components/Home/hero/dataHero';
import { sectionContact } from '~/components/Home/contact/dataContact';

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

</script>

<template>
   
    <main class="container">
      <HomeHero v-bind="sectionHero" />
      <LazyHomeAbout v-bind="sectionAbout" />
      <LazyHomeSkills v-bind="sectionSkills" />
      <LazyHomeProjects v-bind="sectionProjects" />
      <LazyHomeContact v-bind="sectionContact" />
    </main>
</template>
