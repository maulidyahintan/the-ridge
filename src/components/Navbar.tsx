'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import { MEGA_NAV_ITEMS, PRIMARY_LINKS, SOCIAL_ICONS } from '@/lib/nav-data'
import { useMenuDrawer } from '@/hooks/use-menu-drawer'
import { WhatsAppIcon } from '@/components/icons'

const MegaMenu = dynamic(() => import('@/components/ui/mega-menu'), { ssr: false })

function TopBar({ onOpen, isNavVisible }: { onOpen: () => void; isNavVisible: boolean }) {
  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 bg-ridge-bark transition-transform duration-300 ease-in-out ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="mx-auto max-w-[1920px] px-12 lg:px-20">
        <div className="flex h-18 items-center justify-between lg:h-20">
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="The Ridge"
              width={237}
              height={41}
              priority
              className="h-8 w-auto object-contain lg:h-10"
            />
          </Link>

          <div className="hidden lg:flex">
            <MegaMenu items={MEGA_NAV_ITEMS} />
          </div>

          <button
            onClick={onOpen}
            aria-label="Open menu"
            className="flex flex-col items-center justify-center gap-1.5 transition-opacity hover:opacity-70"
          >
            <span className="h-0.5 w-12 bg-white" />
            <span className="h-0.5 w-12 bg-white" />
            <span className="h-0.5 w-12 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  )
}

function DrawerBottomBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.3 }}
      className="relative shrink-0 border-t border-ridge-gold/20 bg-ridge-bark px-10 py-4 lg:px-14"
    >
      <div className="flex items-center justify-between">
        <a
          href="tel:+628131297018"
          className="flex items-center gap-2 transition-opacity hover:opacity-100"
        >
          <WhatsAppIcon className="h-5 w-5 text-white" />
          <span className="font-serif text-sm font-semibold text-white">+62 82-235- 353-445</span>
        </a>

        <a
          href="mailto:hello@theridge.com"
          className="flex items-center gap-1.5 font-sans text-xs transition-opacity hover:opacity-100"
        >
          <Mail className="h-5 w-5 text-white hover:text-white/70" />
        </a>

        <div className="flex items-center gap-3 text-white">
          {SOCIAL_ICONS.map(icon => (
            <a
              key={icon.label}
              href={icon.href}
              aria-label={icon.label}
              className="transition-colors hover:text-white/70"
            >
              {icon.svg}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function DrawerPanel({ onClose, pathname }: { onClose: () => void; pathname: string }) {
  return (
    <motion.aside
      key="drawer"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-130 flex-col overflow-hidden shadow-2xl"
    >
      <div className="pointer-events-none absolute inset-0 bg-white shadow" />

      <div className="relative flex flex-1 flex-col overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-8 top-4 font-serif text-6xl font-normal text-ridge-bark transition-colors hover:text-ridge-bark/70"
        >
          x
        </button>

        <div className="flex flex-1 items-start gap-8 px-10 pb-8 pt-24 lg:px-14 lg:pt-28">
          <div className="flex flex-1 flex-col gap-4 lg:gap-5">
            {PRIMARY_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.055 + 0.1, duration: 0.32 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={`block font-source text-2xl capitalize leading-tight tracking-wide underline transition-colors lg:text-3xl ${
                    pathname === link.href
                      ? 'text-ridge-bark'
                      : 'text-ridge-bark/80 hover:text-ridge-bark'
                  }`}
                >
                  {link.label.toLowerCase()}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <DrawerBottomBar />
    </motion.aside>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = usePathname()

  const close = useCallback(() => setIsOpen(false), [])
  useMenuDrawer(isOpen, close)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY < 80) {
        setIsNavVisible(true)
      } else if (currentScrollY > lastScrollY.current) {
        setIsNavVisible(false)
      } else {
        setIsNavVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <TopBar onOpen={() => setIsOpen(true)} isNavVisible={isNavVisible || isOpen} />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={close}
              className="fixed inset-0 z-40"
            />
            <DrawerPanel onClose={close} pathname={pathname} />
          </>
        )}
      </AnimatePresence>
    </>
  )
}
