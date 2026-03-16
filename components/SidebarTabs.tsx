'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { label: 'Cinematography', href: '/cinematography' },
  { label: 'Composition',    href: '/composition' },
  { label: 'Choreography',   href: '/choreography' },
]

export default function SidebarTabs() {
  const pathname = usePathname()

  return (
    <div
      className="anim-fade-right fixed left-10 md:left-16 z-50 hidden md:flex flex-col gap-8"
      style={{ top: '50%' }}
    >
      {tabs.map(({ label, href }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className="flex items-center gap-4 no-underline group"
          >
            {/* Dot */}
            <span
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: active ? '#c8a97e' : 'rgba(240,237,232,0.4)',
                boxShadow: active ? '0 0 8px #c8a97e' : 'none',
              }}
            />
            {/* Label */}
            <span
              className="text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 group-hover:text-accent"
              style={{ color: active ? 'rgba(240,237,232,0.95)' : 'rgba(240,237,232,0.5)' }}
            >
              {label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
