import { defineStore } from "pinia";
import type { TNavLink } from "~/types";


const useNavLinksStore = defineStore('navLinks', () => {
    const navLinksState = ref<Record<string, TNavLink[]>>({});

    const handleNavLinksClicked = (navLinkId: string, navLinks: TNavLink[]) => {

            resetNavLinksClass(navLinks)


              const navLink = navLinks.find(link => link.to.includes(navLinkId) )

              if (navLink && navLink?.isPressed !== undefined)  navLink.isPressed = true;

              navLinksState.value = {...navLinksState.value}
        }

    const resetNavLinksClass = (navLinks: TNavLink[]) => {

            navLinks?.forEach(link => {

                if (link.isPressed) link.isPressed = false
              })
              navLinksState.value = {...navLinksState.value}

    }


    const addNavLinks  = (navLinks : TNavLink[], key: string) => {
        if (!(key in navLinksState.value)) navLinksState.value[key] = navLinks
        else throw new Error('These navLinks are already in the store')
    } 

    const deleteNavLinks = (key : string) => {
        delete navLinksState.value[key]
    }

    return {
        navLinksState,
        handleNavLinksClicked,
        resetNavLinksClass,
        addNavLinks,
        deleteNavLinks
    }
    
})

export default useNavLinksStore;