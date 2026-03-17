import Navbar from '@/components/Navbar'
import VideoBackground from '@/components/VideoBackground'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'MANFRD — Contact' }

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      <div className="grain" />
      <Navbar />

      {/* Mobile: single column full-height. Desktop: two columns pinned to bottom */}
      <div className="relative z-10 min-h-screen flex flex-col md:flex-row md:items-center px-6 md:px-16 pb-10 md:pb-0 pt-24 md:pt-0 gap-10 md:gap-20">

        {/* Left */}
        <div className="flex flex-col flex-shrink-0 md:justify-end">
          <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-4 md:mb-6">
            Get in touch
          </p>

          <h1
            className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
            style={{ fontSize: 'clamp(44px, 8vw, 120px)' }}
          >
            Contact
          </h1>

          <p
            className="anim-fade-up-2 mt-3 md:mt-4 text-[10px] tracking-[0.2em] uppercase"
            style={{ color: 'rgba(240,237,232,0.35)' }}
          >
            Based in Germany &mdash; Available across Europe &amp; the UK
          </p>

          {/* Links — wrap on very small screens */}
          <div className="anim-fade-up-3 mt-6 md:mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:contact@manfrd.co.nz"
              className="border px-4 md:px-6 py-3 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase no-underline transition-colors duration-300 hover:border-cream hover:text-cream"
              style={{ borderColor: 'rgba(240,237,232,0.25)', color: 'rgba(240,237,232,0.6)' }}
            >
              contact@manfrd.co.nz
            </a>
            <a
              href="https://www.instagram.com/__manfrd__/"
              target="_blank"
              rel="noopener noreferrer"
              className="border px-4 md:px-6 py-3 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase no-underline transition-colors duration-300 hover:border-cream hover:text-cream"
              style={{ borderColor: 'rgba(240,237,232,0.25)', color: 'rgba(240,237,232,0.6)' }}
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="anim-fade-up-3 flex-1 w-full">
          <ContactForm />
        </div>

      </div>
    </main>
  )
}
