import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Nerr',
  description:
    'Portofolio Naufal Ridho Permana: cyber security, reverse engineering, dan CTF.',
  href: 'https://astro-erudite.vercel.app', // ganti ke URL deploy-mu nanti
  author: 'Nerr',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/96Nerr',
    label: 'GitHub',
  },
  {
  href: 'https://mail.google.com/mail/?view=cm&fs=1&to=naufalriper03@gmail.com',
  label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
}
