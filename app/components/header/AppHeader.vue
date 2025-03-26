<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import type { TNavLink } from './navlinks/NavLink.vue';
import type { Animation, ClassName } from '~/types';
import { _navLinks, _navLinksMenu } from './navlinks/dataNavLinks';

export interface AppHeaderProps extends ClassName {
  navLinks?: TNavLink[],
    navLinksMenu?: TNavLink[],
    resumeThemeBtnAnimation?: string,
    resumeThemeBtnAnimationMenu?: string,
    logoName?: string,
    logoDelay?: string,
    logoAnimation?: Animation,
    logoClassName?: string,

}

type Tuple2String = [string, string]


export type ProvideHeader = {
    showMenu: globalThis.Ref<boolean, boolean>,
    closeMenu: () => void,
    toggleMenu: () => void
}

 const {navLinksMenu = _navLinksMenu, className = '', navLinks} =  defineProps<AppHeaderProps>()

 const delayNavLinks = Array.of(getAnimationDelay((navLinks?.length ? navLinks.length + 1 : undefined) || _navLinks.length + 1), getAnimationDelay((navLinks?.length ? navLinks.length + 2 : undefined) || _navLinks.length + 2)) as Tuple2String

 const delayNavLinksMenu = Array.of(getAnimationDelay((navLinksMenu?.length ? navLinksMenu.length + 1 : undefined) || _navLinksMenu.length + 1), 
 getAnimationDelay((navLinksMenu?.length ? navLinksMenu.length + 2 : undefined) || _navLinksMenu.length + 2)) as Tuple2String;

 const showShadow = ref(false);

 const showMenu = ref(false)

 const closeMenu = () => {showMenu.value = false}

 const toggleMenu = () => {showMenu.value = !showMenu.value}

 provide('menu', {showMenu, closeMenu, toggleMenu})

 onMounted(() => {

  const handleShadow = ():void => {

    const show = 35;

    if (window.scrollY >= show || document.documentElement.scrollTop >= show) showShadow.value = true
    else showShadow.value = false

  }
  
  window.onscroll = handleShadow
 })

 

</script>
<template>
        <header :class="twMerge(`flex justify-center items-center h-(--header-height) z-50 sticky top-0 backdrop-blur-md transition-shadow duration-(--duration-large) ${showShadow ? 'shadow-lg' : ''}`, className)">
       
      <div class="lg:max-w-6xl transition-[max-width] duration-(--duration-large) max-w-4xl px-7 w-full flex justify-between items-center h-4/5">
        <UiLogosLogoMain :name="logoName" :delay="logoDelay" :animation="logoAnimation" :class-name="logoClassName"  />
      <div class="justify-center items-center gap-x-16 md:flex hidden">
      
        <HeaderNavlinksNavLinks :nav-links="navLinks || _navLinks" />
        <HeaderResumeAndThemeButtons :delay="delayNavLinks" :animation="resumeThemeBtnAnimation || 'animate-slide-down-left opacity-0'" />
      </div>
      <UiButtonsHamburger  />

      </div>

      
      <HeaderMenu  v-if="showMenu" :delay="delayNavLinksMenu"   :animation="resumeThemeBtnAnimationMenu || 'animate-slide-down opacity-0'" :nav-links="navLinksMenu || _navLinksMenu"  />



   
    </header>
</template>