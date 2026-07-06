'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export function AboutSection() {
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
    <section className="relative bg-ridge-cream-light min-h-[500px] md:min-h-[600px] lg:h-screen">
      <div className="grid lg:grid-cols-[1fr_660px] xl:grid-cols-[1fr_708px] min-h-[500px] md:min-h-[600px] lg:h-screen">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20 xl:px-32 lg:py-24"
        >
          <motion.h2 variants={itemVariants} className="font-display text-ridge-espresso mb-8">
            <span className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-semibold leading-[90%]">
              W
            </span>
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-normal">
              here Serenity Meets Opulence
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="font-source text-ridge-brown text-sm sm:text-base leading-relaxed lg:leading-loose max-w-md font-light mb-8"
          >
            Perched on the edge of the breathtaking Sayan Ridge, The Ridge features five luxury
            private pool villas alongside a sunset restaurant and bar, offering unparalleled access
            to the famed panorama of the Ayung River Valley. Our commitment is to craft a
            distinctive 5-star resort experience where privacy, impeccable service, captivating
            design, and a singular ambiance converge seamlessly in one exquisite locale.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href="#about"
            className="uppercase text-xs tracking-[0.2em] text-ridge-espresso font-serif font-semibold inline-block hover:opacity-60 transition-opacity duration-300"
          >
            Read More
          </motion.a>
        </motion.div>

        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative px-6 pb-12 sm:px-12 lg:px-0 lg:w-auto lg:h-auto lg:aspect-auto lg:flex lg:items-center lg:justify-end lg:pr-20 xl:pr-32"
        >
          <div className="relative w-full aspect-580/680 lg:w-145 lg:h-170 lg:aspect-auto">
            <Image
              src="/images/View-3.png"
              alt="Aerial view of Sayan Ridge rice terraces and Ayung River Valley"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 580px"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
