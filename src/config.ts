import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Discover Trainsgender(ism) today!',
  subtitle: 'A blog about transit stuff.',
  lang: 'en',
  themeHue: 170,
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',
  },
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/valerie.png',
  name: 'Valerie Astern',
  bio: 'hewwo, im valerie astern (she/her), im the owner of this blog and i will post my opinions about random stuff on here :3',
  links: [
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/channel/UC-asWtY3_XrVsgkAcjutYUw',
    },
    {
      name: 'Instagram',
      icon: 'fa6-brands:instagram',
      url: 'https://instagram.com/valphary',
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/asterodae/',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
