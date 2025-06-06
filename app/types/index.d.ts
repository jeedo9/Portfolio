type Link = {
    to: string,
    target?: `_${'blank' | 'parent' | 'self' | 'top'}`,
    icon?: {
        name: string,
        slug: string
    },
    text?: string,
    className?: string | (() => string)
}

type Animation = `animate-${string}`

type HeadingTags = Extract<keyof HTMLElementTagNameMap, `h${2 | 3 | 4 | 5 | 6}`>


type TLink = (Link & Required<Pick<Link, 'icon'>>) | (Link & Required<Pick<Link, 'text'>>);

export type TNavLink = TLink & {
    animation: Animation,
    delay: string,
    isPressed?: boolean
  }

export type {TLink, Link, Animation, HeadingTags, TNavLink}