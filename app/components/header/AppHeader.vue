<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { Animation , TNavLink} from '~/types';
import NavLinks from '../list/NavLinks.vue';
import throttle from 'lodash.throttle';
import type { InjectIsMobile } from '~/app.vue';
import { IS_MOBILE_KEY } from '#imports';

export interface AppHeaderProps {
    navLinks: TNavLink[],
    navLinksMenu: TNavLink[],
    resumeThemeBtnAnimation?: string,
    resumeThemeBtnAnimationMenu?: string,
    animationHamburger?: Animation,
    logoName?: string,
    logoDelay?: string,
    logoAnimation?: Animation,
    logoClassName?: string,
    animateShadow?: boolean

}

type Tuple2String = [string, string]

type Tuple3String = [string, string, string]


 const {navLinksMenu, navLinks, animateShadow, animationHamburger} =  defineProps<AppHeaderProps>()


 
 const delayBtns = Array.of(getAnimationDelay(navLinks.length + 1 ), getAnimationDelay(navLinks.length + 2)) as Tuple2String

 const delayBtnsMenu = Array.of(getAnimationDelay(navLinksMenu.length + 1), getAnimationDelay( navLinksMenu.length + 2)) as Tuple2String;

 const delayBars = [getAnimationDelay(1), getAnimationDelay(2), getAnimationDelay(3)] as Tuple3String

 const showShadow = ref(false);

 const showMenu = ref(false)

 const closeMenu = () => { showMenu.value = false}

 const toggleMenu = () => {
  

  showMenu.value = !showMenu.value}

   const isMobile = inject<InjectIsMobile>(IS_MOBILE_KEY)


  watchEffect(cleanUp => {
    const mode = useColorMode().value
    
    if (mode === 'dark' || !animateShadow) return

    const handleShadow = ():void => {
const show = 35;

if (window.scrollY >= show || document.documentElement.scrollTop >= show) showShadow.value = true
else showShadow.value = false

}

const handleShadowThrottled = throttle(handleShadow, 300)

window.addEventListener('scroll', handleShadowThrottled)
cleanUp(() => window.removeEventListener('scroll', handleShadowThrottled))
  })


</script>
<template>
        <header :class="twMerge(`flex justify-center items-center h-(--header-height) z-50 sticky top-0 backdrop-blur-md transition-shadow duration-(--duration-large) ${showShadow ? 'shadow-lg' : ''}`, $attrs.class as string)">
       
      <div class="lg:max-w-6xl transition-[max-width] duration-(--duration-large) max-w-4xl px-7 w-full flex justify-between items-center h-4/5">
        <UiLogosLogoMain :name="logoName" :delay="logoDelay" :animation="logoAnimation" :class="logoClassName"  />
      <div  v-if="!isMobile" class="justify-center items-center gap-x-16 flex">
      
        <NavLinks nav-links-key="navLinks" handle-pressed-nav-link-attr :nav-links />
        <HeaderResumeAndThemeButtons :delay="delayBtns" :animation="resumeThemeBtnAnimation || 'animate-slide-down-left opacity-0'" />
      </div>
      <UiButtonsHamburger v-if="isMobile"  :delay-bars="delayBars" :animation-bars="animationHamburger || 'animate-slide-down-left'" :open="showMenu" @click="toggleMenu" />

      </div>

      
      <HeaderMenu v-if="showMenu" :nav-link-click="closeMenu" :is-open="showMenu" :delay="delayBtnsMenu"   :animation="resumeThemeBtnAnimationMenu || 'animate-slide-down opacity-0'" :nav-links="navLinksMenu"  />



    </header>
</template>