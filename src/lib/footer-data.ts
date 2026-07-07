// ─── Navigation columns ───────────────────────────────────────────────────────

export type FooterLink = { label: string; href: string }

export type FooterColumn = { heading: string; links: FooterLink[] }

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Information',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Villas', href: '/villas' },
      { label: 'Offers', href: '/offers' },
      { label: 'Dining Experience', href: '/dining' },
    ],
  },
  {
    heading: 'Inspiration',
    links: [
      { label: 'Experience', href: '/experience' },
      { label: 'Travel Guides', href: '/travel-guides' },
      { label: 'News', href: '/news' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
]

// ─── Social links ─────────────────────────────────────────────────────────────

export type SocialLink = { label: string; href: string }

export const FOOTER_SOCIAL_LINKS: SocialLink[] = [
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

// ─── Press logos (text-based) ─────────────────────────────────────────────────

export type PressLogo = {
  name: string
  display: string // display text (may contain \n for line break)
  className: string // Tailwind classes for brand styling
}

export const PRESS_LOGOS: PressLogo[] = [
  {
    name: 'YINJISPACE',
    display: 'YINJISPACE',
    className: 'font-body font-semibold text-[#1A1A1A] text-base tracking-widest',
  },
  {
    name: 'Robb Report Indonesia',
    display: 'Robb Report\nINDONESIA',
    className: 'font-body text-[#1A1A1A] text-sm font-normal text-center leading-tight',
  },
  {
    name: 'Mr & Mrs Smith',
    display: 'Mr & Mrs Smith',
    className: 'font-heading font-bold text-[#CC1A1A] text-sm',
  },
  {
    name: 'The Guardian',
    display: 'The\nGuardian',
    className: 'font-heading font-bold text-center text-[#1A1A1A] text-base',
  },
]
