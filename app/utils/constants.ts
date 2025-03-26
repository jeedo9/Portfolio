const {author: {name, socials: {linkedin, github, mail}, school: {name: schoolName, link : schoolLink}}, animation: {delay, delayUnity}} = useAppConfig()

const AUTHOR_NAME = name

const DEFAULT_DELAY = delay

const DEFAULT_DELAY_UNITY = delayUnity

const LINKEDIN = linkedin;

const GITHUB = github;

const MAIL = mail

const SCHOOL = schoolName

const SCHOOL_LINK = schoolLink


export {AUTHOR_NAME, DEFAULT_DELAY, DEFAULT_DELAY_UNITY, MAIL, GITHUB, LINKEDIN, SCHOOL, SCHOOL_LINK}