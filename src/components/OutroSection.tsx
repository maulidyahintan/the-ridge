'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export function OutroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.03 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  }

  return (
    <section className="relative bg-ridge-cream-light py-16 px-6 sm:px-12 lg:px-20 xl:px-32">
      <div className="grid md:grid-cols-2 lg:grid-cols-[580px_1fr] gap-6 md:gap-8 lg:gap-10 items-center">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative lg:w-auto lg:h-auto lg:aspect-auto lg:flex lg:items-center lg:justify-start"
        >
          <div className="relative w-full aspect-520/534 md:max-w-full lg:w-145 lg:h-170 lg:aspect-auto">
            <Image
              src="/images/outro.jpg"
              alt="The Ridge River View"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 520px"
              priority={false}
            />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col justify-center py-8 lg:py-16"
        >
          <motion.h2 variants={itemVariants} className="font-display text-ridge-espresso mb-8">
            <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold">
              Crafted by the Valley
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-source text-ridge-taupe text-sm sm:text-[18px] leading-relaxed lg:leading-loose max-w-md font-light mb-8"
          >
            Born from a desire to create a more personal expression of luxury hospitality, The Ridge
            brings together breathtaking landscapes, thoughtful design, and bespoke service in one
            of Ubud&apos;s most iconic settings. Nestled along the Sayan Ridge overlooking the Ayung
            River Valley, our collection of five private villas invites guests to slow down and
            reconnect with nature, with loved ones, and with themselves. Here, luxury is not
            measured by scale, but by privacy, authenticity, and moments that linger long after the
            journey ends. Every sunrise, every shared meal, and every quiet evening overlooking the
            valley becomes part of a story uniquely your own.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
