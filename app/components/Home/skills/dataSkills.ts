import type { Section } from "../index.types"

type Skill = {
    name: string,
    iconName: string
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
            iconName : 'devicon:html5'
        },
        {
            name: 'Css',
            iconName: 'devicon:css3'
        },
        {
            name: 'Sass',
            iconName : 'devicon:sass'
        },
        {
            name: 'Tailwind',
            iconName: 'devicon:tailwindcss'
        },
        {
            name: 'TypeScript',
            iconName : 'devicon:typescript'
        },
        {
            name: 'React',
            iconName: 'devicon:react'
        },
        {
            name: 'Vue',
            iconName : 'devicon:vuejs'
        },
        {
            name: 'Node',
            iconName: 'devicon:nodejs'
        },
        {
            name: 'MongoDB',
            iconName : 'devicon:mongodb'
        },
        {
            name: 'Firebase',
            iconName: 'devicon:firebase'
        }
    ]
}

export {type SectionSkills, sectionSkills}