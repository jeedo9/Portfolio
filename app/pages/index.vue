<script setup lang="ts">

  import { sectionAbout } from '~/components/Home/about/dataAbout';
  import { sectionSkills } from '~/components/Home/skills/dataSkills';
  import { sectionProjects } from '~/components/Home/projects/dataProjects';
  import { sectionHero } from '~/components/Home/hero/dataHero';
import { sectionContact } from '~/components/Home/contact/dataContact';

definePageMeta({
  name: 'Home'
})


</script>

<template>
   
    <main class="container">
      <HomeHero v-bind="sectionHero" />
      <HomeAbout v-bind="sectionAbout" />
      <HomeSkills v-bind="sectionSkills" />
      <HomeProjects v-bind="sectionProjects" />
      <HomeContact v-bind="sectionContact" />


    </main>
</template>
