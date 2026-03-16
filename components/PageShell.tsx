import Navbar from '@/components/Navbar'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'

export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children?: React.ReactNode
}) {
  return (
    <main className="relative h-screen overflow-hidden">
      <VideoBackground />
      <div className="grain" />

      <Navbar />

      <div className="relative z-10 h-screen flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20">
        {/* Page label */}
        <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-6">
          {subtitle}
        </p>

        {/* Page title */}
        <h1
          className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
        >
          {title}
        </h1>

        {/* Page content slot */}
        {children && (
          <div className="anim-fade-up-3 mt-10 max-w-xl">
            {children}
          </div>
        )}

        {/* Link to contact */}
        <Link
          href="/contact"
          className="anim-fade-up-3 mt-10 inline-flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase no-underline transition-colors duration-300 group"
          style={{ color: 'rgba(240,237,232,0.4)' }}
        >
          <span
            className="w-8 h-px transition-all duration-300 group-hover:w-14"
            style={{ background: '#c8a97e' }}
          />
          <span className="group-hover:text-cream transition-colors duration-300">
            Get in touch
          </span>
        </Link>
      </div>

      {/* Thin rule */}
      <div
        className="fixed bottom-28 left-10 right-10 md:left-16 md:right-16 h-px z-10"
        style={{ background: 'rgba(240,237,232,0.06)' }}
      />
    </main>
  )
}
