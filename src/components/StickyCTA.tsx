'use client'

import { motion } from 'framer-motion'

export function StickyCTA() {
  return (
    <motion.a
      href="/book"
      aria-label="Reserve now"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      }}
      whileHover={{ scale: 1.03 }}
      className="fixed right-0 top-1/2 z-40 -translate-y-1/2 bg-ridge-bark/80 px-2.5 py-5 backdrop-blur-sm transition-opacity hover:opacity-80"
    >
      <span
        className="block font-serif text-sm uppercase tracking-[0.35em] text-ridge-gold"
        style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
      >
        RESERVE
      </span>
    </motion.a>
  )
}
