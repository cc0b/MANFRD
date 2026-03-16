'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Film',         href: '/cinematography' },
  { label: 'Music',        href: '/composition' },
  { label: 'Movement',     href: '/choreography' },
  { label: 'Contact',      href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="anim-fade-down fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-10 md:px-16 py-10">
      <Link href="/" className="no-underline">
        <Image
          src="/Manfrd Logo_Wordmark_Black_HR.png"
          alt="MANFRD"
          width={120}
          height={28}
          style={{ filter: 'invert(1)', objectFit: 'contain' }}
        />
      </Link>

      <ul className="flex gap-10 list-none">
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
    </nav>
  )
}
