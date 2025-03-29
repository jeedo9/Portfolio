import type { Section } from "../index.types"


type Project = {
    title: string,
    description: string,
    stack: string[],
    view: {
        image: {
            name: string,
            src: string
        },
        githubLink: string,
      
            isLive: () => boolean,
            liveLink?: string
        
    }
}

type SectionProjects = Readonly<{
    projects: Project[]
} & Section>


const sectionProjects : SectionProjects = {
    title: 'My projects',
    subtitle: "Projects that I've built",
    projects: [
        {
            title: 'vueMovie' ,
            description: "is a movie application that allows users to explore movie and actors as well as to search specific movie. This application has user authentication, so a user can be able to favorite a movie or put it in a watch list.",
            stack: [
                'Vue',
                'TypeScript',
                'Tailwind',
                'Node',
                'Express',
                'Firebase'
            ],
            view: {
                image: {
                    src: 'http://localhost:3000/images/vueMovie.png',
                    name: 'vueMovie application'
                },
                githubLink: '',
               
                isLive() {
                    return !!this.liveLink

                }
                
            }
        },
        {
            title: 'AlimConfiance',
            description: 'allows users to check the hygiene levels of restaurants in France. They can also search for restaurants by location and/or hygiene level and sort them by hygiene level or publication date.',
            stack: [
                'React',
                'TypeScript',
                'Tailwind',
                'Spring Boot'
            ],
            view: {
                image: {
                    src: 'http://localhost:3000/images/AlimConfiance.png',
                    name: 'AlimConfiance application'
                },
                githubLink: '',
                isLive() {
                    return !!this.liveLink

                }
            }
        }
    ]
}

export {type SectionProjects, sectionProjects, type Project }