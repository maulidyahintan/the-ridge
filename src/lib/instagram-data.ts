export type InstagramPost = {
  id: string
  image: string
  alt: string
  type: 'photo' | 'video' | 'carousel'
  href: string
}

export type InstagramProfile = {
  username: string
  tagline: string
  href: string
}

export const INSTAGRAM_PROFILE: InstagramProfile = {
  username: '@theridgebali',
  tagline: 'Follow our journey on Instagram',
  href: 'https://instagram.com/theridgebali',
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    image: '/images/post-1.png',
    alt: 'Aerial view of The Ridge villas above the Ayung River',
    type: 'video',
    href: 'https://instagram.com/theridgebali',
  },
  {
    id: '2',
    image: '/images/post-2.png',
    alt: 'Luxury four-poster villa bedroom',
    type: 'carousel',
    href: 'https://instagram.com/theridgebali',
  },
  {
    id: '3',
    image: '/images/post-3.png',
    alt: 'Morning mist over Bali rice terraces',
    type: 'video',
    href: 'https://instagram.com/theridgebali',
  },
  {
    id: '4',
    image: '/images/post-4.png',
    alt: 'Romantic candlelit dinner at sunset',
    type: 'carousel',
    href: 'https://instagram.com/theridgebali',
  },
  {
    id: '5',
    image: '/images/post-5.png',
    alt: 'Villa pool with frangipani flowers',
    type: 'video',
    href: 'https://instagram.com/theridgebali',
  },
]
