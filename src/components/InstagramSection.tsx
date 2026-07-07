'use client'

import Image from 'next/image'
import { InstagramIcon } from '@/components/icons'
import { INSTAGRAM_POSTS, INSTAGRAM_PROFILE } from '@/lib/instagram-data'

function TypeBadge({ type }: { type: 'photo' | 'video' | 'carousel' }) {
  if (type === 'photo') return null
  return (
    <div className="absolute top-2 right-2 z-10 w-7 h-7 rounded-[6px] bg-black/50 flex items-center justify-center">
      {type === 'video' ? (
        <span className="text-white font-body text-[10px]">▶</span>
      ) : (
        <Image
          src="/images/carousel-badge.svg"
          alt="info"
          width={28}
          height={28}
          className="w-7.5 h-7.5"
        />
      )}
    </div>
  )
}

export function InstagramSection() {
  return (
    <section className="bg-ridge-cream-light flex flex-col md:flex-row items-stretch py-20">
      {/* Left Column - Profile Info */}
      <div className="flex flex-col items-center justify-center py-10 px-6 md:py-16 lg:py-20 md:px-8 lg:px-12 md:w-55 md:shrink-0">
        <InstagramIcon className="w-6 h-6 text-ridge-bark" />
        <p className="font-display text-ridge-bark font-semibold text-2xl mt-3">
          {INSTAGRAM_PROFILE.username}
        </p>
        <p className="font-sans text-ridge-bark text-sm text-center mt-2 leading-snug max-w-[160px]">
          {INSTAGRAM_PROFILE.tagline}
        </p>
        <a
          href={INSTAGRAM_PROFILE.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-ridge-bark font-bold text-xs mt-5 flex items-center gap-1 hover:gap-2 transition-all duration-200"
        >
          View Profile →
        </a>
      </div>

      {/* Right Column - Instagram Posts */}
      <div className="flex overflow-x-auto snap-x snap-mandatory flex-1">
        {INSTAGRAM_POSTS.map(post => (
          <a
            key={post.id}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative snap-start shrink-0 min-w-[72vw] aspect-1/2 lg:min-w-0 lg:w-70 lg:h-120 lg:aspect-auto overflow-hidden"
          >
            <TypeBadge type={post.type} />
            <Image
              src={post.image}
              alt={post.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 72vw, 280px"
            />
          </a>
        ))}
      </div>
    </section>
  )
}
