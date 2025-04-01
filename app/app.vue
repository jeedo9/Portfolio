<script setup lang="ts">
import Torch from './components/ui/Torch.vue';


const mode = useColorMode()

useHead({
  titleTemplate: (title) => {
    return title ? title + " | " + WEBSITE_NAME : WEBSITE_NAME 
  }
})

const {isMobile} = useIsMobile()

provide('is-mobile', isMobile)

</script>

<template>

  <Torch v-if="mode.value === 'dark'" />
  <NuxtLayout>
    <NuxtPage />


  </NuxtLayout>
  
</template>