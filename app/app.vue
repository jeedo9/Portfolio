<script setup lang="ts">
import Torch from './components/ui/Torch.vue';


export type InjectIsMobile = globalThis.Ref<boolean, boolean>

const mode = useColorMode()

useHead({
  titleTemplate: (title) => {
    return title ? title + " | " + WEBSITE_NAME : WEBSITE_NAME 
  }
})


const {isMobile} = useIsMobile()


provide(IS_MOBILE_KEY, isMobile)

</script>

<template>

  <Torch v-if="mode.value === 'dark' && !isMobile" />
  <NuxtLayout>
    <NuxtPage />


  </NuxtLayout>
  
</template>