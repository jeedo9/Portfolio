import { SCHOOL, SCHOOL_LINK } from "~/utils/constants"
import type { Section } from "../index.types"

type SectionAbout = Readonly<{
    about: string
} & Section>

const sectionAbout : SectionAbout = {
    title: 'About me',
    subtitle: 'Who i am ?',
    about: `Hi, my name is Pierre ! I'm a student at <a target="_blank" href="${SCHOOL_LINK}" rel="noreferrer noopenrer" class="hover:text-accent/75 dark:hover:text-accent/90 text-accent">${SCHOOL}</a> as well as a full stack developer in my free time. My main focus these days is expanding my knowledge of web development and continuously improving my skills to become a better developer every day. I'm always eager to explore new technologies, take on challenges, and build innovative projects that enhance my experience in the field.`
}

export {sectionAbout, type SectionAbout}