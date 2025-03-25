import type { TLink } from "~/types"
export  const footerLinks: TLink[] = [
    {
      to: 'https://github.com/jeeddo',
      target: '_blank',
      icon: {
        name: 'mynaui:brand-github',
        slug: 'github'
      },
      className: 'cursor-pointer transition-[color] '
  
    },
    {
      to: 'www.linkedin.com/in/pierre-matar-38b7832a0',
      target: '_blank',
      icon: {
        name: 'mynaui:brand-linkedin',
        slug: 'linkedin'
      },
      className: 'cursor-pointer  transition-[color] '
  
    },
    {
      to: 'mailto:pierrematar1912@gmail.com',
      target: '_blank',
      icon: {
        name: 'mynaui:envelope',
        slug: 'mail'
      },
      className: 'cursor-pointer transition-[color] '
    }
  ]
  