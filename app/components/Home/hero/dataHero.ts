import type { Section } from "../index.types"

type SectionHero = Readonly<Section>

const sectionHero: SectionHero  = {
    title: "My name is Pierre Matar, I'm a jr full stack developer",
    subtitle: 'Hello there !',
}

export {type SectionHero, sectionHero}