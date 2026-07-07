export type ExperienceCard = {
  id: string
  title: string
  subtitle: string
  hoverText: string
  image: string
  href: string
}

export const CARDS: ExperienceCard[] = [
  {
    id: 'villas',
    title: 'Villas',
    subtitle: 'Five private pool villas perched above the Ayung River Valley.',
    hoverText: 'Discover your private sanctuary overlooking the breathtaking Ayung River Valley.',
    image: '/images/villas.jpg',
    href: '/villas',
  },
  {
    id: 'romance',
    title: 'Romance',
    subtitle: 'Curated experiences crafted for two.',
    hoverText: 'Create timeless memories in an intimate paradise built for love.',
    image: '/images/romance.jpg',
    href: '/romance',
  },
  {
    id: 'wellness',
    title: 'Wellness',
    subtitle: 'Restore balance with holistic treatments.',
    hoverText: "Rejuvenate body and soul deep within nature's embrace.",
    image: '/images/wellness.png',
    href: '/wellness',
  },
  {
    id: 'dining',
    title: 'Dining',
    subtitle: 'A celebration of local flavors, served with grace.',
    hoverText: 'Savour exceptional cuisine with breathtaking panoramic views.',
    image: '/images/dining.jpg',
    href: '/dining',
  },
]
