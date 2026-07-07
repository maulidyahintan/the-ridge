import type { ReactElement } from 'react'
import type { MegaMenuItem } from '@/components/ui/mega-menu'
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TikTokIcon,
  YouTubeIcon,
} from '@/components/icons'

// ─── Navbar mega-menu dropdowns ──────────────────────────────────────────────

export const MEGA_NAV_ITEMS: MegaMenuItem[] = [
  {
    id: 1,
    label: 'VILLAS',
    subMenus: [
      {
        title: 'Villas',
        items: [
          { label: 'Premier River View', href: '/villas/premier-river-view' },
          { label: 'Premier Ridge View', href: '/villas/premier-ridge-view' },
          { label: 'Deluxe Ridge View', href: '/villas/deluxe-ridge-view' },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'ROMANCE',
    subMenus: [
      {
        title: 'Romance',
        items: [
          { label: 'Honeymoon', href: '/romance/honeymoon' },
          { label: 'Anniversary', href: '/romance/anniversary' },
          { label: 'Proposal', href: '/romance/proposal' },
          { label: 'Wedding', href: '/romance/wedding' },
        ],
      },
    ],
  },
  {
    id: 3,
    label: 'WELLNESS',
    subMenus: [
      {
        title: 'Wellness',
        items: [
          { label: 'Workout', href: '/wellness/workout' },
          { label: 'Yoga', href: '/wellness/yoga' },
          { label: 'Spa', href: '/wellness/spa' },
          { label: 'Healing', href: '/wellness/healing' },
        ],
      },
    ],
  },
  {
    id: 4,
    label: 'DINING',
    subMenus: [
      {
        title: 'Dining',
        items: [
          { label: 'Restaurant', href: '/dining/restaurant' },
          { label: 'Intimate Dinner', href: '/dining/intimate-dinner' },
          { label: 'Cooking in the Jungle', href: '/dining/cooking-in-the-jungle' },
        ],
      },
    ],
  },
]

// ─── Drawer: primary large links (left column) ───────────────────────────────

export const PRIMARY_LINKS = [
  { label: 'OFFERS', href: 'https://theridgebali.com/offers/' },
  { label: 'Packages', href: 'https://theridgebali.com/packages/' },
  { label: 'Experience', href: 'https://theridgebali.com/compendium/curated-experiences/' },
  { label: 'Compendium', href: 'https://theridgebali.com/compendium/' },
  { label: 'Contact Us', href: 'https://theridgebali.com/contact-us/' },
]

// ─── Drawer: secondary small links (right column) ────────────────────────────

export const SECONDARY_LINKS: { label: string; href: string; bold?: true }[] = [
  { label: 'RATES', href: '/rates' },
  { label: 'PACKAGES', href: '/packages' },
  { label: 'LOCATION', href: '/location' },
  { label: 'OUR STORY', href: '/story' },
  { label: 'SUSTAINABILITY', href: '/sustainability' },
  { label: 'FAQS', href: '/faqs' },
  { label: 'BLOG', href: '/blog' },
  { label: 'OFFERS', href: '/offers' },
  { label: 'BOOK NOW', href: '/book', bold: true },
]

// ─── Social icon links ────────────────────────────────────────────────────────

export const SOCIAL_ICONS: { label: string; href: string; svg: ReactElement }[] = [
  { label: 'Facebook', href: '#', svg: <FacebookIcon className="h-5 w-5" /> },
  { label: 'Instagram', href: '#', svg: <InstagramIcon className="h-5 w-5" /> },
  { label: 'LinkedIn', href: '#', svg: <LinkedInIcon className="h-5 w-5" /> },
  { label: 'TikTok', href: '#', svg: <TikTokIcon className="h-5 w-5" /> },
  { label: 'YouTube', href: '#', svg: <YouTubeIcon className="h-5 w-5" /> },
]
