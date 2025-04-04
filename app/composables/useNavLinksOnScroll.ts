import type { TNavLink } from "~/types"
import useNavLinksStore from "~/stores/navLinks"
import throttle from 'lodash.throttle'
import { type InjectIsMobile } from "~/app.vue"
import { IS_MOBILE_KEY } from "#imports"


type Section = {offsetTop: number, offsetBottom: number, id: string}

export default (navLinks: TNavLink[],resetOnFirstSection?: boolean, disableOnMobile?: boolean, disableOnDesktop?: boolean, extraOffset: number = 210): void => {
    const {handleNavLinksClicked, resetNavLinksClass} = useNavLinksStore()

    const sections = document.querySelectorAll('section')
        const sectionOne = document.querySelector('section:first-child')
        const sectionsData: Section[] = [] 
      
         const saveSectionData = () => sections.forEach(section => {
          const sectionData = section.getBoundingClientRect()
          sectionsData.push({offsetTop: sectionData.top, offsetBottom: sectionData.bottom, id: section.id})
      
        })

        const handleOnScroll = () => {

          sectionsData.forEach(section => {
          const isInView = window.scrollY > section.offsetTop - extraOffset && window.scrollY < section.offsetBottom
            if (isInView && section.id === sectionOne?.id && resetOnFirstSection) resetNavLinksClass(navLinks)
             else if (isInView) handleNavLinksClicked(section.id, navLinks)
          })
          
        }

        const scrollThrottled = throttle(handleOnScroll, 300)


    const isMobile = inject<InjectIsMobile>(IS_MOBILE_KEY)

    if (isMobile)
      watch(isMobile, (newValue) => {
          if (disableOnMobile && newValue)
             window.removeEventListener('scroll', scrollThrottled)
            
            else if (disableOnMobile && !newValue ) window.addEventListener('scroll', scrollThrottled)
          else if (disableOnDesktop && !newValue)
             window.removeEventListener('scroll', scrollThrottled)
            

          else if (disableOnDesktop && newValue) 
            window.addEventListener('scroll', scrollThrottled)

          
      })
    
  

    onMounted(() => {
      saveSectionData()
        if ((disableOnMobile && !isMobile?.value) || (disableOnDesktop && isMobile?.value) || (!disableOnDesktop && !disableOnMobile)) 
          window.addEventListener('scroll', scrollThrottled)
        
      })
}