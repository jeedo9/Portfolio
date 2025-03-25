import type { Section } from "../index.types"

type SectionContact = Readonly<{
    content: string
} & Section>

const sectionContact: SectionContact = {
    title: 'Get in touch',
    subtitle: "What's next",
    content: "I'm currently looking for new opportunities. Let me know if you want to talk about a potential collaboration."
}

export {
    type SectionContact, sectionContact
}