<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { TNavLink } from '../ui/NavLink.vue';
import type { Animation } from '~/types';
import NavLinks from '../list/NavLinks.vue';

export interface AppHeaderProps {
  navLinks: TNavLink[],
    navLinksMenu: TNavLink[],
    resumeThemeBtnAnimation?: string,
    resumeThemeBtnAnimationMenu?: string,
    logoName?: string,
    logoDelay?: string,
    logoAnimation?: Animation,
    logoClassName?: string,
    animateShadow?: boolean

}

type Tuple2String = [string, string]


 const {navLinksMenu, navLinks, animateShadow} =  defineProps<AppHeaderProps>()


 
 const delayNavLinks = Array.of(getAnimationDelay(navLinks.length + 1 ), getAnimationDelay(navLinks.length + 2)) as Tuple2String

 const delayNavLinksMenu = Array.of(getAnimationDelay(navLinksMenu.length + 1), getAnimationDelay( navLinksMenu.length + 2)) as Tuple2String;

 const showShadow = ref(false);

 const showMenu = ref(false)

 const closeMenu = () => { showMenu.value = false}

 const toggleMenu = () => {
  

  showMenu.value = !showMenu.value}


  watchEffect(cleanUp => {
    const mode = useColorMode().value
    
    if (mode === 'dark' || !animateShadow) return

    const handleShadow = ():void => {
const show = 35;

if (window.scrollY >= show || document.documentElement.scrollTop >= show) showShadow.value = true
else showShadow.value = false

}
window.onscroll = handleShadow
cleanUp(() => {window.onscroll = null})
  })


</script>
<template>
        <header :class="twMerge(`flex justify-center items-center h-(--header-height) z-50 sticky top-0 backdrop-blur-md transition-shadow duration-(--duration-large) ${showShadow ? 'shadow-lg' : ''}`, $attrs.class as string)">
       
      <div class="lg:max-w-6xl transition-[max-width] duration-(--duration-large) max-w-4xl px-7 w-full flex justify-between items-center h-4/5">
        <UiLogosLogoMain :name="logoName" :delay="logoDelay" :animation="logoAnimation" :class="logoClassName"  />
      <div class="justify-center items-center gap-x-16 md:flex hidden">
      
        <NavLinks :handle-pressed-nav-link-attr="true" :nav-links />
        <HeaderResumeAndThemeButtons :delay="delayNavLinks" :animation="resumeThemeBtnAnimation || 'animate-slide-down-left opacity-0'" />
      </div>
      <UiButtonsHamburger :open="showMenu" @click="toggleMenu" />

      </div>

      
      <HeaderMenu v-if="showMenu" :nav-link-click="closeMenu" :is-open="showMenu" :delay="delayNavLinksMenu"   :animation="resumeThemeBtnAnimationMenu || 'animate-slide-down opacity-0'" :nav-links="navLinksMenu"  />



   
    </header>
</template>