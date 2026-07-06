'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export type MegaMenuItem = {
  id: number
  label: string
  subMenus?: {
    title: string
    items: { label: string; href?: string }[]
  }[]
}

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[]
  className?: string
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null)
    const [isHover, setIsHover] = React.useState<number | null>(null)

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className ?? ''}`}
        {...props}
      >
        {items.map(navItem => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => setOpenMenu(navItem.label)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            {/* Trigger button */}
            <button
              className="group relative flex cursor-pointer items-center font-medium justify-center gap-1 px-4 py-1.5 font-serif text-[17px] uppercase tracking-widest text-white transition-colors duration-300 hover:text-white/70"
              onMouseEnter={() => setIsHover(navItem.id)}
              onMouseLeave={() => setIsHover(null)}
            >
              <span>{navItem.label}</span>
              {navItem.subMenus && <p className="font-body font-normal text-[7px]">▼</p>}
              {(isHover === navItem.id || openMenu === navItem.label) && (
                <motion.div layoutId="ridge-hover-bg" className="absolute inset-0 size-full" />
              )}
            </button>

            {/* Dropdown panel */}
            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full z-10 pt-2">
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="flex gap-px overflow-hidden border border-ridge-gold/20 bg-ridge-bark"
                    style={{ borderRadius: 4 }}
                  >
                    {navItem.subMenus.map(sub => (
                      <div key={sub.title} className="flex flex-col">
                        {/* Items list */}
                        <ul className="w-max bg-ridge-cream-light">
                          {sub.items.map((item, idx) => (
                            <li
                              key={item.label}
                              className={
                                idx !== sub.items.length - 1 ? 'border-b border-ridge-sand/40' : ''
                              }
                            >
                              <a
                                href={item.href ?? '#'}
                                className="block whitespace-nowrap px-5 py-3.5 font-source text-[16px] font-normal uppercase tracking-widest text-ridge-bark transition-colors duration-200 hover:bg-ridge-parchment hover:text-ridge-brown"
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    )
  }
)

MegaMenu.displayName = 'MegaMenu'

export default MegaMenu
