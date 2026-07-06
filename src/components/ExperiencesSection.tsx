'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { CARDS } from '@/lib/experiences-data'

export function ExperiencesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="bg-ridge-cream-light py-16 px-6 sm:px-12 lg:px-20 xl:px-32">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 gap-5 lg:gap-6"
      >
        {CARDS.map((card, index) => {
          const isHovered = hoveredIndex === index
          const shouldDim = hoveredIndex !== null && !isHovered

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1 + 0.1,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative w-full aspect-628/720 rounded-2xl overflow-hidden cursor-pointer transition-all duration-400"
              style={{
                opacity: shouldDim ? 0.5 : 1,
                transform: shouldDim ? 'scale(0.98)' : 'scale(1)',
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/70 to-transparent" />

              {!isHovered && (
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-white text-3xl lg:text-4xl font-semibold">
                    {card.title}
                  </h3>
                  <p className="font-serif text-white/85 text-sm italic mt-1 font-normal">
                    {card.subtitle}
                  </p>
                </div>
              )}

              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/50"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                      className="absolute top-8 left-8 right-8"
                    >
                      <p className="font-serif text-white text-xl lg:text-2xl italic font-normal">
                        {card.hoverText}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
