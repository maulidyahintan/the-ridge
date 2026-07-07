import Link from 'next/link'
import {
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
  LinkedInIcon,
} from '@/components/icons'
import { FOOTER_COLUMNS, FOOTER_SOCIAL_LINKS, PRESS_LOGOS } from '@/lib/footer-data'

const SOCIAL_ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  LinkedIn: LinkedInIcon,
}

export function FooterSection() {
  return (
    <>
      {/* Section 1 - CTA Banner */}
      <section className="bg-ridge-parchment py-12 lg:py-16 px-6 sm:px-12 lg:px-20 xl:px-32">
        <div className="max-w-3xl mx-auto">
          <p className="font-serif text-black font-normal text-sm lg:text-base text-center leading-relaxed">
            Contact us now to unlock a special 30% discount and enjoy exclusive additional benefits.
            Join The Ridge Bali family today!
          </p>
          <Link
            href="/contact"
            className="mt-6 block mx-auto w-fit border rounded-sm border-white text-black bg-transparent hover:bg-ridge-espresso hover:text-white transition-colors duration-300 px-12 py-3.5 font-serif text-sm font-semibold tracking-[0.7px] uppercase"
          >
            JOIN NOW
          </Link>
        </div>
      </section>

      {/* Section 2 - Featured In Bar */}
      <section className="bg-ridge-parchment border-t border-white">
        <div className="py-8 px-6 sm:px-12 lg:px-20 xl:px-32 overflow-x-auto">
          <div className="flex flex-nowrap items-center justify-start lg:justify-center gap-10 lg:gap-32 min-w-max lg:min-w-0">
            <span className="font-body text-ridge-bark tracking-[0.5px] text-sm">Featured in:</span>

            {PRESS_LOGOS.map(logo => (
              <span key={logo.name} className={logo.className}>
                {logo.display.split('\n').map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - Footer */}
      <footer className="bg-ridge-bark pt-16 pb-20 px-6 sm:px-12 lg:px-20 xl:px-32">
        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Navigation columns */}
          {FOOTER_COLUMNS.map(column => (
            <div key={column.heading}>
              <h3 className="font-source text-white font-normal text-base italic mb-5 leading-7.5">
                {column.heading}
              </h3>
              <nav className="flex flex-col">
                {column.links.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-source italic text-white hover:text-white/70 transition-colors text-sm mb-3"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          {/* Column 3 - Connect With Us */}
          <div>
            <h3 className="font-source text-white font-normal text-base italic mb-5 leading-7.5">
              Connect With Us
            </h3>
            <div className="flex items-center gap-3 mt-2">
              {FOOTER_SOCIAL_LINKS.map(social => {
                const IconComponent = SOCIAL_ICON_MAP[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col pt-16 sm:flex-row items-center justify-between gap-3">
          <p className="font-source italic font-normal text-white text-sm">
            © 2025 The Ridge Bali. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="font-source italic text-white font-normal text-sm hover:text-white/80 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="font-source italic text-white font-normal text-sm hover:text-white/80 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
