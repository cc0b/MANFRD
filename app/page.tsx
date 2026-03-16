import Navbar from '@/components/Navbar'
import SidebarTabs from '@/components/SidebarTabs'
import VideoBackground from '@/components/VideoBackground'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <VideoBackground />
      <div className="grain" />

      <Navbar />
      <SidebarTabs />

      {/* Hero */}
      <div className="relative z-10 h-screen flex flex-col justify-end px-8 md:px-16 pb-16 md:pb-20">
        {/* Mobile nav links — hidden on desktop where SidebarTabs shows */}
        <div className="md:hidden flex flex-col gap-5 mb-10">
          {[
            { label: 'Cinematography', href: '/cinematography' },
            { label: 'Composition',    href: '/composition' },
            { label: 'Choreography',   href: '/choreography' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="anim-fade-up-1 flex items-center gap-4 no-underline group"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: 'rgba(240,237,232,0.4)' }}
              />
              <span
                className="text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 group-hover:text-accent"
                style={{ color: 'rgba(240,237,232,0.5)' }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        <p className="anim-fade-up-1 text-accent text-[9px] tracking-[0.4em] uppercase mb-6">
          Cinematographer · Composer · Choreographer
        </p>

        <Image
          src="/Manfrd Logo_Wordmark_White_HR.png"
          alt="MANFRD"
          width={600}
          height={138}
          className="anim-fade-up-2"
          style={{ objectFit: 'contain', maxWidth: 'clamp(280px, 50vw, 600px)', height: 'auto' }}
        />

        <p className="anim-fade-up-3 text-[10px] tracking-[0.35em] uppercase mt-7"
           style={{ color: 'rgba(240,237,232,0.4)' }}>
          The art of moving image &nbsp;/&nbsp; sound &nbsp;/&nbsp; body
        </p>

      </div>

      {/* Thin horizontal rule */}
      <div
        className="fixed bottom-28 left-10 right-10 md:left-16 md:right-16 h-px z-10"
        style={{ background: 'rgba(240,237,232,0.06)' }}
      />


    </main>
  )
}
