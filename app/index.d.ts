 declare module 'nuxt/schema' {
     interface AppConfig {
      author: {
        name: string,
        socials: {
            github: string,
            linkedin: string,
            mail: string
        },
        school: {
          name: string,
          link: string
        }
      },
      animation: {
        delay: number,
        delayUnity: string
    }
    }
  }  

