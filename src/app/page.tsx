export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ridge-cream px-4">
      <main className="flex flex-col items-center text-center max-w-4xl">
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-ridge-bark tracking-wide mb-6">
          The Ridge
        </h1>
        <p className="font-heading text-xl md:text-2xl text-ridge-espresso font-normal tracking-wide mb-4">
          Luxury Villa Resort
        </p>
        <p className="font-body text-base md:text-lg text-ridge-brown max-w-2xl leading-relaxed">
          Experience unparalleled luxury in our exclusive Bali-style villa resort, where nature
          meets refined elegance.
        </p>
      </main>
    </div>
  )
}
