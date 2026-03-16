'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { label: 'Film',     href: '/cinematography' },
  { label: 'Music',    href: '/composition' },
  { label: 'Movement', href: '/choreography' },
  { label: 'Contact',  href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="anim-fade-down fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-8 md:py-10">
        <Link href="/" className="no-underline" onClick={() => setOpen(false)}>
          <Image
            src="/Manfrd Logo_Wordmark_Black_HR.png"
            alt="MANFRD"
            width={120}
            height={28}
            style={{ filter: 'invert(1)', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10 list-none">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-[10px] tracking-[0.25em] uppercase no-underline transition-colors duration-300 group py-4 px-3"
                  style={{ color: active ? '#f0ede8' : 'rgba(240,237,232,0.5)' }}
                >
                  {label}
                  <span
                    className="absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300"
                    style={{ width: active ? '100%' : '0' }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] p-2 z-50"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-px transition-all duration-300 origin-center"
            style={{
              background: '#f0ede8',
              transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px transition-all duration-300"
            style={{ background: '#f0ede8', opacity: open ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px transition-all duration-300 origin-center"
            style={{
              background: '#f0ede8',
              transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-500"
        style={{
          background: 'rgba(8,8,8,0.97)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
      >
        {links.map(({ label, href }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-cormorant font-light no-underline transition-colors duration-300"
              style={{
                fontSize: 'clamp(36px, 12vw, 56px)',
                color: active ? '#f0ede8' : 'rgba(240,237,232,0.4)',
                letterSpacing: '0.05em',
              }}
            >
              {label}
            </Link>
          )
        })}
      </div>
    </>
  )
}
