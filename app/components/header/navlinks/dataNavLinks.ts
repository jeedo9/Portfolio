import type { TNavLink } from "~/components/header/navlinks/NavLink.vue"


const _navLinks : TNavLink[] = [
    {
      to: '#about',
      text: 'About',
      animation: 'animate-slide-down-left',
      delay: getAnimationDelay(1),
      className(){ return `opacity-0 before:absolute before:-bottom-1 relative before:h-px ${this.isPressed ? 'before:scale-100 text-accent' :  'before:scale-0  hover:before:scale-100  before:transition-transform'} before:rounded before:w-full before:bg-accent`},
      
      isPressed: false
    },
    {
      to: '#skills',
      text: 'Skills',
      animation: 'animate-slide-down-left',
      delay: getAnimationDelay(2),
      className() { return `opacity-0 before:absolute before:-bottom-1 relative before:h-px ${this.isPressed ? 'before:scale-100 text-accent' :  'before:scale-0  hover:before:scale-100  before:transition-transform'}  before:rounded before:w-full before:bg-accent `},
      isPressed: false


    },
    {

      to: '#projects',
      text: 'Projects',
      animation: 'animate-slide-down-left',
      delay: getAnimationDelay(3),
      className() {return `opacity-0 before:absolute before:-bottom-1 relative before:h-px ${this.isPressed ? 'before:scale-100 text-accent' :  'before:scale-0  hover:before:scale-100  before:transition-transform'}  before:rounded before:w-full  before:bg-accent `}
      ,
      isPressed: false
    },
    {
   
      to: '#contact',
      text: 'Contact',
      animation: 'animate-slide-down-left',
      delay: getAnimationDelay(4),
      className() {return `opacity-0 before:absolute before:-bottom-1 relative before:h-px ${this.isPressed ? 'before:scale-100 text-accent' :  'before:scale-0  hover:before:scale-100  before:transition-transform'} before:rounded before:w-full before:bg-accent`}
      ,
      isPressed: false
    },
  ] 

  const _navLinksMenu: TNavLink[] = [
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

  export {_navLinks, _navLinksMenu};