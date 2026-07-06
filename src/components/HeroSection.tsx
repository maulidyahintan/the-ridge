export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/Hero.mp4" type="video/mp4" />
      </video>

      {/* Subtle dark overlay — improves legibility of any overlaid elements */}
      <div className="absolute inset-0 bg-ridge-charcoal/20" />

      {/* Vertical "RESERVE" CTA — right edge */}
      <a
        href="/book"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-ridge-bark/80 px-2.5 py-5 backdrop-blur-sm transition-opacity hover:opacity-80"
        aria-label="Reserve now"
      >
        <span
          className="block font-serif text-sm uppercase tracking-[0.35em] text-ridge-gold"
          style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
        >
          RESERVE
        </span>
      </a>
    </section>
  )
}
