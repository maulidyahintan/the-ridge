export type Testimonial = {
  id: string
  name: string
  date: string
  title: string
  body: string
  rating: number
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-m',
    name: 'Sarah M.',
    date: 'March 2026',
    title: 'AN EXTRAORDINARY ESCAPE',
    body: "From the moment we arrived, every detail was thoughtfully curated. Our villa butler arranged a private dinner on the terrace overlooking the Ayung River Valley — a moment we will cherish forever. The spa treatments are exceptional, and the team's warmth makes you feel truly at home.",
    rating: 5,
  },
  {
    id: 'james-t',
    name: 'James T.',
    date: 'February 2026',
    title: 'BEYOND ALL EXPECTATIONS',
    body: 'The Ridge redefines what luxury means. Waking up to the mist over the Ayung Valley each morning was an experience I could not have imagined. The staff anticipated our every need before we even asked. Truly the most memorable stay of our lives.',
    rating: 5,
  },
  {
    id: 'amelia-r',
    name: 'Amelia R.',
    date: 'January 2026',
    title: 'A SANCTUARY OF PERFECTION',
    body: 'We celebrated our anniversary here and it exceeded every expectation. The private pool villa, the sunset cocktails, the intimate jungle dining experience — each moment felt exclusively crafted for us. We are already planning our return.',
    rating: 5,
  },
]
