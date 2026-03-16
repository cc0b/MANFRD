import Navbar from '@/components/Navbar'
import ScrollIndicator from '@/components/ScrollIndicator'
import Link from 'next/link'

export const metadata = { title: 'MANFRD — Cinematography' }

const films = [
  {
    id: 'QYzgfhdoRv4',
    title: '',
    subtitle: '',
  },
  {
    id: '9D0f9SMsuu0',
    title: '',
    subtitle: '',
  },
]

export default function CinematographyPage() {
  return (
    <main className="relative min-h-screen" style={{ background: '#080808' }}>
      <div className="grain" />
      <Navbar />

      <div className="relative z-10 h-screen overflow-y-auto">
        <ScrollIndicator />

        {/* Page header */}
        <div className="pt-24 md:pt-36 px-8 md:px-16 mb-10 md:mb-14">
          <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-4">
            Selected works — Visual storytelling
          </p>
          <h1
            className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
          >
            Cinematography
          </h1>
        </div>

        {/* Film list */}
        <div className="px-8 md:px-16 pb-24 flex flex-col gap-16">
          {films.map(film => (
            <div key={film.id} className="anim-fade-up-3">
              {/* 16:9 responsive embed */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${film.id}?rel=0&modestbranding=1`}
                  title={film.title || film.id}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>

              {(film.title || film.subtitle) && (
                <div className="mt-4 flex flex-col gap-1">
                  {film.title && (
                    <p
                      className="font-cormorant font-light text-cream text-xl tracking-[0.1em]"
                    >
                      {film.title}
                    </p>
                  )}
                  {film.subtitle && (
                    <p
                      className="text-[9px] tracking-[0.3em] uppercase"
                      style={{ color: 'rgba(240,237,232,0.35)' }}
                    >
                      {film.subtitle}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Get in touch */}
        <div className="px-8 md:px-16 pb-20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-[9px] tracking-[0.3em] uppercase no-underline transition-colors duration-300 group"
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
      </div>
    </main>
  )
}
