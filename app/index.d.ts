 declare module 'nuxt/schema' {
     interface AppConfig {
      author: {
        name: string,
        socials: {
            github: string,
            linkedin: string,
            mail: string
        }
      },
      animation: {
        delay: number,
        delayUnity: string
    }
    }
  }  

