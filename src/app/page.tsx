import {
  HeroSection,
  AboutSection,
  ExperiencesSection,
  TestimonialsSection,
  InstagramSection,
  FooterSection,
} from '@/components'
import { OutroSection } from '@/components/OutroSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <OutroSection />
      <InstagramSection />
      <FooterSection />
    </main>
  )
}
