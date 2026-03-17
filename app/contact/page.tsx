import Navbar from '@/components/Navbar'
import VideoBackground from '@/components/VideoBackground'
import ContactForm from '@/components/ContactForm'

export const metadata = { title: 'MANFRD — Contact' }

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <VideoBackground />
      <div className="grain" />
      <Navbar />

      <div className="relative z-10 min-h-screen flex flex-col justify-end px-10 md:px-16 pb-20 pt-32">
        <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-6">
          Get in touch
        </p>

        <h1
          className="anim-fade-up-2 font-cormorant font-light text-cream leading-[0.9]"
          style={{ fontSize: 'clamp(48px, 8vw, 120px)' }}
        >
          Contact
        </h1>

        <p
          className="anim-fade-up-2 mt-4 text-[11px] tracking-[0.25em] uppercase"
          style={{ color: 'rgba(240,237,232,0.35)' }}
        >
          Based in Germany &mdash; Available across Europe &amp; the UK
        </p>

        <div className="anim-fade-up-3 mt-10 flex flex-col gap-4">
          <a
            href="mailto:contact@manfrd.co.nz"
            className="text-[11px] tracking-[0.25em] uppercase no-underline transition-colors duration-300 hover:text-accent"
            style={{ color: 'rgba(240,237,232,0.5)' }}
          >
            contact@manfrd.co.nz
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

        <ContactForm />
      </div>

      {/* Thin rule */}
      <div
        className="fixed bottom-28 left-10 right-10 md:left-16 md:right-16 h-px z-10"
        style={{ background: 'rgba(240,237,232,0.06)' }}
      />
    </main>
  )
}
