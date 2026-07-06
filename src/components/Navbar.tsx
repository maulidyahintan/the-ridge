'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail } from 'lucide-react'
import dynamic from 'next/dynamic'
import { MEGA_NAV_ITEMS, PRIMARY_LINKS, SOCIAL_ICONS } from '@/lib/nav-data'
import { useMenuDrawer } from '@/hooks/use-menu-drawer'

const MegaMenu = dynamic(() => import('@/components/ui/mega-menu'), { ssr: false })

const WhatsAppIcon = (
  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

// ─── Sub-components ───────────────────────────────────────────────────────────

function TopBar({ onOpen }: { onOpen: () => void }) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-ridge-bark">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-12">
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
          {WhatsAppIcon}
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
  const pathname = usePathname()

  const close = useCallback(() => setIsOpen(false), [])
  useMenuDrawer(isOpen, close)

  return (
    <>
      <TopBar onOpen={() => setIsOpen(true)} />

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
