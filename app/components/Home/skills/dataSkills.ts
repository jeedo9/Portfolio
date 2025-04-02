import type { Section } from "../index.types"

type Skill = {
    name: string,
    iconName: string,
    delay: string
}

type SectionSkills = Readonly<{
    sentence: string,
    skills: Skill[]
} & Section>

const sectionSkills : SectionSkills = {
    title: 'What I do',
    subtitle: 'Full stack development',
    sentence: 'I know, I use and I continue to learn',
    skills: [
        {
            name: 'Html',
            iconName : 'devicon:html5',
            delay: getAnimationDelay(1)
        },
        {
            name: 'Css',
            iconName: 'devicon:css3',
            delay: getAnimationDelay(2)
        },
        {
            name: 'Sass',
            iconName : 'devicon:sass',
            delay: getAnimationDelay(3)
        },
        {
            name: 'Tailwind',
            iconName: 'devicon:tailwindcss',
            delay: getAnimationDelay(4)
        },
        {
            name: 'TypeScript',
            iconName : 'devicon:typescript',
            delay: getAnimationDelay(5)
        },
        {
            name: 'React',
            iconName: 'devicon:react',
            delay: getAnimationDelay(6)
        },
        {
            name: 'Vue',
            iconName : 'devicon:vuejs',
            delay: getAnimationDelay(7)
        },
        {
            name: 'Node',
            iconName: 'devicon:nodejs',
            delay: getAnimationDelay(8)
        },
        {
            name: 'MongoDB',
            iconName : 'devicon:mongodb',
            delay: getAnimationDelay(9)
        },
        {
            name: 'Firebase',
            iconName: 'devicon:firebase',
            delay: getAnimationDelay(10)
        }
    ]
}

export {type SectionSkills, sectionSkills}