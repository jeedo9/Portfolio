import type { TLink } from "~/types"
import { GITHUB, LINKEDIN, MAIL } from "~/utils/constants"
export  const footerLinks: TLink[] = [
    {
      to: GITHUB,
      target: '_blank',
      icon: {
        name: 'mynaui:brand-github',
        slug: 'github'
      },
      className: ' transition-[color] '
  
    },
    {
      to: LINKEDIN,
      target: '_blank',
      icon: {
        name: 'mynaui:brand-linkedin',
        slug: 'linkedin'
      },
      className: ' transition-[color] '
  
    },
    {
      to: MAIL,
      target: '_blank',
      icon: {
        name: 'mynaui:envelope',
        slug: 'mail'
      },
      className: ' transition-[color] '
    }
  ]
  