import type { TNavLink } from "~/components/ui/NavLink.vue"


export const navLinksMenu: TNavLink[] = [
    {
        to: '#about',
        text: 'About',
        animation: 'animate-slide-down-right',
        delay: getAnimationDelay(1),
        className: 'opacity-0',
        
      },
      {
        to: '#skills',
        text: 'Skills',
        animation: 'animate-slide-down-right',
        delay: getAnimationDelay(2),
        className: 'opacity-0'
  
      },
      {
        to: '#projects',
        text: 'Projects',
        animation: 'animate-slide-down-right',
        delay: getAnimationDelay(3),
        className: 'opacity-0'
  
      },
      {
        to: '#contact',
        text: 'Contact',
        animation: 'animate-slide-down-right',
        delay: getAnimationDelay(4),
        className: 'opacity-0'
      },
    ]