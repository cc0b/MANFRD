import Navbar from '@/components/Navbar'
import VideoBackground from '@/components/VideoBackground'

export const metadata = { title: 'MANFRD — Contact' }

export default function ContactPage() {
  return (
    <main className="relative h-screen overflow-hidden">
      <VideoBackground />
      <div className="grain" />
      <Navbar />

      <div className="relative z-10 h-screen flex flex-col justify-end px-10 md:px-16 pb-20">
        <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-6">
          Get in touch
        </p>

        <h1
          className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
        >
          Contact
        </h1>

        <div className="anim-fade-up-3 mt-10 flex flex-col gap-4">
          {/* Replace these with real details */}
          <a
            href="mailto:hello@manfrd.com"
            className="text-[11px] tracking-[0.25em] uppercase no-underline transition-colors duration-300 hover:text-accent"
            style={{ color: 'rgba(240,237,232,0.5)' }}
          >
            ineedtogetyouremail@email.com asdlkasdlk
          </a>
          <a
            href="https://www.instagram.com/__manfrd__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-[0.25em] uppercase no-underline transition-colors duration-300 hover:text-accent"
            style={{ color: 'rgba(240,237,232,0.5)' }}
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Thin rule */}
      <div
        className="fixed bottom-28 left-10 right-10 md:left-16 md:right-16 h-px z-10"
        style={{ background: 'rgba(240,237,232,0.06)' }}
      />
    </main>
  )
}
