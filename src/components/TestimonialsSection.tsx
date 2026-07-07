'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { TESTIMONIALS } from '@/lib/testimonials-data'

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
}

const transition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
}

export function TestimonialsSection() {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (dir: 1 | -1) => {
    setPage([page + dir, dir])
  }

  const index = ((page % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length
  const currentTestimonial = TESTIMONIALS[index]

  return (
    <section className="relative bg-ridge-cream-light px-6 sm:px-12 lg:px-20 xl:px-32 py-20 lg:py-28">
      {/* Left arrow */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Previous testimonial"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-100 hover:opacity-50"
      >
        <Image
          src="/images/ChevronLeft.svg"
          alt="Previous"
          width={8}
          height={16}
          className="w-2 h-4"
        />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => paginate(1)}
        aria-label="Next testimonial"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-100 hover:opacity-50"
      >
        <Image
          src="/images/ChevronRight.svg"
          alt="Next"
          width={8}
          height={16}
          className="w-2 h-4"
        />
      </button>

      <div className="mx-auto max-w-3xl">
        <h2 className="font-heading text-ridge-espresso text-3xl lg:text-4xl font-light text-center mb-12 lg:mb-16">
          Guests&rsquo; Chronicles
        </h2>

        <div className="min-h-100 lg:min-h-112.5">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="text-center"
            >
              {/* Avatar circle */}
              <div className="relative w-16 h-16 rounded-full bg-ridge-sand flex items-center justify-center mx-auto mb-3">
                <span className="font-heading text-ridge-brown text-2xl font-semibold">
                  {currentTestimonial.name.charAt(0)}
                </span>
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-ridge-sage flex items-center justify-center">
                  <Image
                    src="/images/ta-badge.svg"
                    alt="Next"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
              </div>

              {/* Name & date */}
              <p className="font-source text-ridge-espresso font-semibold text-base tracking-wide">
                {currentTestimonial.name}
              </p>
              <p className="font-sans text-ridge-brown text-sm mt-0.5 font-normal">
                {currentTestimonial.date}
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src="/images/star.svg"
                    alt="Next"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                ))}
              </div>

              {/* Review title */}
              <h4 className="font-source text-ridge-espresso font-semibold text-md tracking-[0.25em] uppercase mt-3 mb-6">
                {currentTestimonial.title}
              </h4>

              {/* Review body */}
              <p className="font-source text-ridge-brown text-sm lg:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
                {currentTestimonial.body}
              </p>

              {/* Read more */}
              <a
                href="#"
                className="font-source text-ridge-espresso text-sm italic underline font-normal underline-offset-4 hover:text-ridge-bark transition-colors mt-5 inline-block"
              >
                Read more
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tripadvisor badge */}
        <div className="text-center mt-10">
          <p className="font-source font-normal text-ridge-taupe text-xs">
            Tripadvisor rating score: <span className="font-bold text-ridge-espresso">5.0</span> of{' '}
            <span className="font-bold text-ridge-espresso">5</span>, based on 141 reviews
          </p>
          <p className="font-source flex gap-1 items-center justify-center text-ridge-brown font-normal text-[11px] mt-1">
            Verified by Trustindex
            <Image
              src="/images/info.svg"
              alt="info"
              width={10}
              height={10}
              className="w-2.5 h-2.5"
            />
          </p>
        </div>
      </div>
    </section>
  )
}
