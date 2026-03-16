import Navbar from '@/components/Navbar'
import ScrollIndicator from '@/components/ScrollIndicator'
import Link from 'next/link'

export const metadata = { title: 'MANFRD — Choreography' }

const works = [
  {
    id: '6BrWvdtLSJw',
    title: '',
    subtitle: '',
  },
]

export default function ChoreographyPage() {
  return (
    <main className="relative min-h-screen" style={{ background: '#080808' }}>
      <div className="grain" />
      <Navbar />

      <div className="relative z-10 h-screen overflow-y-auto">
        <ScrollIndicator />

        {/* Page header */}
        <div className="pt-24 md:pt-36 px-8 md:px-16 mb-10 md:mb-14">
          <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-4">
            Selected works — Movement direction
          </p>
          <h1
            className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
          >
            Choreography
          </h1>
        </div>

        {/* Work list */}
        <div className="px-8 md:px-16 pb-24 flex flex-col gap-16">
          {works.map(work => (
            <div key={work.id} className="anim-fade-up-3">
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${work.id}?rel=0&modestbranding=1`}
                  title={work.title || work.id}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>

              {(work.title || work.subtitle) && (
                <div className="mt-4 flex flex-col gap-1">
                  {work.title && (
                    <p className="font-cormorant font-light text-cream text-xl tracking-[0.1em]">
                      {work.title}
                    </p>
                  )}
                  {work.subtitle && (
                    <p
                      className="text-[9px] tracking-[0.3em] uppercase"
                      style={{ color: 'rgba(240,237,232,0.35)' }}
                    >
                      {work.subtitle}
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
