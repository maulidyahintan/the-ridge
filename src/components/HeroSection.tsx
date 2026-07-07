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
    </section>
  )
}
