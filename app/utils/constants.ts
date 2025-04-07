const AUTHOR_NAME = 'Pierre'

const AUTHOR_LASTNAME = 'Matar'

const WEBSITE_NAME = "Pierre's Portfolio"

const WEBSITE_DESCRIPTION = 'My personal Portfolio';

const DEFAULT_DELAY = 600

const DEFAULT_DELAY_UNITY = 'ms'

const LINKEDIN = 'https://www.linkedin.com/in/pierre-matar-38b7832a0';

const GITHUB = 'https://github.com/jeedo9';

const MAIL = `mailto:pierrematar1912@gmail.com`

const SCHOOL = 'ESIEE Paris'

const SCHOOL_LINK = 'https://www.esiee.fr/'

const IS_MOBILE_KEY = 'is-mobile';

const PRODUCTION_URL = process.env.VITE_PRODUCTION_BASE_URL || 'https://jeedo.netlify.app'

const DEVELOPMENT_URL = process.env.VITE_DEVELOPMENT_BASE_URL || 'http://localhost:3000'

const WEBSITE_URL = import.meta.env.DEV ? DEVELOPMENT_URL : PRODUCTION_URL


export {IS_MOBILE_KEY, WEBSITE_URL,DEVELOPMENT_URL, PRODUCTION_URL,AUTHOR_NAME, DEFAULT_DELAY, DEFAULT_DELAY_UNITY, MAIL, GITHUB, LINKEDIN, SCHOOL, SCHOOL_LINK, WEBSITE_NAME, WEBSITE_DESCRIPTION, AUTHOR_LASTNAME}